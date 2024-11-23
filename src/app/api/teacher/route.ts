import { prisma } from "@/app/libs/prisma";
import { NextResponse } from "next/server";

export async function GET() {
    const services = await prisma.service.findMany();
    return NextResponse.json(services,{status:200}); 
}

export async function POST(request: Request) {
    const newMenu = await request.json()
    await prisma.service.create({data:newMenu})
    return NextResponse.json(null,{status:200});
}