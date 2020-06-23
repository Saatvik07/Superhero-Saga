import React from "react";
import "./ResCard.css";
import Card from "react-bootstrap/Card";
import CardImg from "react-bootstrap/CardImg";
const styles = {
  transform: "rotateY(180deg)",
};
export class ResCard extends React.Component {
  constructor(props) {
    super(props);
    this.feature = this.feature.bind(this);
    this.addToTeam = this.addToTeam.bind(this);
    this.removeFromTeam = this.removeFromTeam.bind(this);
  }
  feature() {
    this.props.handleClick(this.props.object);
  }
  addToTeam() {
    this.props.handleAddClick(this.props.object);
  }
  removeFromTeam() {
    this.props.handleRemove(this.props.object);
  }
  render() {
    let align;
    if (this.props.object.alignment === "good") {
      align = <p className='good'>Good</p>;
    } else if (this.props.object.alignment === "neutral") {
      align = <p className='neutral'>Neutral</p>;
    } else {
      align = <p className='bad'>bad</p>;
    }
    let button3;
    if (this.props.inTeam) {
      button3 = (
        <button onClick={this.removeFromTeam} className='button-3-team'>
          Remove
        </button>
      );
    } else {
      button3 = (
        <button onClick={this.addToTeam} className='button-3'>
          Add to Team
        </button>
      );
    }
    let final;
    if (this.props.parent === "team") {
      final = (
        <div className='resCard-container-team'>
          <div className='resCard-image-div-team'>
            <img src={this.props.object.image} className='resCard-image-team' />
          </div>
          <div className='resCard-content-div-team'>
            <h4>{this.props.object.name}</h4>
            <div className='resCard-btn-team'>
              <button onClick={this.feature} className='button-2'>
                Open
              </button>
              {button3}
            </div>
          </div>
        </div>
      );
    } else {
      final = (
        <div className='resCard-container'>
          <div className='resCard-image-div'>
            <img src={this.props.object.image} className='resCard-image' />
          </div>
          <div className='resCard-content-div'>
            <h4>{this.props.object.name}</h4>
            <div className='resCard-btn'>
              <button onClick={this.feature} className='button-2'>
                Open
              </button>
              {button3}
            </div>
          </div>
        </div>
      );
    }
    return <div className='rescard-outermost-div'>{final}</div>;
  }
}
