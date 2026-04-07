import { useState, useEffect } from 'react';
import { FaPlay, FaCheckCircle, FaLeaf, FaHandsHelping, FaPhoneAlt, FaComments, FaClock, FaSprayCan, FaShieldAlt } from 'react-icons/fa';
import './App.css';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app">
      {/* Navbar */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-logo">石原研洗</div>
        <ul className="nav-links">
          <li><a href="#about">品牌故事</a></li>
          <li><a href="#artisan">職人工法</a></li>
          <li><a href="#social">社會責任</a></li>
          <li><a href="#culture">企業文化</a></li>
        </ul>
        <button className="btn btn-primary" style={{ padding: '0.5rem 1.5rem' }}>預約服務</button>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <img src="/hero_section.png" alt="Hero Background" className="hero-bg" />
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">深呼吸，<br/>源自每一次的<span>講究</span></h1>
            <p className="hero-subtitle">專業洗滌，還原空氣的純粹。以大地色彩的溫潤與信賴，為您打造極致潔淨的居家呼吸體驗。</p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="#contact" className="btn btn-primary">立即預約清洗</a>
              <a href="#artisan" className="btn btn-outline">了解職人工法</a>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section id="about" className="container">
        <h2 className="section-title">品牌故事</h2>
        <p className="section-subtitle">看見需求，重新定義最高標準的潔淨</p>
        <div className="story-grid">
          <div className="story-image">
            <img src="/team_culture.png" alt="Brand Story" />
          </div>
          <div className="story-text">
            <h3>「我們不僅清洗冷氣，更守護您的每一次呼吸。」</h3>
            <p>一切始於對健康的關懷。創辦人看見許多過敏兒家庭的困擾，發現市面上多數的冷氣清洗僅做表面功夫，甚至使用強酸強鹼的化學洗劑，不僅損害機器，更可能殘留有毒物質。</p>
            <p>因此，「石原研洗」誕生了。我們堅持無毒、環保與極致的細節，將冷氣清洗升華為一種「職人藝術」。用對待家人的心，仔細洗淨每一片鰭片，帶給您最溫暖、安心的室內空氣。</p>
            <a href="#culture" className="btn btn-outline" style={{ marginTop: '1rem' }}>認識我們的團隊</a>
          </div>
        </div>
      </section>

      {/* Artisan Craftsmanship */}
      <section id="artisan" className="artisan-section">
        <div className="container">
          <h2 className="section-title">職人工法</h2>
          <p className="section-subtitle">魔鬼藏在細節裡，五道標準化嚴格清洗程序，不放過任何死角。</p>
          <div className="steps-container">
            <div className="step-card">
              <span className="step-number">1</span>
              <div className="step-icon"><FaShieldAlt /></div>
              <h4>無塵防護</h4>
              <p>鋪設專業防護膠膜與防水墊，百分之百保護您的傢具與牆面不受水花飛濺。</p>
            </div>
            <div className="step-card">
              <span className="step-number">2</span>
              <div className="step-icon"><FaSprayCan /></div>
              <h4>深度拆解</h4>
              <p>由受過專業訓練的技師仔細拆卸外殼、濾網、水盤與風鼓，展露所有藏汙納垢的死角。</p>
            </div>
            <div className="step-card">
              <span className="step-number">3</span>
              <div className="step-icon"><FaLeaf /></div>
              <h4>環保浸泡</h4>
              <p>使用溫和的生物可降解酵素洗劑，軟化頑垢的同時，不傷機體亦不傷環境。</p>
            </div>
            <div className="step-card">
              <span className="step-number">4</span>
              <div className="step-icon"><FaCheckCircle /></div>
              <h4>高壓沖洗</h4>
              <p>以精確控制的水壓將鰭片及風鼓深處的霉斑、灰塵徹底沖洗乾淨，還原最初的亮麗。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Responsibility */}
      <section id="social" className="social-section">
        <div className="container">
          <h2 className="section-title">社會責任</h2>
          <p className="section-subtitle">與自然共存，我們堅持綠色洗淨，保護水資源與地球。</p>
          <div className="stats-grid">
            <div className="stat-item">
              <h3>100%</h3>
              <p>選用生物可降解洗劑</p>
            </div>
            <div className="stat-item">
              <h3>20,000+</h3>
              <p>每年減少公升污染廢水</p>
            </div>
            <div className="stat-item">
              <h3>50+</h3>
              <p>公益清洗弱勢家庭冷氣</p>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Culture */}
      <section id="culture" className="container">
        <div className="culture-grid">
          <div className="culture-text">
            <h2 className="section-title" style={{ textAlign: 'left' }}>共好的企業文化</h2>
            <p className="section-subtitle" style={{ textAlign: 'left', marginLeft: 0 }}>快樂且受尊重的員工，是提供極致服務的核心。</p>
            
            <div className="culture-features">
              <div className="culture-feature">
                <div className="culture-icon"><FaHandsHelping /></div>
                <div>
                  <h4>完善的技術傳承</h4>
                  <p>我們建立「師徒制」與定期內部考核，確保每位技師都具備一致的高水準技術與服務態度。</p>
                </div>
              </div>
              <div className="culture-feature">
                <div className="culture-icon"><FaCheckCircle /></div>
                <div>
                  <h4>安全與健康首位</h4>
                  <p>配備防滑靜音鞋、符合人體工學的工具，並給予充分的健康檢查，我們像保護客戶一樣保護員工。</p>
                </div>
              </div>
            </div>
          </div>
          <div className="culture-image">
            <img src="/artisan_cleanup.png" alt="Corporate Culture" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="footer">
        <div className="container">
          <div className="footer-logo">石原研洗</div>
          <div className="footer-contact">
            <div className="contact-item">
              <FaPhoneAlt /> 0800-123-456
            </div>
            <div className="contact-item">
              <FaComments /> LINE ID: @********
            </div>
            <div className="contact-item">
              <FaClock /> 營業時間: 09:00 - 18:00 (週一至週六)
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} 石原研洗. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
