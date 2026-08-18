import Contact from "./components/contact/Contact";
import Handling from "./components/handling/Handling";
import Navbar from "./components/navbar/Navbar";
import Power from "./components/power/Power";
import Speed from "./components/speed/Speed";
import "./index.css";

function App() {
  return (
    <>
      <Navbar />
      <Power />
      <Speed />
      <Handling />
      <Contact />
    </>
  );
}

export default App;
