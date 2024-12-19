import React from "react";

const Experience: React.FC = () => {
    return (
        <section id="experience" className="flex flex-col min-w-screen min-h-screen items-center">
            <h1 className="text-6xl">Experience</h1>

            <div className="mt-8 flex flex-col max-w-[900px] ">
                <div className="flex justify-center">
                    <div>
                        <h2 className="text-4xl font-semibold text-pretty">Junior Software Developer Bootcamp</h2>
                        <p className="text-lg text-gray-300">Sep 2024 – Dec 2024</p>
                        <p className="text-xl font-medium text-gray-600">Generation Thailand</p>
                    </div>
                    
                    <ul className="mt-4 items-center text-left list-disc list-inside pl-8 space-y-4 max-w-[700px]">
                        <li>Learned to build web applications using React for front-end, Node.js for back-end, and MongoDB for the database.</li>
                        <li>Acquired essential skills like growth mindset, persistence, communication, agile methodology, and teamwork.</li>
                        <li>Tea Blend E-Commerce Platform with MERN Stack: Designed and developed an e-commerce platform for tea blending ingredients with a user-friendly interface, integrated CRUD functionalities for customers to manage their cart items, and an API for user authentication and secure data storage.</li>
                    </ul>
                </div>

                <div className="flex justify-center mt-8">
                    <div>
                        <h2 className="text-4xl font-semibold">Calculus Tutor</h2>
                        <p className="text-lg text-gray-300">May 2024 - Aug 2024</p>
                        <p className="text-xl font-medium text-gray-600">Work From Home (Online)</p>
                    </div>
                    
                    <ul className="mt-4 items-center text-left list-disc list-inside pl-8 space-y-4 max-w-[700px]">
                        <li>Planned and delivered calculus lessons, creating tailored content and exercises to meet individual student needs.</li>
                        <li>Employed various teaching strategies to engage students and accommodate different learning styles, ensuring a thorough comprehension of fundamental calculus concepts.</li>
                        <li>Monitored student progress through exam scores, providing personalized feedback and additional support to enhance performance and understanding.</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Experience;
