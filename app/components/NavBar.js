import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyLink = styled(Link)`
  font-weight: bold;
  color: white;
  text-decoration: none;
`

export default () => {
  return (
    <div className='navbar'>
      <StyLink to='/' className='navbar-left'>Boilerplate</StyLink>
      <div className='row'>
        <StyLink to='/' className='navbar-right'>Home</StyLink>
        <StyLink to='/' className='navbar-right'>Not Home</StyLink>
      </div>
    </div>
  )
}
