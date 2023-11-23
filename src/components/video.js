import Webcam from "react-webcam";
import Teacher from '../img/teacher.jpg';
import  {Video , Share2 , Mic , MessagesSquare,LogOut} from "lucide-react"

export default function Videoarea(){
    return(
        <div className="videoplayer">
            <div className="cam-area">
                <div className="cam1">
                <Webcam style={{borderRadius:"10px"}} width={200} height={150} label="Your Cam" />
                <p className="camlabel">User's Cam</p>
                </div>
                <div  className="cam1">
                    <img style={{borderRadius:"10px"}} width={200} height={"auto"} src={Teacher} alt="" />
                    <p className="camlabel">Teacher's Cam</p>
                </div>

                <div className="btnarea">
                    <div className="btnrow">
                        <button><Video /></button>
                    <button><Mic /></button>
                    <button><Share2 /></button>
                    </div>
                    <div className="btnrow">
                    <button><MessagesSquare /></button>
                    <button className="exit"><LogOut color="white"/></button>
                    </div>
                </div>

            </div>
        
        
        
        <iframe width="900" height="515" src="https://www.youtube.com/embed/pTnEG_WGd2Q?si=AABXDvgA2_8Ef6uY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    )
}