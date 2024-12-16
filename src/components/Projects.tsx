import React, { useState } from "react";
import ItemCard from "./ItemCard";
import myProjects from "../database/MyProjects";

const Projects: React.FC = () => {

    // กำหนดหมวดหมู่โปรเจกต์ที่สามารถเลือกได้
    const categories = ["All", "Dev", "Data"];    

    // สร้าง state สำหรับเก็บหมวดหมู่โปรเจกต์ที่เลือก โดยเริ่มต้นเป็น 'All'
    const [categoryProject, setCategoryProject] = useState("All");

    // กรองโปรเจกต์ที่จะแสดงตามหมวดหมู่ที่เลือก
    const filterredCategory = categoryProject === "All" ? myProjects : myProjects.filter((project) => project.category === categoryProject); 


    return (
        <section id="projects" className="flex flex-col gap-6">
            <h1 className="text-6xl">Projects</h1>
            {/* แสดงปุ่มสำหรับเลือกหมวดหมู่โปรเจกต์ */}
            <div className="flex justify-center gap-4">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setCategoryProject(category)}
                        className={`w-20 h-12 rounded-full ${categoryProject === category ? 'bg-slate-600 text-white' : 'bg-white text-slate-600'}`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* แสดงรายการโปรเจกต์ที่กรองตามหมวดหมู่ที่เลือก */}
            <div className="flex gap-4 justify-center">
                {filterredCategory.map((project) => (
                    <ItemCard 
                    key={project.name}
                    title={project.name}
                    image={project.image}
                    description={project.description}
                    />
                ))}
            </div>
        </section>
    )
}
export default Projects;