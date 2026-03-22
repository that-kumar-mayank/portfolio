import { useState, useEffect } from "react";

const Achievements = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  const achievements = [
    {
    title: "Solved 150+ DSA Problems on LeetCode",
    description:
      "Solved 150+ problems covering arrays, strings, trees, recursion, and basic dynamic programming concepts.",
    date: "2024 – Present",
    icon: "💻",
    link: "https://leetcode.com/u/that-kumar-mayank/",
  },
  {
    title: "50+ Day Consistency Streak",
    description:
      "Maintained a consistent problem-solving streak of over 50 days, demonstrating discipline and continuous learning.",
    date: "2025",
    icon: "🔥",
    link: "https://leetcode.com/u/that-kumar-mayank/",
  },
  {
    title: "Built 3+ Real-World Projects",
    description:
      "Developed 3+ projects including web applications and tools using React, JavaScript, and modern technologies.",
    date: "2024 – Present",
    icon: "🌐",
    link: "https://github.com/that-kumar-mayank",
  },
  {
    title: "Earned 5+ Professional Certifications",
    description:
      "Completed certifications in Cloud Computing, Web Development, AI tools, and programming fundamentals.",
    date: "2023 – 2025",
    icon: "🏆",
    link: "",
  },
    

  ];

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-white py-20 px-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-80 h-80 bg-indigo-600 opacity-10 rounded-full blur-3xl -z-10 animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-500 opacity-10 rounded-full blur-3xl -z-10 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-blue-600 opacity-5 rounded-full blur-3xl -z-10 animate-pulse"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>
      
      <div className="container mx-auto max-w-4xl relative z-10">
        {/* Header */}
        <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 transform-none' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-2 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-400">
              Achievements
            </span>
          </h2>
          
          <div className="mb-12 flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
          </div>

          {/* Achievement cards */}
          <div className="space-y-6 md:space-y-8">
            {achievements.map((item, index) => (
              <div
                key={index}
                className={`group relative bg-slate-800 bg-opacity-50 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-indigo-500/20 transition-all duration-500 border border-slate-700 hover:border-indigo-500/50 ${
                  isLoaded 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="absolute top-0 right-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-indigo-500 transform scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-500"></div>
                
                <div className="p-6 md:p-8 flex flex-col md:flex-row gap-4 items-start">
                  {/* Icon/Badge */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 flex items-center justify-center bg-slate-700 group-hover:bg-indigo-900/40 rounded-full text-2xl transition-colors duration-300 relative">
                      <span className="relative z-10">{item.icon}</span>
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 to-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2 gap-2">
                      <h3 className="text-xl font-bold text-blue-300 group-hover:text-blue-200 transition-colors">
                        {item.title}
                      </h3>
                      <span className="text-sm font-medium text-indigo-400 bg-indigo-950/50 px-3 py-1 rounded-full inline-block">
                        {item.date}
                      </span>
                    </div>
                    <p className="text-gray-300 group-hover:text-white transition-colors">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Add achievement teaser */}
          <div
            className={`mt-10 text-center transition-opacity duration-500 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ transitionDelay: `${achievements.length * 150 + 200}ms` }}
          >
            <p className="text-gray-400 italic">More achievements coming soon...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;  