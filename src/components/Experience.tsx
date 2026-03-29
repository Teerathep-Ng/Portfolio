import React from "react";

const Experience: React.FC = () => {
    return (
        <section id="experience" className="flex flex-col min-w-screen py-20 items-center">
            <h1 className="text-6xl">Experience</h1>

            <div className="mt-8 flex flex-col max-w-[900px] ">
                <div className="flex mt-8 w-full">
                    <div className="w-1/3 flex-shrink-0 text-right pr-8">
                        <h2 className="text-4xl font-semibold text-pretty">Junior Data Intelligence</h2>
                        <p className="text-lg text-gray-300">June 2025 – Present</p>
                        <p className="text-xl font-medium text-gray-600">Realsmart</p>
                    </div>
                    
                    <ul className="w-2/3 list-disc space-y-4 max-w-[700px] border-l border-gray-700 pl-8">
                        <li className="text-left text-base leading-relaxed">Filtered and tagged data from Talkwalker to accurately categorize content based on relevance and context.</li>
                        <li className="text-left text-base leading-relaxed">Identified and escalated key insights or critical information to clients, such as negative issues affecting brand image or special ad-hoc requests.</li>
                        <li className="text-left text-base leading-relaxed">Prepared monthly reports summarizing positive, neutral, and negative topics, as well as platforms where the client’s organization was mentioned, including numerical summaries and month-over-month trend comparisons.</li>
                    </ul>
                </div>

                <div className="flex mt-8 w-full">
                    <div className="w-1/3 flex-shrink-0 text-right pr-8">
                        <h2 className="text-4xl font-semibold text-pretty">Mathematics Staff Teacher</h2>
                        <p className="text-lg text-gray-300">Jan 2025 – June 2025</p>
                        <p className="text-xl font-medium text-gray-600">Monkey Kanes</p>
                    </div>
                    
                    <ul className="w-2/3 list-disc space-y-4 max-w-[700px] border-l border-gray-700 pl-8">
                        <li className="text-left text-base leading-relaxed">Designed and customized individual study plans for students based on their specific entrance exam goals, ensuring a personalized and effective learning experience.</li>
                        <li className="text-left text-base leading-relaxed">Reviewed homework and assignments, providing step-by-step guidance and feedback to help students understand and correct mistakes.</li>
                        <li className="text-left text-base leading-relaxed">Monitored student progress through exam results, offering personalized feedback and additional support to enhance academic performance.</li>
                    </ul>
                </div>

                <div className="flex mt-8 w-full">
                    <div className="w-1/3 flex-shrink-0 text-right pr-8">
                        <h2 className="text-4xl font-semibold text-pretty">Junior Software Developer Bootcamp</h2>
                        <p className="text-lg text-gray-300">Sep 2024 – Dec 2024</p>
                        <p className="text-xl font-medium text-gray-600">Generation Thailand</p>
                    </div>
                    
                    <ul className="w-2/3 list-disc space-y-4 max-w-[700px] border-l border-gray-700 pl-8">
                        <li className="text-left text-base leading-relaxed">Learned to build web applications using React for front-end, Node.js for back-end, and MongoDB for the database.</li>
                        <li className="text-left text-base leading-relaxed">Acquired essential skills like growth mindset, persistence, communication, agile methodology, and teamwork.</li>
                        <li className="text-left text-base leading-relaxed">Tea Blend E-Commerce Platform with MERN Stack: Designed and developed an e-commerce platform for tea blending ingredients with a user-friendly interface, integrated CRUD functionalities for customers to manage their cart items, and an API for user authentication and secure data storage.</li>
                    </ul>
                </div>

                <div className="flex mt-8 w-full">
                    <div className="w-1/3 flex-shrink-0 text-right pr-8">
                        <h2 className="text-4xl font-semibold">Calculus Tutor</h2>
                        <p className="text-lg text-gray-300">May 2024 - Aug 2024</p>
                        <p className="text-xl font-medium text-gray-600">Work From Home (Online)</p>
                    </div>
                    
                    <ul className="w-2/3 list-disc space-y-4 max-w-[700px] border-l border-gray-700 pl-8">
                        <li className="text-left text-base leading-relaxed">Planned and delivered calculus lessons, creating tailored content and exercises to meet individual student needs.</li>
                        <li className="text-left text-base leading-relaxed">Employed various teaching strategies to engage students and accommodate different learning styles, ensuring a thorough comprehension of fundamental calculus concepts.</li>
                        <li className="text-left text-base leading-relaxed">Monitored student progress through exam scores, providing personalized feedback and additional support to enhance performance and understanding.</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Experience;
