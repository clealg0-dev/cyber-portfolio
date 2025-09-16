import { useEffect } from 'react';

interface SectionBackground {
  id: string;
  backgroundImage: string;
}

export const useScrollBackground = (sections: SectionBackground[]) => {
  useEffect(() => {
    let currentBackgroundIndex = -1;
    
    // Create background elements
    const createBackgroundElements = () => {
      // Remove existing background elements
      const existingBgs = document.querySelectorAll('.scroll-background');
      existingBgs.forEach(bg => bg.remove());
      
      // Create two background elements for smooth transitions
      const bg1 = document.createElement('div');
      const bg2 = document.createElement('div');
      
      [bg1, bg2].forEach((bg, index) => {
        bg.className = `scroll-background scroll-bg-${index}`;
        bg.style.cssText = `
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          background-repeat: no-repeat;
          z-index: -1;
          opacity: 0;
          transition: opacity 0.8s ease-in-out;
          pointer-events: none;
        `;
        document.body.appendChild(bg);
      });
    };

    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      
      let activeSection = null;
      let maxVisibility = 0;
      
      sections.forEach((section, index) => {
        const element = document.getElementById(section.id);
        if (!element) return;
        
        const rect = element.getBoundingClientRect();
        const elementTop = rect.top;
        const elementBottom = rect.bottom;
        
        // Calculate how much of the section is visible and centered
        const visibleTop = Math.max(elementTop, 0);
        const visibleBottom = Math.min(elementBottom, windowHeight);
        const visibleHeight = Math.max(0, visibleBottom - visibleTop);
        
        // Only consider sections that are significantly visible (at least 30% of viewport)
        const visibilityRatio = visibleHeight / windowHeight;
        
        // Prefer sections that are more centered in viewport
        const centerDistance = Math.abs((elementTop + elementBottom) / 2 - windowHeight / 2);
        const centerWeight = 1 - (centerDistance / windowHeight);
        
        const totalWeight = visibilityRatio * centerWeight;
        
        if (totalWeight > 0.2 && totalWeight > maxVisibility) {
          maxVisibility = totalWeight;
          activeSection = { section, index };
        }
      });
      
      if (activeSection && activeSection.index !== currentBackgroundIndex) {
        const bg1 = document.querySelector('.scroll-bg-0') as HTMLElement;
        const bg2 = document.querySelector('.scroll-bg-1') as HTMLElement;
        
        if (bg1 && bg2) {
          const activeBg = currentBackgroundIndex === -1 ? bg1 : 
                          (bg1.style.opacity === '1' ? bg2 : bg1);
          const inactiveBg = activeBg === bg1 ? bg2 : bg1;
          
          // Set new background image with overlay
          activeBg.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${activeSection.section.backgroundImage})`;
          
          // Fade in new background
          activeBg.style.opacity = '1';
          // Fade out old background
          inactiveBg.style.opacity = '0';
          
          currentBackgroundIndex = activeSection.index;
        }
      }
    };
    
    // Initialize
    createBackgroundElements();
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      // Clean up background elements
      const existingBgs = document.querySelectorAll('.scroll-background');
      existingBgs.forEach(bg => bg.remove());
    };
  }, [sections]);
};