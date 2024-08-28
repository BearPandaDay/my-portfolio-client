import React from 'react'; 
import { Liquid } from '@ant-design/plots';

import './ProgressChart.css';

export function ProgressChart() {
  const config = { 
    percent: 0.25,
    outline: {
      border:2,
      distance: 1,

    },
    wave: {
      length: 128,
    },
    // style: {color: "red", width: "100px",},
  };
  return <Liquid {...config} />;
};
