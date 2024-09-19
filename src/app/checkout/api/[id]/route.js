import { connectDb } from "@/lib/connectedDb"
import { NextResponse } from "next/server";

export const POST = async(req) => {
    const bookingBody = req.json()
    const db = await connectDb();
    const bookingsCollection = db.collection('bookings');
    try {
        const booking = bookingsCollection.insertOne(bookingBody)
        return NextResponse.json({message: "service checkout successfully"})
    } catch (error) {
       return NextResponse.json(error)
    }
}
