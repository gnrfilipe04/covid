import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1.5rem;

  width: 60%;

  div {
    padding-right: 2rem;

    h1{
      font-weight: 300;
      color: #202124;
      font-size: 1rem;

      padding-right: 2rem;

    }

    h2{
      font-weight: 300;
      color: #202124;
      margin-top: 1rem;
      font-size: 1.8rem;

      padding-right: 2rem;
    }
  }

  div.line {

   
    border-left: 1px solid rgb(235, 235, 235);
    padding: 2rem 1rem;

  }
`;
