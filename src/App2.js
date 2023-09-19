import React, { useState } from 'react';
import Modal from 'react-modal';

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <>
      <select id="countrySelect">
        <option value="">국가 선택</option>
        <option value="korea">대한민국</option>
        <option value="usa">미국</option>
    </select>
    
    <select id="citySelect" style={{display: 'none'}}>
        <option value="">도시 선택</option>
    </select>
    </>
  )
}  
export default App
