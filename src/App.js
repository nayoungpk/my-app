import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import index from "./Component/index";
import Introduction from "./Component/Introduction";
import Project from "./Component/Project";
import Contest from "./Component/Contest";
import Career from "./Component/Career";
import Login from "./Component/Login";
import "./App.css";


function App() {
  return (
    <BrowserRouter>
      <header>
        na young park
        <br />
        portfolie
      </header>
      
      <div class="container">
        <nav>
          <Link to={"/Login"}>login</Link>
          <Link to={"/introduction"}>Introduction</Link>
          <Link to={"/project"}>Project</Link>
          <Link to={"/contest"}>Contest </Link>
          <Link to={"/career"}>Career</Link>
        </nav>
      
          <Routes>
            <Route path="/" Component={index} />
            <Route path="/Login" Component={Login} />
            <Route path="/introduction" Component={Introduction} />
            <Route path="/project" Component={Project} />
            <Route path="/contest" Component={Contest} />
            <Route path="/career" Component={Career} />
          </Routes>
        </div>

        
      
    </BrowserRouter>
  );
}

export default App;
