'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { colors, textStyles } from '@/constants';
import styles from './Reservation.module.css';

interface ReservationProps {
  className?: string;
}

const Reservation: React.FC<ReservationProps> = ({ className }) => {
  const [selectedPlan, setSelectedPlan] = useState<string>('couple');

  const plans = [
    {
      id: 'single',
      name: 'Single Ticket',
      price: '$100',
      features: [
        'Blood Drink',
        'Haunted House Tour',
        'Horror Movie Marathon'
      ],
      featured: false,
      background: 'dark'
    },
    {
      id: 'couple',
      name: 'Couple Ticket',
      price: '$150',
      features: [
        'Blood Drink',
        'Horror Movie Marathon',
        'Pumpkin Carving Contest'
      ],
      featured: true,
      background: 'orange'
    },
    {
      id: 'combine',
      name: 'Combine Ticket',
      price: '$300',
      features: [
        'Blood Drink',
        'Haunted House Tour',
        'Horror Movie Marathon'
      ],
      featured: false,
      background: 'dark'
    }
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

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.9,
      y: 20
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0
    }
  };

  return (
    <section className={`${styles.reservation} ${className || ''}`} id="reservation">
      <div className={styles.container}>
        {/* Section Header */}
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.title}>Let's be your hosts</h2>
        </motion.div>

        {/* Plans Grid */}
        <motion.div 
          className={styles.plansGrid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              className={`${styles.planCard} ${plan.featured ? styles.featured : ''} ${styles[plan.background]}`}
              variants={cardVariants}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              onClick={() => setSelectedPlan(plan.id)}
            >
              {/* Plan Header */}
              <div className={styles.planHeader}>
                <h3 className={styles.planName}>{plan.name}</h3>
                <div className={styles.planPrice}>{plan.price}</div>
              </div>

              {/* Features List */}
              <div className={styles.featuresList}>
                {plan.features.map((feature, idx) => (
                  <div key={idx} className={styles.featureItem}>
                    {plan.id === 'single' && idx === 0 && (
                      <div className={styles.checkIcon}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <rect x="1" y="1" width="22" height="22" rx="4" stroke="currentColor" strokeWidth="1.5"/>
                          <path d="M7 12L10.5 15.5L17 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    )}
                    <span className={styles.featureText}>{feature}</span>
                  </div>
                ))}
              </div>

              {/* Buy Button */}
              <motion.button 
                className={`${styles.buyButton} ${plan.featured ? styles.featuredButton : ''}`}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                Buy Ticket
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className={styles.decorativeElements}>
        {/* Left Cobweb */}
        <motion.div 
          className={styles.leftCobweb}
          animate={{ 
            rotate: [0, 5, 0, -5, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className={styles.cobwebSvg}>
            <svg width="770" height="739" viewBox="0 0 770 739" fill="none">
              <g opacity="0.6">
                <path d="M385.29 373.37L539.81 709.92" stroke="#333333" strokeWidth="2"/>
                <path d="M385.29 373.4L770.97 455.47" stroke="#333333" strokeWidth="2"/>
                <path d="M385.27 59.08L621.31 375.32" stroke="#333333" strokeWidth="2"/>
                <path d="M266.62 0L387.23 375.33" stroke="#333333" strokeWidth="2"/>
                <path d="M36.36 194.69L387.24 375.32" stroke="#333333" strokeWidth="2"/>
                <path d="M0 373.4L387.23 447.26" stroke="#333333" strokeWidth="2"/>
                <path d="M93.96 373.41L387.18 637.4" stroke="#333333" strokeWidth="2"/>
                <path d="M239.63 373.39L387.21 738.97" stroke="#333333" strokeWidth="2"/>
              </g>
            </svg>
          </div>
        </motion.div>

        {/* Right Bats */}
        <motion.div 
          className={styles.rightBats}
          animate={{ 
            y: [-15, 15, -15],
            x: [-5, 5, -5]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className={styles.batsGroup}>
            {[...Array(21)].map((_, i) => (
              <motion.div
                key={i}
                className={styles.bat}
                style={{
                  left: `${(i % 7) * 60}px`,
                  top: `${Math.floor(i / 7) * 80}px`
                }}
                animate={{
                  y: [0, -10, 0],
                  rotate: [-5, 5, -5]
                }}
                transition={{
                  duration: 2 + (i % 3) * 0.5,
                  repeat: Infinity,
                  delay: i * 0.1,
                  ease: "easeInOut"
                }}
              >
                🦇
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Reservation;