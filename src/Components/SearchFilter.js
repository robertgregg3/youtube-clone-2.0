import React from "react";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import "../css/SearchFilter.css";

const SearchFilter = () => {
  const FilterItem = ({ title }) => {
    return <p>{title}</p>;
  };

  return (
    <div className="searchFilter">
      <ChevronLeftIcon />
      <FilterItem title="Podcasts" />
      <FilterItem title="Website" />
      <FilterItem title="Shopify" />
      <FilterItem title="MMA" />
      <FilterItem title="Donold Trump" />
      <FilterItem title="SypherPK" />
      <FilterItem title="Gaming" />
      <FilterItem title="Crypto Currency" />
      <FilterItem title="CNN" />
      <FilterItem title="BBC news" />
      <ChevronRightIcon />
    </div>
  );
};

export default SearchFilter;
