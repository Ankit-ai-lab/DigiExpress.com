import { FaArrowRight } from "react-icons/fa";
import hero from '../assets/home img/hero1.jpeg'; 



const Hero = () => {
  return (
    <section className="bg-[#18306a] relative pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            Transform Your Business with{" "}
            <span className="text-blue-400">AI-<br className="md:hidden" />Powered</span> Solutions
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-lg">
            Digiexpres Tech Solution delivers cutting-edge IT services, AI integration, and digital transformation solutions that drive growth and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="#contact"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-4 rounded-lg flex items-center justify-center transition"
            >
              Get Started Today <FaArrowRight className="ml-2" />
            </a>
            <a
              href="#services"
              className="bg-transparent border border-white text-white font-semibold px-8 py-4 rounded-lg flex items-center justify-center transition hover:bg-white hover:text-blue-600"
            >
              Explore Services
            </a>
          </div>
          {/* Stats Row */}
          <div className="flex gap-12 mt-8">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white">500+</div>
              <div className="text-white/80 text-sm mt-1">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white">98%</div>
              <div className="text-white/80 text-sm mt-1">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white">24/7</div>
              <div className="text-white/80 text-sm mt-1">Support Available</div>
            </div>
          </div>
        </div>
        {/* Right Image Card */}
        <div className="md:w-1/2 flex justify-center relative mt-12 md:mt-0">
          <div className="relative">
            <img
              src={hero}
              alt="Digiexpres Tech Solution"
              className="w-[480px] h-[320px] object-cover rounded-xl shadow-2xl"
            />
            {/* AI Integration Badge */}
            <div className="absolute left-8 -bottom-12 bg-white rounded-lg shadow-lg px-6 py-4 flex items-center gap-3 w-[340px]">
              <span className="text-green-500 text-2xl">✔️</span>
              <div>
                <div className="font-semibold text-gray-900">AI Integration Ready</div>
                <div className="text-gray-500 text-sm">Smart solutions for modern businesses</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;