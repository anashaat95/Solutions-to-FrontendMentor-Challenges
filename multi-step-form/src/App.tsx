import React from "react";
import styled from "styled-components";
import Sidebar from "./components/Sidebar/Sidebar.js";
import Content from "./components/Steps/Content.js";

const Card = styled.main`
  min-width: min(100rem, 95vw);
  background: var(--card);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow);
  display: grid;
  grid-template-columns: 30rem 1fr;
  gap: 4rem;
  padding: 2.4rem;
  margin: 2.4rem;

  @media screen and (max-width: 800px) {
    grid-template-columns: 20rem 1fr;
    gap: 2rem;
  }

  @media (max-width: 650px) {
    min-width: 90vw;
    grid-template-columns: 1fr;
    padding: 0rem;
    margin: 0rem;
    border-radius: 2rem;
    padding: 0;
  }
`;

const App: React.FC = () => {
  return (
    <Card className="card" role="region" aria-label="Personal Info Form">
      <Sidebar />
      <Content />
    </Card>
  );
};

export default App;
