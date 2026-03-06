import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      
      {/* Search Section */}
      <div className="search-section">
        <div className="search-wrapper">
          <div className="search-container">
            <input 
              type="text" 
              id="searchInput" 
              placeholder="ابحث عن الكتب، المؤلفين، أو المواضيع..." 
              className="search-input"
              autoComplete="off"
            />
            <button className="search-btn" id="searchButton">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Hero Slider */}
      <div className="slider-container">
        <div className="slider">
          <img src="/image/default-image/grade-3.jpg" alt="صورة 1" className="slider-img active" />
          <img src="/image/default-image/middle3.jpg" alt="صورة 2" className="slider-img" />
          <img src="/image/default-image/ebtday6.jpg" alt="صورة 3" className="slider-img" />
        </div>
        <div className="slider-dots"></div>
      </div>

      {/* Textbooks Section */}
      <section className="books-section textbooks-section">
        <h2 className="section-title">
          <i className="fas fa-graduation-cap"></i>الكتب المدرسية
        </h2>
        <hr className="section-divider" />
        <div className="books-scroll-container" id="textbooksScrollContainer">
          <div className="textbooks-container"></div>
        </div>
      </section>

      {/* Regular Books Section */}
      <section className="books-section">
        <h2 className="section-title">
          <i className="fas fa-bookmark"></i>الكتب العامة
        </h2>
        <hr className="section-divider" />
        <div className="books-scroll-container" id="booksScrollContainer">
          <div className="books-container"></div>
        </div>
      </section>
      <Footer />
    </>
  );
}