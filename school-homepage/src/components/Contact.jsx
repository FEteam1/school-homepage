import React from "react";
import './Contact.css'

const Contact = () => {
  const hour = new Date().getHours();
  const isOpen = hour >= 9 && hour < 17;

  return (
    <div className="contact">
      <h2>📍 학교 위치 및 문의</h2>

      <div className="map-container">
        <img
          src="https://simg.pstatic.net/static.map/v2/map/staticmap.bin?caller=smarteditor&markers=color%3A0x11cc73%7Csize%3Amid%7Cpos%3A128.5853514%2036.3030144%7CviewSizeRatio%3A0.7%7Ctype%3Ad&w=700&h=315&scale=2&dataversion=171.33"
          alt="학교 지도"
          className="map-image"/>
      </div>

      <ul className="info-list">
        <li><strong>주소:</strong> 경북 포항시 남구 가상의로 123</li>
        <li><strong>전화번호:</strong> 054-123-4567</li>
        <li><strong>이메일:</strong> contact@school.kr</li>
        <li><strong>운영 시간:</strong> 오전 9시 ~ 오후 5시</li>
      </ul>

      <div className={`status ${isOpen ? "open" : "closed"}`}>
        현재 상태: {isOpen ? "🟢 운영 중" : "🔴 운영 종료"}
      </div>
    </div>
  );
};

export default Contact;