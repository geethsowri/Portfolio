import { useEffect, useState } from "react";

export default function About() {
  const [age, setAge] = useState("0.00");

  useEffect(() => {
    const birthDate = new Date("2004-12-16");

    const updateAge = () => {
      const now = new Date();
      const diff = now.getTime() - birthDate.getTime();
      const ageInYears = diff / (1000 * 60 * 60 * 24 * 365.25);
      setAge(ageInYears.toFixed(2));
    };

    updateAge();

    const interval = setInterval(updateAge, 86400000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="mb-16 space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">
          <span className="text-green-300">&gt;</span> about
        </h2>
      </div>

      <div className="space-y-1 text-sm">
        <p className="text-gray-300 leading-relaxed tracking-wide">
          {age} y/o cs undergrad
        </p>

        <p className="text-gray-500 text-xs font-mono">
          [creating & solving real life problems using code]
        </p>

        <p className="text-gray-300 leading-relaxed tracking-wide">
          webdev, figma & coffee
        </p>
      </div>
    </section>
  );
}
