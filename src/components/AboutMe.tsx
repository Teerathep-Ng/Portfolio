import React from "react";
import ProfileImg from "../assets/myPhoto8.png"

const AboutMe: React.FC = () => {
    return (
        <section id="home" className="flex flex-col min-w-screen py-20 items-center">
            <h1 className="text-6xl">Professional Summary</h1>
            <div className="flex py-10">
                    <img src={ProfileImg} alt="myPicture" 
                    className="flex w-[250px] h-[250px] object-cover rounded-full hover:scale-105 transition-transform" />
            </div>

            <div className="flex">
                    <p className="text-pretty max-w-[800px] text-justify"> My name is Teerathep Ngampukdeekul. I am a graduate of the DataRockie Bootcamp, focusing on Data Science, and the Generation Bootcamp in Junior Software Development. I hold a Physics degree from Chulalongkorn University and am looking to apply my skills in Data Analyst or Software Engineer roles. Driven by a passion for data, technology, and problem-solving, I seek opportunities that foster innovation, teamwork, and continuous learning, where I can contribute to meaningful, data-driven solutions and software development.</p>
            </div>
        </section>
    )
}
export default AboutMe;