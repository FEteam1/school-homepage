import React, { useEffect, useState } from "react";
import "./Home.css";

function Home() {
  const alerts = [
    "📌 오늘은 6교시 수업까지 진행됩니다.",
    "📢 학사일정이 변경되었습니다. 자세한 사항은 공지사항을 확인하세요.",
    "⛅ 금일 야외 수업이 예정되어 있습니다. 체육복 착용 권장!",
    "📎 신입생 오리엔테이션은 다음 주 월요일입니다.",
    "🚫 급식실 일부 메뉴는 품절될 수 있습니다.",
    "📅 오늘은 도서관 자습실이 22시까지 운영됩니다.",
    "✅ 학생회 선거 투표는 이번 주 금요일까지입니다.",
  ];

  const images = [
    "https://school.gyo6.net/upload/gbsw/widg/img_cb66vadb5=37v03=45v65=b3vec=704fv04b0v9dc0_v6484.png",
    "https://school.gyo6.net/upload/gbsw/widg/img_9497v37d5=b7vad=48vba=b0vd6=6a45v03b1v8c4b_v4101.png",
    "https://school.gyo6.net/upload/gbsw/widg/img_53f4v7545=f0v31=4fvc8=82vbc=ad62v3940vd719_v6763.png"
  ];

  const [alertIndex, setAlertIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);

  // 공지 자동 슬라이드
  useEffect(() => {
    const alertInterval = setInterval(() => {
      setAlertIndex((prev) => (prev + 1) % alerts.length);
    }, 10000);
    return () => clearInterval(alertInterval);
  }, [alerts.length]);

  // 이미지 자동 슬라이드
  useEffect(() => {
    const imageInterval = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % images.length);
    }, 10000);
    return () => clearInterval(imageInterval);
  }, [images.length]);

  return (
    <div className="content">
      <h1 className="title">경북소프트웨어마이스터고등학교</h1>

      {/* 공지 카드 */}
      <div className="card">
        <p>📢</p>
        <p>공지사항 :</p>
        <div className="alert">{alerts[alertIndex]}</div>
      </div>

      {/* 이미지 슬라이드 */}
      <div className="image-slider">
        <img src={images[imageIndex]} alt={`slide-${imageIndex}`} />
      </div>
      <div className="footer">
        <a href="https://apply.gbsw.hs.kr/"><p>입학안내</p></a>
        <a href="https://school.gyo6.net/gbsw/na/ntt/selectNttList.do?mi=122592&bbsId=203258"><p>학생활동</p></a>
        <a href="https://www.hischool.go.kr/"><p>고입정보포털</p></a>
        <a href="about:blank"><p>학교폭력신고</p></a>
        <a href="https://www.gyo6.net/advice/"><p>교육렛 진로상담</p></a>
        <a href="https://school.gyo6.net/bym/main.do?sysId=bym"><p>봉양중학교</p></a>
      </div>
    </div>
  );
}

export default Home;
