import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './BackgroundArrow.scss';
import { useTheme } from '../../context/ThemeContext';

const BackgroundArrow = () => {
    // We track scroll progress of the entire page/container
    const { scrollYProgress } = useScroll();
    const { theme } = useTheme();

    // Track window width for responsive path
    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Map scroll progress (0 to 1) to path length (0 to 1) for the drawing effect
    // We can also make it start a bit "drawn" if we want
    const pathLength = useTransform(scrollYProgress, [0, 1], [0.1, 1]);
    const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0.3, 0.6, 0.6, 0.3]);

    // Colors based on theme
    const isDark = theme === 'dark';
    const arrowColor = isDark ? '#Fa9100' : '#001534';

    // Desktop Path (Wide)
    const desktopPath = "M-50 100 C 300 600, 800 200, 1000 800 S 200 1500, 500 2200 C 800 2900, 1300 2500, 1200 3200 S 200 3800, 700 4200";

    // Mobile Path (Narrower, more vertical winds)
    const mobilePath = "M-20 100 C 100 400, 300 200, 320 600 S 50 1000, 100 1400 C 200 1800, 350 1600, 300 2000 S 50 2400, 100 2800 S 300 3200, 250 3600 S 50 4000, 150 4200";

    const currentPath = isMobile ? mobilePath : desktopPath;
    const currentViewBox = isMobile ? "0 0 360 4000" : "0 0 1440 4000";

    return (
        <div className="background-arrow-container">
            <svg
                viewBox={currentViewBox}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
            >
                <motion.path
                    d={currentPath}
                    stroke={arrowColor}
                    strokeWidth={isMobile ? "15" : "30"}
                    strokeLinecap="round"
                    strokeDasharray={isMobile ? "10 20" : "20 40"}
                    fill="none"
                    style={{
                        pathLength: pathLength,
                        opacity: opacity
                    }}
                />
            </svg>
        </div>
    );
};

export default BackgroundArrow;
