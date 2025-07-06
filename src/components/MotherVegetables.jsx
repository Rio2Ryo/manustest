'use client';

import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import Layout from './Layout';

const MotherVegetables = () => {
  const { t } = useLanguage();
  return (
    <Layout>
      <section className="hero">
        <img src="/hero-mother-vegetables-bg.jpg" alt="Mother Vegetables" className="hero-bg" />
        <div className="hero-content fade-in-up">
          <h1 className="hero-title">{t('マザーベジタブル', 'Mother Vegetables')}</h1>
          <p className="hero-subtitle">
            {t(
              '育てるほどに、あなたも地球も豊かになる。30億年の歴史を持つ「地球のはじまりの植物」',
              'The more it grows, the richer you and the Earth become. 3-billion-year-old "Earth\'s first plants".'
            )}
          </p>
        </div>
      </section>
      {/* 追加の内容は元ファイルを必要に応じて移植 */}
    </Layout>
  );
};

export default MotherVegetables;
