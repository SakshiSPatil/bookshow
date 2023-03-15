import React from 'react'
import { Button } from 'antd';
export default function AboutMovie(props) {
  return (
    <div>
      <div style={{ marginLeft: '150px', marginRight: '500px', marginTop: '50px', marginBottom: '30px' }}>
        <h3>About the movie</h3>
        <p>{props.desc}</p>
      </div>
      <div style={{ marginLeft: '150px', border: '1px solid', marginRight: '500px', borderLeft: 'none', borderRight: 'none', paddingTop: '30px', paddingBottom: '40px' }}>
        <h3>Applicable offers</h3>
        <Button type="dashed" ghost style={{ borderColor: 'rgb(252, 199, 93)', backgroundColor: 'rgb(242, 218, 162)', height: '100px', width: '450px' }} >
          <div style={{ padding: '15px', color: 'black', fontSize: '15px' }}>
            <p style={{ marginLeft: '-100px' }}>WATCH MOVIES ONLINE FOR FREE!</p>
            <p style={{ marginLeft: '-200px' }}>Limited Period Offer</p>
          </div>
        </Button>
      </div>
      <div style={{ marginTop: '50px' }}></div>
    </div>
  )
}
