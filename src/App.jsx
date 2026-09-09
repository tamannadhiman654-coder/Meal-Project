import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import JoinMealBox from "./components/JoinMealBox";
import Rr from "./components/Rr";
import GetStarted from "./components/GetStarted";
import MealPlan from "./components/MealPlan";
import Home from "./components/Home";
import Asian from "./components/Food/Asian";
import Indian from "./components/Food/Indian";
import Italian from "./components/Food/Italian";
import Korean from  "./components/Food/Korean";
import Mexican from "./components/Food/Mexican";
import Fast from "./components/Food2/Fast";
import Bevrages from "./components/Food2/Bevrages";
import Sweets from "./components/Food2/Sweets";
import Order from "./components/Order";
import OrderConfirmed from "./components/Orderconfirmed";

import Swiper from "./components/Swiper";

export default function App() {
  return (
    <BrowserRouter>

      <Navbar />
      <Routes>
         <Route
          path="/Home"
          element={
            <>
            
              <Home />
              <Swiper />
{/*              
              <Bevrages/>
              <Sweets/>
              */}
            </>
          }
        />

        {/* Home */}
        <Route  path="/"  element={ <> <Home />  <Swiper /> </>
 } />

        {/* Join MealBox */}
        <Route
          path="/Login"
          element={<JoinMealBox />}
          />

        {/* Get Started */}
        <Route
          path="/get-started"
          element={<GetStarted />}
          />

        {/* Preferences */}
        <Route
          path="/Plan"
          element={<Rr />}
          />

        {/* Meal Plan */}
        {/* <Route
          path="/MealPlan"
          element={<MealPlan />}
          /> */}
        <Route path="/join" element={<GetStarted/>}/>
        <Route path="/prefrence" element={<Rr/>}/>
        <Route path="/indian" element={<Indian/>}/>
        <Route path="/italian" element={<Italian/>}/>
        <Route path="/asian" element={<Asian/>}/>
        <Route path="/mexican" element={<Mexican/>}/>
        <Route path="/korean" element={<Korean/>}/>
        <Route path="/Fast-Food" element={ <Fast/>}/>
        <Route path="/Bevrages" element={ <Bevrages/>}/>
        <Route path="/Sweets" element={ <Sweets/>}/>
        <Route path="/Fast" element={ <Order/>}/>
        <Route path="/Place order" element={ <OrderConfirmed/>}/>
          {/* <Order/> */}

        



      </Routes>
       {/* <OrderConfirmed/> */}

    </BrowserRouter>
  );
}