import Container from "./components/container";
import { ArrowUpRight } from "lucide-react";

const projects = [{
  name: "e-com-website",
  description:"Developed a responsive e-commerce website using HTML, CSS, and JavaScript. The website features product listings, category filtering, a shopping cart system, and an intuitive user interface designed to provide a smooth shopping experience across all devices.",
  Github: "https://nasser-ahm.github.io/ecom-website/",  
  img: './src/assets/e-com-website.png',
  tags: ["HTML", "CSS", "Java script"]
},
{
  name: "Dashboard",
  description:"Responsive dashboard built with HTML, CSS, and JavaScript, featuring analytics cards, interactive charts, and a modern user interface.",
  Github: "https://nasser-ahm.github.io/dashboard1/",  
  img: './src/assets/dash.png',
  tags: ["HTML", "CSS", "Java script"]
},
{
  name: "Coffee Landing Page",
  description:"Designed and developed a modern coffee shop landing page using HTML, CSS, and JavaScript. The website features a responsive design, interactive user interface, smooth scrolling, and visually appealing sections to showcase products, services, and brand identity.",
  Github: "https://nasser-ahm.github.io/caffee-landing-page/",  
  img: './src/assets/coffe-landing-page.png',
  tags: ["HTML", "CSS", "Java script"]
}
];

function Projects() {
  return (
  <section id='projects' className="min-h-screen py-30 bg-blue-100 flex items-center justify-center w-full">
    <Container>
      <div className="pb-20 flex justify-center">
        <h3 className="text-5xl text-blue-600">My projects</h3>
      </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
      {projects.map((project, idx) => (
        <div className=" p-4 rounded-xl flex flex-col bg-blue-200 justify-between" key={idx}>
          <div className="relative group hover:scale-110 transition-all">
            <img src={project.img} alt="projects imgs" className="aspect-video object-cover rounded-xl  transition-all cursor-pointer" />
            <a href={project.Github}  target="_blank" >
              <ArrowUpRight className="absolute top-[50%] right-[50%] rounded-lg border-2 cursor-pointer opacity-0 group-hover:opacity-100 text-blue-400 hover:bg-blue-800 hover:text-white"/>
              </a>
            </div>
          
          <h3 className="font-medium text-xl text-blue-700 py-2 border-1 rounded-full px-4 w-fit my-4">{project.name}</h3>
          <div className="h-[50%] justify-between flex flex-col">
          <h4 className="">{project.description}</h4>
          <div className="py-2 flex gap-4">{project.tags.map((tag, tagindx) => (
            <span key={tagindx} className="rounded-xl gap-4 border-2 py-2 px-3 border-blue-700 text-blue-700 font-bold ">{tag}</span>
          ))}</div>
          </div>
        </div>
      ))}
    </div>
    </Container>
  </section>
  )
}

export default Projects
