'use client';

import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import Layout from './Layout';

const MVFactory = () => {
  const { t } = useLanguage();
  return (
    <Layout>
      <section className="hero">
        <img src="/hero-mv-factory-bg.jpg" alt="MV Factory" className="hero-bg" />
        <div className="hero-content fade-in-up">
          <h1 className="hero-title">{t('MVファクトリー', 'MV Factory')}</h1>
          <p className="hero-subtitle">
            {t(
              '世界最速の育成システムで、マザーベジタブルを安定的に生産。かつて「希望」と呼ばれた藻類養殖の革命',
              'Stable production of Mother Vegetables with the world\'s fastest growing system. The revolution of algae cultivation once called "hope"'
            )}
          </p>
        </div>
      </section>
      {/* 追加の内容は元ファイルから必要に応じて移植 */}
    </Layout>
  );
};

export default MVFactory;
