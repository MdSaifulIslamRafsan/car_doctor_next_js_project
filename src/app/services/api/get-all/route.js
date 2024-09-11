import {connectDb} from "@/lib/connectedDb"
export const GET = async () =>{
    const db = await connectDb();
    const servicesCollection = db.collection('services');
    try {
        const services = await servicesCollection.find().toArray();
        return Response.json({services})
    } catch (error) {
        console.log(error)
    }
}