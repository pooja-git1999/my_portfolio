import React from 'react';
import styled from 'styled-components';

const ServicesWrapper = styled.div`
  background-color: #444;
  color: #fff;
  padding: 50px;
`;

const Services = () => {
    return (
        <ServicesWrapper>
            <h2>My Services</h2>
            <ul>
                <li>Web Development</li>
                <li>Mobile App Development</li>
                <li>UI/UX Design</li>
            </ul>
        </ServicesWrapper>
    );
};

export default Services;
