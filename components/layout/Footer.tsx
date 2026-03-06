// components/layout/Footer.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="premium-footer">
      <div className="footer-wave">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
        </svg>
      </div>
      
      <div className="footer-content">
        <div className="footer-column logo-column">
          <div className="footer-logo">
            <img src="/image/default-image/sudanlibrary.png" alt="شعار مكتبة السودان" />
            <h3>مكتبة السودان</h3>
          </div>
          <p className="footer-description">نافذتك إلى عالم المعرفة والثقافة العربية والإسلامية</p>
          <div className="social-links">
            <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-youtube"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-tiktok"></i></a>
          </div>
        </div>
        
        <div className="footer-column">
          <h4 className="footer-title">روابط سريعة</h4>
          <ul className="footer-links">
            <li><Link href="/"><i className="fas fa-chevron-left"></i> الرئيسية</Link></li>
            <li><Link href="/report"><i className="fas fa-chevron-left"></i> إبلاغ عن مشكلة</Link></li>
            <li><Link href="/addbook"><i className="fas fa-chevron-left"></i> أنشر كتابك</Link></li>
          </ul>
        </div>
        
        <div className="footer-column contact-column">
          <h4 className="footer-title">تواصل معنا</h4>
          <div className="contact-info">
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <p>sudanlibrary.sd@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="copyright">
          <p>&copy; 2026 مكتبة السودان. جميع الحقوق محفوظة</p>
          <p>تصميم وتطوير <span>MMG WORKS</span></p>
        </div>
      </div>
    </footer>
  );
}