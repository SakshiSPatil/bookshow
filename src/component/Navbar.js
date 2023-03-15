import React from 'react'
import { Button } from 'antd';

export default function Navbar() {
    let btnStyle = {
        color: "white",
        font: "Roboto, arial",
        fontSize: '12px',
        height: '25px',
        width: '67px',
        textAlign: 'center',
        display: 'block',
        borderRadius: '4px',
        marginRight: '182px'
    }
    let logoStyle = {
        color: "white",
        marginLeft: '130px',
        fontFamily: 'Barlow Condensed',
        fontSize: '25px'
    }
    return (
        <div>
            <div >
                <nav style={{ backgroundColor: "#333", color: "white", height: '65px' }}>
                    <div className="container-fluid" style={{ display: 'inline-flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '14px' }}>
                        <div>
                            <a className="navbar-brand " href="/" style={logoStyle}>book my show</a>
                        </div>
                        {/* <button type="button" className="btn btn-danger" style={btnStyle}>Sign in</button> */}
                        <div>
                            <Button type="primary" style={btnStyle} danger>Sign in</Button>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}
