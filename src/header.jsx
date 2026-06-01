import { useState } from "react";
import Container from "./components/container";
import { Menu } from "lucide-react";



const links = [{
    id:1,
    name:'home',
    tag:'#home'
},
{
    id:2,
    name:'about',
    tag:'#about'
},{
  id:3,
  name:'projects',
  tag:'#projects'
},
{
  id:4,
  name:'contact',
  tag:'#contact'
}];

function Header() {
  const [openmenu, setopenmenu] = useState(false);
  return (
      <div className="header fixed top-0 left-0 right-0 bg-transparent z-20 py-5 ">
        <Container>
      <div className="flex justify-between py-2 px-4 bg-neutral-200  rounded-[20px] w-full">
        <h3 className="text-xl font-bold ">portfolio</h3>
      <ul className="flex gap-4 font-bold max-sm:hidden">
        {links.map((link) => {
           return <li key={link.id} className="hover:text-red-200 transition-all cursor-pointer"><a href={link.tag}>{link.name}</a></li>
        })}     
      </ul>
     <Menu className="sm:hidden text-xl cursor-pointer" onClick={() => {
      setopenmenu(!openmenu);
     }}/>
     
      
    </div>
     {/*menu for mobile */}{ openmenu &&
     <ul className="flex flex-col bg-neutral-200 rounded p-4 gap-4 font-bold sm:hidden w-100 text-right right-10 top-[67px] fixed">
        {links.map((link) => {
           return <li key={link.id} className="hover:text-red-200 transition-all cursor-pointer"><a href={link.tag}>{link.name}</a></li>
        })}     
      </ul>}
    </Container>
    </div>
    
    
   
  )
}

export default Header
