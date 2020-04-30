import React, { useState, useEffect } from 'react';
import Title from './components/Title';
import Image from './components/Image';
import Description from './components/Description';
import MobileScroll from './components/MobileScroll';
import Copyright from './components/Copyright';
import axios from 'axios';
import Popup from 'reactjs-popup';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [day, setDay] = useState(new Date());
  const apiKey = 'Ozq52y6qNvTpitfGgGfEsapsfWV9UjJ4oa4WRQGr';

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${moment(
          day
        ).format('YYYY-MM-DD')}`
      )
      .then(res => setData(res.data))
      .catch(console.log);
  }, [day]);

  return (
    <div className='App'>
      <div className='top-container'>
        <div className='gradient_wrapper'>
          <h3>{moment(day.toString(), 'LLLL').format('MMM Do, YYYY')}</h3>
          <Title title={data.title} />
          <div className='button-wrapper'>
            <Popup
              modal
              trigger={<button className='learn'>Learn More</button>}
            >
              {close => (
                <Description explanation={data.explanation} close={close} />
              )}
            </Popup>
            <DatePicker
              selected={day}
              onChange={date => setDay(date)}
              maxDate={new Date()}
              customInput={
                <button className='date-select'>Select a Date!</button>
              }
              disabledKeyboardNavigation
              withPortal
            />
          </div>
          <MobileScroll />
          <Copyright />
        </div>
        <Image
          title={data.title}
          imgUrl={data.url}
          hdurl={data.hdurl}
          mediaType={data.media_type}
        />
      </div>
    </div>
  );
}

export default App;
