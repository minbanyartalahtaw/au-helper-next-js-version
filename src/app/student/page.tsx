"use client"
import PinDropIcon from '@mui/icons-material/PinDrop';
import AssignmentIcon from '@mui/icons-material/Assignment';
import style from "./page.module.css";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
export default function Home() {
  const router = useRouter();

  return (
    <div style={{"display":"flex","justifyContent":"center","alignItems":"center","height":"100vh","flexDirection":"column", borderBottom:"1px solid #eb5e28"}}>
      <h1 style={{ "color": "#e63946",fontFamily: "sans-serif",fontWeight:100,marginTop:"-130px"}}>Student</h1>
      <div className="buttons" style={{"display":"flex","justifyContent":"center","alignItems":"center","gap":"10px",marginTop:"100px"}}>
        <Link href="/student/map" style={{"textDecoration":"none"}}> 
          <div className={style.button}>
            <PinDropIcon className={style.Buttonicon}/>
            <p className={style.buttonText}>View Map</p>
          </div>
        </Link>
        <Link href="/student/service" style={{"textDecoration":"none"}}>
          <div className={style.button}>
            <AssignmentIcon className={style.Buttonicon}/>
            <p className={style.buttonText}>Read Service</p>
          </div>
        </Link>
      </div>
      <div style={{"display":"flex","justifyContent":"center","alignItems":"center","gap":"10px",marginTop:"100px",color:"#E63946",cursor:"pointer"}}
                    onClick={() => router.push("/")}
                >
                    <KeyboardBackspaceIcon />
                    <p>Back</p>
      </div>
    </div>
  );
}
