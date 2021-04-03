import React, { useState, useEffect } from 'react';
import axios from 'axios';

import List from './List';

const Search = () => {
  const [value, setValue] = useState("");
  const [result, setResult] = useState([]);

  useEffect(() => {
    let timerId = null;

    if (value) {
      timerId = setTimeout(async () => {
        const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
          params: {
            action: "query",
            list: "search",
            origin: "*",
            format: "json",
            srsearch: value
          }
        });

        setResult(data.query.search);
      }, 1000);
    }

    return () => {
      clearTimeout(timerId);
    }
  }, [value]);

  return (
    <React.Fragment>
      <form className="ui form" style={{ marginTop: 20 }}>
        <input 
          type="text" 
          placeholder="Search on Wikipedia..." 
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
      
      <List result={result} />
    </React.Fragment>
  );
}

export default Search;