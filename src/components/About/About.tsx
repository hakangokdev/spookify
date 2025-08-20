'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { colors, textStyles } from '@/constants';
import styles from './About.module.css';

interface AboutProps {
  className?: string;
}

const About: React.FC<AboutProps> = ({ className }) => {
  const features = [
    'NightWitch hunt',
    'Best costume contest',
    'Delicious cakes and sweets',
    'Everybody get tipsy',
    'Dance-off with a star guest'
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  const featureVariants = {
    hidden: { 
      opacity: 0, 
      x: -20
    },
    visible: {
      opacity: 1,
      x: 0
    }
  };

  return (
    <section className={`${styles.about} ${className || ''}`} id="about">
      <div className={styles.container}>
        <motion.div 
          className={styles.content}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Heading Section */}
          <motion.div className={styles.heading} variants={itemVariants}>
            <motion.h2 className={styles.joinUs} variants={itemVariants}>
              join us
            </motion.h2>
            
            <motion.div className={styles.mainHeading} variants={itemVariants}>
              <div className={styles.arrowLeft}>
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <path d="M20.64 10.36L5.51 25.49L20.64 40.62" stroke="#FE772D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M42.5 25.5H5.84" stroke="#FE772D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              
              <h3 className={styles.mainTitle}>
                this year's Halloween Party!
              </h3>
              
              <div className={styles.arrowRight}>
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <path d="M27.36 10.36L42.49 25.49L27.36 40.62" stroke="#FE772D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M5.5 25.5H42.16" stroke="#FE772D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </motion.div>
          </motion.div>

          {/* Description */}
          <motion.p className={styles.description} variants={itemVariants}>
            Our Halloween party this year will be an unforgettable experience, 
            filled with spooky decorations, eerie music, thrilling games, and 
            costume contests. Join us for a night of magic and fright!
          </motion.p>

          {/* Ticket Section */}
          <motion.div className={styles.ticketSection} variants={itemVariants}>
            <div className={styles.ticketCard}>
              <div className={styles.ticketIcon}>
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <path d="M45.5 6.5H2.5V41.5H45.5V6.5Z" stroke="#E6EAEE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21.5 6.5V14.5" stroke="#E6EAEE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21.5 18.82V29.16" stroke="#E6EAEE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21.5 33.5V41.5" stroke="#E6EAEE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            
            <div className={styles.eventDetails}>
              <div className={styles.eventDate}>
                Tue, 31 October 2023, 19:00
              </div>
              <div className={styles.eventLocation}>
                <div className={styles.locationIcon}>
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M16 18.9C18.27 18.9 20.11 17.06 20.11 14.79C20.11 12.52 18.27 10.68 16 10.68C13.73 10.68 11.89 12.52 11.89 14.79C13.73 17.06 13.73 18.9 16 18.9Z" stroke="#E6EAEE" strokeWidth="1.5"/>
                    <path d="M4.81 11.29C7.35 -0.41 24.66 -0.4 27.19 11.3C28.68 18.58 24.18 24.81 20.37 28.43C17.6 31.08 14.41 31.08 11.63 28.43C7.83 24.81 3.33 18.57 4.81 11.29Z" stroke="#E6EAEE" strokeWidth="1.5"/>
                  </svg>
                </div>
                <span>The Menza Club, Istanbul city</span>
              </div>
            </div>
          </motion.div>

          {/* Features List */}
          <motion.div className={styles.features} variants={itemVariants}>
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className={styles.featureItem}
                variants={featureVariants}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
              >
                <div className={styles.checkIcon}>
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M30.33 1.67H1.67V30.33H30.33V1.67Z" stroke="#E6EAEE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9.34 16L14.67 21.33L22.67 13.33" stroke="#E6EAEE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className={styles.featureText}>{feature}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Decorative Line */}
          <div className={styles.decorativeLine}></div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className={styles.decorativeElements}>
        {/* Left Bats */}
        <motion.div 
          className={styles.leftBats}
          animate={{ 
            y: [-10, 10, -10],
            rotate: [0, 5, 0, -5, 0]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Image
            src="/vectors/bats.png"
            alt=""
            width={60}
            height={40}
            className={styles.batsImage}
          />
        </motion.div>

        {/* Right Decorative Element */}
        <motion.div 
          className={styles.rightDecoration}
          animate={{ 
            y: [15, -15, 15],
            x: [-5, 5, -5]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Image
            src="/vectors/absolute.png"
            alt=""
            width={60}
            height={528}
            className={styles.absoluteImage}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;