'use client';

import React, { useState } from 'react';
import { colors, textStyles } from '@/constants';
import styles from './Header.module.css';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Home', href: '#home' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'About Party', href: '#about' },
    { label: 'Reservation', href: '#reservation' },
    { label: 'Contacts', href: '#contacts' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`${styles.header} ${className || ''}`}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logo}>
          <h1 className={styles.logoText}>Party Time!</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav}>
          <ul className={styles.menuList}>
            {menuItems.map((item, index) => (
              <li key={index} className={styles.menuItem}>
                <a href={item.href} className={styles.menuLink}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA Button */}
        <div className={styles.ctaSection}>
          <button className={styles.ctaButton}>
            <span>Reservation</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={styles.mobileMenuButton}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span className={`${styles.hamburgerLine} ${isMobileMenuOpen ? styles.open : ''}`}></span>
          <span className={`${styles.hamburgerLine} ${isMobileMenuOpen ? styles.open : ''}`}></span>
          <span className={`${styles.hamburgerLine} ${isMobileMenuOpen ? styles.open : ''}`}></span>
        </button>
      </div>

      {/* Mobile Navigation */}
      <nav className={`${styles.mobileNav} ${isMobileMenuOpen ? styles.mobileNavOpen : ''}`}>
        <ul className={styles.mobileMenuList}>
          {menuItems.map((item, index) => (
            <li key={index} className={styles.mobileMenuItem}>
              <a 
                href={item.href} 
                className={styles.mobileMenuLink}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className={styles.mobileMenuItem}>
            <button 
              className={styles.mobileCtaButton}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Reservation
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;