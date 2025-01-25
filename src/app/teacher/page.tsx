"use client";
import { Button, ButtonGroup, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import style from "./page.module.css";
import { useState } from "react";
import checkUser from "./action";

export default function Home() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleLogin = async () => {
    const response: boolean = await checkUser({ username, password });
    if (response) {
      const authToken = Array.from(crypto.getRandomValues(new Uint8Array(32)))
        .map((b) =>
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(
            b % 62
          )
        )
        .join("");
      document.cookie = `authToken=${authToken}; Max-Age=1800; Path=/`;
      router.push("/teacher/service");
    } else {
      setPassword("");
      setUsername("");
      alert("Please check username and password");
    }
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
        borderBottom: "1px solid #eb5e28",
      }}>
      <h1
        style={{
          color: "#1876D1",
          fontFamily: "sans-serif",
          fontWeight: 100,
          marginTop: "-130px",
        }}>
        Teacher
      </h1>
      <TextField
        id="standard-basic"
        label="username"
        variant="standard"
        sx={{ margin: "20px", width: "300px" }}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        type="password"
        id="standard-basic"
        label="password"
        variant="standard"
        sx={{ margin: "20px", width: "300px" }}
        onChange={(e) => setPassword(e.target.value)}
      />

      <ButtonGroup
        variant="text"
        aria-label="Basic button group"
        sx={{ mt: "50px" }}>
        <Button
          onClick={() => {
            router.back();
          }}>
          BacK
        </Button>
        <Button> </Button>
        <Button onClick={handleLogin}>Login</Button>
      </ButtonGroup>
    </div>
  );
}
