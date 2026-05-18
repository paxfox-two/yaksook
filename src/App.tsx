import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Bell, ChevronRight, House, Pill, Activity, FileText, User } from 'lucide-react';
import './index.css';

// Components
const Header = () => (
  <header className="header">
    <div className="logo-container">
      <img src="/logo_screenshot.png" alt="약속" className="logo-img" />
    </div>
    <Bell className="bell-icon" size={24} />
  </header>
);

const BottomNav = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bottom-nav">
      <Link to="/" className={isActive('/') ? 'active' : ''}>
        <House size={24} />
        <span>홈</span>
      </Link>
      <Link to="/medication" className={isActive('/medication') ? 'active' : ''}>
        <Pill size={24} />
        <span>내 약</span>
      </Link>
      <Link to="/interaction" className={isActive('/interaction') ? 'active' : ''}>
        <Activity size={24} />
        <span>상호작용</span>
      </Link>
      <Link to="/schedule" className={isActive('/schedule') ? 'active' : ''}>
        <FileText size={24} />
        <span>일정</span>
      </Link>
      <Link to="/profile" className={isActive('/profile') ? 'active' : ''}>
        <User size={24} />
        <span>내 정보</span>
      </Link>
    </nav>
  );
};

// Pages
const Home = () => (
  <div className="home-page">
    <Header />
    <div className="status-card">
      <p className="status-title">내 약 상태 한 눈에 보기</p>
      <h2 className="status-main">현재 복용 중인 약 3개</h2>
      <p className="status-warning">상호작용 주의 약물 0개</p>
      <div className="status-pill-icon">
        <Pill size={60} color="white" />
      </div>
    </div>

    <div className="scan-promo-card">
      <div className="scan-icon-container">
        <img src="/prescription_scan.png" alt="처방전 스캔" className="prescription-scan-img" />
      </div>
      <h3>처방전 스캔하고<br />약물 정보를 확인해보세요</h3>
      <Link to="/scan" className="scan-button">처방전 스캔하기</Link>
    </div>

    <div className="action-grid">
      <div className="action-item">
        <div className="action-content">
          <h4>처방전 공유 <ChevronRight size={16} /></h4>
          <p>가족 또는 보호자와<br />처방전을 공유해보세요</p>
        </div>
      </div>
      <div className="action-item">
        <div className="action-content">
          <h4>약국 찾기 <ChevronRight size={16} /></h4>
          <p>주변에 있는<br />심야 약국을 찾아보세요</p>
        </div>
      </div>
    </div>
  </div>
);

const App = () => {
  return (
    <Router>
      <div className="page-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/medication" element={<div>내 약 페이지 (준비 중)</div>} />
          <Route path="/interaction" element={<div>상호작용 페이지 (준비 중)</div>} />
          <Route path="/schedule" element={<div>일정 페이지 (준비 중)</div>} />
          <Route path="/profile" element={<div>내 정보 페이지 (준비 중)</div>} />
          <Route path="/scan" element={<div>스캔 페이지 (준비 중)</div>} />
        </Routes>
        <BottomNav />
      </div>
    </Router>
  );
};

export default App;
