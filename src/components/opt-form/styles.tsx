import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  margin-top: 1rem;
  flex-wrap: wrap;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Area = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: center;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const Text = styled.p`
  font-size: 1.3rem;
  color: white;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

export const Input = styled.input`
  min-width: 400px;
  width: 100%;
  border: 0;
  padding: 10px;
  height: 60px;
  box-sizing: border-box;
  font-size: 1.3rem;
  @media (max-width: 900px) {
    min-width: 350px;
    margin: 5px;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  height: 62px;
  background: #e50914;
  color: white;
  padding: 0 0.5rem;
  font-size: 1.3rem;
  border: 0;
  min-width: 150px;
  cursor: pointer;
  img {
    margin-left: 0.5rem;
    width: 1rem;
    filter: brightness(0) invert(1);
  }
`;

export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;
