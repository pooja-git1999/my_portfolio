import React from 'react';
import styled from 'styled-components';

const ProjectsWrapper = styled.div`
  background-color: #666;
  color: #fff;
  padding: 50px;
`;

const Projects = () => {
    return (
        <ProjectsWrapper>
            <h2>My Projects</h2>
            {/* Display your projects */}
        </ProjectsWrapper>
    );
};

export default Projects;
