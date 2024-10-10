import { useState } from "react"
function App() {
  const [color, setColor] = useState('olive')

  return (
    <div className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap bottom-12 inset-x-0 px-2 justify-center">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-md">
          <button className="outline-none px-4 rounded-lg text-white py-1" style={{backgroundColor: "red"}} onClick={() => setColor("red")}>Red</button>
          <button className="outline-none px-4 rounded-lg text-white py-1" style={{backgroundColor: "green"}} onClick={() => setColor("green")}>Green</button>
          <button className="outline-none px-4 rounded-lg text-white py-1" style={{backgroundColor: "black"}} onClick={() => setColor("black")}>Black</button>
          <button className="outline-none px-4 rounded-lg py-1" style={{backgroundColor: "pink"}} onClick={() => setColor("pink")}>Pink</button>
          <button className="outline-none px-4 rounded-lg text-white py-1" style={{backgroundColor: "blue"}} onClick={() => setColor("blue")}>Blue</button>
          <button className="outline-none px-4 rounded-lg py-1" style={{backgroundColor: "yellow"}} onClick={() => setColor("yellow")}>Yellow</button>
          <button className="outline-none px-4 rounded-lg text-white py-1" style={{backgroundColor: "olive"}} onClick={() => setColor("olive")}>Olive</button>

        </div>
      </div>
    </div>
  )
}

export default App
