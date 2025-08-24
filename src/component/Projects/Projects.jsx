import { useEffect, useState } from "react";
import Project from "../../Project/Project";
import AOS from "aos";
import "aos/dist/aos.css";
const Projects = () => {
    const [projectData, setProjectData] = useState([]);

    useEffect(() => {
        fetch('/projectsData.json')
            .then(res => res.json())
            .then(data => setProjectData(data))

        AOS.init({
            duration: 1500,
            easing: "ease-in-out",
            once: true,
        })
    }, [])
    return (
        <div className="min-h-[90vh] my-10" id="work">
            <h1 className='text-6xl font-bold py-10'>Projects.</h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1" data-aos="fade-up">
                {
                    projectData.map(item => <Project key={item.id} item={item}></Project>)
                }
            </div>
        </div>
    );
};

export default Projects;