import { Card } from 'antd';
// import { useNavigate } from 'react-router-dom';
// import { Navigate } from 'react-router-dom';
// import MovieOneDetails from '../MovieOneDetails';
import { Link } from 'react-router-dom';
const { Meta } = Card;
// let navigate;
const Card1 = (props) => (
  // navigate = useNavigate(),
  <Card
    hoverable
    style={{
      width: 220,
      height: 363
    }}

    cover={<Link to="/MovieOneDetails" rel="noreferrer"><img style={{ borderRadius: '8px', width: '221px', height: '363px' }} alt="example" src={props.imgs} /></Link>}

  // onClick={() => {
  //   Navigate(MovieOneDetails)
  //   <Link to='/MovieOneDetails'/> 
  //   Navigate('/MovieOneDetails');
  //   console.log("hi")
  // }}
  >
    <Meta style={{ fontSize: '16px', width: '220px', marginLeft: '-25px', marginTop: '25px' }} title={props.title} description={props.desc} />
  </Card>
);
export default Card1;