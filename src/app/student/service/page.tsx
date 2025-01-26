"use client";
import { useEffect, useState } from "react";
import style from "./page.module.css";
import ServiceCard from "@/app/compoment/ServiceCard";
import { useRouter } from "next/navigation";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Typography } from "@mui/material";
import Link from "next/link";
import getServices from "./action";
import { ServiceType } from "@/app/form/form";

export default function Home() {
  const router = useRouter();
  const [services, setServices] = useState<ServiceType[]>([]);
  useEffect(() => {
    async function fetchData() {
      const serviceData = await getServices();
      setServices(serviceData);
    }
    fetchData();
  }, []);
  if (services.length === 0) return null;
  return (
    <div className={style.container}>
      <div className={style.mainContainer}>
        <div
          className={style.header}
          style={{
            padding: "20px",
            borderBottom: "2px solid #E63946",
            marginBottom: "10px",
          }}>
          <Typography
            variant="h5"
            color="#E63946"
            sx={{
              fontWeight: "bold",
              letterSpacing: "1px",
              textTransform: "uppercase",
            }}>
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
          }}>
          {services.map((service) => (
            <Link
              href={`/student/service/${service.id}`}
              key={service.id}
              style={{ textDecoration: "none" }}>
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
          onClick={() => router.push("/")}>
          <KeyboardBackspaceIcon />
          <p>Back</p>
        </div>
      </div>
    </div>
  );
}
