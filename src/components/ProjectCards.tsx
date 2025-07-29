"use client";
import { projectList } from "./Projects";
import { RiGithubFill, RiExternalLinkLine } from "@remixicon/react";
import { useState } from "react";

export function ProjectCards() {
  const [activeTab, setActiveTab] = useState("main");

  const filteredProjects = projectList.filter(
    (project) => project.category === activeTab
  );

  return (
    <div className="text-white my-10">
      {/* Toggle Buttons */}
      <div className="flex space-x-4 mb-6">
        {["main", "fun"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-1 rounded-full border ${
              activeTab === tab
                ? "bg-green-300 text-black"
                : "border-gray-700 text-gray-400 hover:border-gray-500 hover:text-white"
            } transition`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Projects */}
      {filteredProjects.map((project) => (
        <div
          key={project.title}
          className="mt-5 border border-zinc-800 hover:border-green-300 transition-all duration-500 ease-in-out p-10 group"
        >
          <div className="flex justify-between items-start">
            <div className="flex items-center space-x-3">
              <a
                href={project.live || project.github || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all duration-300 ease-in-out group-hover:text-green-300"
              >
                <p className="text-xl font-bold">{project.title}</p>
              </a>
              {project.status && (
                <span
                  className={`inline-block px-2 py-1 text-xs font-semibold rounded-md ${
                    project.status === "live"
                      ? "bg-green-900 text-green-300"
                      : project.status === "building"
                      ? "bg-yellow-900 text-yellow-300"
                      : "bg-zinc-800 text-zinc-400"
                  }`}
                >
                  {project.status}
                </span>
              )}
            </div>

            <div className="flex space-x-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                >
                  <RiGithubFill size={20} />
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                >
                  <RiExternalLinkLine size={20} />
                </a>
              )}
            </div>
          </div>

          <p className="text-gray-400 text-sm mt-5">{project.description}</p>

          <p className="text-sm text-gray-500 mt-4">
            {project.technologies.map((tech) => (
              <span key={tech} className="block">
                * {tech}
              </span>
            ))}
          </p>
        </div>
      ))}
    </div>
  );
}
