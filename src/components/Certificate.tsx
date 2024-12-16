import React from "react";
import ItemCard from "./ItemCard";
import myCertificate from "../database/MyCertificate";

const Certificate: React.FC = () => {
    return (
        <section id="certificate" className="flex flex-col gap-6">
            <h1 className="text-6xl">Certificate</h1>
            
            <div className="flex justify-center gap-4">
                {myCertificate.map((certificate) => (
                    <ItemCard 
                    title={certificate.name}
                    image={certificate.image}
                    description={certificate.description}
                    />
                ))}
            </div>
        </section>
    )
}
export default Certificate;