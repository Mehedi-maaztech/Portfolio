import { useEffect, useState } from "react";
import Project from "../../Project/Project";
import AOS from "aos";
import "aos/dist/aos.css";
const Projects = () => {
    const [projectData, setProjectData] = useState([]);

    useEffect(() => {
        // fetch('/projectsData.json')
        //     .then(res => res.json())
        //     .then(data => setProjectData(data))

        fetch('/Portfolio/projectsData.json')
            .then(async res => {
                if (!res.ok) {
                    // If file not found or server error
                    throw new Error(`HTTP error! Status: ${res.status} - ${await res.text()}`);
                }
                return res.json(); // Parse only if valid JSON
            })
            .then(data => setProjectData(data))
            .catch(err => {
                console.error("Failed to load projectsData.json:", err.message);
                setProjectData([]); // fallback (optional)
            });


        AOS.init({
            duration: 1500,
            easing: "ease-in-out",
            once: true,
        })
    }, [])
    return (
        <div className="min-h-[90vh] my-10" id="work">
            <h1 className='text-6xl font-bold py-10'>Projects.</h1>
            {/* <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1" data-aos="fade-up">
                {
                    projectData.map(item => <Project key={item.id} item={item}></Project>)
                }
            </div> */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" data-aos="fade-up">
                {projectData.map(item => (
                    <Project key={item.id} item={item} />
                ))}
            </div>

        </div>
    );
};

export default Projects;