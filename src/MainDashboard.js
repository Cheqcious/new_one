// MainDashboard.js
import React from 'react';
import styled from 'styled-components';
import EcoBenefits from './components/EcoBenefits';
import HistoryData from './components/HistoryData';
import EnergyDataMonitor from './components/EnergyDataMonitor';
import RenewableEnergyForecast from './components/RenewableEnergyForecast';
import WeatherInfo from './components/WeatherInfo';
import SiteMap from './components/SiteMap';
import Building from './components/Building';

const DashboardContainer = styled.div`
  display: grid;
  grid-template-rows: auto repeat(3, 1fr); /* 增加一行用于标题 */
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  background-color: #1b2a3d;
  padding: 25px;
  min-height: 100vh;
  color: #ecf0f1;
  grid-template-areas:
    "header header header"
    "ecoBenefits siteMap weatherInfo"
    "ecoBenefits siteMap building"
    "EnergyDataMonitor renewableEnergyForecast HistoryData";
`;

// 新增的标题样式
const StyledHeader = styled.div`
  grid-area: header;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #00ffcc; /* 绿色科技感的颜色 */
  font-size: 50px;
  font-weight: bold;
  text-shadow: 0 0 10px rgba(0, 255, 204, 0.7), 0 0 20px rgba(0, 255, 204, 0.4);
  background-color: #112233; /* 标题背景色 */
  padding: 10px;
  border-radius: 8px;
  position: relative;
  overflow: hidden;

  /* 顶部的两条直线 */
  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 5px;
    height: 2px;
    width: 45%;
    background: linear-gradient(to right, #00ffcc, #3498db);
  }

  /* 左侧的直线 */
  &::before {
    left: 0;
  }

  /* 右侧的直线 */
  &::after {
    right: 0;
  }

  /* 左边三条斜杠 */
  & .left-stripes,
  & .right-stripes {
    position: absolute;
    top: 30;
    display: flex;
    flex-direction: column;
    gap: 30px;
    height: 100%; /* 使斜杠占满整个模块高度 */
  }

  & .left-stripes {
    left: 100px;
    transform: rotate(45deg);
  }

  & .right-stripes {
    right: 100px;
    transform: rotate(-45deg);
  }

  & .stripe {
    width: 300px; /* 调整斜杠的长度 */
    height: 25px;
    background: linear-gradient(to right, #00ffcc, #3498db);
   
  }

  /* 日期样式 */
  & .current-date {
    position: absolute;
    bottom: 10px; /* 右下角位置 */
    right: 20px;
    font-size: 18px;
    color: #00ffcc;
  }
`;

const StyledEcoBenefits = styled.div`
  grid-area: ecoBenefits;
`;

const StyledWeatherInfo = styled.div`
  grid-area: weatherInfo;
`;

const StyledBuilding = styled.div`
  grid-area: building;
`;

const StyledSiteMap = styled.div`
  grid-area: siteMap;
`;

const StyledRenewableEnergyForecast = styled.div`
  grid-area: renewableEnergyForecast;
`;

const StyledEnergyDataMonitor = styled.div`
  grid-area: EnergyDataMonitor;
`;

const StyledHistoryData = styled.div`
  grid-area: HistoryData;
`;

const MainDashboard = () => {
  const currentDate = new Date().toISOString().slice(0, 10); // 获取当前日期

  return (
    <DashboardContainer>
      <StyledHeader>
        绿 源 智 碳 系 统
        <div className="left-stripes">
          <div className="stripe"></div>
          <div className="stripe"></div>
          <div className="stripe"></div>
        </div>
        <div className="right-stripes">
          <div className="stripe"></div>
          <div className="stripe"></div>
          <div className="stripe"></div>
        </div>
        <div className="current-date">{currentDate}</div>
      </StyledHeader>

      <StyledEcoBenefits>
        <EcoBenefits />
      </StyledEcoBenefits>
      <StyledHistoryData>
        <HistoryData />
      </StyledHistoryData>
      <StyledEnergyDataMonitor>
        <EnergyDataMonitor />
      </StyledEnergyDataMonitor>
      <StyledRenewableEnergyForecast>
        <RenewableEnergyForecast />
      </StyledRenewableEnergyForecast>
      <StyledWeatherInfo>
        <WeatherInfo />
      </StyledWeatherInfo>
      <StyledSiteMap>
        <SiteMap />
      </StyledSiteMap>
      <StyledBuilding>
        <Building />
      </StyledBuilding>
    </DashboardContainer>
  );
};

export default MainDashboard;
