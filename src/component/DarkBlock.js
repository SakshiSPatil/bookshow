import { Card } from "antd";
import React, { useEffect, useState } from "react";
// const { Meta } = Card;
const DarkBlock = () => {
  const [user, setUser] = useState([]);

  const fetchData = () => {
    return fetch("http://localhost:8000/")
      .then((response) => response.json())
      .then((data) => setUser(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {user &&
        user.length > 0 &&
        user.map((userData, index) => (
          <div>
            <Card
              hoverable
              style={{
                width: 230,
                height: 345,
              }}
              cover={
                <img
                  style={{ borderRadius: "8px" }}
                  src={userData.imgs}
                  alt="example"
                />
              }
            ></Card>
            <div style={{ backgroundColor: "rgb(43,49,72)", color: "white" }}>
              <h5 style={{ marginTop: "10px", width: "230px" }}>
                {userData.title}
              </h5>
              <p>English</p>
            </div>
          </div>
        ))}
    </>
  );
};
export default DarkBlock;
