import React from 'react';
import Image from 'react-bootstrap/Image';

import './style.css';

function AvatarBar(props){
  return <Image className='avatar' fluid roundedCircle src={props.avatar} />
}

export default AvatarBar;