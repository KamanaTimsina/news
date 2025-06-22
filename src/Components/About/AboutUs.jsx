import React, { useState, useEffect } from "react";
import storyimage from "../../assets/Images/AboutUs/StoryImage.png"; // Replace with your image path
import {
  Users,
  Award,
  Globe,
  Target,
  ChevronRight,
  Play,
  Pause,
} from "lucide-react";

const AboutUs = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [currentStat, setCurrentStat] = useState(0);

  const stats = [
    { number: "5M+", label: "Monthly Readers", icon: Users },
    { number: "15+", label: "Countries Covered", icon: Globe },
    { number: "50+", label: "Expert Journalists", icon: Award },
    { number: "24/7", label: "News Coverage", icon: Target },
  ];

  const team = [
  
    {
      name: "Marcus Rodriguez",
      role: "Political Correspondent",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      bio: "Award-winning political analyst",
    },
    {
      name: "Emily Johnson",
      role: "Tech Reporter",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      bio: "Silicon Valley insider and tech expert",
    },
    {
      name: "David Kim",
      role: "International Bureau Chief",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      bio: "Global correspondent with 20+ years experience",
    },
        {
      name: "Emily Johnson",
      role: "Tech Reporter",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      bio: "Silicon Valley insider and tech expert",
    },
  ];

  const values = [
    {
      title: "Truth & Accuracy",
      description:
        "We are committed to delivering factual, well-researched news with the highest journalistic standards.",
      icon: "🎯",
    },
    {
      title: "Independence",
      description:
        "Our editorial decisions are made free from political or commercial influence.",
      icon: "🗽",
    },
    {
      title: "Diversity",
      description:
        "We amplify diverse voices and perspectives from all corners of society.",
      icon: "🌍",
    },
    {
      title: "Innovation",
      description:
        "We embrace new technologies and storytelling methods to engage our audience.",
      icon: "🚀",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gray- text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 py-10 lg:py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-black bg-clip-text text-transparent">
              Truth. <span className="text-red-600">Integrity.</span> Impact.
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-black max-w-3xl mx-auto leading-relaxed">
              We're more than a news organization – we're your trusted partner
              in understanding the world around you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button    onClick={() => {
      document.getElementById("values")?.scrollIntoView({ behavior: "smooth" });
    }} className="bg-red-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Our Values
              </button>
              <button onClick={() => {
      document.getElementById("team")?.scrollIntoView({ behavior: "smooth" });
    }} className="border-2 border-red-500 text-black px-8 py-4 rounded-full font-semibold  hover:text-black transition-all duration-300 transform hover:scale-105">
                Meet the Team
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className={`text-center p-6 rounded-2xl transition-all duration-500 transform hover:scale-105 ${
                    currentStat === index
                      ? "bg-red-500 text-white shadow-xl"
                      : "bg-gradient-to-br from-gray-200/80 to-white border-1 border-red-500 hover:bg-gray-100"
                  }`}
                >
                  <Icon
                    className={`w-8 h-8 mx-auto mb-4 ${
                      currentStat === index ? "text-white" : "text-red-600"
                    }`}
                  />
                  <div className="text-3xl lg:text-4xl font-bold mb-2">
                    {stat.number}
                  </div>
                  <div
                    className={`text-sm font-medium ${
                      currentStat === index ? "text-blue-100" : "text-black"
                    }`}
                  >
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-5 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-2">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Founded in 2010, NewsHub emerged from a simple belief: quality
                  journalism can change the world. What started as a small team
                  of passionate reporters has grown into a global news
                  organization trusted by millions.
                </p>
                <p>
                  We've covered breaking news from every continent, investigated
                  stories that matter, and held power accountable. Our
                  commitment to truth and transparency has earned us recognition
                  from press freedom organizations worldwide.
                </p>
                <p>
                  Today, we continue to evolve, embracing new technologies while
                  maintaining the core values that have defined us from the
                  beginning.
                </p>
              </div>
              <button className="mt-8 bg-red-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2">
                Read Our Timeline
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <div className="relative">
              <div className="relative bg-gray-900 rounded-3xl overflow-hidden shadow-2xl">
                <div className="aspect-video rounded-lg overflow-hidden">
                  <img
                    src={storyimage}
                    alt="Our story preview"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32  bg-red-500 rounded-full flex items-center justify-center shadow-xl">
                <span className="text-2xl font-semi-bold text-white">13+ Years</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section id="values" className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-black mb-6">
              Our <span className="text-red-500">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide every story we tell and every decision we
              make.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="border-2 border-gray-200 p-8 rounded-3xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">
                  {value.title}
                </h3>
                <p className="text-black text-justify ">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      {/* Team Section */}
      <section id="team" className="py-10 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              Meet Our <span className="text-red-500">Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The passionate journalists and storytellers behind our
              award-winning coverage.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-2">
                    {member.name}
                  </h3>
                  <p className="text-red-500 font-semibold mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutUs;
