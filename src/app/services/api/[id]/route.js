import { connectDb } from "@/lib/connectedDb"

export const GET = async(req, {params}) => {
const db = await connectDb();
const servicesCollection = db.collection('services')
try {
    const serviceDetails = await servicesCollection.findOne({_id: params?.id});
   return Response.json({serviceDetails})

} catch (error) {
    return Response.json(error)
    
}
}