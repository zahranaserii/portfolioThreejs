import Contact from "./components/contact/Contact";
import Hero from "./components/home/Hero";
import { default as Skills } from "./components/skills/Skills";
import Test from "./components/test";
import Who from "./components/who/Who";
import Connection from "./components/works/Connection";
import "./index.css";
function App() {
  return (
    <div className=" font-bold cursor-pointer bg-gradient-to-r from-gray-950   to-indigo-900  appContainer">
      <Hero />
      <Skills />
      <Who />
      <Connection />
      <Contact />
      <Test />
    </div>
  );
}

export default App;
