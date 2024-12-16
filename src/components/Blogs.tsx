import React from "react";
import ItemCard from "./ItemCard";
import myBlogs from "../database/MyBlogs";


const Blogs: React.FC = () => {
    return (
        <section id="blogs" className="flex flex-col gap-6">
            <h1 className="text-6xl">Blogs</h1>
            <div className="flex flex-wrap justify-center gap-4">
                {myBlogs.map((blog) => (
                    <ItemCard 
                        title={blog.name} 
                        image={blog.image}
                        description={blog.description} 
                    />
                ))}
            </div>
        </section>
    )
}
export default Blogs;