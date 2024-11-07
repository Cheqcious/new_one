// components/SiteMap.js
import React from 'react';
import styled from 'styled-components';

const SiteMapContainer = styled.div`
  border: 1px solid #2c3e50;
  padding: 20px;
  background: rgba(255, 255, 255, 0.1);
`;

const SiteMap = () => {
  return (
    <SiteMapContainer>
      <h2>平面示意图</h2>
      <p>展示建筑、交通、能量流动等信息的 3D 示意图</p>
    </SiteMapContainer>
  );
};

export default SiteMap;
