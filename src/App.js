import "./App.css";
import Sidenav from "./components/sidenav";
import Main from "./components/main";
import Videoarea from "./components/video";
import {Route , Routes}  from "react-router-dom";


function App() {
  return (
    <><div>
      <div className="side">
        <Sidenav />
      </div>
      <div className="App">
        <div className="part">
          <Main />
        </div>
      </div>
    </div>
    <Routes>
        <Route path="/" element={ <Videoarea/> } />
        <Route path="main" element={<Main/>}></Route>
      </Routes>
    </>
  );
}

export default App;
