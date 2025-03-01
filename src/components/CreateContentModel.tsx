import { useRef, useState } from "react";
import { CrossIcon } from "../icons/CrossIcon";
import { Button } from "./Button";
import { Input } from "./InputContent";

enum contentTypes {
    "image",
    "video",
    "article",
    "audio",
    "youtube",
    "twitter",
}
export function ContentModel({ open, onClose }) {
    const titleRef = useRef<HTMLInputElement>(null);
    const linkRef = useRef<HTMLInputElement>(null);
    const [type, setType] = useState(contentTypes.youtube)

    function addContent() {

    }
    return (
        <div>
            {open && <div className="w-screen h-screen  fixed top-0 left-0 opacity-100 flex justify-center">
                <div className="flex flex-col justify-center">
                    <span className="bg-white p-4  rounded">
                        <div className="flex justify-end">
                            <div onClick={onClose}>
                                <CrossIcon />
                            </div>
                        </div>
                        <div>
                            <Input reference={titleRef} placeholder="Title" />
                            <Input reference={linkRef} placeholder="Link" />
                        </div>
                        <div className="flex gap-1">
                             <span className="text-xl">Select Types</span>
                            <Button text="Youtube" varient={type === contentTypes.youtube ? "primary" : "secondary"} onClick={() => setType(contentTypes.youtube)} />
                            <Button text="Twitter" varient={type === contentTypes.twitter ? "primary" : "secondary"} onClick={() => setType(contentTypes.twitter)} />
                        </div>
                        <div className="flex justify-center mt-4">
                            <Button onClick={addContent} varient="primary" text="Submit" />
                        </div>
                    </span>


                </div>
            </div>}
        </div>
    )

}
