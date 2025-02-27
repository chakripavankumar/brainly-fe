import { useState } from "react"
import { Button } from "../components/Button"
import { Card } from "../components/Card"
import { ContentModel } from "../components/CreateContentModel"
import { PlusIcon } from "../icons/PlusIcon"
import { ShareIcon } from "../icons/ShareIcon"
import { Sidebar } from "../components/Sideabar"


export function Dasboard() {
  const [modelOpen, setModelOpen] = useState(false);

  return (
    <div>
      <Sidebar />
      <div className="p-4 ml-60 min-h-screen bg-gray-100 ">
        <ContentModel open={modelOpen} onClose={() => {
          setModelOpen(false)
        }} />
        <div className="flex justify-end gap-4">
          <Button onClick={() => {
            setModelOpen(true)
          }} varient="primary" text="Add Content" startIcon={<PlusIcon />}></Button>
          <Button varient="secondary" text="Share Brain" startIcon={<ShareIcon />}></Button>
        </div>
        <div className="flex gap-4">
          <Card type="youtube" link="https://www.youtube.com/watch?v=-PMf1gAdrJQ" title="hey there" />
          <Card type="twitter" link="https://x.com/adarsh_exe/status/1892657073915036124" title="hey there" />
        </div>
      </div>
    </div>


  )
}

