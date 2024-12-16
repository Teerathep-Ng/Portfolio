import React from "react";
import IconSocial from "./IconSocial";
import { FileUser, Github, Linkedin } from "lucide-react";


const AboutMe: React.FC = () => {
    return (
        <section id="aboutme" className="flex gap-6">
            <div className="flex flex-col justify-center gap-6">
                <div className="w-60 h-60 rounded-full bg-slate-500"></div>
                <div className="flex justify-around">
                    <IconSocial href="https://github.com/Teerathep-Ng" icon={Github} />
                    <IconSocial href="https://github.com/Teerathep-Ng" icon={Linkedin} />
                    <IconSocial href="https://github.com/Teerathep-Ng" icon={FileUser} />

                </div>
            </div>

            <div className="flex flex-col text-left gap-6">
                <h1 className="text-6xl font-bold">Hi, I am Teerathep Ngampukdeekul.</h1>
                <div className="flex flex-col gap-6">
                    <p>I'm a dedicated learner currently enrolled in both the DataRockie Bootcamp, specializing in Data Science, and the Generation Bootcamp, where I'm building my foundation in Junior Software Development. With a Bachelor's degree in Physics from Chulalongkorn University, I am excited to apply my skills in roles as a Data Analyst or Software Engineer. Though I may not yet have professional work experience, my passion for data, technology, and problem-solving drives me to continuously expand my abilities.</p>
                    <p>I am particularly drawn to opportunities that foster innovation, teamwork, and continuous learning. I thrive in collaborative and dynamic environments where I can utilize my technical skills and analytical mindset to create impactful, data-driven solutions and develop software that solves real-world problems. My goal is to join a team that values creativity, growth, and knowledge-sharing, where I can contribute meaningfully to both data and software-driven projects.</p>
                </div>
                
            </div>
        </section>
    )
}
export default AboutMe;