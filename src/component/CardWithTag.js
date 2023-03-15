import { Card } from 'antd';
import { Tag } from 'antd';
// const { Meta } = Card;
const CardWithTag = (props) => (
  <Card
    hoverable
    style={{
      width: 220,
      height: 380
    }}
    cover={<img style={{ borderRadius: '8px', height: '380px', position: 'relative' }} alt="example" src={props.imgs} />}
  >
    <Tag color="black" style={{ position: 'absolute', bottom: '-1px', left: '-1px', right: '-9px', height: '35px', borderRadius: '10px', borderTopLeftRadius: '0px', borderTopRightRadius: '0px', fontSize: '17px', padding: '6px' }}>{props.tag}</Tag>
    <Tag color="black" style={{ position: 'absolute', bottom: '340px', left: '8px', right: '134px', height: '30px', borderRadius: '0px', fontSize: '17px', padding: '3px', opacity: '0.9' }}>ONLINE</Tag>
    {/* <Meta title={props.title} description={props.desc} /> */}
  </Card>

);
export default CardWithTag;