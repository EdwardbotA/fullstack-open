const Filter = ({ filter, handleFilter }) => {
  return (
    <label>
      Filter shown with <input value={filter} onChange={handleFilter} />
    </label>
  );
};

export default Filter;
