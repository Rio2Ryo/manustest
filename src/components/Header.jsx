"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useLanguage } from '../contexts/LanguageContext';
import logo from '../../folder/Algae_logo.png';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { language, changeLanguage } = useLanguage();

  const tLabel = (ja, en) => (language === 'ja' ? ja : en);

  const menuItems = [
    { path: '/', ja: 'ホーム', en: 'Home' },
    { path: '/mother-vegetables', ja: 'マザーベジタブル', en: 'Mother Vegetables' },
    { path: '/mv-factory', ja: 'MVファクトリー', en: 'MV Factory' },
    { path: '/sustainable-vision', ja: 'サステナブルビジョン', en: 'Sustainable Vision' },
    { path: '/company', ja: '会社概要', en: 'Company' },
    { path: '/contact', ja: 'お問い合わせ', en: 'Contact' }
  ];

  return (
    <header className="header">
      <div className="header-content">
        {/* Logo */}
        <Link href="/" className="logo" onClick={() => setIsMobileMenuOpen(false)}>
          <Image src={logo} alt="Algae International Japan" height={60} style={{ width: 'auto' }} />
        </Link>

        {/* Desktop navigation */}
        <nav className="nav-desktop">
          {menuItems.map((item) => (
            <Link key={item.path} href={item.path} className={pathname === item.path ? 'active' : ''}>
              {tLabel(item.ja, item.en)}
            </Link>
          ))}
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

        {/* Hamburger */}
        <button className="hamburger" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        {menuItems.map((item) => (
          <Link key={item.path} href={item.path} onClick={() => setIsMobileMenuOpen(false)}>
            {tLabel(item.ja, item.en)}
          </Link>
        ))}
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
