import React, { useEffect, useState } from 'react';
import { shouldUseFramerMotion } from '../utils/hybridAnimations';

const AnimationTest = () => {
    const [animationSystem, setAnimationSystem] = useState('Loading...');

    useEffect(() => {
        const usingFramerMotion = shouldUseFramerMotion();
        setAnimationSystem(usingFramerMotion ? 'Framer Motion 6.5.1' : 'CSS Fallback');
    }, []);

    return (
        <div style={{ 
            position: 'fixed', 
            top: '10px', 
            right: '10px', 
            background: 'rgba(0,0,0,0.8)', 
            color: 'white', 
            padding: '10px', 
            borderRadius: '5px',
            fontSize: '12px',
            zIndex: 9999
        }}>
            Animation System: {animationSystem}
        </div>
    );
};

export default AnimationTest; 