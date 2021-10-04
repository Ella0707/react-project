import s from './Time.module.css';

import clockIcon from "./../../asetss/img/clock.svg";

function Time() {
    return (
      <div className={s.Time}>
       <img className={s.timeIcon}src={clockIcon} alt="" />
                <span className={s.timeText}>2:00 pm</span>
      </div>
    );
  }
  
  export default Time;