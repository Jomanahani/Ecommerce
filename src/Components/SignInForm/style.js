import styled from "styled-components";

export const SignForm = styled.form`
  position: relative;
  top: 10%;
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 1rem 2rem;
  height: 33rem;
  width: 23rem;
  border: 1px solid ${(props) => props.theme.pallet.Lines};
  background-color: ${(props) => props.theme.pallet.mainBackdround};
  border-radius: 0.5rem;
  box-shadow: 2px 2px 6px #babec1;
`;
export const FormTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  padding: 1rem 0;
  padding-bottom: 0.5rem;
  color: ${(props) => props.theme.pallet.primaryText};
`;
export const FormLabel = styled.label`
  font-size: 1rem;
  padding: 0.5rem 0;
`;
export const Forminput = styled.input`
  width: 18.5rem;
  border: 1px solid ${(props) => props.theme.pallet.Lines};
  color: ${(props) => props.theme.pallet.secondaryText};
  font-size: 0.8rem;
  padding: 0.7rem;
  margin: 0.2rem auto;
  border-radius: 0.3rem;
  &.small{
    width: 8.8rem;
    margin-right: 0.6rem;
  }
  `;
  
export const Or = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.5rem auto;
  color: ${(props) => props.theme.pallet.secondaryText};

  & > hr {
    border: none;
    border-bottom: 2px solid ${(props) => props.theme.pallet.Lines};
    width: 7.5rem;
  }
  & > p {
    padding: 0 0.6rem;
  }
`;
export const FlexDiv = styled.div`
  display: flex;
  & > input {
    margin: 0.5rem;
  }
  &.justify {
    justify-content: space-between;
    align-items: center;
  }
`;