"use client";
import { useEffect, useState } from "react";
import style from "./page.module.css";
import ServiceCard from "@/app/compoment/ServiceCard";
import { useRouter } from "next/navigation";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Button, Typography } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Link from "next/link";
import { ServiceType } from "@/app/form/form";
import getServices from "./action";

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
      <div style={{ height: "10%" }}></div>
      <div className={style.mainContainer}>
        <div className={style.header}>
          <Typography variant="h3" color="#1876D1">
            Service
          </Typography>
        </div>

        <div
          className={style.button}
          onClick={() => router.push("/teacher/service/new")}>
          <AddCircleOutlineIcon />
          <button
            style={{
              backgroundColor: "transparent",
              borderColor: "transparent",
              color: "white",
              fontSize: "20px",
              marginLeft: "10px",
              cursor: "pointer",
            }}>
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
          }}>
          {services.map((service) => (
            <Link
              href={`/teacher/service/${service.id}`}
              key={service.id}
              className={style.card}
              style={{ textDecoration: "none" }}>
              <ServiceCard
                title={service.title}
                details={service.details}
                imgLink={service.imageLink}
              />
            </Link>
          ))}
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
          onClick={() => router.push("/")}>
          <ArrowBackIosIcon sx={{ fontSize: "1.2rem", marginLeft: "4px" }} />
        </Button>
      </div>
    </div>
  );
}
