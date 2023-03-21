import React, { useEffect, useState } from "react";
import Card1 from "./component/Card1";
import Events from "./component/Events";
import MidImg from "./component/MidImg";
import Navbar from "./component/Navbar";
import App from "./component/TopCarousel";
// import card1 from "./utility/card1.json";
// import events from "./utility/events.json";
import DarkBlock from "./component/DarkBlock";
// import darkBlock from './utility/darkBlock.json'
// import cardWithTag from "./utility/cardWithTag.json";
import CardWithTag from "./component/CardWithTag";
import { useNavigate } from "react-router-dom";
// import axios from 'axios';
import "./style/navbarStyle.css";
import "./style/carouselSty.css";
import "./style/card1Sty.css";
import "./style/midImgSty.css";
import "./style/eventsSty.css";
import "./style/darkBlockSty.css";
import "./style/cardWithTagSty.css";

export default function RouterPage() {
  const secPage = useNavigate();
  const handleclick = () => {
    secPage("/MovieOneDetails");
  };

  const [user, setUser] = useState([]);

  const API = "http://localhost:8000/";
  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.lenght > 0) {
        setUser(data);
      }
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData(API);
  }, []);

  //  const [user,setuser]=useState();
  // useEffect(()=>{
  //     var url= "http://localhost:8000/";

  //     async function getUser() {
  //         try {
  //           const response = await axios.get(url);
  //           console.log(response);
  //         } catch (error) {
  //           console.error(error);
  //         }
  //       }

  //       getUser();

  // const fetchData = async () =>{
  //     const response = await fetch(url);
  //     const data1 =await response.json();
  //     console.log(data1);
  // }

  // fetchData();
  // })

  return (
    <div>
      <Navbar />

      <div className="homePage">
        <App />
      </div>

      <div style={{ marginTop: "40px" }}>
        <h3 className="card1HomeHeadingSty">
          <b>Recommended Movies</b>
        </h3>
        <div className="homeDivCard1" onClick={() => handleclick()}>
          <Card1/>
          {/* {card1.map((value, index) => {
            return (
              <div>
                <Card1 imgs={value.imgs} key={index} />
                <div>
                  <h5 className="headingHomeSty">{value.title}</h5>
                  <p className="paraHomeSty">{value.desc}</p>
                </div>
              </div>
            );
          })} */}
        </div>
      </div>
      <MidImg />

      <div>
        <h3 className="homeEvehead">
          <b>The Best Of Live Events</b>
        </h3>
        <div className="homeEveDiv">
          <Events/>
          {/* {events.map((value, index) => {
            return (
              <Events
                key={index}
                bgColor={value.bgColor}
                textEve={value.textEve}
                eveNo={value.eveNo}
              />
            );
          })} */}
        </div>
      </div>

      <div className="homeOuterDiv">
        <div className="homeImgDiv">
          <img className="headImg"
            src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/premiere-banner-web-collection-202208191200.png"
            alt=".."
          />
        </div>

        <h3 className="homeDBHeadSty">Premieres</h3>
        <p className="homeDBParaSty">Brand new releases every Friday</p>
        
        <div className="homeDBDivSty">
          <DarkBlock />
          {/* {   
                user.map((value, index) => {
                  return (<div>
                    <DarkBlock key={index}
                      imgs={value.imgs}
                    />
                    <div style={{ backgroundColor: "rgb(43,49,72)", color: 'white' }}>
                      <h5 style={{ marginTop: '10px', width: '230px' }}>{value.title}</h5>
                      <p>English</p>
                      </div>
                    </div>
                  )
                  })   
                } */}
        </div>
      </div>
      <div className="home1Div">
        <h3 className="home1Heading">
          <b>Online Streaming Events</b>
        </h3>
        <div className="homeDiv2">
        <CardWithTag/>
          {/* {cardWithTag.map((value, index) => {
            return (
              <div className="imgPadding">
                <CardWithTag key={index} imgs={value.imgs} tag={value.tag} />
                <div className="lastDivSpace">
                  <h5 className="homeHeading2">{value.title}</h5>
                  <p className="homePara">{value.desc}</p>
                </div>
              </div>
            );
          })} */}
        </div>
      </div>
    </div>
  );
}
