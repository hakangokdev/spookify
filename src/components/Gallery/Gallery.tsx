'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { colors, textStyles } from '@/constants';
import styles from './Gallery.module.css';

interface GalleryProps {
  className?: string;
}

const Gallery: React.FC<GalleryProps> = ({ className }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [filter, setFilter] = useState<'all' | 'party' | 'costumes' | 'venue'>('all');

  // Gallery images from the public/images folder
  const galleryImages = [
    {
      id: 1,
      src: '/images/behnazsabaa_halloween_party_hyper_realistic_clean_and_minimal_01f4a21e-5a3f-4594-bc57-5f459848f980.png',
      alt: 'Halloween Party Scene 1',
      category: 'party',
      title: 'Spooky Atmosphere'
    },
    {
      id: 2,
      src: '/images/behnazsabaa_halloween_party_hyper_realistic_clean_and_minimal_6d9dd1c9-8294-469c-a5e7-849961a3f5e7.png',
      alt: 'Halloween Party Scene 2',
      category: 'venue',
      title: 'Haunted Venue'
    },
    {
      id: 3,
      src: '/images/behnazsabaa_halloween_party_hyper_realistic_clean_and_minimal_9b5a9ae8-fcbc-43a5-9b1e-63d45a1d6001.png',
      alt: 'Halloween Party Scene 3',
      category: 'party',
      title: 'Party Vibes'
    },
    {
      id: 4,
      src: '/images/behnazsabaa_halloween_party_hyper_realistic_women_and_men_in_cu_003fb252-9e4f-4ef5-8aeb-285bf290d647.png',
      alt: 'Halloween Costumes 1',
      category: 'costumes',
      title: 'Amazing Costumes'
    },
    {
      id: 5,
      src: '/images/behnazsabaa_halloween_party_hyper_realistic_women_and_men_in_cu_54238add-bfa3-4ee5-824c-eacc7527a937.png',
      alt: 'Halloween Costumes 2',
      category: 'costumes',
      title: 'Creative Outfits'
    },
    {
      id: 6,
      src: '/images/behnazsabaa_halloween_party_hyper_realistic_clean_and_minimal_b97e09b9-48d6-42cc-8aa7-f8d16b9ebf07.png',
      alt: 'Halloween Party Scene 4',
      category: 'party',
      title: 'Memorable Moments'
    },
    {
      id: 7,
      src: '/images/behnazsabaa_halloween_party_hyper_realistic_women_and_men_in_cu_d8a34657-745b-44f7-974b-5046bc7d3006.png',
      alt: 'Halloween Costumes 3',
      category: 'costumes',
      title: 'Spooky Characters'
    },
    {
      id: 8,
      src: '/images/behnazsabaa_halloween_party_hyper_realistic_clean_and_minimal_c120a5cc-0169-4560-b994-545c4e7e3b50.png',
      alt: 'Halloween Party Scene 5',
      category: 'venue',
      title: 'Perfect Setting'
    }
  ];

  const filterCategories = [
    { key: 'all', label: 'All Photos' },
    { key: 'party', label: 'Party Scenes' },
    { key: 'costumes', label: 'Costumes' },
    { key: 'venue', label: 'Venue' }
  ];

  const filteredImages = filter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1
    }
  };

  const filterVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className={`${styles.gallery} ${className || ''}`} id="gallery">
      <div className={styles.container}>
        {/* Section Header */}
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.title}>GALLERY</h2>
          <p className={styles.subtitle}>
            Relive the magic of our previous Halloween parties and get inspired for this year's celebration!
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div 
          className={styles.filters}
          variants={filterVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {filterCategories.map((category) => (
            <motion.button
              key={category.key}
              className={`${styles.filterButton} ${filter === category.key ? styles.active : ''}`}
              onClick={() => setFilter(category.key as any)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div 
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          key={filter} // Re-animate when filter changes
        >
          <AnimatePresence mode="wait">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                className={styles.imageItem}
                variants={itemVariants}
                layout
                transition={{
                  duration: 0.6,
                  ease: "easeOut"
                }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                onClick={() => setSelectedImage(image.src)}
              >
                <div className={styles.imageWrapper}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className={styles.image}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className={styles.overlay}>
                    <h3 className={styles.imageTitle}>{image.title}</h3>
                    <div className={styles.viewButton}>
                      <span>View Full Size</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className={styles.lightbox}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                className={styles.lightboxContent}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={selectedImage}
                  alt="Gallery Image"
                  fill
                  className={styles.lightboxImage}
                />
                <button
                  className={styles.closeButton}
                  onClick={() => setSelectedImage(null)}
                >
                  ×
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;