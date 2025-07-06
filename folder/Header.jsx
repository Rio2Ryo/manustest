import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { language, changeLanguage, t } = useLanguage();

  const menuItems = [
    { path: '/', labelJa: 'ホーム', labelEn: 'Home' },
    { path: '/mother-vegetables', labelJa: 'マザーベジタブル', labelEn: 'Mother Vegetables' },
    { path: '/mv-factory', labelJa: 'MVファクトリー', labelEn: 'MV Factory' },
    { path: '/sustainable-vision', labelJa: 'サステナブルビジョン', labelEn: 'Sustainable Vision' },
    { path: '/company', labelJa: '会社概要', labelEn: 'Company' },
    { path: '/contact', labelJa: 'お問い合わせ', labelEn: 'Contact' }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-content">
        {/* Logo */}
        <Link to="/" className="logo" onClick={closeMobileMenu}>
          <img 
            src="/logo.png" 
            alt="Algae International Japan" 
            style={{
              height: '60px',
              width: 'auto'
            }}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="nav-desktop">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={location.pathname === item.path ? 'active' : ''}
            >
              {language === 'ja' ? item.labelJa : item.labelEn}
            </Link>
          ))}
          
          {/* Language Selector */}
          <select
            value={language}
            onChange={(e) => changeLanguage(e.target.value)}
            style={{
              border: '1px solid var(--gray-300)',
              borderRadius: 'var(--radius-md)',
              padding: '0.5rem',
              fontSize: '0.875rem',
              background: 'white',
              color: 'var(--gray-700)'
            }}
          >
            <option value="ja">日本語</option>
            <option value="en">English</option>
          </select>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="hamburger"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            onClick={closeMobileMenu}
          >
            {language === 'ja' ? item.labelJa : item.labelEn}
          </Link>
        ))}
        
        {/* Mobile Language Selector */}
        <div style={{ padding: '1rem 1.5rem' }}>
          <select
            value={language}
            onChange={(e) => changeLanguage(e.target.value)}
            style={{
              width: '100%',
              border: '1px solid var(--gray-300)',
              borderRadius: 'var(--radius-md)',
              padding: '0.5rem',
              fontSize: '0.875rem',
              background: 'white',
              color: 'var(--gray-700)'
            }}
          >
            <option value="ja">日本語</option>
            <option value="en">English</option>
          </select>
        </div>
      </div>
    </header>
  );
};

export default Header;

