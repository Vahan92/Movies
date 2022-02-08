import styled from 'styled-components';

export const MainWrapper = styled.div`  
  position: relative;
  width: 100%;
  background-color: #ffedcc;
  display: flex;
  flex-direction: column;
  align-items: center;

  > input {
    width: 300px;
    border-radius: 3px;
  }
`;

export const StyledUl = styled.ul`
width: fit-content;
margin: auto;
margin: 20px 0;

  li {
    list-style-type: none;
    display: flex;
    align-items: center;
    margin: 10px;
    width: fit-content;
    cursor: pointer;

    img {
      margin-right: 10px;
    }
  }
`;
