"use client";
import PinDropIcon from "@mui/icons-material/PinDrop";
import AssignmentIcon from "@mui/icons-material/Assignment";
import style from "./page.module.css";
import Link from "next/link";
import { Typography } from "@mui/material";
import { motion } from "framer-motion";
export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
      }}>
      <motion.h5
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{
          color: "#333",
          fontFamily: "Arial, sans-serif",
          fontWeight: 300,
          marginTop: "-100px",
          background: "linear-gradient(45deg, #333, #666)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontSize: "2rem",
          letterSpacing: "2px",
          textTransform: "uppercase",
        }}>
        Student
      </motion.h5>
      <div
        className={style.buttonContainer}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "8px",
          marginTop: "40px",
        }}>
        <Link href="/student/map" style={{ textDecoration: "none" }}>
          <div className={style.button}>
            <PinDropIcon className={style.Buttonicon} />
            <p className={style.buttonText}>View Map</p>
          </div>
        </Link>
        <Link href="/student/service" style={{ textDecoration: "none" }}>
          <div className={style.button}>
            <AssignmentIcon className={style.Buttonicon} />
            <p className={style.buttonText}>Read Service</p>
          </div>
        </Link>
      </div>
      <Typography
        variant="h6"
        component="p"
        sx={{ mt: "40px", fontWeight: 300, fontSize: "14px" }}>
        <Link href="/teacher" style={{ textDecoration: "none" }}>
          Are you teacher?
        </Link>
      </Typography>

      <Typography
        variant="h6"
        component="p"
        sx={{
          position: "fixed",
          bottom: 0,
          width: "100%",
          fontWeight: 300,
          fontSize: "12px",
          textAlign: "center",
          color: "#666",
        }}>
        copyright 2024 banyar. All rights reserved.
      </Typography>

      <motion.div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
          background: "linear-gradient(to bottom right, #ffffff, #f0f0f0)",
          overflow: "hidden",
        }}>
        {Array.from({ length: 8 }).map((_, index) => {
          const size = Math.random() * 60 + 20;
          const initialX = Math.random() * 100;
          const initialY = Math.random() * 100;
          const duration = Math.random() * 8 + 5;
          const delay = Math.random() * 2;

          return (
            <motion.div
              key={index}
              initial={{
                x: `${initialX}vw`,
                y: `${initialY}vh`,
                scale: 0,
              }}
              animate={{
                x: [
                  `${initialX}vw`,
                  `${(initialX + 20) % 100}vw`,
                  `${(initialX - 10) % 100}vw`,
                  `${initialX}vw`,
                ],
                y: [
                  `${initialY}vh`,
                  `${(initialY - 15) % 100}vh`,
                  `${(initialY + 25) % 100}vh`,
                  `${initialY}vh`,
                ],
                scale: [0, 1, 0.8, 1],
              }}
              transition={{
                duration: duration,
                repeat: Infinity,
                delay: delay,
                ease: "easeInOut",
              }}
              whileHover={{ scale: 1.2 }}
              drag
              dragConstraints={{
                top: 0,
                left: 0,
                right: window.innerWidth,
                bottom: window.innerHeight,
              }}
              style={{
                position: "absolute",
                width: size,
                height: size,
                borderRadius: "50%",
                background: `radial-gradient(circle at 30% 30%, 
                  rgba(255,255,255,0.8),
                  rgba(${Math.random() * 255},${Math.random() * 255},${
                  Math.random() * 255
                },0.2)
                )`,
                backdropFilter: "blur(2px)",
                border: "1px solid rgba(255,255,255,0.3)",
                cursor: "pointer",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              }}
            />
          );
        })}
      </motion.div>
    </div>
  );
}
