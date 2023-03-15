import React from 'react'

export default function Events(props) {
  return (
    <div>
      <div style={{ display: ('flex', 'inline-block'), justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ height: '225px', width: '225px', backgroundColor: props.bgColor, borderRadius: '10px' }}>
          <div style={{ color: 'White', font: 'Barlow Condensed', padding: '20px', margin: '5px' }}>
            <p style={{ fontSize: '30px' }}>{props.textEve}</p>
            <p style={{ fontSize: '20px' }}>{props.eveNo}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
