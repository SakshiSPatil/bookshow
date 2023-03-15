import React from 'react'

export default function Cast(props) {
    return (
        <div style={{ marginTop: '-30px' }}>
            <div style={{ display: ('flex', 'inline-block'), justifyContent: 'space-between', alignItems: 'center' }}>
                <div >
                    <div style={{ color: 'White', font: 'Barlow Condensed', padding: '20px', margin: '5px' }}>
                        <img style={{ height: '100px', width: '100px', borderRadius: '50px' }} src={props.imgs} alt="..." />
                        <div>
                            <p style={{ fontSize: '18px', color: 'black', marginTop: '8px', textAlign: 'center' }}>{props.name}</p>
                            <p style={{ fontSize: '16px', color: 'gray', marginTop: '-10px', textAlign: 'center' }}>{props.prof}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}