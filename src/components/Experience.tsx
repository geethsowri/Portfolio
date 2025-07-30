const experience = [
  {
    title: "not working",
    position: "to be updated",
    date: "to be updated",
    link: "",
  },

];

export default function Experience() {
  return (
    <div className="text-white mb-16">
  <h1 className="text-2xl font-bold text-white">
    <span className="text-green-300">&gt;</span> working at
  </h1>
  <div className="mt-6">
    {experience.map((exp) => (
      <div key={exp.title} className="mt-2 group">
        <a
          href={exp.link}
          className="text-xl font-bold transition-all duration-300 ease-in-out group-hover:text-green-300"
        >
          {exp.title}
        </a>
        <p className="text-gray-500 text-xs mt-2">
          {exp.position} | {exp.date}
        </p>
      </div>
    ))}
  </div>
</div>

  );
}
