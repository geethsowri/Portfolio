import {
  RiGithubFill,
  RiLinkedinBoxFill,
  RiMailFill,
  RiPagesFill,
} from "@remixicon/react";

const socials = [
  {
    title: "github",
    username: "@geethsowri",
    link: "https://github.com/geethsowri",
    icon: RiGithubFill,
  },
  {
    title: "linkedin",
    username: "Nainala Sowri",
    link: "https://www.linkedin.com/in/nsowri",
    icon: RiLinkedinBoxFill,
  },
  {
    title: "resume",
    username: "resume",
    link: "https://drive.google.com/file/d/12OZCHMPOs9Yqt4wsHk2r03Fc_ca-QS-V/view?usp=sharing",
    icon: RiPagesFill,
  },
  {
    title: "email",
    username: "nainalageethsowri",
    link: "mailto:nainalageethsowri@gmail.com",
    icon: RiMailFill,
  },
];

export default function Socials() {
  return (
    <div className="mb-4 text-white">
      <h2 className="text-2xl font-bold mb-8">
        <span className="text-green-300">&gt;</span> socials
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {socials.map((social) => (
          <div key={social.title} className="group">
            <a
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-400 hover:text-green-300 transition-colors duration-200"
            >
              <social.icon size={20} />
              <span className="text-sm">{social.username}</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
