import React from "react";
import "./OneCard.css";
import Intelligence from "./intelligence.png";
import Combat from "./combat.png";
import Durability from "./durability.png";
import Power from "./power.png";
import Speed from "./speed.png";
import Strength from "./strength.png";
import Weight from "./weight.png";
import Height from "./height.png";
export class OneCard extends React.Component {
  render() {
    let full, b, w, race, a1, a2, g, alt, fapp, align;
    if (!this.props.object.fullname || this.props.object.fullname === "null" || this.props.object.fullname === "-") {
      full = "[Not Available]";
    } else {
      full = this.props.object.fullname;
    }
    if (!this.props.object.firstAppearence || this.props.object.firstAppearence === "null" || this.props.object.firstAppearence === "-") {
      fapp = "[Not Available]";
    } else {
      fapp = this.props.object.firstAppearence;
    }
    if (this.props.object.alignment === "good") {
      align = <p id='good'>Good</p>;
    } else if (this.props.object.alignment === "neutral") {
      align = <p id='neutral'>Neutral</p>;
    } else {
      align = <p id='bad'>bad</p>;
    }
    if (!this.props.object.alteregos || this.props.object.alteregos === "null" || this.props.object.alteregos === "-") {
      alt = "[Not Available]";
    } else {
      alt = this.props.object.alteregos;
    }
    if (!this.props.object.birthPlace || this.props.object.birthPlace == "null" || this.props.object.birthPlace === "-") {
      b = "[Not Available]";
    } else {
      b = this.props.object.birthPlace;
    }
    if (!this.props.object.work || this.props.object.work === "null" || this.props.object.work === "-") {
      w = "[Not Available]";
    } else {
      w = this.props.object.work;
    }
    if (!this.props.object.group || this.props.object.group === "null" || this.props.object.group === "-") {
      g = "[Not Available]";
    } else {
      g = this.props.object.group;
    }
    if (!this.props.object.race || this.props.object.race === "null" || this.props.object.race === "-") {
      race = "[Not Available]";
    } else {
      race = this.props.object.race;
    }
    if (!this.props.object.alias1 || this.props.object.alias1 === "null" || this.props.object.alias1 === "-") {
      a1 = "[Not Available]";
    } else {
      a1 = this.props.object.alias1;
    }
    if (!this.props.object.alias2 || this.props.object.alias2 === "null" || this.props.object.alias2 === "-") {
      a2 = "[Not Available]";
    } else {
      a2 = this.props.object.race;
    }
    return (
      <div className='display'>
        <div className='left'>
          <div className='image-div'>
            <img src={this.props.object.image} className='image' />
            <div className='heading-div'>
              <h3>{this.props.object.name}</h3>
            </div>
          </div>
          <div className='power-div'>
            <div className='intelligence'>
              <img src={Intelligence} className='power-image' />
              <h5>
                <span>Intelligence</span> : {this.props.object.intelligence}
              </h5>
            </div>
            <div className='speed'>
              <img src={Speed} className='power-image' />
              <h5>
                <span>Speed </span>: {this.props.object.speed}
              </h5>
            </div>
            <div className='durability'>
              <img src={Durability} className='power-image' />
              <h5>
                <span>Durability</span> : {this.props.object.durability}
              </h5>
            </div>
            <div className='power'>
              <img src={Power} className='power-image' />
              <h5>
                <span>Power</span> : {this.props.object.power}
              </h5>
            </div>
            <div className='strength'>
              <img src={Strength} className='power-image' />
              <h5>
                <span>Strength</span>: {this.props.object.strength}
              </h5>
            </div>
            <div className='combat'>
              <img src={Combat} className='power-image' />
              <h5>
                <span>Combat</span> : {this.props.object.combat}
              </h5>
            </div>
          </div>
        </div>
        <div className='right'>
          <div className='info'>
            <div className='info-left'>
              <div className='other'>
                Full Name: <p>{full}</p>
              </div>
              <div className='other'>
                Groups: <p>{g}</p>
              </div>
              <div className='other'>
                Race: <p>{race}</p>
              </div>
              <div className='other'>
                Alias 2: <p>{a2}</p>
              </div>
              <div className='other'>Alignment : {align}</div>
            </div>
            <div className='info-right'>
              <div className='other'>
                Alter Ego: <p>{alt}</p>
              </div>

              <div className='other'>
                Birth Place: <p>{b}</p>
              </div>

              <div className='other'>
                Alias 1: <p>{a1}</p>
              </div>

              <div className='other'>
                Work : <p>{w}</p>
              </div>
              <div className='other'>
                First Appearance : <p>{fapp}</p>
              </div>
            </div>
          </div>
          <div className='appearence'>
            <div className='height'>
              <img src={Height} className='power-image' />
              <h5>
                <span>Height</span> : {this.props.object.height}
              </h5>
            </div>
            <div className='weight'>
              <img src={Weight} className='power-image' />
              <h5>
                <span>Weight</span> : {this.props.object.weight}
              </h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
