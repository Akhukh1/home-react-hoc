import React from 'react';
import Video from '../Video/Video';

export const VideoList = (props) => {
  const { list } = props;
  return (
    props.list.map(item => <Video url={item.url} date={item.date} key = {crypto.randomUUID()}/>)
  )
}


