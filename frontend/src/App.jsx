import React, { useState } from 'react';
import Select from 'react-select';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [filteredResponse, setFilteredResponse] = useState('');

  const options = [
    { value: 'numbers', label: 'Numbers' },
    { value: 'letters', label: 'Letters' },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = JSON.parse(inputValue).data;

    if (selectedFilter === 'numbers') {
      const numbers = data.filter((item) => !isNaN(item));
      setFilteredResponse(numbers.join(','));
    } else if (selectedFilter === 'letters') {
      const letters = data.filter((item) => isNaN(item));
      setFilteredResponse(letters.join(','));
    } else {
      setFilteredResponse(data.join(','));
    }
  };

  const handleFilterChange = (selectedOption) => {
    setSelectedFilter(selectedOption?.value || null);
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder='{"data":["M","1","334","4","B"]}'
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          Submit
        </button>
      </form>
      <div style={styles.filterContainer}>
        <Select
          options={options}
          onChange={handleFilterChange}
          placeholder="Multi Filter"
          isClearable
          styles={customSelectStyles}
        />
      </div>
      {filteredResponse && (
        <div style={styles.response}>
          <strong>Filtered Response:</strong> {filteredResponse}
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    maxWidth: '500px',
    margin: 'auto',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  input: {
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '16px',
  },
  button: {
    padding: '10px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    cursor: 'pointer',
  },
  filterContainer: {
    marginTop: '20px',
  },
  response: {
    marginTop: '20px',
    padding: '10px',
    backgroundColor: '#f8f9fa',
    borderRadius: '4px',
    fontSize: '16px',
  },
};

const customSelectStyles = {
  control: (provided) => ({
    ...provided,
    borderRadius: '4px',
    borderColor: '#ccc',
    boxShadow: 'none',
  }),
};

export default App;
