import Container from "./components/container";
import bgImg from "./assets/bg-img.jpg";
import heroImg from "./assets/removed_bg.png";
import { ArrowRight, ArrowDown } from "lucide-react";
import cv from "./assets/cv.pdf";

const skills =[
  "html",
  "css",
  "java script",
  "react js",
  "Github",
  "Git",
  "tailwand css"
];
function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center overflow-hidden pt-25"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src={bgImg}
          alt="hero background"
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      {/* Content */}
      <Container>
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full gap-10">

          {/* Left side */}
          <div className="flex flex-col gap-5 flex-1 max-md:items-center">
            <h3 className="text-5xl font-normal max-sm:text-xxl">
              hello i&apos;m nasser
            </h3>

            <h3 className="text-4xl font-normal max-sm:text-xl">
              a front-end{" "}
              <span className="text-blue-200 font-bold text-5xl">
                developer
              </span>
            </h3>

            <p>
              build responsive websites using React JS
            </p>
            
            <div className="buttons flex items-center gap-2">
              <a href="#contact" className="flex bg-blue-200 rounded-full">
            <button  className="flex gap-3 rounded-full bg-transparent border-black border-2 color-black w-fit py-3 px-5 hover:bg-red-400 transition cursor-pointer">
              Contact me
                <ArrowRight/>
            </button>
            </a>
            <a href={cv} download="nasser-ahmed-cv.pdf" >
            <button  className="flex gap-3 rounded-full bg-transparent border-black border-2 color-black w-fit py-3 px-5 hover:bg-red-400 transition cursor-pointer">
              Download cv
              <ArrowRight/>
            </button>
            </a>
            </div>
            <div className="icons flex gap-4">
           
            </div>
          </div>

          {/* Right side */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end ">
          <div className="relative">
            <img
              src={heroImg}
              alt="hero"
              className=" w-[200px] sm:w-[280px] md:w-[350px] lg:w-[420px] h-auto shadow-[0_10px_40px_rgba(0,0,0,0.3)] rounded-xl"
            />
            <div className="absolute -bottom-4 -right-4 text-white  flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl py-2 px-3 animate-float">
                <div className="w-4 h-4 rounded-full bg-green-400"/>
                <span>Available for work</span>

            </div>
            <div className="absolute -top-4 -left-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl py-2 px-3 animate-float ">
              years +2
              <div>Experience</div>
            </div>
            </div>
            <div/>
          </div>
        </div>
        <div className="pt-8 overflow-hidden">
          <div className="flex justify-center  ">Technologie i use  :</div>
          <div className="flex   animate-marquee">
            {[...skills,...skills].map((skill, i) => (
              <div className="flex-shrink-1 px-8 py-4 " key={i}>
                 <span className="list-none text-2xl flex w-[130px]">{skill}
                  </span>
                  </div>
          ))}
          </div>
        </div>
        <div className="flex flex-col items-center ">
          <span className="text-xl mb-2">scroll down</span>
          <ArrowDown className="animate-bounce"/>
        </div>
      </Container>
    </section>
  );
}

export default Hero;