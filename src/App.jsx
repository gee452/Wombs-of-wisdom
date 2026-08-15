import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import SignIn from "./pages/SignIn"
import Landing from "./pages/Landing"
import AskGogo from "./pages/AskGogo"
import Explore from "./pages/Explore"
import Contribute from "./pages/Contribute"
import MyLibrary from "./pages/MyLibrary"

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-wisdom-cream">

        <Navbar />

        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/askgogo" element={<AskGogo />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/contribute" element={<Contribute />} />
          <Route path="/my-library" element={<MyLibrary />} />
        </Routes>

        <Footer />

      </div>
    </BrowserRouter>
  )
}

export default App