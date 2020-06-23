import React from "react";
import "./TeamList.css";
export class TeamList extends React.Component {
  constructor(props) {
    super(props);
    this.Edit = this.Edit.bind(this);
    this.Remove = this.Remove.bind(this);
    this.Select = this.Select.bind(this);
  }
  Edit() {
    this.props.onClick(this.props.team, 1);
  }
  Remove() {
    this.props.onClick(this.props.team, 2);
  }
  Select() {
    this.props.handleSelect(this.props.team);
  }
  render() {
    let key,
      arr,
      list,
      teamCard,
      powerStats = [];
    key = Object.keys(this.props.team)[0];
    arr = this.props.team[key];
    list = arr.map((member) => {
      return (
        <div key={member.id} className='list-member'>
          {member.name}
        </div>
      );
    });
    let pKeys = Object.keys(this.props.team);
    for (let i = 1; i < pKeys.length; i++) {
      powerStats.push(
        <div key={i}>
          <span>{pKeys[i]}</span> {this.props.team[pKeys[i]]}
        </div>
      );
    }
    if (this.props.value === 1) {
      teamCard = (
        <div className='teamList-card'>
          <div className='teamList-card-text'>
            <h3>{key}</h3>
          </div>
          <div className='teamList-card-content'>
            <div className='teamCard-left'>{list}</div>
            <div className='teamCard-right'>{powerStats}</div>
          </div>
          <div className='teamCard-btn-holder'>
            <button onClick={this.Edit} className='edit-btn'>
              Edit
            </button>
            <button onClick={this.Remove} className='edit-btn'>
              Remove
            </button>
          </div>
        </div>
      );
    } else {
      teamCard = (
        <div className='teamList-card'>
          <div className='teamList-card-text'>
            <h3>{key}</h3>
          </div>
          <div className='teamList-card-content'>
            <div className='teamCard-left'>
              <ol>{list}</ol>
            </div>
            <div className='teamCard-right'>{powerStats}</div>
          </div>
          <div className='teamCard-btn-holder'>
            <button onClick={this.Select} className='edit-btn'>
              Select
            </button>
          </div>
        </div>
      );
    }
    return <div>{teamCard}</div>;
  }
}
