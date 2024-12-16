// components/LowCarbonEconomyModule.js
import React from 'react';
import styled from 'styled-components';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from 'recharts';
import { FaLeaf } from 'react-icons/fa';

const ModuleContainer = styled.div`
  padding: 20px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  border: 1px solid #2c3e50;
  color: #ecf0f1;
  font-family: Arial, sans-serif;
`;



const IndicatorContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;

const IndicatorItem = styled.div`
  width: 45%;
  margin-bottom: 20px;
  padding: 15px;
  text-align: center;
  border-radius: 10px;
  background: linear-gradient(to center, rgba(112, 161, 215, 0.2), transparent);
  box-shadow: 0px 0px 10px rgba(112, 161, 215, 0.6);
`;

const IndicatorTitle = styled.div`
  font-size: 20px;
  margin-bottom: 5px;
  color: #ffffff;
`;

const IndicatorValue = styled.div`
  font-size: 30px;
  font-weight: bold;
  color: #3498db;
  text-shadow: 0px 0px 10px rgba(52, 152, 219, 0.8);
`;

const CarbonNeutralContainer = styled.div`
  margin-top: 20px;
  text-align: center;
`;

const LeafIcon = styled(FaLeaf)`
  color: #2ecc71;
  font-size: 24px;
`;
const CarbonNeutralTitle = styled.div`
  font-size: 20px;
  color: #2ecc71;
  margin-bottom: 5px;
`;

const MethodContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-top: 10px;
`;

const MethodItem = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 8px 0;
  border-bottom: 1px solid #2c3e50;
  font-size: 20px;
  color: #ffffff;
`;
const MethodValue = styled.div`
  font-size: 20px;
  color: #2ecc71;
  text-shadow: 0px 0px 5px rgba(46, 204, 113, 0.8);
`;

const ProgressContainer = styled.div`
  margin-top: 20px;
  text-align: center;
`;

const ProgressTitle = styled.div`
  font-size: px;
  color: #2ecc71;
  margin-bottom: 5px;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 20px;
  background: rgba(46, 204, 113, 0.2);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
`;

const ProgressFiller = styled.div`
  height: 100%;
  width: 54%; /* Example progress */
  background: #2ecc71;
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

const LowCarbonEconomyModule = () => {
  // 示例数据
  const indicatorsData = [
    { title: '运行天数', value: '308 天' },
    { title: 'CO₂ 减排总量', value: '52,899 kg' },
    { title: '可再生能源使用比例', value: '81.84%' },
    { title: '累计节约成本', value: '¥1,435,642' },
  ];

  const carbonNeutralMethods = [
    { name: '清洁能源中和', value: '10.3吨', percentage: '100%' },
    { name: '优化供应中和', value: '1.5吨', percentage: '0%' },
    { name: '碳利用中和', value: '0吨', percentage: '0%' },
    { name: '碳补偿中和', value: '0吨', percentage: '0%' },
  ];

  const carbonReductionData = Array.from({ length: 30 }, (_, i) => ({
    day: i + 1,
    reduction: Math.random() * 50,
    neutralization: Math.random() * 30,
  }));

  return (
    <ModuleContainer>
      <Title>》总体低碳经济及环保效益</Title>
      
      {/* 顶部四个指标 */}
      <IndicatorContainer>
        {indicatorsData.map((indicator, index) => (
          <IndicatorItem key={index}>
            <IndicatorTitle>{indicator.title}</IndicatorTitle>
            <IndicatorValue>{indicator.value}</IndicatorValue>
          </IndicatorItem>
        ))}
      </IndicatorContainer>

      {/* 碳中和总量和方法 */}
      <CarbonNeutralContainer>
      
      <CarbonNeutralTitle><LeafIcon />   碳中和总量</CarbonNeutralTitle>
        <IndicatorValue>11.8 吨</IndicatorValue>

        {/* 中和方法 */}
        <MethodContainer>
          {carbonNeutralMethods.map((method, index) => (
            <MethodItem key={index}>
              <span>{method.name}</span>
              <MethodValue>{method.value} {method.percentage}</MethodValue>
            </MethodItem>
          ))}
        </MethodContainer>
      </CarbonNeutralContainer>

      {/* 碳中和进程 */}
      <ProgressContainer>
        <ProgressTitle>碳中和进程</ProgressTitle>
        <ProgressBar>
          <ProgressFiller />
        </ProgressBar>
        <div>54%</div>
      </ProgressContainer>

      {/* 碳减排趋势柱状图 */}
      <ResponsiveContainer width="100%" height={240}>
        <BarChart data={carbonReductionData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="reduction" fill="#3498db" name="碳排放量" />
          <Bar dataKey="neutralization" fill="#2ecc71" name="碳中和量" />
        </BarChart>
      </ResponsiveContainer>
    </ModuleContainer>
  );
};

export default LowCarbonEconomyModule;
