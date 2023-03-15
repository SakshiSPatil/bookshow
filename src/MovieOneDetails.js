import React from 'react'
import AboutMovie from './compOfMovieOneDetails/AboutMovie'
import Cast from './compOfMovieOneDetails/Cast'
import TopDiv from './compOfMovieOneDetails/TopDiv'
import Navbar from './component/Navbar'
import cast from './Utility2/cast.json'
import crew from './Utility2/crew.json'
import Card1 from './component/Card1'
import card1 from './utility/card1.json'
// import { Navigate } from 'react-router-dom'

export default function MovieOneDetails() {
  return (
    <div>
      <Navbar />
      <div className="bgimg" style={{ backgroundColor: '#797D7D', paddingLeft: '150px' }}>
        <TopDiv
          img1="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC8xMCAgMTUuMUsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00347237-wmnztybfrl-portrait.jpg"
          title="Tu Jhoothi Main Makkaar"
          rating="7.9/10"
          subrat="41.3K votes >"
        />
      </div>
      <AboutMovie
        desc="Madness ensues when a `player` in the world of romantic relationships finds a girl who`s a worthy opponent. Tu Jhoothi Main Makkaar is a film that believes love is a battle of wits."
      />
      <div >
        <h3 style={{ marginLeft: '150px', marginBottom: '20px', marginTop: '-30px' }}>Cast</h3>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginLeft: '150px', marginRight: '800px' }}>
          {
            cast.map((value, index) => {
              return (
                <Cast
                  key={index}
                  imgs={value.imgs}
                  name={value.name}
                  prof="Actor"
                />
              )
            })
          }
        </div>
      </div>
      <div style={{ border: '1px solid', marginLeft: '150px', marginRight: '500px', width: '875px', borderLeft: 'none', borderRight: 'none' }}>
        <h3 style={{ marginBottom: '20px', marginTop: '20px' }}>Crew</h3>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
          {
            crew.map((value, index) => {
              return (
                <Cast
                  key={index}
                  imgs={value.imgs}
                  name={value.title}
                  prof={value.subtit}
                />
              )
            })
          }
        </div>
      </div>
      <div>
        <h3 style={{ marginLeft: '150px', marginBottom: '20px', marginTop: '20px', marginRight: '492x', paddingBottom: '20px' }}><b>Top reviews</b></h3>
        <div style={{ border: "1px solid", marginLeft: '155px', marginRight: '900px', padding: '15px', borderColor: 'gray', borderRadius: '4px' }}>
          <div style={{ display: 'flex' }}>
            <div ><img src="https://in.bmscdn.com/in/synopsis-new/noimguser.jpg" alt='..' /></div>
            <p style={{ fontSize: '18px', marginLeft: '10px', marginTop: '15px' }}>Jai</p>
          </div>
          <div>
            <h5 style={{ marginTop: '8px' }}>#SuperDirection #GreatActing #WowMusic #R..</h5>
            <p style={{ fontSize: '16px' }}>Watched TU JHOOTI MAIN MAKKAAR!!! Bollywood's vintage rom-com madness is back and also offers ample amount of comedy & family emotions!!! LUV RANJA</p>
          </div>
        </div>
      </div>
      <div style={{ marginTop: '40px', marginRight: '100px' }}>
        <h3 style={{ marginLeft: '155px', marginBottom: '20px' }}><b>You might also like</b></h3>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginLeft: '150px', marginRight: '130px' }}>
          {card1.map((value, index) => {
            return (<div>
              <Card1 imgs={value.imgs}
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
    </div>
  )
}
