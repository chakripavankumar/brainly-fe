import { Button } from "../components/Button";
import { Input } from "../components/InputContent";
export function SignIn() {
    return (
        <div className="h-screen w-screen bg-gray-200 flex justify-center items-center ">
            <div className="bg-white rounded-xl min-w-52 p-8">
                <Input type="text" placeholder="Username" />
                <Input type="password" placeholder="Password" />
                <div className="flex justify-center pt-4">
                    <Button loading={true} varient="primary" text="Submit" fullWidth={true} />
                </div>
            </div>
        </div>
    )
}