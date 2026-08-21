import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import JoinMealBox from "./components/JoinMealBox";
import Rr from "./components/Rr";
import GetStarted from "./components/GetStarted";
import MealPlan from "./components/MealPlan";
import Home from "./components/Home";
import SearchBar from "./components/SearchBar";
import Swiper from "./components/Swiper";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      {/* <SearchBar/> */}
      <Home/>
      <Swiper/>

      <Routes>
        <Route path="/login" element={<JoinMealBox />} />
        <Route path="/join" element={<GetStarted />} />
        <Route path="/Plan" element={<Rr />} />
        <Route path="/MealPLan" element={<MealPlan />} />

        

      </Routes>
    </BrowserRouter>
  );
}
