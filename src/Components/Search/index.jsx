import React from "react";
import { SearchForm, SearcgInput, Dropdown, SearchButton } from "./style";

export default function Search() {
  return (
    <SearchForm>
      <SearcgInput placeholder="Search" />
      <Dropdown>
        <option value="All">All Category</option>
        <option value="Mobile">Mobile accessory</option>
        <option value="Electronics">Electronics</option>
        <option value="Smartphones">Smartphones </option>
        <option value="tech">Modern tech </option>
      </Dropdown>
      <SearchButton>Search</SearchButton>
    </SearchForm>
  );
}
