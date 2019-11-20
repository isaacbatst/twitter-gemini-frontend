import React from 'react';
import Col from 'react-bootstrap/Col';
import ShortcutsList from '../ShortcutsList';
import logo from '../../static/twitter_logo.png';
import Image from 'react-bootstrap/Image';

import './style.css';

function Sidebar(){
  return (
  <Col xs={2} lg={1}  xl={3} className="sidebar">
    <Image className="pt-3 pb-2" width={26} alt="Pássaro logo do Twitter" src={logo} />
    <ShortcutsList />
  </Col>
  );
}

export default Sidebar;