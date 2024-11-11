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
  grid-template-rows: auto 1fr 1fr 1fr;
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

  /* 添加响应式设计 */
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "header"
      "ecoBenefits"
      "weatherInfo"
      "siteMap"
      "building"
      "EnergyDataMonitor"
      "renewableEnergyForecast"
      "HistoryData";
  }
`;

// 新增的标题样式
const StyledHeader = styled.div`
  grid-area: header;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #00ffcc;
  font-size: 4vw; /* 使用相对单位来适应不同屏幕 */
  font-weight: bold;
  text-shadow: 0 0 10px rgba(0, 255, 204, 0.7), 0 0 20px rgba(0, 255, 204, 0.4);
  background-color: #112233;
  padding: 10px;
  border-radius: 8px;
  position: relative;
  overflow: hidden;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 5px;
    height: 2px;
    width: 45%;
    background: linear-gradient(to right, #00ffcc, #3498db);
  }

  &::before {
    left: 0;
  }

  &::after {
    right: 0;
  }

  & .left-stripes,
  & .right-stripes {
    position: absolute;
    top: 30px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    height: 100%;
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
    width: 20vw; /* 调整长度为视口宽度的相对值 */
    height: 3vh; /* 使用相对视口高度的单位 */
    background: linear-gradient(to right, #00ffcc, #3498db);
  }

  & .current-date {
    position: absolute;
    bottom: 10px;
    right: 20px;
    font-size: 2vw; /* 使用相对单位 */
    color: #00ffcc;
  }
`;

const StyledEcoBenefits = styled.div`
  grid-area: ecoBenefits;
  padding: 10px;
  @media (max-width: 1024px) {
    padding: 5px;
  }
`;

const StyledWeatherInfo = styled.div`
  grid-area: weatherInfo;
  padding: 10px;
  @media (max-width: 1024px) {
    padding: 5px;
  }
`;

const StyledBuilding = styled.div`
  grid-area: building;
  padding: 10px;
  @media (max-width: 1024px) {
    padding: 5px;
  }
`;

const StyledSiteMap = styled.div`
  grid-area: siteMap;
  padding: 10px;
  @media (max-width: 1024px) {
    padding: 5px;
  }
`;

const StyledRenewableEnergyForecast = styled.div`
  grid-area: renewableEnergyForecast;
  padding: 10px;
  @media (max-width: 1024px) {
    padding: 5px;
  }
`;

const StyledEnergyDataMonitor = styled.div`
  grid-area: EnergyDataMonitor;
  padding: 10px;
  @media (max-width: 1024px) {
    padding: 5px;
  }
`;

const StyledHistoryData = styled.div`
  grid-area: HistoryData;
  padding: 10px;
  @media (max-width: 1024px) {
    padding: 5px;
  }
`;

const MainDashboard = () => {
  const currentDate = new Date().toISOString().slice(0, 10);

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
