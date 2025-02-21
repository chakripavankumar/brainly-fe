import { Button } from "./components/Button"
import { Card } from "./components/Card"
import { PlusIcon } from "./icons/PlusIcon"
import { ShareIcon } from "./icons/ShareIcon"


function App() {
 

  return (
    <div>
       <Button varient="primary" text="Add Content" startIcon={<PlusIcon/>}></Button>
       <Button varient="secondary" text="Share Brain" startIcon={<ShareIcon/>}></Button>
       <Card type="youtube" link="https://www.youtube.com/watch?v=-PMf1gAdrJQ" title="hey there"/>
       <Card type="twitter" link="https://x.com/adarsh_exe/status/1892657073915036124" title="hey there"/>
       
    </div>
  
  )
}

export default App
