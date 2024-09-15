import { getServicesDetails } from "@/lib/getServiceData"
const page = async ({params}) => {
const details = await getServicesDetails(params.id);
    return (
        <div>
            
        </div>
    );
};

export default page;