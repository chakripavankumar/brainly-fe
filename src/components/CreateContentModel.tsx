import { CrossIcon } from "../icons/CrossIcon";
import { Button } from "./Button";
import { Input } from "./InputContent";

export function ContentModel({ open, onClose }) {
    return (
        <div>
            {open && <div className="w-screen h-screen  fixed bg-slate-700 top-0 left-0 opacity-75 flex justify-center">
                <div className="flex flex-col justify-center">
                    <span className="bg-white p-4 opacity-100 rounded">
                        <div className="flex justify-end">
                            <div onClick={onClose}>
                            <CrossIcon />
                            </div>
                        </div>
                        <div>
                            <Input placeholder="Title" />
                            <Input placeholder="Link" />
                        </div>
                        <div className=" flex justify-center mt-4">
                            <Button varient="primary" text="Submit" />
                        </div>
                    </span>


                </div>
            </div>}
        </div>
    )

}
