import Header from "./components/Header"
import LeftBar from "./components/LeftBar"
import MidPart from "./components/MidPart"
import RightInfo from "./components/RightInfo"

function App() {

  return (
    <>
    <header className="w-screen">
      <Header
        />
    </header>
      
      <body className="h-screen w-screen bg-black flex px-4 overflow-x-hidden">
        <LeftBar/>
        <MidPart/>
        <RightInfo/>
      </body>
      
    </>
  )
}

export default App
