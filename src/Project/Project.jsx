import "./Project.css"
const Project = ({ item }) => {
    console.log(item)
    const { id, image, title, description, technologies } = item;
    return (
        <div className="">
            <div className="card bg-base-100 border-2 border-cyan-950 shadow-sm p-5 m-4 sm:m-6 md:m-8 lg:m-10 w-96 sm:w-[90%]">
                <figure className="h-52 other-pro-img">
                    <img key={id}
                        src={image}
                        alt="Shoes"
                        className="" />
                </figure>
                <div className="card-body px-0 ">
                    <h2 className="card-title font-bold">{title}</h2>
                    <p className="font-light">{description}</p>
                    <div className="flex flex-wrap gap-2">{
                        technologies.map((tec, idx) => <span className="font-bold" key={idx}>{tec}</span>)
                    }</div>
                </div>
            </div>
        </div>
    );
};

export default Project;