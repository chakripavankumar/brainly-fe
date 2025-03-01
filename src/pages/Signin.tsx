import { useRef } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/InputContent";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export function SignIn() {

    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const navigavte   = useNavigate();

    async function signIn(){

      const username = usernameRef.current?.value;
      const password = passwordRef.current?.value;
     const res = await axios.post(BACKEND_URL+ "/api/v1/signin", {
        username,
        password
      })
      const  jwt =res.data.token
      localStorage.setItem("token" , jwt)
      navigavte("/dashboard")
    }
    return (
        <div className="h-screen w-screen bg-gray-200 flex justify-center items-center ">
            <div className="bg-white rounded-xl min-w-52 p-8">
                <Input type="text" reference={usernameRef} placeholder="Username" />
                <Input type="password" reference={passwordRef} placeholder="Password" />
                <div className="flex justify-center pt-4">
                    <Button loading={false}  onClick = {signIn}  varient="primary" text="Submit" fullWidth={true} />
                </div>
            </div>
        </div>
    )
}