'use client';

import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import Layout from './Layout';

const SustainableVision = () => {
  const { t } = useLanguage();
  return (
    <Layout>
      <section className="hero" style={{
        backgroundImage: 'url(/sustainable-vision-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative'
      }}>
        <div className="hero-overlay"></div>
        <div className="hero-content fade-in-up">
          <h1 className="hero-title">{t('サステナブルビジョン', 'Sustainable Vision')}</h1>
          <p className="hero-subtitle">
            {t(
              '「豊かさ」と引き換えに削られてきた地球を、再び豊かにする。天然芝の700倍のCO₂吸収で実現する持続可能な未来',
              'Enriching the earth that has been depleted in exchange for "prosperity." A sustainable future achieved via CO₂ absorption 700× that of natural grass.'
            )}
          </p>
        </div>
      </section>
      {/* 追加の内容は元ファイルを必要に応じて移植 */}
    </Layout>
  );
};

export default SustainableVision;
