"use client";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useRouter } from "next/navigation";
import style from "./page.module.css";
export default function Map() {
  const router = useRouter();
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
        style={{ color: "#eb5e28", fontFamily: "sans-serif", fontWeight: 100 }}
      >
        Map
      </h1>

      <div
        className={style.mapContainer}
        style={{ border: "1px solid #eb5e28" }}
      >
        <div className="map-left">
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
          <div className={style.chooseBuilding}>
            <h2>Choose the building</h2>
            <div>
              <p className="style.btn style.buildingButton"> SR</p>
              <p className="stylebtn style.buildingButton">SM</p>
              <p className="stylebtn style.buildingButton">SG</p>
            </div>

            <div className="chooseFloor opicityZero">
              <div className="sr-floor-container display-none">
                <h2>Choose the floor</h2>
                <div className="floorContainer">
                  <p className="btn btn-outline-danger sr-floorNumber">1</p>
                  <p className="btn btn-outline-danger sr-floorNumber">2</p>
                  <p className="btn btn-outline-danger sr-floorNumber">3</p>
                  <p className="btn btn-outline-danger sr-floorNumber">4</p>
                  <p className="btn btn-outline-danger sr-floorNumber">5</p>
                </div>
              </div>

              <div className="sm-floor-container display-none">
                <h2>Choose the floor</h2>
                <div className="floorContainer">
                  <p className="btn btn-outline-success sm-floorNumber">1</p>
                  <p className="btn btn-outline-success sm-floorNumber">2</p>
                  <p className="btn btn-outline-success sm-floorNumber">3</p>
                  <p className="btn btn-outline-success sm-floorNumber">4</p>
                  <p className="btn btn-outline-success sm-floorNumber">5</p>
                </div>
              </div>

              <div className="sg-floor-container display-none">
                <h2>Choose the floor</h2>
                <div className="floorContainer">
                  <p className="btn btn-outline-warning sg-floorNumber">1</p>
                  <p className="btn btn-outline-warning sg-floorNumber">2</p>
                  <p className="btn btn-outline-warning sg-floorNumber">3</p>
                  <p className="btn btn-outline-warning sg-floorNumber">4</p>
                  <p className="btn btn-outline-warning sg-floorNumber">5</p>
                </div>
              </div>
            </div>

            <div className="chooseRoom opicityZero">
              <h2>Choose the room</h2>

              <div className="sr-room display-none">
                <p className="btn btn-outline-danger sr-room"></p>
                <p className="btn btn-outline-danger sr-room"></p>
              </div>

              <div className="sm-room display-none">
                <p className="btn btn-outline-success sm-room">123 - 123</p>
                <p className="btn btn-outline-success sm-room">123 - 123</p>
              </div>

              <div className="sg-room display-none">
                <p className="btn btn-outline-warning sg-room">123 - 123</p>
                <p className="btn btn-outline-warning sg-room">123 - 123</p>
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
          marginTop: "100px",
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
