// components/HistoryData.js
import React from 'react';
import styled from 'styled-components';
import { PieChart, Pie, Cell, Tooltip as PieTooltip, Legend, ResponsiveContainer } from 'recharts';

// Styled components
const HistoryDataContainer = styled.div`
  padding: 20px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  border: 1px solid #2c3e50;
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

const Content = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Section = styled.div`
  width: 48%;
  text-align: center;
`;

const InfoText = styled.div`
  font-size: 16px;
  color: #ecf0f1;
  margin-bottom: 10px;
`;

const mockData = {
  dailyEnergyDistribution: [
    { name: '火力', value: 40 },
    { name: '风力', value: 35 },
    { name: '光伏', value: 25 },
  ],
  monthlyEnergyDistribution: [
    { name: '火力', value: 50 },
    { name: '风力', value: 30 },
    { name: '光伏', value: 20 },
  ],
};

const COLORS = ['#8884d8', '#82ca9d', '#A7C7E7'];// 每种能源的颜色

const HistoryData = () => {
  return (
    <HistoryDataContainer>
      {/* 模块标题 */}
      <Title>》历史数据查询</Title>

      {/* 内容部分 */}
      <Content>
        {/* 当天用电量 */}
        <Section>
          <InfoText>当天用电量：100 kWh</InfoText>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={mockData.dailyEnergyDistribution}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                fill="#8884d8"
                label={({ name, value }) => `${name}: ${value}`}
              >
                {mockData.dailyEnergyDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
              <PieTooltip />
              <Legend verticalAlign="bottom" height={36} />
            </PieChart>
          </ResponsiveContainer>
        </Section>

        {/* 当月用电量 */}
        <Section>
          <InfoText>当月用电量：3000 kWh</InfoText>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={mockData.monthlyEnergyDistribution}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                fill="#82ca9d"
                label={({ name, value }) => `${name}: ${value}`}
              >
                {mockData.monthlyEnergyDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
              <PieTooltip />
              <Legend verticalAlign="bottom" height={36} />
            </PieChart>
          </ResponsiveContainer>
        </Section>
      </Content>
    </HistoryDataContainer>
  );
};

export default HistoryData;
