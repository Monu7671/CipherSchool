import "./CipherMap.scss";
import React from "react";
import moment from "moment";

function CipherMap() {
  const DayNames = {
    1: "Mon",
    3: "Wed",
    5: "Fri",
  };

  function Cell({ color }) {
    let style = {
      backgroundColor: color,
    };
    // color;

    return <div className="timeline-cells-cell" style={style}></div>;
  }

  function Month({ startDate, index }) {
    let date = moment(startDate).add(index * 7, "day");
    let monthName = date.format("MMM");

    return (
      <div className={`timeline-months-month ${monthName}`}>{monthName}</div>
    );
  }

  function WeekDay({ index }) {
    return <div className="timeline-weekdays-weekday">{DayNames[index]}</div>;
  }

  let startDate = moment().add(-365, "days");
  let dateRange = [startDate, moment()];

  let data = Array.from(new Array(365)).map((_, index) => {
    return {
      date: moment(startDate).add(index, "day"),
      value: Math.floor(Math.random() * 100),
    };
  });
  function Timeline({ range, data, colorFunc }) {
    let days = Math.abs(range[0].diff(range[1], "days"));
    let cells = Array.from(new Array(days));
    let weekDays = Array.from(new Array(7));
    let months = Array.from(new Array(Math.floor(days / 7)));

    let min = Math.min(0, ...data.map((d) => d.value));
    let max = Math.max(...data.map((d) => d.value));

    let colorMultiplier = 1 / (max - min);

    let startDate = range[0];
    const DayFormat = "DDMMYYYY";

    return (
      <div className="cipherMap-container">
        <div className="mp-left-header">CIPHER MAP</div>
        <div className="timeline">
          <div className="timeline-months">
            {months.map((_, index) => (
              <Month key={index} index={index} startDate={startDate} />
            ))}
          </div>

          <div className="timeline-body">
            <div className="timeline-weekdays">
              {weekDays.map((_, index) => (
                <WeekDay key={index} index={index} startDate={startDate} />
              ))}
            </div>

            <div className="timeline-cells">
              {cells.map((_, index) => {
                let date = moment(startDate).add(index, "day");
                let dataPoint = data.find(
                  (d) =>
                    moment(date).format(DayFormat) ===
                    moment(d.date).format(DayFormat)
                );
                let alpha = colorMultiplier * dataPoint.value;
                let color = colorFunc({ alpha });

                return (
                  <Cell key={index} index={index} date={date} color={color} />
                );
              })}
            </div>
          </div>
        </div>
        <div className="mp-underline"></div>
      </div>
    );
  }
  return (
    <div className="cipher-container">
      <div id="container">
        <Timeline
          range={dateRange}
          data={data}
          colorFunc={({ alpha }) => `rgba(243, 146, 45
        , ${alpha})`}
        />
      </div>
    </div>
  );
}

export default CipherMap;
