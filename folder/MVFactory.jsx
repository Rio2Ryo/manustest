'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '../src/contexts/LanguageContext';
import Layout from '../src/components/Layout';
import Image from 'next/image';
import heroBg from './hero-mv-factory-bg.jpg';

const MVFactory = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      {/* ヒーローセクション */}
      <section className="hero">
        <Image src={heroBg} alt="MV Factory" className="hero-bg" priority />
        <div className="hero-content fade-in-up">
          <h1 className="hero-title">
            {t('MVファクトリー', 'MV Factory')}
          </h1>
          <p className="hero-subtitle">
            {t(
              '世界最速の育成システムで、マザーベジタブルを安定的に生産。かつて「希望」と呼ばれた藻類養殖の革命',
              'Stable production of Mother Vegetables with the world\'s fastest growing system. The revolution of algae cultivation once called "hope"'
            )}
          </p>
        </div>
      </section>

      {/* かつて「希望」と呼ばれた藻類養殖 */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              {t('かつて「希望」と呼ばれた藻類養殖', 'Algae Cultivation Once Called "Hope"')}
            </h2>
            <p className="section-subtitle">
              {t(
                '藻類養殖は、かつて「希望」と呼ばれていました。しかし、その希望は長い間、現実のものとはなりませんでした。',
                'Algae cultivation was once called "hope." However, this hope had not become reality for a long time.'
              )}
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-card fade-in-up">
              <h3 className="feature-title">
                {t('環境条件への依存', 'Dependence on Environmental Conditions')}
              </h3>
              <p className="feature-description">
                {t(
                  '天候や温度、光の条件に左右され、一定の品質を保つことが極めて困難でした。従来の藻類養殖では、自然環境の変化に対応できませんでした。',
                  'It was extremely difficult to maintain consistent quality due to weather, temperature, and light conditions. Conventional algae cultivation could not respond to changes in the natural environment.'
                )}
              </p>
            </div>

            <div className="feature-card fade-in-up">
              <h3 className="feature-title">
                {t('安定生産の困難', 'Difficulty in Stable Production')}
              </h3>
              <p className="feature-description">
                {t(
                  '藻類の育成が非常に困難で、安定した生産が実現できませんでした。品質のばらつきや収量の不安定さが大きな課題でした。',
                  'Algae cultivation was extremely difficult, and stable production could not be achieved. Quality variations and unstable yields were major challenges.'
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 革新的技術による解決 */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              {t('国際特許WO2023234767による革新', 'Innovation Through International Patent WO2023234767')}
            </h2>
            <p className="section-subtitle">
              {t(
                'MVファクトリーは、国際特許WO2023234767に基づく革新的な技術により、これらの課題を根本的に解決しました。',
                'MV Factory has fundamentally solved these challenges with innovative technology based on international patent WO2023234767.'
              )}
            </p>
          </div>

          <div className="application-section">
            <h3 className="application-title">
              {t('AIによる光制御システム', 'AI-Powered Light Control System')}
            </h3>
            <div className="application-grid">
              <div className="application-card fade-in-up">
                <div className="application-icon">01</div>
                <h4 className="application-card-title">
                  {t('24時間365日の監視', '24/7/365 Monitoring')}
                </h4>
                <p className="application-card-description">
                  {t(
                    'AIが24時間365日監視し、マザーベジタブルの成長段階に応じて最適な光の波長、強度、照射時間を自動調整します。',
                    'AI monitors 24/7/365 and automatically adjusts optimal light wavelength, intensity, and irradiation time according to the growth stage of Mother Vegetables.'
                  )}
                </p>
              </div>

              <div className="application-card fade-in-up">
                <div className="application-icon">02</div>
                <h4 className="application-card-title">
                  {t('精密な光制御', 'Precise Light Control')}
                </h4>
                <p className="application-card-description">
                  {t(
                    '従来の養殖方法では人の経験と勘に頼っていた部分を、AIが科学的データに基づいて最適な環境を維持します。',
                    'While conventional cultivation methods relied on human experience and intuition, AI maintains optimal conditions based on scientific data.'
                  )}
                </p>
              </div>

              <div className="application-card fade-in-up">
                <div className="application-icon">03</div>
                <h4 className="application-card-title">
                  {t('30倍の育成スピード', '30x Growth Speed')}
                </h4>
                <p className="application-card-description">
                  {t(
                    '従来の藻類養殖と比較して約30倍の速度でマザーベジタブルを育成。AIによる最適化された環境制御の成果です。',
                    'Grows Mother Vegetables at approximately 30 times the speed compared to conventional algae cultivation. This is the result of AI-optimized environmental control.'
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 設置の自由度 */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              {t('設置箇所を選ばないMVファクトリー', 'MV Factory That Doesn\'t Choose Installation Location')}
            </h2>
            <p className="section-subtitle">
              {t(
                '従来の農業のように広大な土地や特定の気候条件を必要としません。完全制御環境により、世界中どこでも設置が可能です。',
                'Does not require vast land or specific climate conditions like conventional agriculture. With a completely controlled environment, it can be installed anywhere in the world.'
              )}
            </p>
          </div>

          <div className="zero-impact-grid">
            <div className="zero-impact-card fade-in-up">
              <div className="zero-impact-icon">01</div>
              <h4 className="zero-impact-title">
                {t('都市部設置', 'Urban Installation')}
              </h4>
              <p className="zero-impact-description">
                {t(
                  'ビルの一室から高層建築まで、都市部のあらゆる場所に設置可能。',
                  'Can be installed anywhere in urban areas, from a room in a building to high-rise structures.'
                )}
              </p>
            </div>

            <div className="zero-impact-card fade-in-up">
              <div className="zero-impact-icon">02</div>
              <h4 className="zero-impact-title">
                {t('砂漠地帯', 'Desert Areas')}
              </h4>
              <p className="zero-impact-description">
                {t(
                  '砂漠のような過酷な環境でも、室内制御により安定した生産を実現。',
                  'Achieves stable production even in harsh environments like deserts through indoor control.'
                )}
              </p>
            </div>

            <div className="zero-impact-card fade-in-up">
              <div className="zero-impact-icon">03</div>
              <h4 className="zero-impact-title">
                {t('極地対応', 'Polar Region Compatible')}
              </h4>
              <p className="zero-impact-description">
                {t(
                  '極地のような極限環境でも、完全制御システムにより運用可能。',
                  'Can operate even in extreme environments like polar regions with complete control systems.'
                )}
              </p>
            </div>

            <div className="zero-impact-card fade-in-up">
              <div className="zero-impact-icon">04</div>
              <h4 className="zero-impact-title">
                {t('海上設置', 'Marine Installation')}
              </h4>
              <p className="zero-impact-description">
                {t(
                  '船舶や海上プラットフォームでの設置も可能。場所を選ばない柔軟性。',
                  'Installation on ships and marine platforms is also possible. Flexibility that doesn\'t choose location.'
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 国内外連携プロジェクト */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              {t('国内外連携プロジェクト', 'Domestic and International Collaboration Projects')}
            </h2>
            <p className="section-subtitle">
              {t(
                '世界規模での展開を進めるため、各国政府機関や学術機関との戦略的パートナーシップを構築しています。',
                'We are building strategic partnerships with government agencies and academic institutions in various countries to advance global expansion.'
              )}
            </p>
          </div>

          <div className="definition-grid">
            <div className="definition-card fade-in-up">
              <div className="definition-header">
                <div className="definition-icon">🏛️</div>
                <h3 className="definition-title">
                  {t('政府機関との連携', 'Collaboration with Government Agencies')}
                </h3>
              </div>
              <ul className="definition-list">
                <li className="definition-item">
                  {t('水産庁との持続可能な海洋資源活用プロジェクト', 'Sustainable marine resource utilization project with Fisheries Agency')}
                </li>
                <li className="definition-item">
                  {t('マレーシア政府との食料安全保障強化プログラム', 'Food security enhancement program with Malaysian government')}
                </li>
                <li className="definition-item">
                  {t('静岡県河津町での地域活性化モデル事業', 'Regional revitalization model project in Kawazu Town, Shizuoka Prefecture')}
                </li>
              </ul>
            </div>

            <div className="definition-card fade-in-up">
              <div className="definition-header">
                <div className="definition-icon">🎓</div>
                <h3 className="definition-title">
                  {t('学術機関・研究機関', 'Academic and Research Institutions')}
                </h3>
              </div>
              <ul className="definition-list">
                <li className="definition-item">
                  {t('各種学術機関との共同研究開発', 'Joint research and development with various academic institutions')}
                </li>
                <li className="definition-item">
                  {t('JTB総合研究所との観光業界への応用研究', 'Applied research for tourism industry with JTB Research Institute')}
                </li>
                <li className="definition-item">
                  {t('国際的な研究ネットワークの構築', 'Building international research networks')}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 未来のビジョン */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              {t('実現間近な未来の姿', 'Near-Future Vision')}
            </h2>
            <p className="section-subtitle">
              {t(
                '私たちが目指すのは、「一家に一台のMVファクトリー」がある未来です。この未来では、食と健康、そして地球環境の安心を同時に実現できます。',
                'We aim for a future where there is "one MV Factory per household." In this future, we can simultaneously achieve food security, health, and environmental peace of mind.'
              )}
            </p>
          </div>

          <div className="application-section">
            <div className="application-grid application-grid-2">
              <div className="application-card fade-in-up">
                <h4 className="application-card-title">
                  {t('家庭での自給自足', 'Household Self-Sufficiency')}
                </h4>
                <p className="application-card-description">
                  {t(
                    '各家庭が自分たちの食料を自給自足でき、食料安全保障を個人レベルで実現。新鮮で安全な食材をいつでも手に入れることができます。',
                    'Each household can be self-sufficient in their food supply, achieving food security at the individual level. Fresh and safe ingredients are always available.'
                  )}
                </p>
              </div>

              <div className="application-card fade-in-up">
                <h4 className="application-card-title">
                  {t('持続可能な未来への扉', 'Gateway to Sustainable Future')}
                </h4>
                <p className="application-card-description">
                  {t(
                    'MVファクトリーは、単なる生産設備ではなく、持続可能な未来への扉。地球環境を守りながら、豊かな食生活を実現する革新的なソリューションです。',
                    'MV Factory is not just production equipment, but a gateway to a sustainable future. It\'s an innovative solution that achieves a rich food life while protecting the global environment.'
                  )}
                </p>
              </div>
            </div>
          </div>

          <div className="cta-section">
            <p className="cta-text">
              {t(
                'MVファクトリーで育てられるマザーベジタブルの詳細については、マザーベジタブルページをご覧ください。',
                'For details about Mother Vegetables grown in MV Factory, please see the Mother Vegetables page.'
              )}
            </p>
            <Link href="/mother-vegetables" className="btn btn-primary">
              {t('マザーベジタブルについて詳しく見る', 'Learn More About Mother Vegetables')}
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MVFactory;

