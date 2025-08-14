'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '../src/contexts/LanguageContext';
import Layout from '../src/components/Layout';
import Image from 'next/image';
import heroBg from './hero-company-bg.jpg';

const Company = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      {/* ヒーローセクション */}
      <section className="hero">
        <Image src={heroBg} alt="Company" className="hero-bg" priority />
        <div className="hero-content fade-in-up">
          <h1 className="hero-title">
            {t('会社概要', 'Company Overview')}
          </h1>
          <p className="hero-subtitle">
            {t(
              'マザーベジタブルとMVファクトリーで持続可能な未来を創造する',
              'Creating a sustainable future with Mother Vegetables and MV Factory'
            )}
          </p>
        </div>
      </section>

      {/* 基本情報 */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              {t('基本情報', 'Basic Information')}
            </h2>
          </div>

          <div className="company-info-table">
            <table className="info-table">
              <tbody>
                <tr>
                  <td className="info-label">{t('会社名', 'Company Name')}</td>
                  <td className="info-value">{t('Algae International Japan株式会社', 'Algae International Japan Co., Ltd.')}</td>
                </tr>
                <tr>
                  <td className="info-label">{t('事業内容', 'Business Content')}</td>
                  <td className="info-value">
                    {t(
                      'マザーベジタブルおよびMVファクトリー関連事業の全体オペレーション管理',
                      'Overall operation management of Mother Vegetables and MV Factory related businesses'
                    )}
                  </td>
                </tr>
                <tr>
                  <td className="info-label">{t('代表', 'Representative')}</td>
                  <td className="info-value">{t('松浦　亮介', 'Ryosuke Matsuura')}</td>
                </tr>
                <tr>
                  <td className="info-label">{t('本社所在地', 'Head Office Location')}</td>
                  <td className="info-value">
                  {t(
                      '〒103-0026　東京都中央区日本橋兜町5-1 兜町第１平和ビル3階',
                      '3rd Floor, Kabutocho Dai-ichi Heiwa Building, 5-1 Nihonbashi Kabutocho, Chuo-ku, Tokyo 103-0026, Japan'
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 組織構成 */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              {t('組織構成', 'Organizational Structure')}
            </h2>
          </div>

          <div className="features-grid">
            <div className="feature-card fade-in-up">
              <div className="feature-icon">
                <div className="icon-circle">
                  <span className="icon-text">01</span>
                </div>
              </div>
              <h3 className="feature-title">
                {t('マザーベジタブル管理部', 'Mother Vegetables Management Department')}
              </h3>
              <p className="feature-description">
                {t(
                  'マザーベジタブルの品質管理、研究開発、生産管理を担当。約2,000種類の多様なマザーベジタブルの特性を把握し、最適な活用方法を研究しています。',
                  'Responsible for quality control, research and development, and production management of Mother Vegetables. We understand the characteristics of about 2,000 diverse Mother Vegetables and research optimal utilization methods.'
                )}
              </p>
            </div>

            <div className="feature-card fade-in-up">
              <div className="feature-icon">
                <div className="icon-circle">
                  <span className="icon-text">02</span>
                </div>
              </div>
              <h3 className="feature-title">
                {t('国内外連携プロジェクト推進', 'Domestic and International Collaboration Project Promotion')}
              </h3>
              <p className="feature-description">
                {t(
                  '水産庁、マレーシア政府、学術機関、JTB総合研究所などとの連携プロジェクトを推進。世界規模でのMVファクトリー展開と持続可能な社会の実現を目指しています。',
                  'Promoting collaboration projects with the Fisheries Agency, Malaysian government, academic institutions, JTB Research Institute, and others. We aim to expand MV Factory globally and realize a sustainable society.'
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* グループ会社 */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              {t('グループ会社', 'Group Companies')}
            </h2>
            <p className="section-subtitle">
              {t(
                'マザーベジタブルとMVファクトリーの事業展開を支える専門性の高いグループ会社',
                'Highly specialized group companies supporting the business development of Mother Vegetables and MV Factory'
              )}
            </p>
          </div>

          <div className="application-section">
            <div className="application-grid">
              <div className="application-card fade-in-up">
              <h4 className="application-card-title">
                    {t('Terra Plus株式会社', 'Terra Plus Co., Ltd.')}
                </h4>
                <p className="application-card-description">
                  {t(
                    'MotherVegetables 原材料取り扱い',
                    'MotherVegetables raw material handling'
                  )}
                </p>
                <p className="application-card-description">
                  {t(
                    'マザーベジタブル関連商品の卸売事業を展開。食品、化粧品、医薬品、工業製品など、多岐にわたる分野への原材料供給を担当しています。',
                    'Develops wholesale business for Mother Vegetables-related products. Responsible for raw material supply to various fields including food, cosmetics, pharmaceuticals, and industrial products.'
                  )}
                </p>
                <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
                  <a 
                    href="https://terraplus.co.jp" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-outline"
                    style={{
                      display: 'inline-block',
                      padding: '0.75rem 1.5rem',
                      border: '2px solid var(--primary-500)',
                      color: 'var(--primary-600)',
                      textDecoration: 'none',
                      borderRadius: 'var(--radius-md)',
                      fontWeight: '600',
                      fontSize: '0.875rem',
                      transition: 'var(--transition-fast)'
                    }}
                    onMouseOver={(e) => {
                      e.target.style.backgroundColor = 'var(--primary-500)';
                      e.target.style.color = 'white';
                    }}
                    onMouseOut={(e) => {
                      e.target.style.backgroundColor = 'transparent';
                      e.target.style.color = 'var(--primary-600)';
                    }}
                  >
                    {t('ウェブサイトを見る', 'Visit Website')}
                  </a>
                </div>
              </div>

              <div className="application-card fade-in-up">
              <h4 className="application-card-title">
                    {t('dotpb株式会社', 'dotpb Co., Ltd.')}
                </h4>
                <p className="application-card-description">
                  {t(
                    'マザーベジタブルおよびMVファクトリーの販売促進',
                    'Sales promotion of Mother Vegetables and MV Factory'
                  )}
                </p>
                <p className="application-card-description">
                  {t(
                    'マザーベジタブルとMVファクトリーの市場展開、ブランディング、マーケティング活動を担当。持続可能な未来への価値提案を行っています。',
                    'Responsible for market development, branding, and marketing activities for Mother Vegetables and MV Factory. Provides value propositions for a sustainable future.'
                  )}
                </p>
                <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
                  <a 
                    href="https://dotpb.jp" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-outline"
                    style={{
                      display: 'inline-block',
                      padding: '0.75rem 1.5rem',
                      border: '2px solid var(--primary-500)',
                      color: 'var(--primary-600)',
                      textDecoration: 'none',
                      borderRadius: 'var(--radius-md)',
                      fontWeight: '600',
                      fontSize: '0.875rem',
                      transition: 'var(--transition-fast)'
                    }}
                    onMouseOver={(e) => {
                      e.target.style.backgroundColor = 'var(--primary-500)';
                      e.target.style.color = 'white';
                    }}
                    onMouseOut={(e) => {
                      e.target.style.backgroundColor = 'transparent';
                      e.target.style.color = 'var(--primary-600)';
                    }}
                  >
                    {t('ウェブサイトを見る', 'Visit Website')}
                  </a>
                </div>
              </div>

              <div className="application-card fade-in-up">
                <h4 className="application-card-title">
                    {t('全国姉妹漁協推進協議会株式会社', 'National Sister Fisheries Promotion Council Co., Ltd.')}
                </h4>
                <p className="application-card-description">
                  {t(
                    '海業推進・全国の港へのMVファクトリー建設・全国の港でのマザーベジタブルの養殖・伊豆漁業協同組合との連携・JTB総研との連携',
                    'Marine industry promotion, MV Factory construction at ports nationwide, Mother Vegetables cultivation at ports nationwide, collaboration with Izu Fisheries Cooperative, collaboration with JTB Research Institute'
                  )}
                </p>
                <p className="application-card-description">
                  {t(
                    '静岡県の河津町からマザーベジタブルを活用した海業促進を行い、全国の漁業協同組合との連携により持続可能な海洋資源活用を推進しています。',
                    'Promotes marine industry using Mother Vegetables from Kawazu Town, Shizuoka Prefecture, and promotes sustainable marine resource utilization through collaboration with fisheries cooperatives nationwide.'
                  )}
                </p>
                <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
                  <a 
                    href="https://sis-mo.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-outline"
                    style={{
                      display: 'inline-block',
                      padding: '0.75rem 1.5rem',
                      border: '2px solid var(--primary-500)',
                      color: 'var(--primary-600)',
                      textDecoration: 'none',
                      borderRadius: 'var(--radius-md)',
                      fontWeight: '600',
                      fontSize: '0.875rem',
                      transition: 'var(--transition-fast)'
                    }}
                    onMouseOver={(e) => {
                      e.target.style.backgroundColor = 'var(--primary-500)';
                      e.target.style.color = 'white';
                    }}
                    onMouseOut={(e) => {
                      e.target.style.backgroundColor = 'transparent';
                      e.target.style.color = 'var(--primary-600)';
                    }}
                  >
                    {t('ウェブサイトを見る', 'Visit Website')}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* お問い合わせ */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              {t('お問い合わせ', 'Contact Us')}
            </h2>
            <p className="section-subtitle">
              {t(
                'マザーベジタブルやMVファクトリーに関するご質問、ご相談はお気軽にお問い合わせください。',
                'Please feel free to contact us with any questions or consultations regarding Mother Vegetables or MV Factory.'
              )}
            </p>
          </div>

          <div className="cta-section">
            <Link href="/contact" className="btn btn-primary">
              {t('お問い合わせフォームへ', 'Go to Contact Form')}
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Company;

