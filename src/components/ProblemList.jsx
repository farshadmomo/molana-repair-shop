// components/ProblemList.js
import { useState, useEffect } from "react";

const ProblemList = () => {
  const [problems, setProblems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProblems = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/car-problems.json");
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await res.json();
        setProblems(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProblems();
  }, []);

  if (loading) return <p>در حال بارگذاری...</p>;
  if (error) return <p>خطا: {error}</p>;

  return (
    <div>
      <h1>مشکلات خودرو</h1>
      {problems.map((item, index) => (
        <div key={index}>
          <h2>{item.problem}</h2>
          <ul>
            {item.solutions &&
              item.solutions.map((solution, solIndex) => (
                <li key={solIndex}>{solution}</li>
              ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ProblemList;
