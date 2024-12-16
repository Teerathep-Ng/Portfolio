import React from "react";
import { LucideProps } from "lucide-react";


interface IconSocialProps {
    href: string;
    icon: React.FC<LucideProps>;
}

const IconSocial: React.FC <IconSocialProps> = ({ href, icon: Icon }) => {
    return (
        <a 
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600">
            <Icon size={26} />
        </a>
    )
};
export default IconSocial;