import React from 'react';
import DateTimePretty from '../DateTimePretty/DateTimePretty';

export default function Video(props) {
  const { url, date} = props;
  return (
    <div className="video">
      <iframe src={url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      <DateTimePretty date={date} />
    </div>
  )
}


