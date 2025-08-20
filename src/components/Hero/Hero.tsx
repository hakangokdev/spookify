'use client';

import React from 'react';
import Image from 'next/image';
import { colors, textStyles } from '@/constants';
import styles from './Hero.module.css';

interface HeroProps {
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ className }) => {
  return (
    <section className={`${styles.hero} ${className || ''}`} id="home">
      {/* Background Image */}
      <div className={styles.backgroundImage}>
        <Image
          src="/images/hero.png"
          alt="Halloween Party Background"
          fill
          priority
          className={styles.heroImage}
        />
        <div className={styles.overlay}></div>
      </div>

      {/* Decorative Elements */}
      <div className={styles.decorativeElements}>
        {/* Bats */}
        <div className={styles.bats}>
          <Image
            src="/vectors/bats.png"
            alt=""
            width={120}
            height={80}
            className={styles.batsLeft}
          />
          <Image
            src="/vectors/bats.png"
            alt=""
            width={100}
            height={70}
            className={styles.batsRight}
          />
        </div>

        {/* Cobwebs */}
        <div className={styles.cobwebs}>
          <Image
            src="/vectors/cobweb.png"
            alt=""
            width={150}
            height={150}
            className={styles.cobwebTopLeft}
          />
          <Image
            src="/vectors/cobweb.png"
            alt=""
            width={120}
            height={120}
            className={styles.cobwebTopRight}
          />
        </div>

        {/* Spider */}
        <div className={styles.spiders}>
          <Image
            src="/vectors/spider.png"
            alt=""
            width={60}
            height={60}
            className={styles.spiderLeft}
          />
          <Image
            src="/vectors/spider.png"
            alt=""
            width={40}
            height={40}
            className={styles.spiderRight}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Main Heading */}
          <h1 className={styles.mainHeading}>
            <span className={styles.headingLine1}>IT'S HALLOWEEN</span>
            <span className={styles.headingLine2}>PARTY O'CLOCK!</span>
          </h1>

          {/* Subtitle */}
          <p className={styles.subtitle}>
            Join us for the most spooktacular night of the year! 
            Get ready for thrills, chills, and unforgettable memories 
            at the ultimate Halloween celebration.
          </p>

          {/* CTA Buttons */}
          <div className={styles.ctaButtons}>
            <button className={styles.primaryButton}>
              <span>Book Your Spot Now</span>
              <div className={styles.buttonGlow}></div>
            </button>
            
            <button className={styles.secondaryButton}>
              <span>View Gallery</span>
            </button>
          </div>

          {/* Event Details */}
          <div className={styles.eventDetails}>
            <div className={styles.eventItem}>
              <span className={styles.eventLabel}>Date</span>
              <span className={styles.eventValue}>October 31st</span>
            </div>
            <div className={styles.eventItem}>
              <span className={styles.eventLabel}>Time</span>
              <span className={styles.eventValue}>8:00 PM</span>
            </div>
            <div className={styles.eventItem}>
              <span className={styles.eventLabel}>Location</span>
              <span className={styles.eventValue}>Spooky Manor</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className={styles.scrollIndicator}>
          <div className={styles.scrollMouse}>
            <div className={styles.scrollWheel}></div>
          </div>
          <span className={styles.scrollText}>Scroll to explore</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;