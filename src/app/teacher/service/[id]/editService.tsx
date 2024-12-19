"use client";
import { useState } from "react";
import style from "./page.module.css";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import { config } from "@/app/config";

interface Prop {
  id: number;
  title: string;
  details: string;
  imageLink: string;
}

export default function EditService({ id, title, details, imageLink }: Prop) {
  const router = useRouter();
  const [usetitle, setuseTitle] = useState(title);
  const [usedetails, setuseDetails] = useState(details);
  const [useimageLink, setuseImageLink] = useState(imageLink);
  const updateService = async () => {
    await fetch(`${config.backofficeUrl}/api/teacher`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
        title: usetitle,
        details: usedetails,
        imageLink: useimageLink,
      }),
    });
    router.push("/teacher/service");
  };
  const deleteService = async () => {
    await fetch("http://localhost:3000/api/teacher", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
        title: usetitle,
        details: usedetails,
        imageLink: useimageLink,
      }),
    });
    router.push("/teacher/service");
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      <h1
        style={{
          color: "#1876D1",
          fontFamily: "sans-serif",
          fontWeight: 100,
          marginBottom: "50px",
        }}
      >
        Edit Service
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <input
          type="text"
          className={style.leftTitle}
          placeholder="Title"
          value={usetitle}
          onChange={(e) => setuseTitle(e.target.value)}
        />
        <textarea
          className={style.textField}
          placeholder="Details"
          value={usedetails}
          onChange={(e) => setuseDetails(e.target.value)}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <input
            type="text"
            className={style.imageLink}
            placeholder="image Link"
            value={useimageLink}
            onChange={(e) => setuseImageLink(e.target.value)}
          />
          <button
            style={{
              backgroundColor: "#1876D1",
              borderColor: "transparent",
              color: "white",
              fontSize: "20px",
              marginLeft: "10px",
              cursor: "pointer",
              padding: "7px 20px",
              borderRadius: "7px",
            }}
            onClick={updateService}
          >
            Update
          </button>
        </div>
      </div>
      <Button variant="contained" color="error" onClick={deleteService}>
        Delete
      </Button>
    </div>
  );
}
