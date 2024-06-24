import React from 'react';
import DateTime from '../DateTime/DateTime';
import moment from 'moment';
// import ru from '../../../node_modules/moment/locale/ru'

export default function DateTimePretty(props) {
  const { date } = props;
  // const currentDate = new Date();
  console.log(date)


//   var now = moment();
// moment.lang('ru');
// console.log(now.format('dddd, MMMM DD YYYY, h:mm:ss'));

  const localDate = moment(date).locale('ru');
  moment.locale('ru');
  // moment.lang('ru');
  // moment.lang('ru');
  console.log(localDate.startOf('hour').startOf('day').fromNow())
  const strDate = localDate.startOf('hour').startOf('day').fromNow();

  return (
    <DateTime date = {strDate}/>
  )
}

