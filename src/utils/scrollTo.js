/**
 * Scroll to a specific element by ID
 * @param {string} elementId - The ID of the element to scroll to
 * @param {number} offset - Optional offset from the top (default: 100)
 */
export const scrollToElement = (elementId, offset = 100) => {
  console.log(`Attempting to scroll to element with ID: ${elementId}`);
  const element = document.getElementById(elementId);

  if (element) {
    console.log(`Element found:`, element);
    const elementPosition = element.offsetTop;
    const offsetPosition = elementPosition - offset;

    console.log(
      `Scrolling to position: ${offsetPosition} (element: ${elementPosition}, offset: ${offset})`
    );

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  } else {
    console.log(`Element with ID "${elementId}" not found`);
    // List all available IDs for debugging
    const allElements = document.querySelectorAll("[id]");
    const allIds = Array.from(allElements).map((el) => el.id);
    console.log("Available IDs:", allIds);
  }
};

/**
 * Scroll to a specific element by selector
 * @param {string} selector - CSS selector of the element to scroll to
 * @param {number} offset - Optional offset from the top (default: 100)
 */
export const scrollToSelector = (selector, offset = 100) => {
  const element = document.querySelector(selector);
  if (element) {
    const elementPosition = element.offsetTop;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};
