import styled from 'styled-components';

export const ContactItem = styled.div`
    display: flex;
    align-items: center;
   
`;

export const ContactRoster = styled.div`
    margin-top: 30px;
`;

export const Button = styled.button`
    margin-left: 30px;

  cursor: pointer;
  border: solid 1px transparent;
  border-radius: 4px;
  padding: 3px 30px;
  color: #ffffff;
  background-color: #9555af;
  margin-right: 20px;

  &:active {
  transform: translateY(1px);
  filter: saturate(150%);
}

&:hover,
&:focus {
  color: #9555af;
  border-color: currentColor;
  background-color: white;
}

    &:last-child {
    margin-bottom: 0;
    }
`;