'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { colors } from '@/constants';
import styles from './Footer.module.css';

interface FooterProps {
  className?: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  // Halloween event date - October 31st, 2024, 8:00 PM
  const eventDate = new Date('2024-10-31T20:00:00').getTime();

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [eventDate]);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };
  const socialLinks = [
    {
      name: 'Instagram',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="2"/>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" stroke="currentColor" strokeWidth="2"/>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      url: 'https://instagram.com'
    },
    {
      name: 'Facebook',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      url: 'https://facebook.com'
    },
    {
      name: 'Twitter',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      url: 'https://twitter.com'
    },
    {
      name: 'YouTube',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" stroke="currentColor" strokeWidth="2"/>
          <polygon points="9.75,15.02 15.5,11.75 9.75,8.48" fill="currentColor"/>
        </svg>
      ),
      url: 'https://youtube.com'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1
    }
  };

  const decorativeVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      rotate: -10
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0
    }
  };

  const countdownVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  const springTransition = {
    type: "spring" as const,
    stiffness: 100,
    damping: 15
  };

  const decorativeTransition = {
    type: "spring" as const,
    stiffness: 120,
    damping: 20
  };

  return (
    <footer className={`${styles.footer} ${className || ''}`}>
      {/* Gradient Background */}
      <div className={styles.gradientBackground}></div>
      
      {/* Decorative Elements */}
      <div className={styles.decorativeElements}>
        {/* Floating Bats */}
        <motion.div 
          className={styles.batLeft}
          animate={{ 
            y: [-15, 15, -15],
            x: [-5, 5, -5],
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
            width={80}
            height={60}
            className={styles.batImage}
          />
        </motion.div>

        <motion.div 
          className={styles.batRight}
          animate={{ 
            y: [15, -15, 15],
            x: [5, -5, 5],
            rotate: [0, -5, 0, 5, 0]
          }}
          transition={{ 
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Image
            src="/vectors/bats.png"
            alt=""
            width={70}
            height={50}
            className={styles.batImage}
          />
        </motion.div>

        {/* Cobwebs */}
        <motion.div 
          className={styles.cobwebLeft}
          animate={{ 
            rotate: [0, 2, 0, -2, 0],
            scale: [1, 1.02, 1]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Image
            src="/vectors/cobweb.png"
            alt=""
            width={120}
            height={120}
            className={styles.cobwebImage}
          />
        </motion.div>

        <motion.div 
          className={styles.cobwebRight}
          animate={{ 
            rotate: [0, -2, 0, 2, 0],
            scale: [1, 1.02, 1]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Image
            src="/vectors/cobweb.png"
            alt=""
            width={100}
            height={100}
            className={styles.cobwebImage}
            style={{ transform: 'scaleX(-1)' }}
          />
        </motion.div>

        {/* Spiders */}
        <motion.div 
          className={styles.spiderLeft}
          animate={{ 
            y: [-8, 8, -8],
            rotate: [-3, 3, -3]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Image
            src="/vectors/spider.png"
            alt=""
            width={40}
            height={40}
            className={styles.spiderImage}
          />
        </motion.div>

        <motion.div 
          className={styles.spiderRight}
          animate={{ 
            y: [8, -8, 8],
            rotate: [3, -3, 3]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Image
            src="/vectors/spider.png"
            alt=""
            width={35}
            height={35}
            className={styles.spiderImage}
          />
        </motion.div>
      </div>

      {/* Main Content */}
      <div className={styles.container}>
        <motion.div 
          className={styles.content}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Halloween Message */}
          <motion.div
            className={styles.messageSection}
            variants={itemVariants}
            transition={springTransition}
          >
            <h2 className={styles.mainMessage}>
              Thanks for joining our spooktacular celebration!
            </h2>
            <p className={styles.subMessage}>
              Keep the Halloween spirit alive all year round
            </p>
          </motion.div>

          {/* Event Countdown Timer */}
          <motion.div
            className={styles.countdownSection}
            variants={itemVariants}
            transition={springTransition}
          >
            <h3 className={styles.countdownTitle}>Halloween Party Countdown</h3>
            <div className={styles.countdownContainer}>
              <motion.div
                className={styles.timeUnit}
                variants={countdownVariants}
                animate={{
                  scale: [1, 1.05, 1],
                  transition: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
              >
                <span className={styles.timeNumber}>{timeLeft.days}</span>
                <span className={styles.timeLabel}>Days</span>
              </motion.div>
              
              <motion.div
                className={styles.timeUnit}
                variants={countdownVariants}
                animate={{
                  scale: [1, 1.05, 1],
                  transition: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.2
                  }
                }}
              >
                <span className={styles.timeNumber}>{timeLeft.hours}</span>
                <span className={styles.timeLabel}>Hours</span>
              </motion.div>
              
              <motion.div
                className={styles.timeUnit}
                variants={countdownVariants}
                animate={{
                  scale: [1, 1.05, 1],
                  transition: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.4
                  }
                }}
              >
                <span className={styles.timeNumber}>{timeLeft.minutes}</span>
                <span className={styles.timeLabel}>Minutes</span>
              </motion.div>
              
              <motion.div
                className={styles.timeUnit}
                variants={countdownVariants}
                animate={{
                  scale: [1, 1.1, 1],
                  transition: {
                    duration: 1,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
              >
                <span className={styles.timeNumber}>{timeLeft.seconds}</span>
                <span className={styles.timeLabel}>Seconds</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Newsletter Signup */}
          <motion.div
            className={styles.newsletterSection}
            variants={itemVariants}
            transition={springTransition}
          >
            <h3 className={styles.newsletterTitle}>Stay in the Loop</h3>
            <p className={styles.newsletterDescription}>
              Get the latest updates about our spooky events and exclusive Halloween content
            </p>
            
            <AnimatePresence mode="wait">
              {!isSubscribed ? (
                <motion.form
                  className={styles.newsletterForm}
                  onSubmit={handleNewsletterSubmit}
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={styles.inputGroup}>
                    <motion.input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className={styles.emailInput}
                      required
                      whileFocus={{
                        scale: 1.02,
                        transition: { duration: 0.2 }
                      }}
                    />
                    <motion.button
                      type="submit"
                      className={styles.subscribeButton}
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0 8px 25px rgba(254, 119, 45, 0.4)"
                      }}
                      whileTap={{ scale: 0.95 }}
                      transition={springTransition}
                    >
                      Subscribe
                    </motion.button>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  className={styles.successMessage}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={springTransition}
                >
                  <div className={styles.successIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className={styles.successText}>Successfully subscribed to our newsletter!</span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Contact Info */}
          <motion.div className={styles.contactSection} variants={itemVariants}>
            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <span className={styles.contactText}>+1 (555) SPOOKY-1</span>
            </div>
            
            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2"/>
                  <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <span className={styles.contactText}>hello@spookifyparty.com</span>
            </div>
          </motion.div>

          {/* Social Media */}
          <motion.div
            className={styles.socialSection}
            variants={itemVariants}
            transition={springTransition}
          >
            <h3 className={styles.socialTitle}>Follow the Spook</h3>
            <div className={styles.socialIcons}>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialIcon}
                  whileHover={{
                    scale: 1.3,
                    rotate: [0, -5, 5, 0],
                    y: -5,
                    transition: {
                      duration: 0.3,
                      type: "spring",
                      stiffness: 300
                    }
                  }}
                  whileTap={{ scale: 0.85 }}
                  initial={{ opacity: 0, y: 30, rotate: -10 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    rotate: 0,
                    transition: {
                      type: "spring",
                      stiffness: 200,
                      damping: 20,
                      delay: index * 0.1 + 0.8
                    }
                  }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Copyright */}
          <motion.div className={styles.copyrightSection} variants={itemVariants}>
            <div className={styles.divider}></div>
            <p className={styles.copyright}>
              © 2025 Spookify Party. All rights reserved. Made with 🎃 for Halloween lovers.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;