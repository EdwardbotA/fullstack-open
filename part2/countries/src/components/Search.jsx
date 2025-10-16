const Search = ({ value, onChange }) => {
  return (
    <label>
      Find countries <input value={value} onChange={onChange} />
    </label>
  );
};

export default Search;
