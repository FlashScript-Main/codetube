import { Button } from "../theme/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "./dropdown-menu"
import QRCode from "react-qr-code";
import { QrCode } from 'lucide-react';

const QRCodeLink = () => {

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon" className="border-rose-500 dark:border-main-title">
                <QrCode />
            </Button>
            </DropdownMenuTrigger>
            
            <DropdownMenuContent className="flex py-4 px-3 justify-center items-center gap-4 bg-body-bg-light border border-red-600 dark:border-blue-400 shadow-md shadow-red-500/50 dark:shadow-blue-500/50 mb-4">
                <QRCode value="CodeTube Link" />
            </DropdownMenuContent>
        </DropdownMenu>
    )

}

export default QRCodeLink

/*

const QRCode = () => {

    return (
        
    )

}

export default QRCode
*/