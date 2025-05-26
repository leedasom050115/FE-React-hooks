import { useState } from "react";
import "./Darkmode.css";
const Darkmode = () => {
  const [darkmode, setDarkmode] = useState(false);


  return <div>
    <p>라이트모드</p>
    <button onclick = {setDarkmode}>다크모드로 변경</button>
  </div>;
};

export default Darkmode;
