import { Carousel } from "antd";
import "../style/carouselSty.css";

let imgStyle = {
  position: "absolute",
  objectFit: "fill",
  width: "100%",
  height: "100%",
  maxWidth: "100%",
  alignItem: "center",
};

const App = () => (
  <Carousel autoplay>
    <div>
      <div style={{ display: "flex" }}>
        <img
          className="leftImage"
          style={{ imgStyle }}
          src="https://assets-in.bmscdn.com/promotions/cms/creatives/1677493993802_appaaaa.jpg"
          alt="..."
        />
        <center>
          <img
            className="centerImage"
            style={{ imgStyle }}
            src="https://assets-in.bmscdn.com/promotions/cms/creatives/1675080125347_app.jpg"
            alt="..."
          />
        </center>
        <img
          className="rightImage"
          style={{ imgStyle }}
          src="https://assets-in.bmscdn.com/promotions/cms/creatives/1677917497764_iifapp.jpg"
          alt="..."
        />
      </div>
    </div>

    <div>
      <div style={{ display: "flex" }}>
        <img
          className="leftImage"
          style={{ imgStyle }}
          src="https://assets-in.bmscdn.com/promotions/cms/creatives/1675080125347_app.jpg"
          alt="..."
        />
        <center>
          <img
            className="centerImage"
            style={{ imgStyle }}
            src="https://assets-in.bmscdn.com/promotions/cms/creatives/1677917497764_iifapp.jpg"
            alt="..."
          />
        </center>
        <img
          className="rightImage"
          style={{ imgStyle }}
          src="https://assets-in.bmscdn.com/promotions/cms/creatives/1677493993802_appaaaa.jpg"
          alt="..."
        />
      </div>
    </div>
    <div>
      <div style={{ display: "flex" }}>
        <img
          className="leftImage"
          style={{ imgStyle }}
          src="https://assets-in.bmscdn.com/promotions/cms/creatives/1677917497764_iifapp.jpg"
          alt="..."
        />
        <center>
          <img
            className="centerImage"
            style={{ imgStyle }}
            src="https://assets-in.bmscdn.com/promotions/cms/creatives/1677493993802_appaaaa.jpg"
            alt="..."
          />
        </center>
        <img
          className="rightImage"
          style={{ imgStyle }}
          src="https://assets-in.bmscdn.com/promotions/cms/creatives/1675080125347_app.jpg"
          alt="..."
        />
      </div>
    </div>
  </Carousel>
);
export default App;
