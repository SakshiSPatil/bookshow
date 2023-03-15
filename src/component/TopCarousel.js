import { Carousel } from 'antd';
let imgStyle = {
  position: 'absolute',
  objectFit: 'fill',
  width: '100%',
  height: '100%',
  maxWidth: '100%',
  alignItem: 'center'
};

const App = () => (
  <Carousel autoplay><div>
    <div style={{ display: 'flex' }}>
      <img style={{ imgStyle, width: '136px', height: '300px', display: 'inline-block', borderRadius: '5px', objectFit: 'cover', objectPosition: 'right' }} src="https://assets-in.bmscdn.com/promotions/cms/creatives/1677493993802_appaaaa.jpg" alt="..." />
      <center><img style={{ imgStyle, width: '1241px', height: '300px', marginLeft: '13px', marginRight: '13px', borderRadius: '5px' }} src="https://assets-in.bmscdn.com/promotions/cms/creatives/1675080125347_app.jpg" alt="..." /></center>
      <img style={{ imgStyle, width: '150px', height: '300px', display: 'inline-block', borderRadius: '5px', objectFit: 'cover', objectPosition: 'left' }} src="https://assets-in.bmscdn.com/promotions/cms/creatives/1677917497764_iifapp.jpg" alt="..." />
    </div>
  </div>

    <div>
      <div style={{ display: 'flex' }}>
        <img style={{ imgStyle, width: '136px', height: '300px', display: 'inline-block', borderRadius: '5px', objectFit: 'cover', objectPosition: 'right' }} src="https://assets-in.bmscdn.com/promotions/cms/creatives/1675080125347_app.jpg" alt="..." />
        <center><img style={{ imgStyle, width: '1241px', height: '300px', marginLeft: '13px', marginRight: '13px', borderRadius: '5px' }} src="https://assets-in.bmscdn.com/promotions/cms/creatives/1677917497764_iifapp.jpg" alt="..." /></center>
        <img style={{ imgStyle, width: '150px', height: '300px', display: 'inline-block', borderRadius: '5px', objectFit: 'cover', objectPosition: 'left' }} src="https://assets-in.bmscdn.com/promotions/cms/creatives/1677493993802_appaaaa.jpg" alt="..." />
      </div>
    </div>
    <div>
      <div style={{ display: 'flex' }}>
        <img style={{ imgStyle, width: '136px', height: '300px', display: 'inline-block', borderRadius: '5px', objectFit: 'cover', objectPosition: 'right' }} src="https://assets-in.bmscdn.com/promotions/cms/creatives/1677917497764_iifapp.jpg" alt="..." />
        <center><img style={{ imgStyle, width: '1241px', height: '300px', marginLeft: '13px', marginRight: '13px', borderRadius: '5px' }} src="https://assets-in.bmscdn.com/promotions/cms/creatives/1677493993802_appaaaa.jpg" alt="..." /></center>
        <img style={{ imgStyle, width: '150px', height: '300px', display: 'inline-block', borderRadius: '5px', objectFit: 'cover', objectPosition: 'left' }} src="https://assets-in.bmscdn.com/promotions/cms/creatives/1675080125347_app.jpg" alt="..." />
      </div>
    </div>

  </Carousel>
);
export default App;