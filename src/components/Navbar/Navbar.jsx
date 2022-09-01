import React from "react";
import { NavLink } from "react-router-dom";
// Imgs
import logoImg from "../../assets/imgs/logo.png";
import quranImg from "../../assets/imgs/quran.png";
import hadeethImg from "../../assets/imgs/hadeeth.png";
import azkarImg from "../../assets/imgs/azkar.png";
import mosqueImg from "../../assets/imgs/mosque.png";
import heartImg from "../../assets/imgs/heart.png";
import personImg from "../../assets/imgs/person.png";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="container">
          <img className="logo icon" src={logoImg} alt="logo" />
          <div className="links">
            <NavLink to="/" >
              <img className="icon-sm" src={quranImg} alt="quran icon" />
              <div>قرآن كريم</div>
            </NavLink>
            <NavLink to="/azkar">
              <img className="icon-sm" src={azkarImg} alt="azkar icon" />
              <div>الآذكار</div>
            </NavLink>
            <NavLink to="/azan">
              <img className="icon-sm" src={mosqueImg} alt="mosque icon" />
              <div>الصلاة</div>
            </NavLink>
          </div>
          <div className="left">
            <div className="fav card-icon-sm">
              <img src={heartImg} alt="fav-icon" />
            </div>
            <div className="card-icon-sm profile">
              <img src={personImg} alt="profile-img" />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
