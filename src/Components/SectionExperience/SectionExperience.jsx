import { Layout } from 'antd';
import { Right } from '../NudoSecond/Right';
import { image } from '../../assets'
const { Footer } = Layout;

import './SectionExperience.scss';

export function SectionExperience() {
  const { purplebackgroundpng, backgroundnodosecondpng } = image;
  
  return (
    <div className='content-section-experience' style={{backgroundImage: `url("${backgroundnodosecondpng}")`}}>
      <h1>My Experience</h1>
      <Right />
    </div>
  )
}
