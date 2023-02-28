import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  padding: 70px 0;
  margin: auto;
  max-width: 1000px;
  flex-direction: column;
`;

export const AuthorArea = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  border-top: 1px solid whitesmoke;
  padding: 10px;
`;

export const AuthorAreaIcons = styled.div`
  display: flex;
  width: 100px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 10px;

  > a {
    margin-right: 10px;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 15px;
`;

export const Link = styled.a`
  color: #757575;
  margin-bottom: 20px;
  font-size: 13px;
  text-decoration: none;
`;

export const Title = styled.p`
  font-size: 16px;
  color: #757575;
  margin-bottom: 40px;
`;

export const AuthorTitle = styled.p`
  font-size: 16px;
  color: whitesmoke;
  margin-bottom: 5px;
`;

export const Text = styled.p`
  font-size: 13px;
  color: #757575;
  margin-bottom: 40px;
`;

export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;
