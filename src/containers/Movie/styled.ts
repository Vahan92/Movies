import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  z-index: 1;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 70%;
  height: 70%;
  min-height: 605px;
  min-width: 785px;
  padding: 0 20px;
  background-color: orange;
  border-radius: 6px;

  > img {
    display: block;
    margin: 20px auto;
  }

  > h3, h5 {
    text-align: center;
  }
`;

export const Small = styled.p`
  font-size: 12px;
  text-align: center;
  margin-top: 36px;
`;
