import React, { useState, useEffect } from 'react';
import Title from './components/Title';
import Image from './components/Image';
import Description from './components/Description';
import axios from 'axios';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { DateUtils } from 'react-day-picker';
import dateFnsFormat from 'date-fns/format';
import dateFnsParse from 'date-fns/parse';
import './App.css';
import 'react-day-picker/lib/style.css';

function App() {
  const [data, setData] = useState([]);
  const [day, setDay] = useState(dateFnsFormat(new Date(), 'yyyy-MM-dd'));
  const FORMAT = 'MM/dd/yyyy';

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${day}`)
      .then(res => setData(res.data))
      .catch(console.log);
  }, [day]);

  function urlDatePicker(date) {
    return setDay(dateFnsFormat(date, 'yyyy-MM-dd'));
  }

  return (
    <div className='App'>
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
        <Image title={data.title} imgUrl={data.url} hdurl={data.hdurl} />
      </div>
      <Description explanation={data.explanation} />
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
