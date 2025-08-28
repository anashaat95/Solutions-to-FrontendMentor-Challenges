import { useContext } from "react";
import styled from "styled-components";
import StepsContext from "../../contexts/StepsContext";
import SidebarStep from "./SidebarStep";

const Container = styled.aside`
  background: url("bg-sidebar-desktop.svg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 56rem;
  border-radius: var(--radius-md);
  color: white;
  padding: 2.8rem 2.2rem;
  position: relative;
  overflow: hidden;

  @media (max-width: 650px) {
    width: 100%;
    background: url("bg-sidebar-mobile.svg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    align-items: start;
    justify-content: center;
    height: 30rem;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    border-radius: 0;
  }
`;

const Steps = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
  z-index: 1;

  @media screen and (max-width: 650px) {
    position: absolute;
    flex-direction: row;
    top: 20%;
  }
`;

const Sidebar = () => {
  const { curStep } = useContext(StepsContext);

  return (
    <Container className="sidebar">
      <Steps className="steps" aria-label="Steps">
        <SidebarStep title="Your Info" stepNum={1} curStep={curStep} />
        <SidebarStep title="Select Plan" stepNum={2} curStep={curStep} />
        <SidebarStep title="Add‑Ons" stepNum={3} curStep={curStep} />
        <SidebarStep title="Summary" stepNum={4} curStep={curStep} />
      </Steps>
    </Container>
  );
};

export default Sidebar;
