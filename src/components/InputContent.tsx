/* eslint-disable @typescript-eslint/no-explicit-any */
interface InputProps{
    placeholder:string
    onchange?:()=>void;
    reference?:any;
    type:string
}
export function Input({placeholder,reference,type}: InputProps){
    return<>
    <input type={type} ref={reference} placeholder={placeholder}
    className="h-10 w-full border-gray-100 border-2 rounded my-3 outline-blue-100 text-center"
    ></input>
    </>
}