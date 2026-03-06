// components/layout/Navbar.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [networkStatus, setNetworkStatus] = useState('ممتاز');

  useEffect(() => {
    // محاكاة حالة الشبكة (بعدين نربطها بالحقيقية)
    const checkNetwork = () => {
      if (navigator.onLine) {
        setNetworkStatus('ممتاز');
      } else {
        setNetworkStatus('غير متصل');
      }
    };

    checkNetwork();
    window.addEventListener('online', checkNetwork);
    window.addEventListener('offline', checkNetwork);

    return () => {
      window.removeEventListener('online', checkNetwork);
      window.removeEventListener('offline', checkNetwork);
    };
  }, []);

  return (
    <nav className="elegant-navbar">
      <div className="nav-brand">
        <Image 
          src="/image/default-image/sudanlibrary.png" 
          alt="شعار مكتبة السودان" 
          width={50} 
          height={50}
          className="brand-logo"
          priority
        />
        <span className="brand-name">مكتبة السودان</span>
      </div>
      
      <ul className="nav-menu">
        <li className="nav-item">
          <Link href="/" className="nav-link active">
            <i className="fas fa-home"></i>
            <span className="link-text">الرئيسية</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/addbook" className="nav-link">
            <i className="fas fa-pen-fancy"></i>
            <span className="link-text">أنشر كتابك</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/report" className="nav-link">
            <i className="fas fa-exclamation-triangle"></i>
            <span className="link-text">إبلاغ عن مشكلة</span>
          </Link>
        </li>
      </ul>
      
      <div className="nav-actions">
        <div className="nav-indicator-wrapper">
          <div className={`nav-network-indicator indicator-${networkStatus === 'ممتاز' ? 'excellent' : 'offline'}`}>
            <i className="fas fa-wifi"></i>
            <span>اتصال {networkStatus}</span>
          </div>
        </div>
      </div>
    </nav>
  );
}