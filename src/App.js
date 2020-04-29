import React, { useState, useEffect } from 'react';
import Title from './components/Title';
import Image from './components/Image';
import Description from './components/Description';
import axios from 'axios';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { DateUtils } from 'react-day-picker';
import dateFnsFormat from 'date-fns/format';
import dateFnsParse from 'date-fns/parse';
import Popup from 'reactjs-popup';
import './App.css';
import 'react-day-picker/lib/style.css';

function App() {
  const [data, setData] = useState([]);
  const [day, setDay] = useState(dateFnsFormat(new Date(), 'yyyy-MM-dd'));
  const FORMAT = 'MM/dd/yyyy';
  const apiKey = 'Ozq52y6qNvTpitfGgGfEsapsfWV9UjJ4oa4WRQGr';

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${day}`)
      .then(res => setData(res.data))
      .catch(console.log);
  }, [day]);

  function urlDatePicker(date) {
    return setDay(dateFnsFormat(date, 'yyyy-MM-dd'));
  }

  return (
    <div className='App'>
      <div className='top-container'>
        <div className='gradient_wrapper'>
          <DayPickerInput
            formatDate={formatDate}
            format={FORMAT}
            parseDate={parseDate}
            placeholder={`${dateFnsFormat(new Date(), FORMAT)}`}
            onDayChange={urlDatePicker}
            dayPickerProps={{
              modifiers: {
                disabled: [
                  {
                    after: new Date()
                  }
                ]
              }
            }}
          />
          <Title title={data.title} />
          <Popup modal trigger={<button>Learn More</button>}>
            {close => (
              <Description explanation={data.explanation} close={close} />
            )}
          </Popup>
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

function parseDate(str, format, locale) {
  const parsed = dateFnsParse(str, format, new Date(), { locale });
  if (DateUtils.isDate(parsed)) {
    return parsed;
  }
  return undefined;
}

function formatDate(date, format, locale) {
  return dateFnsFormat(date, format, { locale });
}

export default App;
