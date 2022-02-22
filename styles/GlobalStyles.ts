// import React from 'react';
import { createGlobalStyle } from 'styled-components';

import BackgroundImage from '../assets/images/home-bg.jpg';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  #root {
    margin: 0 auto;
  }
  html {
    /* background: url("https: //flatmates res .cloudinary .com/t_blog/b;log/ej14wkwswynwth9raaxm.jpg") no-repeat center center fixed;  */
    /* background-color: #fff; */
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;    
  }
`;
