import { Card } from 'antd';
// import { Link } from 'react-router-dom';

const { Meta } = Card;

const Card1 = (props) => (

  <Card
    hoverable
    style={{
      width: 220,
      height: 363
    }}

    cover={
    <img style={{ borderRadius: '8px', width: '221px', height: '363px' }} alt="example" src={props.imgs} />}
  >
    <Meta style={{ fontSize: '16px', width: '220px', marginLeft: '-25px', marginTop: '25px' }} 
    title={props.title} description={props.desc} />
  </Card>
);
export default Card1;