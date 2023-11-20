import styled from "styled-components";

export const StyledAuthBackground = styled.section`
  width: 100vw;
  min-height: 100vh;

  background-color:  var(--color-white);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledAuthContainer = styled.div`
  width: 100%;
  max-height: 1000px;
  max-width: 375px;

  display: flex;
  flex-direction: column;
  align-items: center;

  img{
    padding-top:44px ;
  }

`;
