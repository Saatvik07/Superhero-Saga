import React from "react";
import "./FtBoard.css";
import { OneCard } from "../OneCard/OneCard";
export class FtBoard extends React.Component {
  render() {
    return (
      <div className='board-container'>
        <div className='heading'>
          <h3 className='board-heading'>Feature Board</h3>
          <button onClick={this.props.handleRefresh} className='refresh'>
            Refresh
          </button>
        </div>
        <div className='display'>
          <OneCard object={this.props.list_obj} />
        </div>
      </div>
    );
  }
}
