const Input = ({ nameFilter, setNameFilter }) => {

  const handleChange = (e) => {
    setNameFilter(e.target.value);
  };

  return (
    <div className=" flex-1 ">

      <label
        htmlFor="lastNameSearch"
        className=" text-sm font-medium text-gray-700 mb-1">
        Enter Last Name
      </label>

      <div className="relative">
        <input
          type="text"
          id="lastNameSearch"
          placeholder="Search by last name"
          value={nameFilter}
          onChange={handleChange}
          className="w-full pl-10 pr-4 py-2 border rounded-lg "
        />
      </div>
         
    </div>
  );
};

export default Input;
