// components/Building.js
import React from 'react';
import styled from 'styled-components';

const Title = styled.div`
 background: linear-gradient(to right,#70A1D7, #2C3E50); /* 渐变蓝色，从深到浅 */
  color: white;
  padding: 10px;
  font-size: 20px;
  font-weight: bold;
  border-radius: 5px;
  margin-bottom: 20px;
`;

const BuildingContainer = styled.div`
  width: 100%;          /* 设置宽度为100%，填满父容器 */
  max-width: 1200px;    /* 可选，限制最大宽度 */
  margin: 0 auto;       /* 居中显示 */
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  border: 1px solid #2c3e50;
`;

const ImageContainer = styled.div`
  width: 100%;          /* 宽度100% */
  height: auto;         /* 高度自适应 */
  border-radius: 10px;  /* 图片容器的圆角 */
  overflow: hidden;     /* 隐藏超出内容 */
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledImage = styled.img`
  width: 100%;          /* 图片填满容器 */
  height: 100%;         /* 高度填满容器 */
  object-fit: cover;    /* 覆盖模式 */
`;

const Building = () => {
  return (
    <BuildingContainer>
      <Title>  》系统示意图</Title>
      <ImageContainer>
        <StyledImage src="/picture2.png" alt="系统示意图" />
      </ImageContainer>
    </BuildingContainer>
  );
};

export default Building;
