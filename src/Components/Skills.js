import React from 'react';
import styled from 'styled-components';

const SkillsWrapper = styled.div`
  background-color: #555;
  color: #fff;
  padding: 50px;
`;

const Skills = () => {
  return (
    <SkillsWrapper>
      <h2>My Skills</h2>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        {/* Add more skills */}
      </ul>
    </SkillsWrapper>
  );
};

export default Skills;
