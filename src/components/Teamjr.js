import React from "react";
import "./Teamjr.css";
import { Secretariatjr } from "./Dataset";
import { HiOutlineMail } from "react-icons/hi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import Underline2 from "./Underline2";
export default function () {
  return (
    <>
      <div className="team-stats-card1">
        {Secretariatjr.map((item) => {
          return (
            <div key={item.id} className="team-stats1">
              <div>
                <center>
                  <img className="team-img1" src={item.imgsrc} alt="" />
                </center>
              </div>

              <div className="social-media">
                <div className="icon1">
                  <a href={item.mail}>
                    <button className="btn-icon1">
                      <HiOutlineMail className="icon-color" size={25} />
                    </button>
                  </a>
                </div>
                <div className="icon2">
                  <a href={item.linkedin} target="_blank">
                    <button className="btn-icon2">
                      <FaLinkedinIn className="icon-color1" size={25} />
                    </button>
                  </a>
                </div>
                <div className="icon3">
                  <a href={item.fb} target="_blank">
                    <button className="btn-icon3">{item.icon0}</button>
                  </a>
                </div>
              </div>

              <h1>{item.name}</h1>
              <Underline2 />
              <h2 className="team-posting-sec">{item.post}</h2>
            </div>
          );
        })}
      </div>
    </>
  );
}
