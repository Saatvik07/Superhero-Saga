import React from "react";
import "./FixtureCard.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
const abilities = ["intelligence", "power", "strength", "speed", "durability", "combat"];
export class FixtureCard extends React.Component {
  render() {
    let powerStats = [],
      powerStatsHidden = [],
      card;
    for (let key in this.props.member) {
      if (abilities.includes(key)) {
        powerStats.push(
          <div className='powerStats'>
            <span>{key}</span> {this.props.member[key]}
          </div>
        );
      }
    }
    for (let key in this.props.member) {
      if (abilities.includes(key)) {
        powerStatsHidden.push(
          <div className='powerStats' key={key}>
            <span>{key}</span> ??
          </div>
        );
      }
    }
    if (this.props.val === 1) {
      card = (
        <Card className='fixCard'>
          <Card.Img variant='top' src={this.props.member.image} />
          <Card.ImgOverlay style={{ backgroundColor: "rgba(0, 0, 0,0.8)" }}>
            <Card.Title style={{ color: "#e76f51" }} className='fixCard-title'>
              {this.props.member.name}
            </Card.Title>
            <Card.Text style={{ color: "#e76f51" }} className='fixCard-text'>
              <div className='fixCard-powerStats'>{powerStats}</div>
            </Card.Text>
          </Card.ImgOverlay>
        </Card>
      );
    } else {
      card = (
        <Card className='fixCard' style={{ backgroundColor: "rgb(38, 70, 83)" }}>
          <Card.Img variant='top' src={this.props.member.image} />
          <Card.ImgOverlay style={{ backgroundColor: "rgba(0, 0, 0,0.8)" }}>
            <Card.Title style={{ color: "#e76f51" }} className='fixCard-title'>
              {this.props.member.name}
            </Card.Title>
            <Card.Text style={{ color: "#e76f51" }} className='fixCard-text'>
              <div className='fixCard-powerStats'>{powerStatsHidden}</div>
            </Card.Text>
          </Card.ImgOverlay>
        </Card>
      );
    }

    return <div>{card}</div>;
  }
}
