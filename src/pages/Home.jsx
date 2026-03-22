import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import profileImage from "../assets/profileimage.png"; // Place your image in src/assets/

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Animated tags that represent your skills
  const skills = ["Java", "Python", "React", "JavaScript", "Node.js", "MongoDB", "CSS"];
  
  // Personal interests/hobbies with icons
  const interests = [
    { name: "Surfing Web", icon: "💻" },
    { name: "Reading", icon: "📚" },
    { name: "Music", icon: "🎵" }
  ];
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-hidden relative">
      {/* Simplified background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600 opacity-10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 opacity-10 rounded-full blur-3xl -z-10"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>

      {/* Main content - integrated hero and about sections */}
      <div className="container mx-auto px-4 relative z-10">
        {/* Hero Section */}
        <section className="py-20 flex flex-col items-center justify-center">
          <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 transform-none' : 'opacity-0 translate-y-8'}`}>
            {/* Profile image with sleek, minimal design */}
            <div className="mb-10">
              <div className="w-48 h-48 mx-auto rounded-full overflow-hidden relative z-10 hover:scale-105 transition-transform duration-300 shadow-lg border border-indigo-400/30">
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Name with gradient text */}
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-400">
                Kumar Mayank
              </span>
            </h1>

            {/* Animated typing effect for title */}
            <div className="h-12 mb-6">
              <h2 className="text-2xl md:text-3xl text-gray-300 text-center overflow-hidden whitespace-nowrap border-r-4 border-indigo-500 pr-1 animate-typing">
                Full Stack Developer
              </h2>
            </div>

            {/* Description with better styling */}
            <p className="max-w-2xl text-gray-300 text-lg mb-10 text-center leading-relaxed mx-auto">
              Welcome to my digital playground! I craft elegant solutions through code, turning ideas into 
              immersive digital experiences that solve real-world problems.
            </p>

            {/* Skill tags */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {skills.map((skill, index) => (
                <span 
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm font-medium bg-indigo-900 text-indigo-200 hover:bg-indigo-700 transition-all cursor-default animate-fadeIn`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-2 mb-16">
              <a href="/projects">
                <button className="group relative px-8 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium text-lg shadow-lg hover:shadow-indigo-500/30 transition duration-300 overflow-hidden">
                  <span className="relative z-10">View My Work</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </a>
              <a href="/contact">
                <button className="group relative px-8 py-3 rounded-lg bg-transparent border-2 border-indigo-500 text-white font-medium text-lg hover:bg-indigo-900/30 transition duration-300">
                  <span className="relative z-10">Contact Me</span>
                </button>
              </a>
            </div>

            {/* Social links */}
            <div className="flex justify-center gap-6 mb-16">
              {["github", "linkedin", "twitter", "codepen"].map((social, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                  aria-label={social}
                >
                  
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* About Section - integrated seamlessly */}
        <section id="about" className="pb-20 px-6">
          <div className={`max-w-5xl mx-auto transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            {/* Section title with animated underline */}
            <div className="relative mb-16 text-center">
              <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-400 inline-block">
                About Me
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-2"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
              {/* Left column - Quick info */}
              <div className="lg:col-span-2 flex flex-col items-center lg:items-start space-y-6">
                {/* Quick stats */}
                <div className="w-full bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 space-y-4 border border-slate-700">
                  <h3 className="text-xl font-medium text-gray-200 mb-4">Quick Facts</h3>
                  
                  <div className="flex items-center space-x-3">
                    <div className="bg-indigo-900/50 p-2 rounded-lg">
                      <span className="text-indigo-300">📍</span>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Location</p>
                      <p className="text-gray-200">Bihar, India</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="bg-indigo-900/50 p-2 rounded-lg">
                      <span className="text-indigo-300">🎓</span>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Education</p>
                      <p className="text-gray-200">Pursuing B.Tech in Computer Science</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="bg-indigo-900/50 p-2 rounded-lg">
                      <span className="text-indigo-300">💼</span>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Experience</p>
                      <p className="text-gray-200">2+ Years</p>
                    </div>
                  </div>
                </div>

                {/* What I enjoy */}
                <div className="w-full bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <h3 className="text-xl font-medium text-gray-200 mb-4">When I'm Not Coding</h3>
                  
                  <div className="grid grid-cols-1 gap-4">
                    {interests.map((interest, index) => (
                      <div 
                        key={index} 
                        className="bg-slate-700/50 rounded-lg p-4 flex items-center hover:bg-indigo-900/30 transition-colors duration-300"
                      >
                        <span className="text-3xl mr-4">{interest.icon}</span>
                        <span className="text-gray-200">{interest.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right column - Bio and details */}
              <div className="lg:col-span-3 space-y-8">
                {/* Main bio section */}
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
                  <h3 className="text-2xl font-semibold text-blue-400 mb-4">My Journey</h3>
                  
                  <p className="text-lg mb-4 leading-relaxed text-gray-200">
                    Hello! I'm <span className="font-semibold text-purple-400">Kumar Mayank</span>, a passionate and driven aspiring software developer who enjoys solving complex problems and building meaningful digital experiences.
  </p>
                  
                  <p className="text-lg mb-4 leading-relaxed text-gray-300">
                    I started my journey in tech with curiosity and have developed a strong foundation in programming, data structures, and web development. I love creating responsive and efficient applications using React and modern web technologies.
                  </p>
                  
                  <p className="text-lg leading-relaxed text-gray-300">
                    I am always eager to learn, take on challenges, and continuously improve my skills. My goal is to grow as a developer and contribute to building impactful software solutions.
                  </p>
                </div>
                
                {/* Philosophy/Approach */}
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
                  <h3 className="text-2xl font-semibold text-blue-400 mb-4">My Approach</h3>
                  
                  <p className="text-lg text-gray-300">
                    I believe in building technology that goes beyond functionality and creates real impact. I focus on writing clean, efficient code while solving problems with a logical and structured approach.

I value simplicity, continuous learning, and consistency. Every project I work on is an opportunity to improve, explore new ideas, and build solutions that are practical, scalable, and user-focused.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Next section indicator */}
        <div className="flex justify-center pb-16">
          <a href="/projects" className="flex flex-col items-center text-gray-400 hover:text-white transition-colors">
            <span className="text-sm mb-2">See My Projects</span>
            <div className="w-6 h-10 rounded-full border-2 border-gray-400 flex justify-center pt-1">
              <div className="w-1 h-3 bg-gray-400 rounded-full animate-scrollDown"></div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;