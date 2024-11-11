// components/EnergyDataMonitor.js
import React, { useState } from 'react';
import styled from 'styled-components';

const ModuleContainer = styled.div`
  padding: 20px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  border: 1px solid #2c3e50;
  color: #ecf0f1;
  font-family: Arial, sans-serif;
  width: 100%;
  height: 93.5%;
  box-sizing: border-box;
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

const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

const SectionTitle = styled.div`
  color: #2ecc71;
  font-size: 20px;
  font-weight: bold;
`;

const ToggleButtonContainer = styled.div`
  display: flex;
  gap: 5px;
`;

const ToggleButton = styled.button`
  background: ${(props) => (props.active ? '#2980b9' : '#3498db')};
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;

  &:hover {
    background: #2980b9;
  }
`;

const DataContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

const DataColumn = styled.div`
  width: 50%;
`;

const DataItem = styled.div`
  display: flex;
  justify-content: space-between;
  background: rgba(112, 161, 215, 0.3);
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 12px;
  color: #ecf0f1;
`;

const ItemTitle = styled.div`
  font-size: 16px;
`;

const ItemValue = styled.div`
  font-size: 16px;
  color: #3498db;
  font-weight: bold;
`;

const EnergyDataMonitor = () => {
  const [mode, setMode] = useState('day');

  const dayData = {
    left: [
      { title: '火电', value: '40861706.7 kWh' },
      { title: '天然气', value: '4472万立方米' },
      { title: '汽油', value: '40.1 吨' },
      { title: '柴油', value: '18.4 吨' },
    ],
    right: [
      { title: '绿电', value: '5898633.4 kWh' },
      { title: '水', value: '199974.5 吨' },
      { title: '机油', value: '75.6 吨' },
      { title: '煤', value: '0 吨' },
    ],
  };

  const monthData = {
    left: [
      { title: '火电', value: '1225851200 kWh' },
      { title: '天然气', value: '134160万立方米' },
      { title: '汽油', value: '1203 吨' },
      { title: '柴油', value: '552 吨' },
    ],
    right: [
      { title: '绿电', value: '176959002 kWh' },
      { title: '水', value: '5999235 吨' },
      { title: '机油', value: '2268 吨' },
      { title: '煤', value: '0 吨' },
    ],
  };

  const leftData = mode === 'day' ? dayData.left : monthData.left;
  const rightData = mode === 'day' ? dayData.right : monthData.right;

  return (
    <ModuleContainer>
      <Title>》能源数据监测</Title>

      {/* 标题和切换按钮在同一行 */}
      <HeaderRow>
        <SectionTitle>电气</SectionTitle>
        <ToggleButtonContainer>
          <ToggleButton active={mode === 'day'} onClick={() => setMode('day')}>
            日
          </ToggleButton>
          <ToggleButton active={mode === 'month'} onClick={() => setMode('month')}>
            月
          </ToggleButton>
        </ToggleButtonContainer>
      </HeaderRow>

      <DataContainer>
        <DataColumn>
          {leftData.map((item, index) => (
            <DataItem key={index}>
              <ItemTitle>{item.title}</ItemTitle>
              <ItemValue>{item.value}</ItemValue>
            </DataItem>
          ))}
        </DataColumn>

        <DataColumn>
          {rightData.map((item, index) => (
            <DataItem key={index}>
              <ItemTitle>{item.title}</ItemTitle>
              <ItemValue>{item.value}</ItemValue>
            </DataItem>
          ))}
        </DataColumn>
      </DataContainer>

      
    </ModuleContainer>
  );
};

export default EnergyDataMonitor;
