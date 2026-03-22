import { useState, useEffect } from "react";

const Certifications = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCert, setHoveredCert] = useState(null);

  const certifications = [
    {
    title: "Cloud Computing",
    issuer: "NPTEL (IIT Kharagpur)",
    date: "Jan – Apr 2025",
    description:
      "Completed a 12-week NPTEL course covering cloud computing fundamentals, virtualization, deployment models, and cloud architecture with hands-on assessments.",
    skills: ["Cloud Computing", "Virtualization", "Cloud Architecture"],
    link: "",
    image: "/images/cloud.png",
  },
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "Nov 2023",
    description:
      "Earned certification by completing 300+ hours of coursework focused on responsive design, CSS, Flexbox, Grid, and modern web layout techniques.",
    skills: ["HTML", "CSS", "Responsive Design"],
    link: "",
    image: "/images/fcc.png",
  },
  {
    title: "The Complete 2024 Web Development Bootcamp",
    issuer: "Udemy",
    date: "Feb 2024",
    description:
      "Comprehensive full-stack development course covering HTML, CSS, JavaScript, React basics, and real-world web development projects.",
    skills: ["JavaScript", "Web Development", "Frontend"],
    link: "",
    image: "/images/webdev.png",
  },
  {
    title: "Android Developer Pro: Hands-On Projects",
    issuer: "LPU (Centre for Professional Enhancement)",
    date: "Jun – Jul 2025",
    description:
      "Practical Android development training including real-world app building, Play Store deployment, and mobile UI/UX fundamentals.",
    skills: ["Android", "Java/Kotlin", "App Development"],
    link: "",
    image: "/images/android.png",
  },
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen bg-slate-900 text-white pt-24 pb-16 px-6 relative overflow-hidden">
      <div className="absolute top-40 right-10 w-72 h-72 bg-blue-600 opacity-10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-purple-600 opacity-10 rounded-full blur-3xl -z-10" />

      <div className={`max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-400 inline-block">
            Certifications
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-2" />
          <p className="text-gray-300 mt-4 text-lg max-w-2xl mx-auto">
            Professional credentials that validate my technical expertise and continuous learning journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => setHoveredCert(index)}
              onMouseLeave={() => setHoveredCert(null)}
            >
              <div
                className="relative w-full h-106"
                style={{
                  transformStyle: "preserve-3d",
                  transition: "transform 0.8s",
                  transform: hoveredCert === index ? "rotateY(180deg)" : "rotateY(0deg)",
                }}
              >
                {/* Front */}
                <div
                  className="absolute inset-0 backface-hidden"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <div className="bg-slate-800/70 rounded-xl border border-slate-700 hover:border-indigo-500 h-full flex flex-col overflow-hidden">
                    <div className="relative h-48">
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60 z-10" />
                      <img src={cert.image} alt={cert.title} className="w-full h-full object-cover" />
                      <div className="absolute top-4 left-4 bg-indigo-600/90 px-3 py-1 rounded-full text-xs font-medium z-20">
                        {cert.issuer}
                      </div>
                      <div className="absolute bottom-4 right-4 text-white text-sm z-20">{cert.date}</div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <h2 className="text-xl font-semibold text-blue-400 mb-3 line-clamp-2">{cert.title}</h2>
                      <p className="text-gray-300 text-sm mb-4 flex-1">
                        {cert.description.length > 100 ? `${cert.description.substring(0, 100)}...` : cert.description}
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400 text-sm">{cert.issuer}</span>
                        <span className="text-indigo-400 text-sm">{cert.date}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Back */}
                <div
                  className="absolute inset-0 backface-hidden"
                  style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                >
                  <div className="bg-gradient-to-br from-indigo-900/90 to-slate-800/90 rounded-xl border border-indigo-700 h-full flex flex-col p-6">
                    <h2 className="text-xl font-semibold text-white mb-4">{cert.title}</h2>

                    <div className="mb-4">
                      <div className="flex items-center mb-1">
                        <span className="text-indigo-300 mr-2">📚</span>
                        <span className="text-gray-300">Issued by:</span>
                      </div>
                      <p className="text-white font-medium ml-6">{cert.issuer}</p>
                    </div>

                    <div className="mb-4">
                      <div className="flex items-center mb-1">
                        <span className="text-indigo-300 mr-2">🗓️</span>
                        <span className="text-gray-300">Date:</span>
                      </div>
                      <p className="text-white font-medium ml-6">{cert.date}</p>
                    </div>

                    <div className="mb-6 flex-1">
                      <div className="flex items-center mb-1">
                        <span className="text-indigo-300 mr-2">🔍</span>
                        <span className="text-gray-300">Skills:</span>
                      </div>
                      <div className="flex flex-wrap gap-2 ml-6 mt-2">
                        {cert.skills.map((skill, idx) => (
                          <span key={idx} className="px-2 py-1 bg-indigo-800/50 text-indigo-200 text-xs rounded-md">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-indigo-900 font-medium py-2 px-4 rounded-lg text-center hover:bg-gray-100 transition-colors"
                    >
                      View Certificate
                    </a>
                  </div>
                </div>
              </div>

              {/* Always visible instruction */}
              <div className="mt-2 text-center text-xs text-gray-400">
                Hover to view details
              </div>
            </div>
          ))}
        </div>

        {/* Keep the rest: Education + Quote */}
        {/* ... */}
      </div>
    </section>
  );
};

export default Certifications;
