import React from 'react';
import moment from "moment-timezone";

function MomentExample(props) {
  const momentDate = moment();
  const newMomentDate = momentDate.add(1, 'week');
  const cloneNewMomentDate = newMomentDate.clone().add(1, 'week');

  return (
    <div>
      <h1>Moment</h1>
      <div>Immutable check</div>
      <div>
        {momentDate.format()}
        <br/>
        {newMomentDate.format()}
        <br/>
        {cloneNewMomentDate.format()}
      </div>
      <br/>
      <div>Summer (New-york)</div>
      <div>
        2018년 3월 10일 13시에 하루 더하기 :
        {moment.tz('2018-03-10 13:00:00', "America/New_York").add(1, 'day').format()}
      </div>
      <div>
        2018년 3월 10일 13시에 하루 더하기 :
        {moment.tz('2018-03-10 13:00:00', "America/New_York").add(24, 'hour').format()}
      </div>
    </div>
  );
}

export default MomentExample;