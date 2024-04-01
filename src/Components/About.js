import React from 'react';
import styled from 'styled-components';

const AboutWrapper = styled.div`
  background-color: #333;
  color: #fff;
  padding: 50px;
`;

const About = () => {
    return (
        <AboutWrapper>
            <h2>About Me</h2>
            <p>I am a passionate developer...</p>
        </AboutWrapper>
    );
};

export default About;
