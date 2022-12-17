import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./Portfolio.scss";
import {
  featuredPortfolio,
  reactPortfolio,
  fullStackPortfolio,
  gamesPortfolio,
  componentsPortfolio,
  allPortfolio,
} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "React ",
    },
    {
      id: "mobile",
      title: "FullStack",
    },
    // {
    //   id: "design",
    //   title: "Games",
    // },
    {
      id: "content",
      title: "Components",
    },
    {
      id: "all",
      title: "All",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(reactPortfolio);
        break;
      case "mobile":
        setData(fullStackPortfolio);
        break;
      case "design":
        setData(gamesPortfolio);
        break;
      case "content":
        setData(componentsPortfolio);
        break;
      case "all":
        setData(allPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            key={item.id}
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div key={d.id} className="item">
            <img src={d.img} alt="" />
            <div>
              <span>
                <a href={d.visit}>Visit Website</a>
              </span>
              <span>
                <a href={d.github}>See Code</a>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
