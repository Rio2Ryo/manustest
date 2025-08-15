import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import Layout from '../components/Layout';

const Home = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      {/* ヒーローセクション */}
      <section className="hero">
        <img 
          src="/hero-home-bg.jpg" 
          alt="Algae cultivation facility" 
          className="hero-bg"
        />
        <div className="hero-content fade-in-up">
          <h1 className="hero-title">
            {t('Oldest Plant, Newest Power.', 'Oldest Plant, Newest Power.')}
          </h1>
          <p className="hero-subtitle">
            {t('"地球のはじまりの植物"で世界を満たす。', 'Filling the world with "Earth\'s first plants".')}
          </p>
          <p className="hero-description">
            {t('「足りない」を"奪い合う"時代から、"育てて満たす"時代へ。', 'From an era of "competing for scarcity" to an era of "growing abundance".')}
          </p>
        </div>
      </section>

      {/* マザーベジタブルセクション */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              {t('What is Mother Vegetables?', 'What is Mother Vegetables?')}
            </h2>
            <p className="section-subtitle">
              {t('それが育つほど、あなたも地球も満たされる。', 'The more it grows, the more you and the Earth are fulfilled.')}
            </p>
          </div>

          <div className="premium-grid premium-grid-2">
            <div className="premium-card premium-card-gradient-1 fade-in-up">
              <div className="premium-card-number">01</div>
              <h3 className="premium-card-title">
                {t('30億年の歴史', '3 Billion Years of History')}
              </h3>
              <p className="premium-card-description">
                {t('30億年にわたり姿を保ち続けてきた、あらゆる生命の起源となる"地球のはじまりの植物たち"。マザーベジタブルは、食、美しさ、そして環境をも支える、未来の恵みです。', 'The "Earth\'s first plants" that have maintained their form for 3 billion years, the origin of all life. Mother Vegetables are future blessings that support food, beauty, and the environment.')}
              </p>
            </div>

            <div className="premium-card premium-card-gradient-2 fade-in-up">
              <div className="premium-card-number">02</div>
              <h3 className="premium-card-title">
                {t('オーガニックな恵み', 'Organic Blessings')}
              </h3>
              <p className="premium-card-description">
                {t('あるものは食となり、あるものは美を整え、あるものは空気を浄化して地球を癒す。人と地球をケミカルから解き放ち、オーガニックな恵みで健やかさを育てながら、CO₂削減にも貢献します。', 'Some become food, some enhance beauty, and some purify the air to heal the Earth. Freeing people and the planet from chemicals, nurturing wellness with organic blessings while contributing to CO₂ reduction.')}
              </p>
            </div>
          </div>

          <div className="premium-cta-section">
            <Link to="/mother-vegetables" className="btn btn-primary btn-premium">
              {t('詳細はこちら', 'Learn More')}
            </Link>
          </div>
        </div>
      </section>

      {/* MVファクトリーセクション */}
      <section className="section section-premium-alt">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              {t('What is MVファクトリー?', 'What is MV Factory?')}
            </h2>
            <p className="section-subtitle">
              {t('太陽光に頼らず、30倍の速さで育つ次世代モジュール。', 'Next-generation modules that grow 30 times faster without relying on sunlight.')}
            </p>
          </div>

          <div className="premium-grid premium-grid-3">
            <div className="premium-card premium-card-elevated fade-in-up">
              <div className="premium-card-number premium-card-number-accent">01</div>
              <h3 className="premium-card-title">
                {t('国際特許取得済', 'International Patent Acquired')}
              </h3>
              <p className="premium-card-description">
                {t('国際特許取得済の技術により、持続可能な供給システムの新しい基準となっています。', 'With internationally patented technology, it sets a new standard for sustainable supply systems.')}
              </p>
            </div>

            <div className="premium-card premium-card-elevated fade-in-up">
              <div className="premium-card-number premium-card-number-accent">02</div>
              <h3 className="premium-card-title">
                {t('30倍の育成スピード', '30x Growth Speed')}
              </h3>
              <p className="premium-card-description">
                {t('従来の約30倍という驚異的な育成スピードで、季節や天候にも左右されず、最適な生育条件を常に保ちます。', 'With an amazing growth speed of about 30 times conventional methods, it maintains optimal growing conditions regardless of season or weather.')}
              </p>
            </div>

            <div className="premium-card premium-card-elevated fade-in-up">
              <div className="premium-card-number premium-card-number-accent">03</div>
              <h3 className="premium-card-title">
                {t('どこでも設置可能', 'Installable Anywhere')}
              </h3>
              <p className="premium-card-description">
                {t('都市部や未開発地にも展開でき、限られたスペースでの効率的な生産が可能です。', 'Can be deployed in urban areas and undeveloped land, enabling efficient production in limited spaces.')}
              </p>
            </div>
          </div>

          <div className="premium-cta-section">
            <Link to="/mv-factory" className="btn btn-primary btn-premium">
              {t('詳細はこちら', 'Learn More')}
            </Link>
          </div>
        </div>
      </section>

      {/* サステナブルセクション */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              {t('サステナブルな取り組み', 'Sustainable Initiatives')}
            </h2>
            <p className="section-subtitle">
              {t('あなたの選択で、地球が蘇る。', 'Your choices revive the Earth.')}
            </p>
          </div>

          <div className="premium-grid premium-grid-2">
            <div className="premium-card premium-card-sustainable-1 fade-in-up">
              <div className="premium-card-highlight">700x</div>
              <h3 className="premium-card-title">
                {t('天然芝の700倍のCO₂吸収', '700x CO₂ Absorption vs Natural Grass')}
              </h3>
              <p className="premium-card-description">
                {t('MVファクトリーは天然芝の700倍ものCO₂を吸収し、マザーベジタブルを作れば作るほどCO₂は減少します。', 'MV Factory absorbs 700 times more CO₂ than natural grass, and the more Mother Vegetables we produce, the more CO₂ decreases.')}
              </p>
            </div>

            <div className="premium-card premium-card-sustainable-2 fade-in-up">
              <div className="premium-card-highlight">Zero</div>
              <h3 className="premium-card-title">
                {t('廃棄ゼロの循環システム', 'Zero-Waste Circular System')}
              </h3>
              <p className="premium-card-description">
                {t('マザーベジタブルは食料だけでなく、肥料、飼料、海の栄養にも活用可能。「廃棄」することなく、作れば作るほど地球を癒します。', 'Mother Vegetables can be used not only as food but also as fertilizer, feed, and ocean nutrients. Without "waste," the more we produce, the more we heal the Earth.')}
              </p>
            </div>
          </div>

          <div className="premium-cta-section">
            <Link to="/sustainable-vision" className="btn btn-primary btn-premium">
              {t('詳細はこちら', 'Learn More')}
            </Link>
          </div>
        </div>
      </section>

      {/* 連携プロジェクトセクション */}
      <section className="section section-premium-partners">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title" style={{ color: '#ffffff', fontWeight: 'bold' }}>
              {t('国内外連携プロジェクト', 'Domestic and International Partnership Projects')}
            </h2>
            <p className="section-subtitle" style={{ color: '#ffffff', opacity: 0.9 }}>
              {t('国境を越えた協働体制が、Mother Vegetablesのグローバルな可能性を支えています。', 'Cross-border collaboration supports the global potential of Mother Vegetables.')}
            </p>
          </div>

          <div className="premium-partners-grid mx-auto">
            <div className="premium-partner-card fade-in-up">
              <div className="premium-partner-number">01</div>
              <h4 className="premium-partner-title">{t('JTB総合研究所', 'JTB Tourism Research & Consulting')}</h4>
            </div>
            <div className="premium-partner-card fade-in-up">
              <div className="premium-partner-number">02</div>
              <h4 className="premium-partner-title">{t('水産庁', 'Fisheries Agency')}</h4>
            </div>
            <div className="premium-partner-card fade-in-up">
              <div className="premium-partner-number">03</div>
              <h4 className="premium-partner-title">{t('静岡県・河津町', 'Shizuoka Prefecture & Kawazu Town')}</h4>
            </div>
          </div>
        </div>
      </section>

      {/* CTAセクション */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              {t('私たちについて', 'About Us')}
            </h2>
            <p className="section-subtitle">
              {t('あなたと地球がともに満たされる仕組みを、私たちはかたちにしていきます。', 'We are shaping a system where both you and the Earth are fulfilled together.')}
            </p>
            <div className="premium-cta-section">
              <Link to="/company" className="btn btn-primary btn-premium">
                {t('会社概要', 'Company Overview')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;

