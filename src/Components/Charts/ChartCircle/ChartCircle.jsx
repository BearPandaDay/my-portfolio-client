import React from 'react';
import { Pie } from '@ant-design/plots';

import { Data } from './Data';
import { Config } from './Config';

const data = Data();
const config = Config(data);

export function ChartCircle() {
 
  return <Pie {...config} />;

};