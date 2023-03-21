import { Card } from "antd";
import React, { useEffect, useState } from "react";
import '../style/darkBlockSty.css';
// const { Meta } = Card;
const DarkBlock = () => {
  const [user, setUser] = useState([]);

  const fetchData = () => {
    return fetch("http://localhost:8000/")
      .then((response) => response.json())
      .then((data) => setUser(data.darkBlock));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {user &&
        user.length > 0 &&
        user.map((userData, index) => (
          <div className="spaceSty">
            <Card
              hoverable
              className="antdSty"
              cover={
                <img
                  style={{ borderRadius: "8px" }}
                  src={userData.imgs}
                  alt="example"
                />
              }
            >
              {/* <div style={{ backgroundColor: "rgb(43,49,72)" }}>
                <Meta style={{color: "white"}} title={userData.title} description="English" />
                </div> */}
            </Card>
            <div className="dBDiv">
              <h5 className="dBHeading">
                {userData.title}
              </h5>
              <p className="dBPara">English</p>
            </div>
          </div>
        ))}
    </>
  );
};
export default DarkBlock;
