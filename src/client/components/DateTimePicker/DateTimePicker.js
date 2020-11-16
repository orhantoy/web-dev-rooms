import React from 'react';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import './DateTimePicker.styles.css';

export default function DateTimePicker() {
  return (
    <div className="date-time-picker">
      <Datetime />
    </div>
  );
}
