
import './App.css';
import About from './Components/About';
import ContactForm from './Components/ContactForm';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Services from './Components/Services';
import styled from 'styled-components';
const AppWrapper = styled.div`
  font-family: 'Arial', sans-serif;
`;

function App() {
  return (
    <AppWrapper>
      {/* <Portfolio /> */}
      <Navbar />
      <Hero />
      <About />
      <Services />
      <ContactForm />
    </AppWrapper>
  );
}

export default App;
