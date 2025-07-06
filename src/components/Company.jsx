'use client';

import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import Layout from './Layout';

const Company = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      {/* ヒーローセクション */}
      <section className="hero">
        <img src="/hero-company-bg.jpg" alt="Company" className="hero-bg" />
        <div className="hero-content fade-in-up">
          <h1 className="hero-title">{t('会社概要', 'Company Overview')}</h1>
          <p className="hero-subtitle">
            {t(
              'マザーベジタブルとMVファクトリーで持続可能な未来を創造する',
              'Creating a sustainable future with Mother Vegetables and MV Factory'
            )}
          </p>
        </div>
      </section>

      {/* 以下、元の Company.jsx の内容を保持 */}
      {/* 基本情報 */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t('基本情報', 'Basic Information')}</h2>
          </div>
          <div className="company-info-table">
            <table className="info-table">
              <tbody>
                <tr>
                  <td className="info-label">{t('会社名', 'Company Name')}</td>
                  <td className="info-value">Algae International Japan株式会社</td>
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
                  <td className="info-value">松浦　亮介</td>
                </tr>
                <tr>
                  <td className="info-label">{t('本社所在地', 'Head Office Location')}</td>
                  <td className="info-value">〒103-0026　東京都中央区日本橋兜町5-1 兜町第１平和ビル3階</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 他セクション ... 省略していますが元ファイルの内容を追加可能 */}
    </Layout>
  );
};

export default Company;
