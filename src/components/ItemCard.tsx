import React from "react";

interface ItemCardProps {
    title: string;
    description: string;
    image: string;
}

const ItemCard: React.FC <ItemCardProps> = ({ title, image, description }) => {
    return (
        <div className="bg-white rounded-3xl w-1/4 overflow-hidden">
            <img src={image} alt={title} className="rounded-3xl"/>
            <div className="text-gray-600 p-4">
                <h3 className="text-lg font-bold">{title}</h3>
                <p className="text-sm">{description}</p>
            </div>
        </div>
    )
}
export default ItemCard;