import React from "react";
import "./Stats.css";
const circum = 2 * Math.PI * 60;
const circum1 = 2 * Math.PI * 30;
const calculate = (team, inp) => {
  const arr = team.map((obj) => {
    return parseInt(obj[inp], 10);
  });
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return Math.floor(sum / arr.length);
};
export class Stats extends React.Component {
  constructor(props) {
    super(props);
    this.screenSize = this.screenSize.bind(this);
  }
  screenSize(x) {
    let color;
    const value = calculate(this.props.team, this.props.name);
    if (value < 25) {
      color = "d00000";
    } else if (value < 50 && value >= 25) {
      color = "fb5607";
    } else if (value < 75 && value >= 50) {
      color = "ffba08";
    } else {
      color = "007f5f";
    }
    if (x.matches) {
      return (
        <svg>
          <circle cx='20' cy='20' r='30' className='screenAdjust'></circle>
          <circle
            cx='20'
            cy='20'
            r='30'
            style={{
              stroke: color,
              transition: "all 0.3s ease-in-out", // animation duration and easing function
              strokeWidth: 10,
              strokeDasharray: circum1,
              strokeDashoffset: ((100 - value) / 100) * circum1,
            }}
          ></circle>
        </svg>
      );
    } else {
      return (
        <svg>
          <circle cx='70' cy='70' r='60'></circle>
          <circle
            cx='70'
            cy='70'
            r='60'
            style={{
              stroke: color,
              transition: "all 0.3s ease-in-out", // animation duration and easing function
              strokeWidth: 25,
              strokeDasharray: circum,
              strokeDashoffset: ((100 - value) / 100) * circum,
            }}
          ></circle>
        </svg>
      );
    }
  }
  render() {
    let svg;
    const x = window.matchMedia("(max-width: 720px)");
    svg = this.screenSize(x);
    x.addListener(this.screenSize);
    return (
      <div className='stats-card'>
        <div class='stats-box'>
          <div class='percent'>
            {svg}
            <div class='percentage'>
              <h3>
                {calculate(this.props.team, this.props.name)}
                <span>%</span>
              </h3>
            </div>
          </div>
          <h3 class='ability-name'>{this.props.name}</h3>
        </div>
      </div>
    );
  }
}
Stats.defaultProps = {
  team: [],
};
