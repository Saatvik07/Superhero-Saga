import React from "react";
import "./Team.css";
import { ResCard } from "../ResCard/ResCard";
export class Team extends React.Component {
  constructor(props) {
    super(props);
    this.state = { teamName: "" };
    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.save = this.save.bind(this);
  }
  handleChangeInput(event) {
    this.setState({ teamName: event.target.value });
  }
  save() {
    this.props.onSaveClick(this.state.teamName);
  }
  render() {
    return (
      <div className='team-container'>
        <div className='team-display-container'>
          {this.props.team_list.map((member) => {
            return (
              <ResCard
                key={member.id}
                object={member}
                handleClick={this.props.handleClick}
                handleAddClick={this.props.handleAddClick}
                handleRemove={this.props.handleRemove}
                inTeam={true}
                parent={"team"}
                className='member'
              />
            );
          })}
        </div>
        <div className='save-team-container'>
          <input onChange={this.handleChangeInput} className='save-input' placeholder='Name of the team' />
          <button onClick={this.save} className='save-button'>
            Save
          </button>
        </div>
      </div>
    );
  }
}
