"use client";
import { config } from "@/app/config";
import style from "./page.module.css";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useRouter } from "next/navigation";
import { useState } from "react";
export default function Home() {
  const router = useRouter();
  const orginalService = {
    title: "",
    details: "",
    imageLink: "",
  };
  const [services, setServices] = useState(orginalService);
  /*     const [imageLink, setImageLink] = useState("");
    const [title, setTitle] = useState("");
    const [details, setDetails] = useState(""); */
  const handleAdd = async () => {
    const isValid =
      services.title.length > 0 &&
      services.details.length > 0 &&
      services.imageLink.length > 0;
    if (!isValid) return alert("Invalid data");
    await fetch(`${config.backofficeUrl}/api/teacher/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(services),
    });
    router.push("/teacher/service");
  };
  return (
    <div
      className={style.container}
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
        New Service
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
          className={style.title}
          placeholder="Title"
          onChange={(e) => setServices({ ...services, title: e.target.value })}
        />
        <textarea
          className={style.textField}
          placeholder="Details"
          onChange={(e) =>
            setServices({ ...services, details: e.target.value })
          }
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
            onChange={(e) =>
              setServices({ ...services, imageLink: e.target.value })
            }
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
            onClick={handleAdd}
          >
            Add
          </button>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            marginTop: "100px",
            color: "#1876D1",
            cursor: "pointer",
          }}
          onClick={() => router.push("/teacher/service")}
        >
          <KeyboardBackspaceIcon />
          <p>Back</p>
        </div>
      </div>
    </div>
  );
}
