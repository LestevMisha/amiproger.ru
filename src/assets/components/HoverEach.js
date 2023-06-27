import { React, useState } from 'react';
import { motion, useAnimationControls } from 'framer-motion';

const HoverEach = ({ children }) => {

    // Animation settings
    const controls = useAnimationControls();
    const [isPlaying, setIsPlaying] = useState(false);

    const rubberBand = () => {
        controls.start({
            transform: [
                "scale3D(1, 1, 1)",
                "scale3D(1.4, .55, 1)",
                "scale3D(.75, 1.25, 1)",
                "scale3D(1.25, .85, 1)",
                "scale3D(.9, 1.05, 1)",
                "scale3D(1, 1, 1)",
            ],
            color: "#7a7a7a"
        }).then(() => {
            controls.start({
                color: "#ffffff" // Transition the color back to its initial state
            });
            setIsPlaying(false);
        });
        setIsPlaying(true);
    }

    return (
        <>
            <motion.span
                animate={controls}
                onMouseOver={() => {
                    if (!isPlaying) {
                        rubberBand()
                    }
                }}
                onAnimationComplete={() => setIsPlaying(false)}>
                {children}
            </motion.span>

        </>
    );
};

export default HoverEach;
