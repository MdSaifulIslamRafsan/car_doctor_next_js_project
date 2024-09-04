const Banner = () => {
  const banner = [
    {
      title: "Affordable Price For Car Servicing",
      description:
        "There are many variations of passages of  available, but the majority have suffered alteration in some form",
      next: "#slide2",
      prev: "#slide4",
    },
    {
      title: "Affordable Price For Car Servicing",
      description:
        "There are many variations of passages of  available, but the majority have suffered alteration in some form",
      next: "#slide3",
      prev: "#slide1",
    },
    {
      title: "Affordable Price For Car Servicing",
      description:
        "There are many variations of passages of  available, but the majority have suffered alteration in some form",
      next: "#slide4",
      prev: "#slide2",
    },
    {
      title: "Affordable Price For Car Servicing",
      description:
        "There are many variations of passages of  available, but the majority have suffered alteration in some form",
      next: "#slide1",
      prev: "#slide3",
    },
  ];
  return (
    <div className="carousel w-full">
  
       {
        banner?.map((item , index)=> <div key={index} id={`slide${index+1}`}  style={{
          backgroundImage: `linear-gradient(45deg, rgba(7,25,82,0.5), rgba(0,0,0,0.7)), url('/assets/images/banner/${index + 1}.jpg')`,
        }} className="carousel-item text-white bg-no-repeat bg-bottom h-96 bg-cover rounded-xl relative w-full">
          <div className="flex flex-col justify-center p-20 w-1/2 space-y-4">
            <h1 className="text-5xl font-bold">{item?.title}</h1>
            <p>{item?.description}</p>
            <div className="flex gap-4">
            <button className="btn btn-primary text-white">Discover More</button>
            <button className="btn btn-outline text-white">Latest Project</button>
            </div>

          </div>
          <div className="absolute  right-5 bottom-5 space-x-3">
            <a href={item?.prev} className="btn btn-primary text-white btn-circle">
              ❮
            </a>
            <a href={item?.next} className="btn btn-primary text-white btn-circle">
              ❯
            </a>
          </div>
        </div>)
       }
      </div>
  );
};

export default Banner;
