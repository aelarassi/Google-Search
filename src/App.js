import React from "react";
import "./Assets/Styles/App.css";

import Footer from "./Components/Footer";
import LogoGoogle from "./Components/LogoGoogle";
import ProfileInfo from "./Components/ProfileInfo";
import FormSearch from "./Components/FormSearch";
import Products from "./Components/Products";

function App() {
  return (
    <>
      <ProfileInfo />
      <div className="web">
        <div className="form">
          <LogoGoogle />
          <FormSearch />
        </div>
        <Products />
      </div>
      <Footer />
    </>
  );
}

export default App;
