function Filter({ filter, onChange }) {
  return (
    <>
      Find contacts by name
      <input
        type="text"
        name="filter"
        autoComplete="off"
        value={filter}
        onChange={onChange}
      />
    </>
  );
}

export default Filter;
