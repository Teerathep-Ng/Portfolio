import React from "react";
import ItemCard from "./ItemCard";
import myCertificate from "../database/MyCertificate";

const Certificate: React.FC = () => {
    return (
        <section id="certificate" className="flex flex-col min-w-screen min-h-screen gap-6">
            <h1 className="text-6xl">Certificates</h1>
            
            <div className="flex justify-center gap-4">
                {myCertificate.map((certificate) => (
                    <ItemCard 
                    linkUrl={certificate.linkUrl}
                    title={certificate.name}
                    imageUrl={certificate.imageUrl}
                    description={certificate.description}
                    />
                ))}
            </div>
        </section>
    )
}
export default Certificate;