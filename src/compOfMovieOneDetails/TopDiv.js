import React from 'react'
import Card1 from '../component/Card1'
import { Button } from 'antd';
import '../App.css'

export default function TopDiv(props) {

  return (
    <div>
      <div style={{ zIndex: '100' }} className="bgimg">
        <div style={{ display: 'flex' }}>
          <div style={{ marginTop: '60px', marginBottom: '60px', marginLeft: '10px' }}>
            <Card1 imgs={props.img1} />
          </div>
          <div style={{ marginLeft: '15px' }}>
            <h1 style={{ color: 'white', marginLeft: '30px', marginTop: '50px' }}><b>{props.title}</b></h1>
            <div style={{ display: 'flex', marginLeft: '30px' }}>
              <h1 style={{ color: 'white' }}>{props.rating}</h1>
              <h5 style={{ marginTop: '15px', marginLeft: '10px', color: 'white' }}>{props.subrat}</h5>
            </div>
            <div style={{ backgroundColor: '#323C3C', display: 'flex', padding: '15px', borderRadius: '10px', marginLeft: '30px' }}>
              <div>
                <p style={{ color: 'white', fontSize: '20px', marginBottom: '0px' }}><strong>Add your rating & review</strong></p>
                <p style={{ color: 'white', marginBottom: '0px' }}>Your ratings matter</p>
              </div>
              <div>
                <Button type="primary" style={{ color: '#323C3C', backgroundColor: 'white', marginLeft: '100px', marginTop: '12px', fontSize: '18px', height: '40px' }}><strong>Rate Now </strong></Button>
              </div>
            </div>
            <div style={{ display: 'flex', marginLeft: '30px' }}>
              <div style={{ backgroundColor: '#323C3C', borderRadius: '5px', padding: '5px', color: 'white', marginTop: '20px', fontSize: '18px' }}>2D</div>
              <div style={{ backgroundColor: '#323C3C', borderRadius: '5px', padding: '5px', color: 'white', marginTop: '20px', marginLeft: '10px', fontSize: '18px' }}>Hindi</div>
            </div>
            <p style={{ marginLeft: '30px', marginTop: '10px', color: 'white', fontSize: '18px' }}>2h 39m . Comedy,Romantic . UA . 8Mar,2023</p>
            <Button type="primary" style={{ color: 'white', backgroundColor: 'red', marginLeft: '30px', marginTop: '12px', fontSize: '18px', height: '50px', width: '250px' }}><strong>Book Tickets</strong></Button>
          </div>
        </div>
      </div>
    </div>
  )
}