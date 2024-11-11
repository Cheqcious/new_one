// RenewableEnergyForecast.js
import React from 'react';
import styled from 'styled-components';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// 样式
const ForecastContainer = styled.div`
 
  border: 1px solid #2c3e50;
  padding: 20px;
  background: rgba(255, 255, 255, 0.1);
  color: #ecf0f1;
`;

const ChartContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const GradientTitle = styled.div`
  text-align: center;
  font-size: 1.5rem;
  background: linear-gradient(90deg, #00bfff, #1e90ff, #6495ed);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-top: 10px;
`;

const StatusText = styled.div`
  text-align: center;
  margin-top: 20px;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const StatusItem = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  .sufficient {
    color: green;
  }

  .lacking {
    color: yellow;
  }

  .insufficient {
    color: red;
  }

  .icon {
    width: 12px;
    height: 12px;
    background-color: ${({ status }) =>
      status === 'sufficient' ? 'green' : status === 'lacking' ? 'yellow' : 'red'};
    border-radius: 5px;
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

// 模拟数据
const forecastData = [
  { hour: '1h', wind: 30, solar: 40, load: 50 },
  { hour: '2h', wind: 35, solar: 45, load: 55 },
  { hour: '3h', wind: 25, solar: 38, load: 48 },
  { hour: '4h', wind: 45, solar: 55, load: 60 },
  { hour: '5h', wind: 50, solar: 60, load: 70 },
  { hour: '6h', wind: 55, solar: 58, load: 68 },
  { hour: '7h', wind: 53, solar: 62, load: 73 },
  { hour: '8h', wind: 48, solar: 59, load: 71 },
  { hour: '9h', wind: 42, solar: 55, load: 65 },
  { hour: '10h', wind: 39, solar: 52, load: 63 },
];

const batteryData = [
  { hour: '-10h', battery: 80 },
  { hour: '-9h', battery: 78 },
  { hour: '-8h', battery: 76 },
  { hour: '-7h', battery: 74 },
  { hour: '-6h', battery: 70 },
  { hour: '-5h', battery: 68 },
  { hour: '-4h', battery: 65 },
  { hour: '-3h', battery: 60 },
  { hour: '-2h', battery: 58 },
  { hour: '-1h', battery: 55 },
];

// 判断状态的函数
const getStatus = (value, threshold) => {
  if (value >= threshold.sufficient) return 'sufficient';
  if (value >= threshold.lacking) return 'lacking';
  return 'insufficient';
};

// 组件
const RenewableEnergyForecast = () => {
  // 取得当前最新的数据点
  const latestForecast = forecastData[forecastData.length - 1];
  const latestBattery = batteryData[batteryData.length - 1];

  return (
    <ForecastContainer>
      <Title>》电力与负载预测</Title>
      <ChartContainer>
        {/* 发电量预测折线图 */}
        <div>
          <LineChart width={520} height={240} data={forecastData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="hour" />
            <YAxis />
            <Tooltip />
            <Legend layout="vertical" align="left" verticalAlign="top" wrapperStyle={{ position: 'absolute', top: 10,  left: 45, // 根据需要调整数值
  }}
/>
            <Line type="monotone" dataKey="wind" stroke="#8884d8" name="风力发电" />
            <Line type="monotone" dataKey="solar" stroke="#82ca9d" name="光伏发电" />
            <Line type="monotone" dataKey="load" stroke="#ffc658" name="负荷预测" />
          </LineChart>
          <GradientTitle>未来 10 小时发电量预测</GradientTitle>
        </div>

        {/* 电池电量折线图 */}
        <div>
          <LineChart width={420} height={240} data={batteryData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="hour" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="battery" stroke="#ff7300" name="电池电量" />
          </LineChart>
          <GradientTitle>过去 10 小时电池电量</GradientTitle>
        </div>
      </ChartContainer>

      {/* 状态文字 */}
      <StatusText>
        <StatusItem status={getStatus(latestForecast.wind, { sufficient: 50, lacking: 30 })}>
          风力发电量：
          <span className={getStatus(latestForecast.wind, { sufficient: 50, lacking: 30 })}>
            {getStatus(latestForecast.wind, { sufficient: 50, lacking: 30 }) === 'sufficient' ? '充足' :
             getStatus(latestForecast.wind, { sufficient: 50, lacking: 30 }) === 'lacking' ? '欠缺' : '不足'}
          </span>
          <div className="icon"></div>
        </StatusItem>

        <StatusItem status={getStatus(latestForecast.solar, { sufficient: 50, lacking: 30 })}>
          光伏发电量：
          <span className={getStatus(latestForecast.solar, { sufficient: 50, lacking: 30 })}>
            {getStatus(latestForecast.solar, { sufficient: 50, lacking: 30 }) === 'sufficient' ? '充足' :
             getStatus(latestForecast.solar, { sufficient: 50, lacking: 30 }) === 'lacking' ? '欠缺' : '不足'}
          </span>
          <div className="icon"></div>
        </StatusItem>

        <StatusItem status={getStatus(latestBattery.battery, { sufficient: 80, lacking: 50 })}>
          电池容量：
          <span className={getStatus(latestBattery.battery, { sufficient: 80, lacking: 50 })}>
            {getStatus(latestBattery.battery, { sufficient: 80, lacking: 50 }) === 'sufficient' ? '充足' :
             getStatus(latestBattery.battery, { sufficient: 80, lacking: 50 }) === 'lacking' ? '欠缺' : '不足'}
          </span>
          <div className="icon"></div>
        </StatusItem>
      </StatusText>
    </ForecastContainer>
  );
};

export default RenewableEnergyForecast;
