"use client";
import { useEffect, useState } from "react";
import style from "./page.module.css";
import ServiceCard from "@/app/compoment/ServiceCard";
import { useRouter } from "next/navigation";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Typography } from "@mui/material";
import Link from "next/link";
import { config } from "@/app/config";

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
    const res = await fetch(`${config.backofficeUrl}/api/teacher/`);
    const data = await res.json();
    setServices(data);
  };
  return (
    <div className={style.container}>
      <div style={{ height: "10%" }}></div>
      <div className={style.mainContainer}>
        <div className={style.header}>
          <Typography variant="h3" color="#E63946">
            Service
          </Typography>
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
            <Link
              href={`/student/service/${service.id}`}
              key={service.id}
              style={{ textDecoration: "none" }}
            >
              <ServiceCard
                title={service.title}
                details={service.details}
                imgLink={service.imageLink}
              />
            </Link>
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
            color: "#E63946",
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
