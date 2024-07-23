import { MonitorSmartphone } from "lucide-react"
import { Button } from "../theme/button"

const PWAToggle = () => {

    return (
        <Button variant="outline" size="icon" className="border-amber-500 dark:border-amber-500 group" id="installApp">
            <MonitorSmartphone className="group-hover:text-amber-500" />
        </Button>
    )

}

export default PWAToggle