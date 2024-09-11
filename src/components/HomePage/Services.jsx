// import {services} from "@/lib/services"
import ServiceCard from "../Cards/ServiceCard";

const getServices = async() => {
    const res = await fetch('http://localhost:3000/services/api/get-all')
    const services = res.json()
    return services;
}

const Services = async () => {
    const data = await getServices();
    return (
        <div className="my-10">
            <div className="text-center w-2/3 mx-auto space-y-2">
                <h4 className="text-orange-600">Service</h4>
                <h3 className="text-3xl font-bold">Our Service Area</h3>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which {`don't`} look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
                {
                    data?.services?.map((service, index)=> <ServiceCard key={service?._id} service={service} index={index}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;