import React, { useEffect, useState } from "react";
import { Card } from "antd";
import { Tag } from "antd";
import "../style/cardWithTagSty.css";
// const { Meta } = Card;
const CardWithTag = () => {
  const [user, setUser] = useState([]);

  const fetchData = () => {
    return fetch("http://localhost:8000/")
      .then((response) => response.json())
      .then((data) => setUser(data.cardWithTag));
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      {user &&
        user.length > 0 &&
        user.map((value, index) => (
          <div className="imgPadding">
            <Card
              hoverable
              className="antdCardWTagSty"
              cover={
                <img className="antdImageSty" alt="example" src={value.imgs} />
              }
            >
              <Tag color="black" className="compTag1">
                {value.tag}
              </Tag>
              <Tag color="black" className="compTag2">
                ONLINE
              </Tag>
              {/* <Meta title={props.title} description={props.desc} /> */}
            </Card>
            <div className="lastDivSpace">
              <h5 className="homeHeading2">{value.title}</h5>
              <p className="homePara">{value.desc}</p>
            </div>
          </div>
        ))}
    </>
  );
};
export default CardWithTag;
