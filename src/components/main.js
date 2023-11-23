import { ChevronLeft, Phone, UserCog,School,Presentation , MonitorPlay, FileText, FileVideo} from "lucide-react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChalkboardUser } from '@fortawesome/free-solid-svg-icons'



export default function Main() {
  return (
    <><div className="a">
          <header>
              <div className="left">
                  <button className="back">
                      <ChevronLeft color="gray" />
                  </button>
                  <h1>Basic Mathematics 101</h1>
              </div>
              <div className="right">
                  <div className="callsupport">
                      <Link
                          style={{
                              display: "flex",
                              textDecoration: "none",
                              justifyContent: "center",
                              alignItems: "center",
                          }}
                      >
                          <div className="phn">
                              <Phone fill="white" color="#0384a2" />
                          </div>{" "}
                          <h4 className="callt">Call Teacher</h4>
                      </Link>
                  </div>
                  <div className="callsupport">
                      <Link
                          style={{
                              display: "flex",
                              textDecoration: "none",
                              justifyContent: "center",
                              alignItems: "center",
                          }}
                      >
                          <div className="supp">
                              <UserCog color="white" />
                          </div>{" "}
                          <h4 className="callt">Support</h4>
                      </Link>
                  </div>
              </div>
          </header>
          <div className="optionarea">
              <ul className="options">
                  <li className="option"><Link style={{ color: "black", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", textDecoration: "none" }}><School />Classroom</Link></li>
                  <li className="option"><Link style={{ color: "black", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", textDecoration: "none" }}><FontAwesomeIcon icon={faChalkboardUser} />Whiteboard</Link></li>
                  <li className="option active"><Link to="/" style={{ color: "black", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", textDecoration: "none" }}><MonitorPlay />Video</Link></li>
                  <li className="option"><Link style={{ color: "black", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", textDecoration: "none" }}><Presentation />Slideshow</Link></li>
                  <li className="option"><Link style={{ color: "black", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", textDecoration: "none" }}><FileText />Documents</Link></li>
                  <li className="option"><Link to="video" style={{ color: "black", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", textDecoration: "none" }}><FileVideo />Doc.Cam</Link></li>
              </ul>
          </div>
          <div className="videosection">
          
          </div>
      </div>
      
          </>
  );
}
