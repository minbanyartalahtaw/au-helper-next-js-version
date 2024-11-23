"use client"
import { useEffect, useState } from "react";
import style from "./page.module.css";
import ServiceCard from "@/app/compoment/ServiceCard";
import { useRouter } from "next/navigation";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';


interface orginalService {
    id : number;
    title: string;
    details: string;
    imageLink:string
}
export default function Home() {
    const router = useRouter();
    const [services, setServices] = useState<orginalService[]>([]);
    useEffect(() => {
        getServices();
    },[]);
    const getServices = async () => {
        const res = await fetch("http://localhost:3000/api/teacher/");
        const data = await res.json();
        setServices(data);        
    }
    console.log(services);
    
    return (
        <div className ={style.container} style={{"display":"flex","justifyContent":"center","alignItems":"center","height":"100vh","flexDirection":"column", borderBottom:"1px solid #eb5e28"}}>
            <h1 style={{ "color": "#1876D1",fontFamily: "sans-serif",fontWeight:100,marginTop:"-130px"}}>Service</h1>
            <div className={style.button} onClick={() => router.push("/teacher/service/new")}>
                <AddCircleOutlineIcon />
                <button  style={{"backgroundColor":"transparent",borderColor:"transparent",color:"white",fontSize:"20px",marginLeft:"10px",cursor:"pointer"}}>Add New Service</button>
            </div>

            <div style={{"display":"flex","justifyContent":"center","alignItems":"center","gap":"10px",marginTop:"100px"}}>
                {
                    services.map((service) => (
                        <ServiceCard key={service.id} title={service.title} details={service.details} imgLink={service.imageLink}/>
                    ))
                }
            </div>
            <div style={{"display":"flex","justifyContent":"center","alignItems":"center","gap":"10px",marginTop:"100px",color:"#1876D1",cursor:"pointer"}}
                    onClick={() => router.push("/")}
                >
                    <KeyboardBackspaceIcon />
                    <p>Back</p>
      </div>
            
        </div>
    );
}