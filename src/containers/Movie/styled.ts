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
  animation: popup 0.7s;

  @keyframes popup {
  0%{
    transform: scale(1);
  }
  50%{
    transform: scale(1.4);
  }
  60%{
    transform: scale(1.1);
  }
  70%{
    transform: scale(1.2);
  }
  80%{
    transform: scale(1);
  }
  90%{
    transform: scale(1.1);
  }
  100%{
    transform: scale(1);
  }
}
`;

export const Content = styled.div`
  width: 70%;
  height: 70%;
  min-height: 605px;
  min-width: 785px;
  padding: 0 20px;
  background-color: #ffc14d;
  border-radius: 6px;

  > img {
    display: block;
    margin: 20px auto;
    width: 113px;
    height: 170px;
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
