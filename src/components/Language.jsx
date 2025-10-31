const languages = ['Javascript', 'Python', 'Golang'];

const Language = ({ lanFilter, setLanFilter }) => {

  const handleChange = (e) => {
    setLanFilter(e.target.value);
  };

  return (
    <div className="flex-1 min-w-[100px] ">
     
      <label htmlFor="languageSearch"className="text-sm font-medium text-gray-700 mb-1 ">
        Choose Language
      </label>

      <div className="relative">

        <select 
          id="languageSearch"
          value={lanFilter} 
          onChange={handleChange} 
          className="w-full pl-4 pr-10 py-2 border rounded-lg cursor-pointer ">
          <option value="">ALL</option>
          
          {languages.map((lang) => (
            <option key={lang} value={lang}>
              {lang}
            </option>
          ))}
        </select>

      </div>
      
    </div>
  );
};

export default Language;