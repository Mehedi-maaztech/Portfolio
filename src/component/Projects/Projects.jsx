import { useEffect, useState } from "react";
import Project from "../Project/Project";
import AOS from "aos";
import "aos/dist/aos.css";
const Projects = () => {
    const [projectData, setProjectData] = useState([]);

    useEffect(() => {
        // fetch('/projectsData.json')
        //     .then(res => res.json())
        //     .then(data => setProjectData(data))

        fetch('/projectsData.json')
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
        <div className="min-h-[90vh] my-10 px-4" id="work">
            <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold py-10'>Projects.</h1>
            <div
                className="flex flex-wrap justify-center w-full gap-6"
                data-aos="fade-up"
            >
                {projectData.map((item, idx) => (
                    <div
                        key={item.id}
                        className="
                            flex-[1_1_100%] sm:flex-[1_1_100%] 
                            md:flex-[1_1_45%] lg:flex-[1_1_30%] 
                            max-w-full sm:max-w-full md:max-w-[50%] lg:max-w-[40%]
                        "
                        style={{ minWidth: 0 }}
                    >
                        <Project item={item} />
                    </div>
                ))}
            </div>
        </div>
    );
};

// grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6
export default Projects;