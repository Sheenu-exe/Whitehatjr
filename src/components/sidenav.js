import logo from "../img/whitehatjr.com-PhotoRoom.png-PhotoRoom.png";
import ProfilePic from "../img/profile pic.png"
import { Link } from "react-router-dom";
import {AlignCenter , BellRing , Timer , ClipboardCheck , Eye , Users2, BarChart3} from "lucide-react";


export default function Sidenav(){
    return(
        <div className="bar">
            <ul className="list"> 
                <li className="lielem"><Link style={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",marginLeft:"10px",textDecoration:"none"}} to=""><img className="logo" src={logo} alt="" /><p className="label">White Hat Jr</p></Link></li>
                <li className="lielem"><Link style={{textDecoration:"none" ,display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"}}><AlignCenter width={"40px"} height={"40px"} color="black" style={{marginLeft:"7px"}}/><p className="label">Menu</p></Link></li>
                <li className="lielem"><Link style={{textDecoration:"none",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"}}><BellRing color="black" width={"40px"} height={"40px"}  style={{marginLeft:"7px"}}/><p className="label">Notifications</p></Link></li>
                <li className="lielem"><Link style={{textDecoration:"none",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"}}><Timer width={"40px"} height={"40px"} color="black" style={{marginLeft:"7px"}}/><p className="label">Recent</p></Link></li>
                <li className="lielem"><Link style={{textDecoration:"none",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"}}><ClipboardCheck width={"40px"} height={"40px"} color="black" style={{marginLeft:"7px"}}/><p className="label">Completed</p></Link></li>
                <li className="lielem"><Link style={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",textDecoration:"none"}}><Eye width={"40px"} height={"40px"} color="black" style={{marginLeft:"7px"}}/><p className="label">Watching</p></Link></li>
                <li className="lielem"><Link style={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",textDecoration:"none"}}><Users2 width={"40px"} height={"40px"} color="black" style={{marginLeft:"7px"}}/><p className="label">Messages</p></Link></li>
                <li className="lielem"><Link style={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",textDecoration:"none"}}><BarChart3 width={"40px"} height={"40px"} color="black" style={{marginLeft:"7px"}}/><p className="label">Watching</p></Link></li>
            </ul>
            <div className="profpic"><Link style={{textDecoration:"none",display:"flex",justifyContent:"center",alignItems:"center"}}><img width={"50px"} height={"50px"} src={ProfilePic} alt="" /> <p className="label">Profile</p></Link></div>
        </div>
    )
}