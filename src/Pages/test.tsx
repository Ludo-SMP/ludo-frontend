import axios from 'axios';
import React, { useEffect } from 'react';

async function fetchData() {
  // const { data } = await axios.post('http://localhost:3000/api/test');
  const { data } = await axios.get('http://localhost:3000/api/test');
  console.log(data);
}

export const Test = () => {
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div>asdas</div>
    </div>
  );
};
