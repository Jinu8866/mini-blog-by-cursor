import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <div className="about-container">
        <h1 className="about-title">About</h1>
        <div className="about-content">
          <div className="about-section">
            <h2>프로젝트 소개</h2>
            <p>
              이 프로젝트는 React.js를 기반으로 한 미니 블로그입니다. 
              컴포넌트별로 CSS 파일을 분리하여 관리하기 쉽고 
              재사용 가능한 구조로 설계되었습니다.
            </p>
          </div>
          
          <div className="about-section">
            <h2>기술 스택</h2>
            <ul className="tech-list">
              <li>React.js</li>
              <li>CSS3</li>
              <li>JavaScript (ES6+)</li>
              <li>Create React App</li>
            </ul>
          </div>
          
          <div className="about-section">
            <h2>프로젝트 구조</h2>
            <div className="structure-info">
              <div className="structure-item">
                <strong>src/pages/</strong>
                <p>페이지 컴포넌트들</p>
              </div>
              <div className="structure-item">
                <strong>src/components/</strong>
                <p>재사용 가능한 컴포넌트들</p>
              </div>
              <div className="structure-item">
                <strong>CSS 파일</strong>
                <p>컴포넌트별 CSS 파일 분리</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 