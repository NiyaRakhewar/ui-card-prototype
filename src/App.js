import "./App.css";
import { Card } from "./Card";

function App() {
  return (
    <div className="App bg-gray-900 h-screen w-screen relative overflow-hidden flex flex-col justify-center items-center gap-2">
      <div className="h-30-r w-32-r bg-gradient-to-r  from-red-400 via-pink-500 to-purple-500 rounded-full absolute left-3/4 -top-1/4 animate-pulse "></div>
      <div className="h-30-r w-30-r bg-gradient-to-r from-green-400 to-blue-500 rounded-full absolute top-3/4 right-3/4 animate-pulse flex flex-col justify-center items-center "></div>
      <Card />
    </div>
  );
}

export default App;
