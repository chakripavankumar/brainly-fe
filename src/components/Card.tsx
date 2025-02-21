import { ShareIcon } from "../icons/ShareIcon";

interface CardProps {
    title: string;
    link: string;
    type: "youtube" | "twitter"; // Fixed the type definition
}

export function Card({ title, link, type }: CardProps) {
    return (
        <div className="p-4 bg-white rounded-md border-gray-200 max-w-96 border">
            <div className="flex justify-between items-center">
                <div className="flex items-center text-md">
                    <div className="text-gray-500 pr-2">
                        <ShareIcon />
                    </div>
                    <span>{title}</span> 
                </div>
                <div className="flex items-center">
                    <div className="pr-2 text-gray-500">
                        <a href={link} target="_blank" rel="noopener noreferrer">
                            <ShareIcon />
                        </a>
                    </div>
                </div>
            </div>

            <div className="pt-4">
                {type === "youtube" && (
                    <iframe
                        className="w-full"
                        src={link.replace("watch", "embed")}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                )}
                {type === "twitter" && (
                    <blockquote className="twitter-tweet">
                        <a href={link}></a>
                    </blockquote>
                )}
            </div>
        </div>
    );
}