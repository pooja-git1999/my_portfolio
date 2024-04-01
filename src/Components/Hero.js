import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroWrapper = styled(motion.div)`
  background-color: #222;
  color: #fff;
  padding: 50px;
`;

const Hero = () => {
    return (
        <HeroWrapper
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <h1>Welcome to My Portfolio</h1>
            <p>Explore my work and experience</p>
        </HeroWrapper>
    );
};

export default Hero;
