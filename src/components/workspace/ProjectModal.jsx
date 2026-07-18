function ProjectModal({ project, onClose }) {
    if (!project) return null;
  
    return (
      <div
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6 backdrop-blur-sm"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-white/10 bg-slate-900 p-8 shadow-2xl"
        >
          <div className="flex items-start justify-between">
  
            <div>
  
              <h2 className="text-4xl font-black">
                {project.title}
              </h2>
  
              <p className="mt-3 text-red-400">
                {project.status}
              </p>
  
            </div>
  
            <button
              onClick={onClose}
              className="rounded-xl bg-white/10 px-4 py-2 hover:bg-red-500"
            >
              ✕
            </button>
  
          </div>
  
          <div className="mt-10 space-y-8">
  
            <div>
              <h3 className="text-xl font-bold text-red-400">
                Overview
              </h3>
  
              <p className="mt-3 leading-8 text-slate-300">
                {project.overview}
              </p>
            </div>
  
            <div>
              <h3 className="text-xl font-bold text-red-400">
                Challenge
              </h3>
  
              <p className="mt-3 leading-8 text-slate-300">
                {project.challenge}
              </p>
            </div>
  
            <div>
              <h3 className="text-xl font-bold text-red-400">
                Solution
              </h3>
  
              <p className="mt-3 leading-8 text-slate-300">
                {project.solution}
              </p>
            </div>
  
            <div>
              <h3 className="text-xl font-bold text-red-400">
                Technologies
              </h3>
  
              <div className="mt-4 flex flex-wrap gap-3">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-red-500/10 px-4 py-2 text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
  
            <div>
              <h3 className="text-xl font-bold text-red-400">
                Outcome
              </h3>
  
              <p className="mt-3 leading-8 text-slate-300">
                {project.outcome}
              </p>
            </div>
  
            <div>
              <h3 className="text-xl font-bold text-red-400">
                My Role
              </h3>
  
              <p className="mt-3 leading-8 text-slate-300">
                {project.role}
              </p>
            </div>
  
          </div>
        </div>
      </div>
    );
  }
  
  export default ProjectModal;