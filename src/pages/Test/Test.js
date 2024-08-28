import React from 'react'
import imgProfile from '../../assets/png/Test/profile_alta_calidad.png';

import './Test.scss';

export function Test() {
  return (
    <div className='content'>
        <img src={imgProfile} alt={imgProfile} />
    </div>
  )
}
