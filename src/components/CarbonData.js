// components/CarbonData.js
import React from 'react';
import styled from 'styled-components';

const CarbonDataContainer = styled.div`
  border: 1px solid #2c3e50;
  padding: 20px;
  background: rgba(255, 255, 255, 0.1);
`;

const CarbonData = () => {
  return (
    <CarbonDataContainer>
      <h2>碳排量充电总体数据</h2>
      <p>当前碳排放量：8,254 kg</p>
      <p>碳排放节约：7,823亿元</p>
      {/* 其他数据展示 */}
    </CarbonDataContainer>
  );
};

export default CarbonData;
