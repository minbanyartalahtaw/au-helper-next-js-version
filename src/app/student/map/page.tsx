/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useRouter } from "next/navigation";
import style from "./page.module.css";
import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import { motion } from "framer-motion";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
export default function Map() {
  const router = useRouter();
  const [SeeFloor, setSeeFloor] = useState(false);
  const [SeeRoom, setSeeRoom] = useState(false);
  const [floorNumber, setFloorNumber] = useState(0);

  const [showSRMap1, setShowSRMap1] = useState(false);
  const [showSRMap2, setShowSRMap2] = useState(false);

  const [showSMMap1, setShowSMMap1] = useState(false);
  const [showSMMap2, setShowSMMap2] = useState(false);

  const [showSGMap1, setShowSGMap1] = useState(false);
  const [showSGMap2, setShowSGMap2] = useState(false);
  const srBuilding = {
    name: "SR",
    floors: [1, 2, 3, 4, 5],
    rooms: [
      ["101 - 106", "107 - 114"],
      ["201 - 208", "209 - 218"],
      ["301 - 324", "325 - 349"],
      ["401 - 416", "417 - 431"],
      ["SR - 501", "No Class"],
    ],
    roomId: [1, 2],
    buttonColor: "error",
  };
  const smBuilding = {
    name: "SM",
    floors: [1, 2, 3, 4, 5],
    rooms: [
      ["103 - 110", "111 - 118"],
      ["204 - 212", "213 - 220"],
      ["305 - 328", "329 - 352"],
      ["407 - 415", "416 - 423"],
      ["SM - 510", "No Class"],
    ],
    roomId: [1, 2],
    buttonColor: "success",
  };

  const sgBuilding = {
    name: "SG",
    floors: [1, 2, 3, 4, 5],
    rooms: [
      ["102 - 114", "115 - 119"],
      ["202 - 211", "212 - 219"],
      ["302 - 326", "327 - 350"],
      ["404 - 419", "420 - 434"],
      ["SG - 503", "No Class"],
    ],
    roomId: [1, 2],
    buttonColor: "primary",
  };

  const [building, setBuilding] = useState(srBuilding);

  const showColor = (room: any) => {
    if (building.buttonColor === "error") {
      setShowSGMap1(false);
      setShowSGMap2(false);
      setShowSMMap1(false);
      setShowSMMap2(false);

      if (
        room === "101 - 106" ||
        room === "201 - 208" ||
        room === "301 - 324" ||
        room === "401 - 416" ||
        room === "SR - 501"
      ) {
        setShowSRMap2(false);
        setShowSRMap1(true);
      } else {
        setShowSRMap1(false);
        setShowSRMap2(true);
      }
    } else if (building.buttonColor === "success") {
      setShowSGMap1(false);
      setShowSGMap2(false);
      setShowSRMap1(false);
      setShowSRMap2(false);

      if (
        room === "103 - 110" ||
        room === "204 - 212" ||
        room === "305 - 328" ||
        room === "407 - 415" ||
        room === "SM - 510"
      ) {
        setShowSMMap1(false);
        setShowSMMap2(true);
      } else {
        setShowSMMap2(false);
        setShowSMMap1(true);
      }
    } else if (building.buttonColor === "primary") {
      setShowSRMap1(false);
      setShowSRMap2(false);
      setShowSMMap1(false);
      setShowSMMap2(false);
      if (
        room === "102 - 114" ||
        room === "202 - 211" ||
        room === "302 - 326" ||
        room === "404 - 419" ||
        room === "SG - 503"
      ) {
        setShowSGMap1(false);
        setShowSGMap2(true);
      } else {
        setShowSGMap2(false);
        setShowSGMap1(true);
      }
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          flexDirection: "column",
        }}>
        {/* Map  */}
        <div className={style.mapContainer}>
          {/* Map Left */}
          <div className={style.mapLeft}>
            <div className={style.buildingContainer}>
              <div className={style.SRbuildingContainer}>
                <div className={style.gate}></div>
                <div
                  className={`${style.building} ${
                    showSRMap1 ? style.SRbuilding1 : ""
                  }`}></div>
                <div className={style.gate}></div>
                <div
                  className={`${style.building} ${
                    showSRMap2 ? style.SRbuilding2 : ""
                  }`}></div>
                <div className={style.gate}></div>
              </div>
              <div className={style.SMbuildingContainer}>
                <div className={style.gate}></div>
                <div
                  className={`${style.building} ${
                    showSMMap1 ? style.SMbuilding1 : ""
                  }`}></div>
                <div className={style.gate}></div>
                <div
                  className={`${style.building} ${
                    showSMMap2 ? style.SMbuilding1 : ""
                  }`}></div>
                <div className={style.gate}></div>
              </div>

              <div className={style.SGbuildingContainer}>
                <div className={style.gate}></div>
                <div
                  className={`${style.building} ${
                    showSGMap1 ? style.SGbuilding1 : ""
                  }`}></div>
                <div className={style.gate}></div>
                <div
                  className={`${style.building} ${
                    showSGMap2 ? style.SGbuilding1 : ""
                  }`}></div>
                <div className={style.gate}></div>
              </div>
            </div>
          </div>

          {/* Map Right*/}
          <div className={style.mapRight}>
            <Typography
              variant="h3"
              className={style.title}
              sx={{
                fontSize: {
                  xs: 35,
                  sm: 25,
                  md: 30,
                  lg: 35,
                  xl: 40,
                },
              }}>
              map
            </Typography>
            <div className={style.rightContainer}>
              <div className={style.chooseBuildingContainer}>
                <Typography variant="h2">choose the building</Typography>
                <div>
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() => {
                      setSeeFloor(false);
                      setSeeRoom(false);
                      setBuilding(srBuilding);
                      setSeeFloor(true);
                      setShowSGMap1(false);
                      setShowSGMap2(false);
                      setShowSMMap1(false);
                      setShowSMMap2(false);
                      setShowSRMap1(false);
                      setShowSRMap2(false);
                    }}>
                    {srBuilding.name}
                  </Button>
                  <Button
                    variant="outlined"
                    color="success"
                    onClick={() => {
                      setSeeFloor(false);
                      setSeeRoom(false);
                      setBuilding(smBuilding);
                      setSeeFloor(true);
                      setShowSGMap1(false);
                      setShowSGMap2(false);
                      setShowSMMap1(false);
                      setShowSMMap2(false);
                      setShowSRMap1(false);
                      setShowSRMap2(false);
                    }}>
                    {smBuilding.name}
                  </Button>
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => {
                      setSeeFloor(false);
                      setSeeRoom(false);
                      setBuilding(sgBuilding);
                      setSeeFloor(true);
                      setShowSGMap1(false);
                      setShowSGMap2(false);
                      setShowSMMap1(false);
                      setShowSMMap2(false);
                      setShowSRMap1(false);
                      setShowSRMap2(false);
                    }}>
                    {sgBuilding.name}
                  </Button>
                </div>
              </div>

              <div
                className={`${style.chooseFloorContainer} ${
                  SeeFloor ? "" : style.displayNone
                }`}>
                <Typography variant="h2">choose the floor</Typography>
                <Box>
                  {building.floors.map((floor) => {
                    return (
                      <Button
                        sx={{ width: "0px" }}
                        variant="contained"
                        key={floor}
                        color={building.buttonColor as any}
                        onClick={() => {
                          setSeeRoom(true);
                          setFloorNumber(floor - 1);
                          setShowSGMap1(false);
                          setShowSGMap2(false);
                          setShowSMMap1(false);
                          setShowSMMap2(false);
                          setShowSRMap1(false);
                          setShowSRMap2(false);
                        }}>
                        {floor}
                      </Button>
                    );
                  })}
                </Box>
              </div>

              <div
                className={`${style.chooseRoomContainer} ${
                  SeeRoom ? "" : style.displayNone
                }`}>
                <Typography variant="h2">choose the room</Typography>
                <div>
                  {building.rooms[floorNumber].map((room) => {
                    return (
                      <Button
                        key={room}
                        variant="contained"
                        color={building.buttonColor as any}
                        onClick={() => showColor(room)}>
                        {room}
                      </Button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/** Back Button */}

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
    </motion.div>
  );
}
