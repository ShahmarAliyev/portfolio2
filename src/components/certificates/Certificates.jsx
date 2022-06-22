import { useState } from "react";
import "./Certificates.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "React & Redux",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      img: "../assets/redux.png",
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "React & Firebase",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: "../assets/nodecert.png",
    },
    {
      id: "3",
      icon: "../assets/writing.png",
      title: "NodeJS",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: "../assets/firebasereact.png",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="works" id="works">
      <h1>Certificates</h1>
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div key={d.id} className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="../assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="../assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}
