"use client"
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import GroupsIcon from '@mui/icons-material/Groups';
import style from "./page.module.css";
import Link from 'next/link';
export default function Home() {

  return (
    <div style={{"display":"flex","justifyContent":"center","alignItems":"center","height":"100vh","flexDirection":"column", borderBottom:"1px solid #eb5e28"}}>
      <h1 style={{ "color": "#eb5e28",fontFamily: "sans-serif",fontWeight:100,marginTop:"-130px"}}>AU-HELPER</h1>
      <div className="buttons" style={{"display":"flex","justifyContent":"center","alignItems":"center","gap":"10px",marginTop:"100px"}}>
        <Link href="/student" style={{"textDecoration":"none"}}> 
          <div className={style.button}>
            <GroupsIcon className={style.Buttonicon}/>
            <p className={style.buttonText}>Student</p>
          </div>
        </Link>
        <Link href="/teacher" style={{"textDecoration":"none"}}>
          <div className={style.button} style={{backgroundColor:"#2a9d8f"}}>
            <AssignmentIndIcon className={style.Buttonicon}/>
            <p className={style.buttonText}>Teacher</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
