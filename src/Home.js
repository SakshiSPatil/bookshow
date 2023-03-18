import React, { useEffect, useState } from 'react'
import Card1 from './component/Card1'
import Events from './component/Events'
import MidImg from './component/MidImg'
import Navbar from './component/Navbar'
import App from './component/TopCarousel'
import card1 from './utility/card1.json'
import events from './utility/events.json'
import DarkBlock from './component/DarkBlock'
// import darkBlock from './utility/darkBlock.json'
import cardWithTag from './utility/cardWithTag.json'
import CardWithTag from './component/CardWithTag'
import { useNavigate } from 'react-router-dom'
// import axios from 'axios';
import './style/navbarStyle.css';

export default function RouterPage() {
    const secPage = useNavigate();
    const handleclick = ()=>{
        secPage("/MovieOneDetails");
    }

    const [user, setUser] = useState([]); 

    const API="http://localhost:8000/";
   const fetchData= async(url)=> {
     try {
       const response = await fetch(url);
       const data = await response.json();
       if(data.lenght>0){
         setUser(data);
       }
       console.log(data);
  
     } catch (error) {
       console.error(error);
     }
   }
  
   useEffect(() => {
     fetchData(API);
   },[])

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
            <div className="" style={{ paddingTop: '10px', paddingBottom: '10px', backgroundColor: '#F4F1F1' }}>
                <App />
            </div>
            <div style={{ marginTop: '40px' }}>
                <h3 style={{ marginLeft: '155px' }}><b>Recommended Movies</b></h3>
                <div onClick={() => handleclick()} style={{ display: 'flex', justifyContent: 'space-between', marginLeft: '150px', marginRight: '130px' }}>
                    {card1.map((value, index) => {
                        return (<div>
                            <Card1 
                            imgs={value.imgs}
                                key={index}
                            />
                            <div>
                                <h5 style={{ marginTop: '10px', width: '220px', fontSize: '18px' }}>{value.title}</h5>
                                <p style={{ width: '220px', color: 'gray' }}>{value.desc}</p>
                            </div>
                        </div>
                        )
                    })}</div>
            </div>
            <MidImg />
            <div>
                <h3 style={{ marginLeft: '155px' }}><b>The Best Of Live Events</b></h3>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginLeft: '150px', marginRight: '130px' }}>
                    {
                        events.map((value, index) => {
                            return (
                                <Events
                                    key={index}
                                    bgColor={value.bgColor}
                                    textEve={value.textEve}
                                    eveNo={value.eveNo}
                                />
                            )
                        })
                    }
                </div>
            </div>
            <div style={{ marginTop: '65px', backgroundColor: "rgb(43,49,72)", color: 'white' }}>
                <div style={{ marginLeft: '79px', marginBottom: '15px' }}>
                    <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/premiere-banner-web-collection-202208191200.png" alt=".." />
                </div>
                <h3 style={{ marginLeft: '155px', marginBottom: '0px' }}>Premieres</h3>
                <p style={{ marginLeft: '155px', marginTop: '0px', marginBottom: '5px' }}>Brand new releases every Friday</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginLeft: '150px', marginRight: '130px' }}>
                
                <DarkBlock />
                    {/* {   
                        user.map((value, index) => {
                            return (<div>
                                <DarkBlock key={index}
                                    imgs={value.imgs}
                                />
                                <div style={{ backgroundColor: "rgb(43,49,72)", color: 'white' }}>
                                    <h5 style={{ marginTop: '10px', width: '230px' }}>{value.title}</h5>
                                    <p>English</p></div>
                                </div>
                            )
                        })
                        
                    } */}
            
                </div>
            </div>
            <div style={{ marginTop: '60px', marginBottom: '50px' }}>
                <h3 style={{ marginLeft: '155px' }}><b>Online Streaming Events</b></h3>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginLeft: '150px', marginRight: '130px' }}>
                    {
                        cardWithTag.map((value, index) => {
                            return (<div>
                                <CardWithTag
                                    key={index}
                                    imgs={value.imgs}
                                    tag={value.tag}
                                />
                                <div>
                                    <h5 style={{ marginTop: '10px', width: '220px', fontSize: '18px' }}>{value.title}</h5>
                                    <p style={{ width: '220px', color: 'gray' }}>{value.desc}</p>
                                </div>
                            </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
