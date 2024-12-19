import React from "react";
import ProfileImg from "../assets/myPhoto.jpg"

const AboutMe: React.FC = () => {
    return (
        <section id="home" className="flex flex-col min-w-screen min-h-screen items-center ">
            <div className="flex py-10">
                    <img src={ProfileImg} alt="myPicture" 
                    className="flex w-[250px] h-[250px] object-cover rounded-full hover:scale-105 transition-transform" />
            </div>

            <div className="flex">
                    <p className="text-pretty max-w-[800px]">Hi, My name Teerathep Ngampukdeekul. I am currently enrolled in DataRockie Bootcamp, focusing on Data Science, and I graduated from the Generation Bootcamp in Junior Software Development. I have a Physics degree from Chulalongkorn University and am looking to apply my skills in Data Analyst or Software Engineer roles. Although I don't have professional experience yet, my passion for data, technology, and problem-solving drives me to grow. I seek opportunities that foster innovation, teamwork, and continuous learning, where I can contribute to meaningful, data-driven solutions and software development.</p>
            </div>
        </section>
    )
}
export default AboutMe;