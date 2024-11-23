"use client";
import { Button, ButtonGroup, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import style from "./page.module.css";
import { useState } from "react";


export default function Home() {
    const router = useRouter();
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");

    const handleLogin = () => {
        if (username === "teacher" && password === "1234") {
            router.push("/teacher/service");
        } else {
            alert("Invalid username or password");

        }
        
    }
    return (
        <div className ={style.container} style={{"display":"flex","justifyContent":"center","alignItems":"center","height":"100vh","flexDirection":"column", borderBottom:"1px solid #eb5e28"}}>
            <h1 style={{ "color": "#1876D1",fontFamily: "sans-serif",fontWeight:100,marginTop:"-130px"}}>Teacher</h1>
            <TextField id="standard-basic" label="username" variant="standard"  sx={{"margin":"20px",width:"300px"}} onChange={(e) => setUsername(e.target.value)}/>
            <TextField id="standard-basic" label="password" variant="standard" sx={{"margin":"20px",width:"300px"}} onChange={(e) => setPassword(e.target.value)}/>

            <ButtonGroup variant="text" aria-label="Basic button group" sx={{mt:"50px"}}>
                <Button onClick={() => {router.back()}}>BacK</Button>
                <Button>   </Button>
                <Button onClick={handleLogin}>Login</Button>
            </ButtonGroup>
        </div>
    );
}