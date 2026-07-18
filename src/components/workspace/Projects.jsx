import { useState } from "react";
import {
  FaGlobe,
  FaRobot,
  FaCode,
  FaPython,
} from "react-icons/fa";

import ProjectModal from "./ProjectModal";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const missions = [
    {
      title: "IM Workspace",
      status: "Building",
      statusColor: "bg-yellow-500",
      icon: <FaCode className="text-4xl text-cyan-400" />,
      description:
        "A modern portfolio showcasing business systems, automation, front-end development and my professional journey.",
      technologies: [
        "React",
        "Tailwind CSS",
        "Framer Motion",
        "Vite",
      ],
      overview:
        "IM Workspace is my personal portfolio built to showcase my technical skills, projects, certifications and experience in business systems, automation and frontend development.",

      challenge:
        "I wanted a portfolio that reflects my personality while demonstrating my technical abilities beyond a traditional CV.",

      solution:
        "Built a fully responsive portfolio using React and Tailwind CSS with modern UI components, project showcases, certificate previews and resume integration.",

      outcome:
        "A professional portfolio that represents my journey and allows recruiters to easily explore my work and skills.",

      role:
        "Frontend Developer",
    },

    {
      title: "Paragon Perfumes Chatbot",
      status: "LIVE",
      statusColor: "bg-green-500",
      icon: <FaRobot className="text-4xl text-red-500" />,
      description:
        "Designed and built a customer support chatbot using Zoho SalesIQ. The chatbot is currently live on the Paragon Perfumes website.",
      technologies: [
        "Zoho SalesIQ",
        "Codeless Bot Builder",
        "FAQ Automation",
      ],
      overview:
        "Designed a customer support chatbot to automate responses for frequently asked customer questions.",

      challenge:
        "Customers required quick assistance without always waiting for a support representative.",

      solution:
        "Built a codeless FAQ chatbot using Zoho SalesIQ and structured conversation flows for common customer enquiries.",

      outcome:
        "The chatbot is currently live and helps improve customer response times while reducing repetitive support tasks.",

      role:
        "Digital Solutions Intern",
    },

    {
      title: "IG Sacco FAQ Bot",
      status: "Awaiting Approval",
      statusColor: "bg-blue-500",
      icon: <FaRobot className="text-4xl text-yellow-400" />,
      description:
        "Built a chatbot from scratch to automate frequently asked questions and improve customer engagement. Currently awaiting deployment approval.",
      technologies: [
        "Zoho SalesIQ",
        "Visitor Flow",
        "FAQ Bot",
      ],
      overview:
        "Developed a complete FAQ chatbot for IG Sacco using Zoho SalesIQ.",

      challenge:
        "The objective was to reduce repetitive customer questions and improve response efficiency.",

      solution:
        "Created conversation flows, visitor questions and automated FAQ responses using Zoho SalesIQ's codeless builder.",

      outcome:
        "The chatbot is complete and currently awaiting deployment approval.",

      role:
        "Digital Solutions Intern",
    },

    {
      title: "ScentsWeb Automation",
      status: "Completed",
      statusColor: "bg-white",
      icon: <FaPython className="text-4xl text-yellow-400" />,
      description:
        "Supported automation of product updates and inventory workflows using Python and Excel during my internship.",
      technologies: [
        "Python",
        "Excel",
        "Automation",
      ],
      overview:
        "Worked on automation scripts to simplify product updates and inventory management tasks.",

      challenge:
        "Updating product information manually was repetitive and time consuming.",

      solution:
        "Used Python together with Excel spreadsheets to automate inventory and product update workflows.",

      outcome:
        "Reduced manual work while improving consistency and efficiency during internship tasks.",

      role:
        "Digital Solutions Intern",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-slate-950 px-8 py-28"
    >
      <div className="mx-auto max-w-7xl">

        <div className="text-center">

          <p className="font-semibold uppercase tracking-[0.35em] text-red-500">
            MISSION CONTROL
          </p>

          <h2 className="mt-6 text-5xl font-black">
            Projects With Purpose.
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400">
            Every project represents a step in my journey of learning,
            solving business challenges and building practical digital
            solutions through continuous improvement.
          </p>

        </div>

        <div className="mt-20 space-y-8">

          {missions.map((mission) => (

            <div
              key={mission.title}
              onClick={() => setSelectedProject(mission)}
              className="cursor-pointer rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-red-500/40 hover:bg-white/10"
            >

              <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

                <div className="flex gap-6">

                  {mission.icon}

                  <div>

                    <div className="flex flex-wrap items-center gap-4">

                      <h3 className="text-3xl font-bold">
                        {mission.title}
                      </h3>

                      <span className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm">

                        <span
                          className={`h-3 w-3 rounded-full ${mission.statusColor}`}
                        ></span>

                        {mission.status}

                      </span>

                    </div>

                    <p className="mt-5 max-w-3xl leading-8 text-slate-400">
                      {mission.description}
                    </p>

                  </div>

                </div>

              </div>

              <div className="mt-8 flex flex-wrap gap-4">

                {mission.technologies.map((tech) => (

                  <span
                    key={tech}
                    className="rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm"
                  >
                    {tech}
                  </span>

                ))}

              </div>

            </div>

          ))}

        </div>

        <div className="mt-20 rounded-3xl border border-white/10 bg-gradient-to-r from-red-500/10 via-transparent to-red-500/10 p-10 text-center">

          <FaGlobe className="mx-auto text-5xl text-red-500" />

          <h3 className="mt-6 text-3xl font-bold">
            More Missions Ahead...
          </h3>

          <p className="mx-auto mt-6 max-w-3xl leading-8 text-slate-400">
            I'm continuously learning, building and improving my skills
            through practical projects focused on business systems,
            automation and modern web technologies.
          </p>

          <a
            href="#contact"
            className="mt-10 inline-flex items-center rounded-full bg-red-500 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-red-600"
          >
            Reach Out →
          </a>

        </div>

      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

    </section>
  );
}

export default Projects;