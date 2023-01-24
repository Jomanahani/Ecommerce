import styled from "styled-components";

export const SearchForm = styled.form`
  display: flex;
  width: 35rem;
  height: 2.5rem;
  justify-content: space-between;
  border: 1px solid ${(props) => props.theme.pallet.primary};
  border-radius: 0.5rem;
  margin: 1rem;
`;
export const SearcgInput = styled.input`
  border-radius: 0.5rem;
  border: none;
  outline: none;
  font-size: 1rem;
  width: 17rem;
  padding: 0 1rem;
`;

export const Dropdown = styled.select`
  width: 9rem;
  font-size: 1rem;
  border: none;
  text-align: center;
  outline: none;
  option {
    padding: 1rem 0;
    border-radius: 0 0 0.5rem 0.5rem;
  }
`;

export const SearchButton = styled.button`
  width: 6.6rem;
  border: transparent;
  color: white;
  background-color: ${(props) => props.theme.pallet.primary};
  font-size: 1rem;
  border-radius: 0 0.5rem 0.5rem 0;
`;
