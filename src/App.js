import "./App.css";
import { Joystick } from "react-joystick-component";
import axios from "axios";

function App() {
  const url = "http://146.169.185.195:5000";
  const handleMove = (e) => {
    let x = e.x;
    let y = e.y;
    let data = { content: x.toString() + ", " + y.toString() };
    console.log(data);

    axios
      .post(url, data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div
      styles={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <p>Avatour Lite</p>
      <Joystick
        size={100}
        width={100}
        // sticky={true}
        baseColor="red"
        stickColor="blue"
        move={handleMove}
      />
    </div>
  );
}

export default App;
