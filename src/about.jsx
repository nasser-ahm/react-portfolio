import { CodeXml, Rocket,Users,Lightbulb} from "lucide-react"
import Container from "./components/container";





const infos = [{
  icon:<CodeXml/>,
  title: "Clean code",
  desc: "Writing maintainable, scalable code that stands the test of time"
},
{
  icon:<Rocket/>,
  title : "Performance",
  desc: "Optimizing for speed and delivering lightining-fast user experience"
},{
  icon:<Users/>,
  title: "Collaboration",
  desc:"Working closely with teams to bring ideas to life."
},{
  icon:<Lightbulb/>,
  title: "Innovation",
  desc:"Staying ahead with the latest technologies and best practices"
}];




export default function About() {
  return (
   <section id={'about'} className="relative min-h-screen py-30 flex items-center">
    <Container>
      <div className="grid md:grid-cols-2 ">
        {/*left content */}
        <div className="flex flex-col ">
        <div className="py-8">
          <span className="text-2xl md:text-3xl">About me</span>
        </div>
      <h3 className="text-blue-400 text-4xl md:text-5xl font-bold">
        building the future,<br />
        <span className="text-4xl md:text-5xl text-black"> one component at a time.</span>
      </h3>
      <div className="py-20 text-xl">
        <p>Front-End Developer passionate about building responsive, user-friendly web applications with React and modern web technologies. I enjoy turning ideas into clean, interactive experiences and continuously improving my skills through real-world projects.</p>
      </div>
      </div>
      {/*right content */}
      <div className="flex flex-col gap-4 items-center justify-center">
        {infos.map((info, i) => (
          <div key={i} className="w-[90%] h-fit border-2 border-blue-400 rounded-xl p-4 flex flex-col gap-4">
            <div className="border-2 w-fit p-2 rounded-xl border-black text-blue-400">
              {info.icon}
            </div>
            <h3 className="text-blue-400 font-bold text-xl">{info.title}</h3>
            <p>{info.desc}</p>
          </div>
        ))}
       
      </div>
      </div>
    
    </Container>
   </section>
  )
}
