"use client";
import React, { useEffect, useState } from "react";

/**
 * Performance monitoring component for development
 * Shows Core Web Vitals and performance metrics
 */
export default function PerformanceMonitor() {
  const [metrics, setMetrics] = useState({});
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show in development
    if (process.env.NODE_ENV !== "development") return;

    const updateMetrics = () => {
      const newMetrics = {};

      // Get memory usage
      if (typeof performance !== "undefined" && performance.memory) {
        newMetrics.memory = {
          used: Math.round(performance.memory.usedJSHeapSize / 1048576),
          total: Math.round(performance.memory.totalJSHeapSize / 1048576),
          limit: Math.round(performance.memory.jsHeapSizeLimit / 1048576),
        };
      }

      // Get network info
      if (typeof navigator !== "undefined" && "connection" in navigator) {
        const connection = navigator.connection;
        newMetrics.network = {
          effectiveType: connection.effectiveType,
          downlink: connection.downlink,
          rtt: connection.rtt,
          saveData: connection.saveData,
        };
      }

      // Get navigation timing
      if (typeof performance !== "undefined" && performance.timing) {
        const timing = performance.timing;
        newMetrics.timing = {
          domContentLoaded:
            timing.domContentLoadedEventEnd - timing.navigationStart,
          loadComplete: timing.loadEventEnd - timing.navigationStart,
          firstPaint: performance.getEntriesByType("paint")[0]?.startTime || 0,
        };
      }

      setMetrics(newMetrics);
    };

    // Update metrics on load
    updateMetrics();

    // Update metrics periodically
    const interval = setInterval(updateMetrics, 5000);

    // Listen for performance entries
    if (typeof PerformanceObserver !== "undefined") {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.entryType === "measure") {
            console.log(
              `Performance: ${entry.name} took ${entry.duration.toFixed(2)}ms`
            );
          }
        });
      });

      observer.observe({ entryTypes: ["measure"] });
    }

    return () => {
      clearInterval(interval);
    };
  }, []);

  // Toggle visibility with keyboard shortcut
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.ctrlKey && e.shiftKey && e.key === "P") {
        setIsVisible((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  if (process.env.NODE_ENV !== "development" || !isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black/90 text-white p-4 rounded-lg shadow-lg z-50 max-w-sm text-xs font-mono">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-sm font-bold text-blue-400">Performance Monitor</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white"
          aria-label="Close performance monitor"
        >
          ×
        </button>
      </div>

      {metrics.memory && (
        <div className="mb-3">
          <h4 className="text-yellow-400 font-semibold mb-1">Memory Usage</h4>
          <div className="space-y-1">
            <div>Used: {metrics.memory.used}MB</div>
            <div>Total: {metrics.memory.total}MB</div>
            <div>Limit: {metrics.memory.limit}MB</div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div
                className="bg-red-500 h-2 rounded-full"
                style={{
                  width: `${
                    (metrics.memory.used / metrics.memory.limit) * 100
                  }%`,
                }}
              />
            </div>
          </div>
        </div>
      )}

      {metrics.network && (
        <div className="mb-3">
          <h4 className="text-green-400 font-semibold mb-1">Network</h4>
          <div className="space-y-1">
            <div>Type: {metrics.network.effectiveType}</div>
            <div>Speed: {metrics.network.downlink}Mbps</div>
            <div>RTT: {metrics.network.rtt}ms</div>
            {metrics.network.saveData && <div>Save Data: ON</div>}
          </div>
        </div>
      )}

      {metrics.timing && (
        <div className="mb-3">
          <h4 className="text-purple-400 font-semibold mb-1">Timing</h4>
          <div className="space-y-1">
            <div>DOM Ready: {metrics.timing.domContentLoaded.toFixed(0)}ms</div>
            <div>Load Complete: {metrics.timing.loadComplete.toFixed(0)}ms</div>
            {metrics.timing.firstPaint > 0 && (
              <div>First Paint: {metrics.timing.firstPaint.toFixed(0)}ms</div>
            )}
          </div>
        </div>
      )}

      <div className="text-gray-400 text-xs">Press Ctrl+Shift+P to toggle</div>
    </div>
  );
}

/**
 * Hook for measuring component performance
 * @param {string} componentName - Name of the component
 * @returns {Object} Performance data
 */
export const usePerformanceMonitor = (componentName) => {
  const [renderCount, setRenderCount] = useState(0);
  const [renderTime, setRenderTime] = useState(0);

  useEffect(() => {
    setRenderCount((prev) => prev + 1);
    const startTime = performance.now();

    return () => {
      const endTime = performance.now();
      const duration = endTime - startTime;
      setRenderTime(duration);

      if (process.env.NODE_ENV === "development") {
        console.log(
          `${componentName} render #${renderCount + 1}: ${duration.toFixed(
            2
          )}ms`
        );
      }
    };
  });

  return { renderCount, renderTime };
};

/**
 * Hook for monitoring memory usage
 * @returns {Object} Memory usage data
 */
export const useMemoryMonitor = () => {
  const [memoryUsage, setMemoryUsage] = useState(null);

  useEffect(() => {
    const updateMemory = () => {
      if (typeof performance !== "undefined" && performance.memory) {
        setMemoryUsage({
          used: Math.round(performance.memory.usedJSHeapSize / 1048576),
          total: Math.round(performance.memory.totalJSHeapSize / 1048576),
          limit: Math.round(performance.memory.jsHeapSizeLimit / 1048576),
        });
      }
    };

    updateMemory();
    const interval = setInterval(updateMemory, 1000);

    return () => clearInterval(interval);
  }, []);

  return memoryUsage;
};
