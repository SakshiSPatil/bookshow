import React from "react";
import { Button } from "antd";
import "../style/navbarStyle.css";

export default function Navbar() {
  return (
    <div>
      <div>
        <nav
          className=""
          style={{ backgroundColor: "#333", color: "white", height: "65px" }}
        >
          <div
            className="container-fluid"
            style={{
              display: "inline-flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "14px",
            }}
          >
            <div>
              <div className="logoStyle navbar-brand heading " href="/">
                book my show
              </div>
            </div>
            <div>
              <Button className="btnStyle navbtn" type="primary" danger>
                Sign in
              </Button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
