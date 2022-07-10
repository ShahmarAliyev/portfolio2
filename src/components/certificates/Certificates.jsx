import { useState } from "react";
import "./Certificates.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "React & Redux",
      desc: `React Router, Firebase, Firestore, Styled Components, Redux, Redux-Saga, TypeScript, GraphQl, Testing, Webpack, Babel  `,
      img: "../assets/redux.png",
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "React & Firebase",
      desc: "React Hooks, React Reducers Firebase, Firestore",
      img: "../assets/firebasereact.png",
    },
    {
      id: "3",
      icon: "../assets/writing.png",
      title: "NodeJS",
      desc: "Node JS, Express, CI& CD, GraphQl, Docker, AWS: EC2, Mongo DB",
      img: "../assets/nodecert.png",
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
                  <b>Acquired Skills:</b> <p>{d.desc}</p>
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
