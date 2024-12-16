// WeatherInfo.js
import React from 'react';
import styled from 'styled-components';
import { PieChart, Pie, Cell, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid, LabelList } from 'recharts';


// 样式
const WeatherInfoContainer = styled.div`
  border: 1px solid #2c3e50;
  padding: 20px;
  background: rgba(255, 255, 255, 0.1);
  color: #ecf0f1;
`;
const WeatherDescription = styled.div`
  font-size: 1.5rem;
  color: white; 
  font-weight: bold;
  font-style: italic; /* 让文字变为斜体 */
`;
const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const WeatherIcon = styled.div`
  font-size: 2rem;
`;

const TempText = styled.div`
  font-size: 2.5rem;
  color: #00bfff;
`;
const TempText1 = styled.div`
  font-size: 1.5rem;
  color: #00bfff;
`;
const AirQuality = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AQTitle = styled.div`
  font-size: 1.5rem;
  color: #00bfff;
`;

const PollutantBarChart = styled.div`
  width: 100%;
  margin-top: 10px;
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

// PM2.5 数据
const pmData = [
  { name: 'PM2.5', value: 68, color: '#00bfff' },
];

// 排放数据
const pollutantData = [
    { name: 'SO2', value: 32, color: '#FF6347' },
    { name: 'CO2', value: 22, color: '#00bfff' },
    { name: 'NO2', value: 71, color: '#32cd32' },
    { name: 'O3', value: 11, color: '#FFD700' },
  ];

// 渲染组件
const WeatherInfo = () => {
  return (
    <WeatherInfoContainer>
      <Title>》天气与排放</Title>
      
      {/* 第一行：天气信息 */}
      <Row>
        <WeatherIcon>⛅</WeatherIcon>
        <TempText>11°C  </TempText>
        <div><WeatherDescription>  多云（实时）</WeatherDescription></div>
        <div><WeatherDescription>全天温度</WeatherDescription> <TempText1>3-15°C</TempText1></div>
        <div><WeatherDescription>西南风 3-4级</WeatherDescription></div>
      </Row>

      {/* 第二行：空气质量 */}
      <Row>
        <AirQuality>
          <AQTitle>PM2.5</AQTitle>
          <PieChart width={200} height={200}>
            <Pie
              data={pmData}
              dataKey="value"
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={70}
              startAngle={90}
              endAngle={310}
              paddingAngle={5}
            >
              {pmData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
          <div>{pmData[0].value} µg/m³</div>
        </AirQuality>

       {/* 排放指标 */}
       <PollutantBarChart>
          <BarChart width={350} height={180} data={pollutantData} layout="vertical" barCategoryGap="20%">
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis type="category" dataKey="name" width={50} /> 
            <Tooltip />
            <Bar dataKey="value">
              {pollutantData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
              <LabelList dataKey="value" position="right" fill="#ffffff" /> {/* 显示具体数据 */}
            </Bar>
          </BarChart>
        </PollutantBarChart>
      </Row>
    </WeatherInfoContainer>
  );
};

export default WeatherInfo;
