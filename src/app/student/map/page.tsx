/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useRouter } from "next/navigation";
import style from "./page.module.css";
import { Button, Typography } from "@mui/material";
import { useState } from "react";
export default function Map() {
  const router = useRouter();
  const [SeeFloor, setSeeFloor] = useState(false);
  const [SeeRoom, setSeeRoom] = useState(false);
  const [floorNumber, setFloorNumber] = useState(0);
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
    buttonColor: "success",
  };

  const sgBuilding = {
    name: "SG",
    floors: [1, 2, 3, 4, 5],
    rooms: [
      ["102 - 114", "115 - 119"],
      ["202 - 211", "212 = 219"],
      ["302 - 326", "327 - 350"],
      ["404 - 419", "420 - 434"],
      ["SG - 503", "No Class"],
    ],
    buttonColor: "primary",
  };

  const [building, setBuilding] = useState(srBuilding);
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
      <div
        className={style.mapContainer}
        style={{ border: "1px solid #eb5e28" }}
      >
        <div className={style.mapLeft}>
          <div className={style.buildingContainer}>
            <div className={style.SRbuildingContainer}>
              <div className={style.gate}></div>
              <div className={style.building}></div>
              <div className={style.gate}></div>
              <div className={style.building}></div>
              <div className={style.gate}></div>
            </div>
            <div className={style.SMbuildingContainer}>
              <div className={style.gate}></div>
              <div className={style.building}></div>
              <div className={style.gate}></div>
              <div className={style.building}></div>
              <div className={style.gate}></div>
            </div>

            <div className={style.SGbuildingContainer}>
              <div className={style.gate}></div>
              <div className={style.building}></div>
              <div className={style.gate}></div>
              <div className={style.building}></div>
              <div className={style.gate}></div>
            </div>
          </div>
        </div>

        <div className={style.mapRight}>
          <Typography variant="h3" className={style.title}>
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
                  }}
                >
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
                  }}
                >
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
                  }}
                >
                  {sgBuilding.name}
                </Button>
              </div>
            </div>

            <div
              className={`${style.chooseFloorContainer} ${
                SeeFloor ? "" : style.displayNone
              }`}
            >
              <Typography variant="h2">choose the floor</Typography>
              <div>
                {building.floors.map((floor) => {
                  return (
                    <Button
                      variant="contained"
                      key={floor}
                      color={building.buttonColor as any}
                      onClick={() => {
                        setSeeRoom(true);
                        setFloorNumber(floor - 1);
                      }}
                    >
                      {floor}
                    </Button>
                  );
                })}
              </div>
            </div>

            <div
              className={`${style.chooseRoomContainer} ${
                SeeRoom ? "" : style.displayNone
              }`}
            >
              <Typography variant="h2">choose the room</Typography>
              <div>
                {building.rooms[floorNumber].map((room) => {
                  return (
                    <Button
                      key={room}
                      variant="contained"
                      color={building.buttonColor as any}
                    >
                      {room}
                    </Button>
                  );
                })}
                ;
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          marginTop: "60px",
          color: "#E63946",
          cursor: "pointer",
        }}
        onClick={() => router.push("/")}
      >
        <KeyboardBackspaceIcon />
        <p>Back</p>
      </div>
    </div>
  );
}
