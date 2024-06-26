import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import { DataProvider } from "./hooks/DataProvider";

function App() {
  return (
    <BrowserRouter>
      <DataProvider>
        <div className="app">
          <Routes>
            <Route path="/my-read/" element={<Home></Home>}></Route>
            <Route path="/my-read/search" element={<Search></Search>}></Route>
          </Routes>
        </div>
      </DataProvider>
    </BrowserRouter>
  );
}

export default App;
