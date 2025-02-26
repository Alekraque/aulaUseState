
import "./Button.css"
import { ChevronRight } from "lucide-react";

interface ButtonProps {
    children: React.ReactNode;
    icon?: boolean;
    action?: string; 
}

export function Button({ children, icon, action }: ButtonProps) {
    return (
        <button className={`button ${action}`}>
            {children}
            { icon ? <ChevronRight/> : null }
        </button>
    )
}