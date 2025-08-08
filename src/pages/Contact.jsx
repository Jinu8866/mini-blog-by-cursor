import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 폼 제출 로직 (실제로는 API 호출 등)
    console.log('Form submitted:', formData);
    alert('메시지가 전송되었습니다!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact">
      <div className="contact-container">
        <h1 className="contact-title">Contact Us</h1>
        <p className="contact-description">
          궁금한 점이 있으시면 언제든지 연락해주세요.
        </p>
        
        <div className="contact-content">
          <div className="contact-info">
            <h2>연락처 정보</h2>
            <div className="info-item">
              <h3>이메일</h3>
              <p>contact@miniblog.com</p>
            </div>
            <div className="info-item">
              <h3>전화번호</h3>
              <p>+82 10-1234-5678</p>
            </div>
            <div className="info-item">
              <h3>주소</h3>
              <p>서울특별시 강남구 테헤란로 123</p>
            </div>
          </div>
          
          <div className="contact-form">
            <h2>메시지 보내기</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">이름</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">이메일</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">메시지</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="submit-btn">
                메시지 보내기
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 