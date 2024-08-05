import { Radio, Timeline } from 'antd';
import {items} from './items';
const Right = () => {
  return (
    <div style={{
      margin: "20% auto",
      width: "80%",
    }}>
      <div style={{
        padding: 20,
        borderRadius: 20,
        background: "#020116"
        
      }}>
      <h1 style={{
        fontSize: "3vw",
        // color: "#0b0b1fff",
        textShadow: "0px 0px 80px #000000",
        // WebkitTextStroke: "3px white",
        // boxShadow: "-50px -30px 50px 15px rgba(0, 255, 255, 0.6)",
      }}>My Experience</h1>
        <Timeline
          mode={'left'}
          items={items}
          style={{
            color: "white",
          }}
          />
      </div>
    </div>
  );
};
export {Right};
