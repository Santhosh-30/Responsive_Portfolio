import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import React from "react";
import imgr from './assets/imgr.png';

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white flex flex-col">
      {/* Header Section */}
      <header className="flex flex-col md:flex-row justify-between items-center px-5 md:px-10 py-5 space-y-4 md:space-y-0 w-full">
        <div className="text-3xl font-bold">
          <span className="text-col">S</span><span className="text-slate-100 opacity-80">K</span>
        </div>
        <nav className="space-x-4 md:space-x-8">
          <a href="#works" className="hover:underline underline-offset-8 hover:text-col text-slate-100 opacity-80">Home</a>
          <a href="#concepts" className="hover:underline underline-offset-8 hover:text-col text-slate-100 opacity-80">About</a>
          <a href="#archive" className="hover:underline underline-offset-8 hover:text-col text-slate-100 opacity-80">Project</a>
          <a href="#personal" className="hover:underline underline-offset-8 hover:text-col text-slate-100 opacity-80">Certificate</a>
          <a href="#personal" className="hover:underline underline-offset-8 hover:text-col text-slate-100 opacity-80">Contact</a>
        </nav>
        <div className="space-x-4">
          <a href="https://www.linkedin.com/in/santhosh-kumar-s-5650b0267?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app " target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn className="w-6 h-6 inline hover:text-col transition duration-300" />
          </a>
          <a href="https://github.com/Santhosh-30" target="_blank" rel="noopener noreferrer">
            <FaGithub className="w-6 h-6 inline hover:text-col transition duration-300" />
          </a>
          <a href="https://x.com/Santhosh3748?t=_--8WPN_b16QMsXwpVnFww&s=08" target="_blank" rel="noopener noreferrer">
            <FaXTwitter className="w-6 h-6 inline hover:text-col transition duration-300" />
          </a>
        </div>
      </header>

      {/* Main Section */}
      <main className="flex-1 flex flex-col items-center justify-center text-center w-full px-5">
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-16 mb-4 w-full">
          {/* Hi, I am combined with name */}
          <div className="text-4xl md:text-6xl font-extrabold tracking-wider">
            <span className="block text-gray-500 mb-2 md:mb-4">Hi, I am</span>
            <span className="block text-col opacity-90">Santhosh</span>
            <span className="block text-slate-100 opacity-80">Kumar</span>
          </div>
          <img
            src={imgr}
            alt="3D Design"
            className="w-[200px] md:w-[400px] h-auto object-contain rounded-lg shadow-lg transition duration-300 hover:scale-105"
          />
        </div>

        <div className="mb-10 max-w-screen-md w-full">
          <p className="text-lg md:text-xl italic text-gray-300">
            A passionate Software Developer focused on creating responsive, user-friendly web applications.
          </p>
          <p className="text-lg md:text-xl italic text-gray-300">
            I excel at building seamless digital experiences that address real-world challenges and enhance user interaction.
          </p>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="text-center py-6 w-full">
        <p className="text-sm md:text-base text-gray-400">© 2024 Santhosh Kumar. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
