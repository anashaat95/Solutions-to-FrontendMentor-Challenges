import styled from "styled-components";
import MortgageForm from "./components/MortgageForm";
import MortgageResult from "./components/MortgageResult";
import RepaymentsContextProvider from "./contexts/RepaymentsContext";

const Body = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  gap: 2rem;

  footer {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;

    @media screen and (max-width: 500px) {
      grid-template-columns: 1fr;
      gap: 1rem;
      margin-bottom: 1rem;
    }

    a {
      font-weight: 700;
      text-decoration: none;
      transition: color 0.2s ease-in;

      &:hover {
        color: ${({ theme }) => theme.slate950};
      }

      &:focus {
        color: ${({ theme }) => theme.accent};
      }
    }
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 90rem;
  width: 100%;
  background: #fff;
  border-radius: ${({ theme }) => theme.borderRadiusLg};
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    border-radius: 0px;
  }
`;

function App() {
  return (
    <Body>
      <Container>
        <RepaymentsContextProvider>
          <MortgageForm />
          <MortgageResult />
        </RepaymentsContextProvider>
      </Container>
      <footer className="attribution">
        <p>
          Challenge by <a href="https://www.frontendmentor.io/challenges/mortgage-repayment-calculator-Galx1LXK73">Frontend Mentor</a>.{" "}
        </p>
        <p>
          Coded by&nbsp;
          <a target="_blank" href="https://www.linkedin.com/in/anashaat95/">
            Ahmed Nashaat Alnagar
          </a>
          .
        </p>
      </footer>
    </Body>
  );
}

export default App;
