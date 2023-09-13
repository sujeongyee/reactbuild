import React from 'react';
import {Background, LoadingText} from './Styles';

 function Loding() {
  return (
    <Background>
      <LoadingText>잠시만 기다려 주세요.</LoadingText>
      <img src='../img/loding.gif' alt="로딩중" width='5%'/>
    </Background>
  );
};

export default Loding;