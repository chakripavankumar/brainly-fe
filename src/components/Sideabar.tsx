import { BrainIcon } from "../icons/BrainIcon";
import { TwitterIcon } from "../icons/Twitter";
import { YoutubeIcon } from "../icons/YoutiubeIcon";
import { SideabarItem } from "./SidebarItem";

export function Sidebar (){
    return (
        <div className="h-screen w-60  bg-white fixed left-0 top-0 pl-6"> 
        <h1 className="flex text-3xl  font-bold pt-2 items-center">
          <div className="pr-3 text-purple-600">
          <BrainIcon/>
          </div>
          Brainly
        </h1>
      <div className="pt-4">
        <SideabarItem text="Twitter"  icon={<TwitterIcon/>}/>
        <SideabarItem text="Youtube" icon={<YoutubeIcon/>}/>
        </div>
        </div>
    )
}