import React from "react";

interface ItemCardProps {
    title: string;
    description: string;
    imageUrl: string;
    linkUrl: string;
}

const ItemCard: React.FC <ItemCardProps> = ({ title, imageUrl, description, linkUrl }) => {
    return (
        <a href={linkUrl} target="_blank" rel="noopener noreferrer" 
            className="bg-white rounded-3xl w-1/4 overflow-hidden hover:scale-105 transition-transform hover:shadow-lg hover:shadow-black duration-200">
            <img src={imageUrl} alt={title} className="rounded-3xl"/>
            <div className="text-gray-600 p-4">
                <h3 className="text-lg font-bold">{title}</h3>
                <p className="text-sm">{description}</p>
            </div>
        </a>
    )
}
export default ItemCard;