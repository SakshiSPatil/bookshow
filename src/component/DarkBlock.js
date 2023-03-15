import { Card } from 'antd';
// const { Meta } = Card;
const DarkBlock = (props) => (
  <Card
    hoverable
    style={{
      width: 230,
      height: 345
    }}
    cover={<img style={{ borderRadius: '8px' }} alt="example" src={props.imgs} />}
  >
    {/* <Meta title={props.title} description="English" /> */}
  </Card>

);
export default DarkBlock;