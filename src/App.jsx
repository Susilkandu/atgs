import "./App.css"
import HomePage from "./components/HomePage"
import Navbar from "./components/Navbar"
export default function App() {
  return (
    <div className="mainPage min-vh-100">
      <Navbar/>
      <HomePage/>
    </div>
  )
}
 