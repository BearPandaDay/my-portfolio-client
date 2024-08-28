import { Radio, Timeline } from 'antd';
import {items} from './items';

import './Right.scss';

const Right = () => {
  return (
    <div className='box-experience box box-dark'>
      <h1>My Experience</h1>
      <br />
      <Timeline
        mode={'left'}
        items={items}
      />
    </div>
  );
};
export {Right};
