import { ReactElement } from "react";

interface ButtonProps{
    varient : "primary" | "secondary";
    text : string;
    startIcon?: ReactElement;
    onClick?:()=> void;
    fullWidth ?:boolean;
    loading ?: boolean;
}

const varientClases = {
    "primary" : "bg-purple-600 text-white",
    "secondary" : "bg-purple-200 text-purple-600"
}
const defaultStyles = "px-4 py-2 rounded-md flex justify-center items-center font-light cursor-pointer"
export function Button ( {varient,text,startIcon, onClick, fullWidth,loading} :ButtonProps){
   return(
    <button  onClick={onClick}className={varientClases[varient] + " " + defaultStyles + 
    `${fullWidth ?  " w-full flex justify-center items-center" : " "} ${loading ? "opacity-45" : ""}`} disabled={loading}
     >
        {text}
        {startIcon}
    </button>
   )
}