// components/EcoBenefits.js
import React from 'react';
import styled from 'styled-components';
import { PieChart, Pie, Cell } from 'recharts';
import { Tooltip } from 'react-bootstrap';

const data = [
  { name: '其他', value: 65 },
  { name: '绿色能源占比', value: 35 }
];
const COLORS = ['#8884d8', '#82ca9d'];
const GradientTitle = styled.h2`
  font-size: 1.5rem; /* 根据需求调整标题字体大小 */
  background: linear-gradient(90deg, #32cd32, #00bfff); /* 绿色到蓝色渐变 */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1rem;
`;
const DisplayNumber = styled.div`
  font-family: 'digital-7', monospace; /* 显示器风格的字体 */
  font-size: 1.5rem; /* 数字大小 */
  color: #00bfff; /* 初始蓝色 */
  background: linear-gradient(90deg, #00bfff, #1e90ff, #6495ed); /* 蓝色渐变 */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: 0.1em; /* 字符间距 */
  display: inline-block;
  padding: 0 10px;
  text-shadow: 0 0 5px rgba(0, 191, 255, 0.5), 0 0 10px rgba(0, 191, 255, 0.5); /* 发光效果 */
`;
const EcoBenefitsContainer = styled.div`
  border: 1px solid #2c3e50;
  padding: 20px;
  background: rgba(255, 255, 255, 0.1);
`;


const EcoBenefits = () => {
  return (
    <EcoBenefitsContainer>
      <GradientTitle>总体低碳经济及环保效益</GradientTitle>
      <p>运行天数：<DisplayNumber>114514 天</DisplayNumber></p>
      <p>CO2 减排量：<DisplayNumber>54,188 kg</DisplayNumber></p>
      <p>总用电量：<DisplayNumber>6,666 kWh</DisplayNumber></p>
      <PieChart width={250} height={200}>
        <Pie
          data={data}
          cx={100}
          cy={100}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
          label={(entry) => entry.name} // 显示每个部分的名称
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip /> {/* 鼠标悬停时显示详细信息 */}
      </PieChart>
    </EcoBenefitsContainer>
  );
};

export default EcoBenefits;
