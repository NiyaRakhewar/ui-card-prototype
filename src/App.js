import "./App.css";
import { Card } from "./Card";
import Tilt from "react-parallax-tilt";
function App() {
  return (
    <div className="App bg-gray-900 h-screen w-screen relative overflow-hidden flex flex-col justify-center items-center gap-2">
      <Tilt className="h-30-r w-32-r bg-gradient-to-r  from-red-400 via-pink-500 to-purple-500 rounded-full absolute left-3/4 -top-56 animate-pulse "></Tilt>

      <Tilt className="h-30-r w-30-r bg-gradient-to-r  to-blue-500  from-green-400 rounded-full absolute top-3/4 right-3/4 animate-pulse flex flex-col justify-center items-center "></Tilt>

      <Card />
    </div>
  );
}

export default App;
