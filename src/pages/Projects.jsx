import { useState, useEffect } from "react";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [isVisible, setIsVisible] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

  // Enhanced project data with categories and featured flag
  const projects = [
    {
    title: "NoteMate – Android Note-Taking App",
    description:
      "An Android application that allows users to create, edit, delete, and search notes efficiently with a clean and user-friendly interface.",
    longDescription:
      "Built using MVVM architecture with Room database for efficient data handling. Designed responsive UI using RecyclerView and Material Design principles for smooth user experience.",
    technologies: ["Kotlin", "Jetpack Compose", "Room DB", "MVVM", "Android Studio"],
    demoLink: "",
    codeLink: "https://github.com/that-kumar-mayank", 
    screenshot: "/images/note-app.png",
    categories: ["Android", "App Development"],
    featured: true
  },
  {
    title: "Drug Overdose Data Analysis",
    description:
      "A data science project analyzing large-scale overdose mortality data to uncover trends across demographics and drug types.",
    longDescription:
      "Performed data cleaning, exploratory data analysis, and statistical evaluation. Visualized insights using charts and heatmaps to identify patterns and trends in overdose deaths.",
    technologies: ["Python", "Pandas", "Matplotlib", "Seaborn", "EDA"],
    demoLink: "",
    codeLink: "https://github.com/that-kumar-mayank",
    screenshot: "/images/data-analysis.png",
    categories: ["Data Science", "Analytics"],
    featured: true
  },
  {
    title: "Gym Workout Website",
    description:
      "A responsive fitness website showcasing workout routines, nutrition plans, and fitness guidance.",
    longDescription:
      "Developed structured pages for workouts, diet, and consultations with clean UI and interactive components. Focused on user-friendly navigation and engaging layout.",
    technologies: ["HTML", "CSS", "JavaScript"],
    demoLink: "",
    codeLink: "https://github.com/that-kumar-mayank",
    screenshot: "/images/gym-website.png",
    categories: ["Web Development", "Frontend"],
    featured: false
  }
  ];

  // Get unique categories from projects
  const categories = ["all", ...new Set(projects.flatMap(project => project.categories))];

  // Filter projects based on active category
  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.categories.includes(activeFilter));

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen bg-slate-900 text-white pt-24 pb-16 px-6 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-40 right-10 w-64 h-64 bg-indigo-600 opacity-10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-purple-600 opacity-10 rounded-full blur-3xl -z-10"></div>
      
      <div className={`max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
        {/* Header with animated gradient */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-400 inline-block">
            Featured Projects
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-2"></div>
          <p className="text-gray-300 mt-4 text-lg max-w-2xl mx-auto">
            A showcase of my work spanning web applications, APIs, and responsive interfaces.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === category
                  ? "bg-indigo-600 text-white"
                  : "bg-slate-800 text-gray-300 hover:bg-slate-700"
              }`}
            >
              {category === "all" ? "All Projects" : category}
            </button>
          ))}
        </div>

        {/* Projects Grid/List */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className={`group bg-slate-800/70 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700 hover:border-indigo-500 transition-all duration-300 flex flex-col`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setActiveProject(project)}
            >
              {/* Project Image with overlay */}
              <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60 z-10"></div>
                <img
                  src={project.screenshot}
                  alt={project.title}
                  className="w-full h-64 object-cover object-top transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-indigo-600 text-white px-3 py-1 rounded-full text-xs font-medium z-20">
                    Featured
                  </div>
                )}
                
                {/* Project categories */}
                <div className="absolute bottom-4 left-4 flex flex-wrap gap-2 z-20">
                  {project.categories.map((category, idx) => (
                    <span 
                      key={idx}
                      className="bg-slate-800/80 backdrop-blur-sm text-gray-200 px-3 py-1 rounded-full text-xs"
                    >
                      {category}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6 flex-1 flex flex-col">
                <h2 className="text-2xl font-semibold text-blue-400 mb-2">
                  {project.title}
                </h2>
                <p className="text-gray-300 mb-4 flex-1">
                  {project.description}
                </p>
                
                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-slate-700 text-indigo-300 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Action buttons */}
                <div className="flex gap-4">
                <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-4 py-2 rounded-lg text-sm transition"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center border border-indigo-500 text-indigo-400 px-4 py-2 rounded-lg text-sm hover:bg-indigo-900/30 transition"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Project count */}
        <div className="mt-10 text-center text-gray-400">
          Showing {filteredProjects.length} of {projects.length} projects
        </div>
        
        {/* Contact CTA */}
        <div className="mt-16 bg-gradient-to-r from-indigo-900/50 to-purple-900/50 backdrop-blur-sm rounded-xl p-8 text-center border border-indigo-800/30">
          <h2 className="text-2xl font-semibold text-white mb-4">Interested in working together?</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-indigo-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition"
          >
            Let's Connect
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;