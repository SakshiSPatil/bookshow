import React from 'react'
import { Button } from 'antd';
import '../style/navbarStyle.css';
// import "./NavSty.css"
// import "./App.css";
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
        marginRight: '20px'
    }
    let logoStyle = {
        color: "white",
        marginLeft: '20px',
        fontFamily: 'Barlow Condensed',
        fontSize: '25px'
    }
    return (
        <div>
            <div >
                <nav className= "" style={{ backgroundColor: "#333", color: "white", height: '65px' }}>
                    <div className="container-fluid" style={{ display: 'inline-flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '14px' }}>
                        <div>
                            <div className="navbar-brand heading " href="/" style={logoStyle}>book my show</div>
                        </div>
                        {/* <button type="button" className="btn btn-danger" style={btnStyle}>Sign in</button> */}
                        <div>
                            <Button className = "navbtn" type="primary" style={btnStyle} danger>Sign in</Button>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}
