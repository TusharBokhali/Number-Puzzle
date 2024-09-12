import React, { useState } from "react";
import "./App.css";
import left from "./image/left.svg";
import next from "./image/next.svg";
import { wait } from "@testing-library/user-event/dist/utils";
function App() {
  let shop;
  let [api,setapi]=useState("")
  let [I, setI] = useState(0);
  let Images = [
    "https://images-eu.ssl-images-amazon.com/images/G/31/img21/shoes/2024/GW/Aug/BAU/UNREC/allNEW/3000_PC_ALL._CB565541466_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img21/OHL/GW/BAU/May/Budget/PC_Hero_3000x1200_BS_PC._CB558386585_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img21/MA2024/GW/August/Unrec/BAU/21Aug/2-1._CB565867124_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Consumables/X-GL/Feb5/PC_Hero_1_3000._CB582457311_.jpg",
  ];

  let nexts = () => {
    if (I < Images.length - 1) {
      setI(I + 1);
    } else {
      setI(0);
    }
  };

  let previews = () => {
    if (I !== 0) {
      setI(I - 1);
    } else {
      setI(Images.length - 1);
    }
  };
  let product;

  async function loaded() {
    let data = await fetch("https://dummyjson.com/products");
    product = await data.json();

    return  product;
  }
  
    
  
  
  return (
    <>
    <div></div>
      <div className="body">
        <div className="container">
          <nav>
            <div className="log">
              <a href="#">
                <img
                  src="https://banner2.cleanpng.com/20180519/jjs/avq0lgq0t.webp"
                  alt=""
                />
              </a>
            </div>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Version</a>
              </li>
            </ul>
          </nav>
          <div className="slider">
            <img src={Images[I]} alt="" />
          </div>
          <div className="button">
            <div>
              <img src={left} onClick={previews} />
            </div>
            <div>
              <img src={next} onClick={nexts} />
            </div>
          </div>

          <div className="Product-Card">
            <div className="cards">
              <div className="image">
                <img
                  src="https://www.cdmi.in/courses@1x/_0010_react-js-training-institute.webp"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
