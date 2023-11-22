import styled from "styled-components";

export const StyledAuthBackground = styled.div`
  width: 100%;
  max-width: 375px;
  height: 1000px;

  background-color:  var(--color-white);

  margin: 1rem auto;
  
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    max-width: 1280px;
    min-height: 100vh;
    max-height: 720px;

    margin: 0 auto;
  }
`;

export const StyledAuthContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
  }

`;
