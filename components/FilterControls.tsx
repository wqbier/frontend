import React from "react";
import { Filter } from "../App";

interface Props {
  currentFilter: Filter;
  setFilter: (f: Filter) => void;
}

const FilterControls: React.FC<Props> = ({ currentFilter, setFilter }) => {
  return (
    <div className="filters">
      <button
        onClick={() => setFilter("all")}
        className={currentFilter === "all" ? "active" : ""}
      >
        Усі
      </button>
      <button
        onClick={() => setFilter("active")}
        className={currentFilter === "active" ? "active" : ""}
      >
        Активні
      </button>
      <button
        onClick={() => setFilter("completed")}
        className={currentFilter === "completed" ? "active" : ""}
      >
        Завершені
      </button>
    </div>
  );
};

export default FilterControls;
