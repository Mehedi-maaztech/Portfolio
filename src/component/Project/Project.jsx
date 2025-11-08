import "./Project.css"
const Project = ({ item }) => {
    const { id, image, title, description, technologies } = item;
    return (
        <div className="card bg-base-100 border-2 border-cyan-950 shadow-sm p-5 m-4 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto h-96 flex flex-col">
            <figure className="h-48 sm:h-52 md:h-56 lg:h-60 other-pro-img">
                <img
                    key={id}
                    src={image}
                    alt={title}
                    className="h-full w-full object-cover rounded-lg"
                />
            </figure>
            <div className="card-body px-0 flex-1 flex flex-col">
                <h2 className="card-title font-bold text-base sm:text-lg md:text-xl">{title}</h2>
                <p className="font-light text-sm sm:text-base md:text-lg flex-1">{description}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                    {technologies.map((tec, idx) => (
                        <span className="font-bold text-xs sm:text-sm md:text-base" key={idx}>
                            {tec}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Project;