import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="home-container">
        <h1 className="home-title">환영합니다!</h1>
        <p className="home-description">
          React.js로 만든 미니 블로그에 오신 것을 환영합니다.
        </p>
        <div className="home-features">
          <div className="feature-card">
            <h3>컴포넌트 기반</h3>
            <p>재사용 가능한 컴포넌트로 구성</p>
          </div>
          <div className="feature-card">
            <h3>CSS 분리</h3>
            <p>컴포넌트별 CSS 파일 분리</p>
          </div>
          <div className="feature-card">
            <h3>구조화</h3>
            <p>pages와 components 폴더로 구조화</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 