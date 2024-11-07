// components/LowCarbonStatistics.js
import React from 'react';
import styled from 'styled-components';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: '第一周', 本月换电量: 400, 上月换电量: 240 },
  { name: '第二周', 本月换电量: 300, 上月换电量: 139 },
  { name: '第三周', 本月换电量: 200, 上月换电量: 980 },
  { name: '第四周', 本月换电量: 278, 上月换电量: 390 }
];

const LowCarbonStatisticsContainer = styled.div`
  border: 1px solid #2c3e50;
  padding: 20px;
  background: rgba(255, 255, 255, 0.1);
`;

const LowCarbonStatistics = () => {
  return (
    <LowCarbonStatisticsContainer>
      <h2>低碳换月量统计</h2>
      <BarChart width={300} height={250} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="本月换电量" fill="#8884d8" />
        <Bar dataKey="上月换电量" fill="#82ca9d" />
      </BarChart>
    </LowCarbonStatisticsContainer>
  );
};

export default LowCarbonStatistics;
