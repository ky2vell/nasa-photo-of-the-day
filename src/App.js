import React, { useState, useEffect } from 'react';
import Date from './components/Date';
import Title from './components/Title';
import Image from './components/Image';
import Description from './components/Description';
import axios from 'axios';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(res => setData(res.data))
      .catch(console.log);
  }, []);

  return (
    <div className='App'>
      <Date date={data.date} />
      <Title title={data.title} />
      <Image title={data.title} imgUrl={data.url} />
      <Description explanation={data.explanation} />
    </div>
  );
}

export default App;
