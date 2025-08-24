import styled from "styled-components";
import CallToAction from "./components/CallToAction/CallToAction";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Stats from "./components/Stats/Stats";
import Overlay from "./elements/Overlay";
import ShortenedLinks from "./features/Shortening/ShortenedLinks";
import Shortening from "./features/Shortening/Shortening";

const Container = styled.div``;

function App() {
  return (
    <>
      <Overlay />
      <Container className="container">
        <Header />
        <main className="main">
          <Hero />
          <Shortening />
          <ShortenedLinks />
          <Stats />
          <CallToAction />
        </main>
        <Footer />
      </Container>
    </>
  );
}

export default App;
