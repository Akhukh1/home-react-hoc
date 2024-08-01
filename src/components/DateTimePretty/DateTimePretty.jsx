import React from 'react';
import DateTime from '../DateTime/DateTime';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import relativeTime from 'dayjs/plugin/relativeTime';

export default function DateTimePretty(props) {
  const { date } = props;
  dayjs.locale('ru');
  dayjs.extend(relativeTime);
  const strDate = dayjs().to(dayjs(date));

  return (
    <DateTime date = {strDate}/>
  )
}

