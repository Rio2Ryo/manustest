'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '../src/contexts/LanguageContext';
import Layout from '../src/components/Layout';
import sustainableBg from './sustainable-vision-bg.jpg';

const SustainableVision = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      {/* ヒーローセクション */}
      <section 
        className="hero"
        style={{
          backgroundImage: `url(${sustainableBg.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '60vh',
          display: 'flex',
          alignItems: 'center',
          position: 'relative'
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content fade-in-up">
          <h1 className="hero-title">
            {t('サステナブルビジョン', 'Sustainable Vision')}
          </h1>
          <p className="hero-subtitle">
            {t(
              '「豊かさ」と引き換えに削られてきた地球を、再び豊かにする。天然芝の700倍のCO₂吸収で実現する持続可能な未来',
              'Enriching the earth that has been depleted in exchange for "prosperity." A sustainable future realized through CO₂ absorption 700 times that of natural grass'
            )}
          </p>
        </div>
      </section>

      {/* 地球の現状 */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              {t('「豊かさ」と引き換えに削られてきた地球', 'Earth Depleted in Exchange for "Prosperity"')}
            </h2>
            <p className="section-subtitle">
              {t(
                '私たちの生活が豊かになる一方で、地球環境は深刻な危機に直面しています。工業化の進展により、環境負荷は限界を超えつつあります。',
                'While our lives have become richer, the global environment faces a serious crisis. With the advancement of industrialization, environmental burden is approaching its limits.'
              )}
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-card fade-in-up">
              <div className="feature-icon">
                <div className="icon-circle">
                  <span className="icon-text">01</span>
                </div>
              </div>
              <h3 className="feature-title">
                {t('気候変動の加速', 'Accelerating Climate Change')}
              </h3>
              <p className="feature-description">
                {t(
                  '産業革命以降、大気中のCO₂濃度は急激に上昇し、地球温暖化が深刻化。異常気象の頻発により、生態系と人間社会に大きな影響を与えています。',
                  'Since the Industrial Revolution, atmospheric CO₂ concentrations have risen rapidly, exacerbating global warming. Frequent extreme weather events are significantly impacting ecosystems and human society.'
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
                {t('工業汚染の拡大', 'Expansion of Industrial Pollution')}
              </h3>
              <p className="feature-description">
                {t(
                  '従来の工業製品の製造過程では、有害物質の排出や環境汚染が避けられませんでした。これらの汚染は土壌、水質、大気すべてに深刻な影響を与えています。',
                  'In conventional industrial product manufacturing processes, emission of harmful substances and environmental pollution were unavoidable. These pollutions seriously affect soil, water quality, and atmosphere.'
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4つのゼロ効果 */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              {t('工業用品すら汚染リスクゼロの実現', 'Achieving Zero Contamination Risk Even for Industrial Products')}
            </h2>
            <p className="section-subtitle">
              {t('全てをゼロに。CO₂・公害・人体汚染・エネルギーも全てゼロ。', 'Everything to zero. CO₂, pollution, human contamination, and energy all to zero.')}
            </p>
          </div>

          <div className="zero-impact-grid">
            <div className="zero-impact-card fade-in-up">
              <h4 className="zero-impact-title">
                {t('CO₂ゼロ', 'Zero CO₂')}
              </h4>
              <p className="zero-impact-description">
                {t(
                  '通常、生産過程で発生するCO₂を、逆に生産過程でCO₂を吸収。製造するほど大気中のCO₂が減少します。',
                  'Instead of generating CO₂ during production, it absorbs CO₂ during the production process. The more we manufacture, the more atmospheric CO₂ decreases.'
                )}
              </p>
            </div>

            <div className="zero-impact-card fade-in-up">
              <h4 className="zero-impact-title">
                {t('公害ゼロ', 'Zero Pollution')}
              </h4>
              <p className="zero-impact-description">
                {t(
                  'マザーベジタブル由来の工業製品を使えば公害リスクもゼロに。環境汚染の心配なく、安心して使用できます。',
                  'Using industrial products derived from Mother Vegetables reduces pollution risk to zero. Can be used safely without worrying about environmental contamination.'
                )}
              </p>
            </div>

            <div className="zero-impact-card fade-in-up">
              <h4 className="zero-impact-title">
                {t('人体汚染ゼロ', 'Zero Human Contamination')}
              </h4>
              <p className="zero-impact-description">
                {t(
                  'マザーベジタブル由来の工業製品なら人体や動物の体内汚染もゼロに。健康への悪影響を心配する必要がありません。',
                  'Industrial products derived from Mother Vegetables eliminate human and animal body contamination. No need to worry about adverse health effects.'
                )}
              </p>
            </div>

            <div className="zero-impact-card fade-in-up">
              <h4 className="zero-impact-title">
                {t('エネルギーゼロ', 'Zero Energy')}
              </h4>
              <p className="zero-impact-description">
                {t(
                  '製造に石油やガソリンなどに頼らない、一次、二次エネルギーをゼロに。持続可能なエネルギーサイクルを実現します。',
                  'Manufacturing does not rely on oil or gasoline, reducing primary and secondary energy to zero. Realizes a sustainable energy cycle.'
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ノーダメージ工業製品 */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              {t('ノーダメージ工業製品の具体例', 'Specific Examples of No-Damage Industrial Products')}
            </h2>
            <p className="section-subtitle">
              {t(
                'マザーベジタブルから作られる工業製品は、従来の製品と同等以上の性能を持ちながら、環境への負荷を完全にゼロにします。',
                'Industrial products made from Mother Vegetables have performance equal to or better than conventional products while completely eliminating environmental burden.'
              )}
            </p>
          </div>

          <div className="definition-grid">
            <div className="definition-card fade-in-up">
              <div className="definition-header">
                <div className="definition-icon">🧪</div>
                <h3 className="definition-title">
                  {t('先端素材分野', 'Advanced Materials Field')}
                </h3>
              </div>
              <ul className="definition-list">
                <li className="definition-item">
                  {t('超高純度オーガニックシリカ（医薬品原料規格対応）', 'Ultra-high purity organic silica (pharmaceutical raw material standard compliant)')}
                </li>
                <li className="definition-item">
                  {t('生分解性プラスチック代替素材', 'Biodegradable plastic alternative materials')}
                </li>
                <li className="definition-item">
                  {t('天然由来の高機能繊維', 'Natural high-performance fibers')}
                </li>
                <li className="definition-item">
                  {t('環境負荷ゼロの工業用オイル', 'Zero environmental impact industrial oils')}
                </li>
              </ul>
            </div>

            <div className="definition-card fade-in-up">
              <div className="definition-header">
                <div className="definition-icon">🌿</div>
                <h3 className="definition-title">
                  {t('環境性能の特徴', 'Environmental Performance Characteristics')}
                </h3>
              </div>
              <ul className="definition-list">
                <li className="definition-item">
                  {t('完全生分解性で土壌汚染リスクゼロ', 'Completely biodegradable with zero soil contamination risk')}
                </li>
                <li className="definition-item">
                  {t('製造過程でのCO₂排出量マイナス', 'Negative CO₂ emissions during manufacturing process')}
                </li>
                <li className="definition-item">
                  {t('有害化学物質を一切含まない安全性', 'Safety with no harmful chemicals')}
                </li>
                <li className="definition-item">
                  {t('リサイクル可能で循環型経済に貢献', 'Recyclable and contributes to circular economy')}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 先端素材と環境性能の両立 */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              {t('先端素材と環境性能の両立', 'Balancing Advanced Materials and Environmental Performance')}
            </h2>
            <p className="section-subtitle">
              {t(
                '従来は「高性能」と「環境配慮」は相反するものとされてきました。しかし、マザーベジタブルはこの常識を覆し、両方を同時に実現します。',
                'Traditionally, "high performance" and "environmental consideration" were considered contradictory. However, Mother Vegetables overturn this common sense and achieve both simultaneously.'
              )}
            </p>
          </div>

          <div className="application-section">
            <div className="application-grid">
              <div className="application-card fade-in-up">
                <h4 className="application-card-title">
                  {t('高純度素材の開発', 'Development of High-Purity Materials')}
                </h4>
                <p className="application-card-description">
                  {t(
                    '従来の工業製品では実現できなかった高純度素材を、マザーベジタブルから抽出。医療機器や精密機械に使用される最高品質の素材を提供します。',
                    'Extracts high-purity materials from Mother Vegetables that could not be achieved with conventional industrial products. Provides the highest quality materials used in medical devices and precision machinery.'
                  )}
                </p>
              </div>

              <div className="application-card fade-in-up">
                <h4 className="application-card-title">
                  {t('完全生分解性素材', 'Completely Biodegradable Materials')}
                </h4>
                <p className="application-card-description">
                  {t(
                    '高性能でありながら、使用後は自然に還る完全な生分解性を実現。製品のライフサイクル全体を通じて環境負荷ゼロを維持します。',
                    'While being high-performance, achieves complete biodegradability that returns to nature after use. Maintains zero environmental burden throughout the entire product lifecycle.'
                  )}
                </p>
              </div>
            </div>
          </div>

          <div className="cta-section">
            <p className="cta-text">
              {t(
                'このような革新的な素材を生産するMVファクトリーの詳細については、MVファクトリーページをご覧ください。',
                'For details about MV Factory that produces such innovative materials, please see the MV Factory page.'
              )}
            </p>
            <Link href="/mv-factory" className="btn btn-primary">
              {t('MVファクトリーについて詳しく見る', 'Learn More About MV Factory')}
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SustainableVision;

