import { Card } from 'antd';
import '../style/card1Sty.css';
import React, { useEffect, useState } from "react";
// const { Meta } = Card;

const Card1 = () => {
  const [user, setUser] = useState([]);

  const fetchData = () => {
    return fetch("http://localhost:8000/")
      .then((response) => response.json())
      .then((data) => setUser(data.card1));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {
      user &&
        user.length > 0 &&
            user.map((value, index) => (
              <div>
                <Card
                  hoverable
                  className='antdCardSty'
                  cover={
                  <img 
                    className = "card1ImgSty" 
                    src={value.imgs} 
                    alt="example" 
                  />
                }
              >
                {/* <Meta className='divStyMeta' style={{height:"0px"}}
                title={props.title} description={props.desc} /> */}
              </Card>
                
                <div>
                  <h5 className="headingHomeSty">{value.title}</h5>
                  <p className="paraHomeSty">{value.desc}</p>
                </div>
              </div>
           ))}
    </>
  );
};
export default Card1;