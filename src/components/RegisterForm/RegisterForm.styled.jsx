import styled from '@emotion/styled';

export const FormRegister = styled.form`
    /* width: 320px; */
   width: 400px; 
   margin: 0 auto;
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   border: 1px solid #234c63;
   margin-top: 20px;
   margin-bottom: 40px;
   background-color: #f7f7f7;
   border-radius: 10px;
   padding: 20px;
`;

export const RegisterLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  width: 320px;
`;

export const RegBtn = styled.button`
  width: 85px;
  border-radius: 6px;
  font-size: 16px;
  padding: 4px 2px;
  border: 1px solid gray;
  font-weight: 500;
  color: #430f58;
  background-color: #cadefc;
    &:hover {
    background-color: #bbe4e9;
    font-weight: 700;
    color: #f95959;
  }
`;