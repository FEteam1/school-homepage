import React from "react";
import "./Notice.css";

const notices = [
  { title: "2025학년도 2학기 개강일 안내", date: "2025-04-26" },
  { title: "동아리 모집 일정 공지", date: "2025-03-02" },
  { title: "중간고사 시험 시간표 공지", date: "2025-05-20" },
  { title: "학교 축제 일정 확정 (2025 무비페스타)", date: "2025-09-05" },
  { title: "2025년 여름방학 일정 안내", date: "2025-08-01" },
  { title: "교내 해커톤 참가 신청 안내", date: "2025-08-15" },
];

const Notice = () => {
  const today = new Date("2025-07-09"); // 실제 운영 시에는 new Date() 사용

  const futureNotices = notices
    .filter((n) => new Date(n.date) > today)
    .sort((a, b) => new Date(a.date) - new Date(b.date));

  const pastNotices = notices
    .filter((n) => new Date(n.date) <= today)
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  const sortedNotices = [...futureNotices, ...pastNotices];

  return (
    <div className="notice-container">
      <h2 className="notice-title">📢 공지사항</h2>
      <ul className="notice-list">
        {sortedNotices.map((notice, index) => {
          const isFuture = new Date(notice.date) > today;
          return (
            <li key={index} className="notice-item">
              <span className={isFuture ? "notice-future" : ""}>
                {isFuture && "🔥 "}
                {notice.title}
              </span>
              <span className="notice-date">({notice.date})</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Notice;
