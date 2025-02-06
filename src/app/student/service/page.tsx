"use client";
import { useEffect, useState } from "react";
import style from "./page.module.css";
import ServiceCard from "@/app/compoment/ServiceCard";
import { useRouter } from "next/navigation";
import { Button, Typography } from "@mui/material";
import Link from "next/link";
import getServices from "./action";
import { ServiceType } from "@/app/form/form";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Loading from "@/app/compoment/Loading";

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
  if (services.length === 0) return <Loading />;
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
      </div>
      <Button
        sx={{
          position: "fixed",
          top: "20px",
          left: "20px",
          minWidth: "40px",
          height: "40px",
          padding: "8px",
          backgroundColor: "white",
          color: "#E63946",
          transition: "all 0.3s ease",
          "&:hover": {
            backgroundColor: "#E63946",
            color: "white",
            transform: "scale(1.05)",
          },
          boxShadow: "0 3px 6px rgba(0,0,0,0.16)",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={() => router.back()}>
        <ArrowBackIosIcon sx={{ fontSize: "1.2rem", marginLeft: "4px" }} />
      </Button>
    </div>
  );
}
