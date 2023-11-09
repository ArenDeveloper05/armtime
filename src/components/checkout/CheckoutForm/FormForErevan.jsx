import { useState } from "react";

const FormForErevan = () => {
  const [checkedTime, setCheckedTime] = useState({
    12: true,
    18: false,
  });
  return (
    <form className="information-formForErevan">
      <div className="information-formForErevan-address">
        <label>Address</label>
        <input type="text" name="address" id="address" />
      </div>
      <div className="information-formForErevan-time">
        <div>Time convenient for you</div>
        <div className="information-formForErevan-time-hours">
          <input
            type="checkbox"
            id="12:00"
            name="12:00"
            checked={checkedTime[12]}
            onClick={() => {
              if (checkedTime[12]) return;
              setCheckedTime({
                12: !checkedTime[12],
                18: false,
              });
            }}
          />
          <label htmlFor="12:00"></label>
          <div>12 : 00 - 18 : 00</div>
        </div>
        <div className="information-formForErevan-time-hours">
          <input
            type="checkbox"
            id="18:00"
            name="18:00"
            checked={checkedTime[18]}
            onClick={() => {
              if (checkedTime[18]) return;
              setCheckedTime({
                12: false,
                18: !checkedTime[18],
              });
            }}
          />
          <label htmlFor="18:00"></label>
          <div>18 : 00 - 23 : 00</div>
        </div>
      </div>
    </form>
  );
};

export default FormForErevan;
