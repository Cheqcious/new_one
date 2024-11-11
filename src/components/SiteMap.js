// components/SiteMap.js
import React from 'react';
import styled from 'styled-components';

const SiteMapContainer = styled.div`
  
  border: 1px solid #2c3e50;
  padding: 20px;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  overflow: hidden;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain; /* 确保图片适应容器 */
  }
`;
const Title = styled.div`
 background: linear-gradient(to right,#70A1D7, #2C3E50); /* 渐变蓝色，从深到浅 */
  color: white;
  padding: 10px;
  font-size: 20px;
  font-weight: bold;
  border-radius: 5px;
  margin-bottom: 20px;
`;
const SiteMap = () => {
  return (
    <SiteMapContainer>
      
      <ImageContainer>
        <img src={`${process.env.PUBLIC_URL}/picture1.png`} alt="Site Map" />
      </ImageContainer>
    </SiteMapContainer>
  );
};

export default SiteMap;
