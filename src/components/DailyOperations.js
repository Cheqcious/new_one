// components/DailyOperations.js
import React from 'react';
import styled from 'styled-components';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';

const data = [
  { subject: '光伏发电', A: 200, fullMark: 200 },
  { subject: '储能系统', A: 5120, fullMark: 5200 },
  { subject: '充电系统', A: 7523, fullMark: 7600 }
];

const DailyOperationsContainer = styled.div`
  border: 1px solid #2c3e50;
  padding: 20px;
  background: rgba(255, 255, 255, 0.1);
`;

const DailyOperations = () => {
  return (
    <DailyOperationsContainer>
      <h2>当日碳持量节的运行情况</h2>
      <RadarChart outerRadius={90} width={300} height={250} data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis angle={30} domain={[0, 5200]} />
        <Radar name="运行数据" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
      </RadarChart>
    </DailyOperationsContainer>
  );
};

export default DailyOperations;
