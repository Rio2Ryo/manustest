'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '../src/contexts/LanguageContext';
import Layout from '../src/components/Layout';
import Image from 'next/image';
import heroBg from './hero-mother-vegetables-bg.jpg';

const MotherVegetables = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      {/* ヒーローセクション */}
      <section className="hero">
        <Image src={heroBg} alt="Mother Vegetables" className="hero-bg" priority />
        <div className="hero-content fade-in-up">
          <h1 className="hero-title">
            {t('マザーベジタブル', 'Mother Vegetables')}
          </h1>
          <p className="hero-subtitle">
            {t(
              '育てるほどに、あなたも地球も豊かになる。30億年の歴史を持つ「地球のはじまりの植物」',
              'The more it grows, the richer you and the earth become. "The beginning plants of the earth" with 3 billion years of history'
            )}
          </p>
        </div>
      </section>

      {/* マザーベジタブルとは */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              {t('マザーベジタブルとは', 'What is Mother Vegetables')}
            </h2>
            <p className="section-subtitle">
              {t(
                '30億年という長い歳月を経て姿を保ち続けてきた「地球のはじまりの植物」、それがマザーベジタブル（通称：マザベジ）です。',
                'Mother Vegetables (commonly known as "Mazabegi") are the "beginning plants of the earth" that have maintained their form for 3 billion years.'
              )}
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-card fade-in-up">
              <h3 className="feature-title">
                {t('約2,000種類の多様性', 'Diversity of About 2,000 Types')}
              </h3>
              <p className="feature-description">
                {t(
                  '私たちは、その中でも用途に応じて約2,000種類のタイプを選別・培養し、食・美容・環境・医療・工業など多分野に展開可能な素材として育てています。',
                  'We select and cultivate about 2,000 types according to their uses, growing them as materials that can be deployed in multiple fields including food, beauty, environment, medicine, and industry.'
                )}
              </p>
            </div>

            <div className="feature-card fade-in-up">
              <h3 className="feature-title">
                {t('光合成によるCO₂吸収', 'CO₂ Absorption Through Photosynthesis')}
              </h3>
              <p className="feature-description">
                {t(
                  'マザーベジタブルは、光合成によってCO₂を吸収しながら成長し、化学合成や農薬に頼らずとも、純粋で栄養価の高い恵みを次々に生み出します。',
                  'Mother Vegetables grow by absorbing CO₂ through photosynthesis, continuously producing pure and highly nutritious benefits without relying on chemical synthesis or pesticides.'
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 活用分野 */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              {t('世界最速で育つマザーベジタブルの活用分野', 'Application Fields of the World\'s Fastest Growing Mother Vegetables')}
            </h2>
            <p className="section-subtitle">
              {t(
                'お金があっても食べ物が買えない時代への提案として、マザーベジタブルは用途に応じて加工・抽出され、"食"や"美"、そして"医"の領域にまで応用される自由な素材です。',
                'As a proposal for an era when food cannot be bought even with money, Mother Vegetables are processed and extracted according to their uses, serving as versatile materials applied to the fields of "food," "beauty," and even "medicine."'
              )}
            </p>
          </div>

          {/* 食品分野 */}
          <div className="application-section">
            <h3 className="application-title">
              {t('食品分野への応用', 'Application to Food Industry')}
            </h3>
            <div className="application-grid">
              <div className="application-card fade-in-up">
                <h4 className="application-card-title">
                  {t('グルテンフリー＆高タンパク食品', 'Gluten-Free & High-Protein Foods')}
                </h4>
                <p className="application-card-description">
                  {t(
                    'スムージーやパンケーキミックス、ヘルシーな焼き菓子に使用され、毎日の食卓にオーガニックな恵みをお届けします。',
                    'Used in smoothies, pancake mixes, and healthy baked goods, bringing organic benefits to your daily dining table.'
                  )}
                </p>
              </div>

              <div className="application-card fade-in-up">
                <h4 className="application-card-title">
                  {t('天然着色料', 'Natural Coloring Agents')}
                </h4>
                <p className="application-card-description">
                  {t(
                    '米国で禁止された人工着色料の代替となる、ナチュラルな天然着色料として活用されています。',
                    'Used as natural coloring agents that serve as alternatives to artificial colorings banned in the United States.'
                  )}
                </p>
              </div>

              <div className="application-card fade-in-up">
                <h4 className="application-card-title">
                  {t('パーフェクト栄養食', 'Perfect Nutritional Food')}
                </h4>
                <p className="application-card-description">
                  {t(
                    '鉄分やカルシウム、ビタミンB群などを補う素材として、妊婦さんや子どもにも安全な無添加・非アレルゲンの栄養源です。',
                    'As a material that supplements iron, calcium, and B vitamins, it serves as a safe, additive-free, non-allergenic nutritional source for pregnant women and children.'
                  )}
                </p>
              </div>
            </div>
          </div>

          {/* 化粧品・医薬品分野 */}
          <div className="application-section">
            <h3 className="application-title">
              {t('化粧品・医薬品分野への応用', 'Application to Cosmetics & Pharmaceuticals')}
            </h3>
            <div className="application-grid application-grid-2">
              <div className="application-card fade-in-up">
                <div className="application-icon">01</div>
                <h4 className="application-card-title">
                  {t('植物性オイルの原料', 'Plant-Based Oil Raw Materials')}
                </h4>
                <p className="application-card-description">
                  {t(
                    '化粧品に多用される多種にわたる植物性オイルの原料として、持続可能性を意識するスキンケアブランドでの導入が進んでいます。',
                    'As raw materials for various plant-based oils widely used in cosmetics, adoption is progressing among skincare brands conscious of sustainability.'
                  )}
                </p>
              </div>

              <div className="application-card fade-in-up">
                <div className="application-icon">02</div>
                <h4 className="application-card-title">
                  {t('世界初の超高純度オーガニックシリカ', 'World\'s First Ultra-High Purity Organic Silica')}
                </h4>
                <p className="application-card-description">
                  {t(
                    '医薬品原料規格、医薬部外品原料規格の生成が可能で、肌の弾力回復・髪の強化などに貢献し、ナチュラルエイジングケアとして高評価を得ています。',
                    'Capable of producing pharmaceutical and quasi-drug raw material standards, contributing to skin elasticity recovery and hair strengthening, highly rated as natural anti-aging care.'
                  )}
                </p>
              </div>
            </div>
          </div>

          {/* 動植物向け分野 */}
          <div className="application-section">
            <h3 className="application-title">
              {t('動植物向け肥料・飼料への応用', 'Application to Animal & Plant Fertilizers & Feed')}
            </h3>
            <div className="application-grid application-grid-2">
              <div className="application-card fade-in-up">
                <div className="application-icon">01</div>
                <h4 className="application-card-title">
                  {t('ペット向け栄養補助素材', 'Pet Nutritional Supplement Materials')}
                </h4>
                <p className="application-card-description">
                  {t(
                    '犬や猫の腸内フローラを整えるサプリメント原料として活用され、便臭・口臭・皮膚状態の改善、シニア期の健康維持にも貢献します。',
                    'Used as supplement raw materials to regulate intestinal flora in dogs and cats, contributing to improvement of fecal odor, bad breath, and skin conditions, as well as health maintenance in senior years.'
                  )}
                </p>
              </div>

              <div className="application-card fade-in-up">
                <div className="application-icon">02</div>
                <h4 className="application-card-title">
                  {t('海洋生態系の回復支援', 'Marine Ecosystem Recovery Support')}
                </h4>
                <p className="application-card-description">
                  {t(
                    '磯焼けが進んだ沿岸部に投入することで、海藻の再生や魚の餌資源として機能し、生態系の循環を助け、漁業資源の再構築にもつながります。',
                    'By introducing it to coastal areas affected by barren grounds, it functions as seaweed regeneration and fish feed resources, helping ecosystem circulation and leading to fishery resource reconstruction.'
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 地球にノーダメージ工業製品 */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              {t('地球にノーダメージ工業製品への応用', 'Application to Zero-Damage Industrial Products')}
            </h2>
            <p className="section-subtitle">
              {t('全てをゼロに。CO₂・公害・人体汚染も全てゼロ。', 'Everything to zero. CO₂, pollution, and human contamination all to zero.')}
            </p>
          </div>

          <div className="zero-impact-grid">
            <div className="zero-impact-card fade-in-up">
              <div className="zero-impact-icon">01</div>
              <h4 className="zero-impact-title">
                {t('CO₂ゼロ', 'Zero CO₂')}
              </h4>
              <p className="zero-impact-description">
                {t(
                  '通常、生産過程で発生するCO₂を、逆に生産過程でCO₂を吸収。',
                  'Instead of generating CO₂ during production, it absorbs CO₂ during the production process.'
                )}
              </p>
            </div>

            <div className="zero-impact-card fade-in-up">
              <div className="zero-impact-icon">02</div>
              <h4 className="zero-impact-title">
                {t('公害ゼロ', 'Zero Pollution')}
              </h4>
              <p className="zero-impact-description">
                {t(
                  'マザーベジタブル由来の工業製品を使えば公害リスクもゼロに。',
                  'Using industrial products derived from Mother Vegetables reduces pollution risk to zero.'
                )}
              </p>
            </div>

            <div className="zero-impact-card fade-in-up">
              <div className="zero-impact-icon">03</div>
              <h4 className="zero-impact-title">
                {t('人体汚染ゼロ', 'Zero Human Contamination')}
              </h4>
              <p className="zero-impact-description">
                {t(
                  'マザーベジタブル由来の工業製品なら人体や動物の体内汚染もゼロに。',
                  'Industrial products derived from Mother Vegetables reduce human and animal internal contamination to zero.'
                )}
              </p>
            </div>

            <div className="zero-impact-card fade-in-up">
              <div className="zero-impact-icon">04</div>
              <h4 className="zero-impact-title">
                {t('エネルギーゼロ', 'Zero Energy')}
              </h4>
              <p className="zero-impact-description">
                {t(
                  '製造に石油やガソリンなどに頼らない、一次、二次エネルギーをゼロに。',
                  'Manufacturing without relying on oil or gasoline, reducing primary and secondary energy to zero.'
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* マザーベジタブルの定義 */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              {t('マザーベジタブルの定義', 'Definition of Mother Vegetables')}
            </h2>
            <p className="section-subtitle">
              {t(
                '以下の条件を満たしたものだけが「マザーベジタブル」としてお届けされます。',
                'Only those that meet the following conditions are delivered as "Mother Vegetables."'
              )}
            </p>
          </div>

          <div className="definition-grid">
            <div className="definition-card fade-in-up">
              <div className="definition-header">
                <div className="definition-icon">01</div>
                <h3 className="definition-title">
                  {t('養殖方法と成分の条件', 'Cultivation Method and Component Conditions')}
                </h3>
              </div>
              <ul className="definition-list">
                <li className="definition-item">
                  {t(
                    '単一成分を強調せず、植物全体のシナジーを尊重した構成',
                    'Composition that respects the synergy of the entire plant without emphasizing single components'
                  )}
                </li>
                <li className="definition-item">
                  {t(
                    '農薬などを使用せず、人体や動物の体内汚染をしない',
                    'No use of pesticides, no contamination of human or animal bodies'
                  )}
                </li>
                <li className="definition-item">
                  {t(
                    '施設に微細プラスチックや金属が混ざらない',
                    'No microplastics or metals mixed in facilities'
                  )}
                </li>
                <li className="definition-item">
                  {t(
                    '完全室内で育てられる（開放型、オープンボンドではない）',
                    'Grown completely indoors (not open-type or open pond)'
                  )}
                </li>
              </ul>
            </div>

            <div className="definition-card fade-in-up">
              <div className="definition-header">
                <div className="definition-icon">02</div>
                <h3 className="definition-title">
                  {t('地球環境側面の条件', 'Environmental Conditions')}
                </h3>
              </div>
              <ul className="definition-list">
                <li className="definition-item">
                  {t(
                    '完成した製品を使用する際に環境に負荷を与えない（ノーダメージ製品）',
                    'No environmental burden when using finished products (no-damage products)'
                  )}
                </li>
                <li className="definition-item">
                  {t(
                    '土壌汚染をしない設備',
                    'Equipment that does not cause soil contamination'
                  )}
                </li>
                <li className="definition-item">
                  {t(
                    '養殖時に一次、二次エネルギーを使用しない（石油、ガソリン等未使用）',
                    'No use of primary or secondary energy during cultivation (no oil, gasoline, etc.)'
                  )}
                </li>
                <li className="definition-item">
                  {t(
                    '育てるとカーボンマイナスを実現できる効率性（通常の10倍〜70倍の速さで育つなども含む）',
                    'Efficiency that achieves carbon negative when grown (including growing 10-70 times faster than normal)'
                  )}
                </li>
              </ul>
            </div>
          </div>

          <div className="definition-summary">
            <p className="definition-summary-text">
              {t(
                '作れば作るほど、環境を守ることに繋がり、人体汚染や不純物が混ざらないものをマザーベジタブルと呼びます。',
                'The more we produce, the more it contributes to environmental protection. We call Mother Vegetables those that do not cause human contamination or impurity contamination.'
              )}
            </p>
          </div>
        </div>
      </section>

      {/* 約2,000種類の個性 */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              {t('約2,000種類の個性を見極めて選び抜く', 'Identifying and Selecting from About 2,000 Unique Types')}
            </h2>
            <p className="section-subtitle">
              {t(
                '約2,000種類の個性あるマザーベジタブルの中から、目的に応じて最適なものを選び抜き、食品や美容原料、飼料、肥料など、さまざまなかたちに展開しています。',
                'From about 2,000 unique types of Mother Vegetables, we select the optimal ones according to purpose and develop them into various forms such as food, beauty ingredients, feed, and fertilizers.'
              )}
            </p>
          </div>

          <div className="cta-section">
            <p className="cta-text">
              {t(
                'それらを世界最速かつ安定的に育てる仕組みについては、MVファクトリーをご覧ください。',
                'For information about the system that grows them at the world\'s fastest and most stable rate, please see MV Factory.'
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

export default MotherVegetables;

