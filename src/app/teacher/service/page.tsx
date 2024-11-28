"use client";
import { useEffect, useState } from "react";
import style from "./page.module.css";
import ServiceCard from "@/app/compoment/ServiceCard";
import { useRouter } from "next/navigation";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Typography } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

interface orginalService {
  id: number;
  title: string;
  details: string;
  imageLink: string;
}
export default function Home() {
  const router = useRouter();
  const [services, setServices] = useState<orginalService[]>([]);
  useEffect(() => {
    getServices();
  }, []);
  const getServices = async () => {
    const res = await fetch("http://localhost:3000/api/teacher/");
    const data = await res.json();
    setServices(data);
  };
  return (
    <div className={style.container}>
      <div style={{ height: "10%" }}></div>
      <div className={style.mainContainer}>
        <div className={style.header}>
          <Typography variant="h3" color="#1876D1">
            Service
          </Typography>
        </div>

        <div
          className={style.button}
          onClick={() => router.push("/teacher/service/new")}
        >
          <AddCircleOutlineIcon />
          <button
            style={{
              backgroundColor: "transparent",
              borderColor: "transparent",
              color: "white",
              fontSize: "20px",
              marginLeft: "10px",
              cursor: "pointer",
            }}
          >
            Add New Service
          </button>
        </div>

        <div
          style={{
            padding: "20px",
            flexWrap: "wrap",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          {services.map((service) => (
            <div key={service.id} className={style.card}>
              <ServiceCard
                title={service.title}
                details={service.details}
                imgLink={service.imageLink}
              />
            </div>
          ))}
        </div>
        <div
          style={{
            marginTop: "20px",
            marginBottom: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            color: "#1876D1",
            cursor: "pointer",
          }}
          onClick={() => router.push("/")}
        >
          <KeyboardBackspaceIcon />
          <p>Back</p>
        </div>
      </div>
    </div>
  );
}
