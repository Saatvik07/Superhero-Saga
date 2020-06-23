import React from "react";
import "./FIxture.css";
import { FixtureCard } from "../FixtureCard/FixtureCard";
import { Stats } from "../Stats/Stats";
let i = 0,
  one,
  two,
  three,
  key;
let stats, opponentStats;
const abilities = ["intelligence", "power", "strength", "speed", "durability", "combat"];
export class Fixture extends React.Component {
  constructor(props) {
    super(props);
    this.state = { formation: 0 };
    this.handleNew = this.handleNew.bind(this);
    this.handleStart = this.handleStart.bind(this);
    this.adjustScreen = this.adjustScreen.bind(this);
  }
  handleNew() {
    i++;

    if (i % 6 === 0) {
      one = <FixtureCard member={this.props.team[key][0]} val={1} />;
      two = <FixtureCard member={this.props.team[key][1]} val={1} />;
      three = <FixtureCard member={this.props.team[key][2]} val={1} />;
      this.setState({ formation: 0 });
    } else if (i % 6 === 1) {
      one = <FixtureCard member={this.props.team[key][0]} val={1} />;
      two = <FixtureCard member={this.props.team[key][2]} val={1} />;
      three = <FixtureCard member={this.props.team[key][1]} val={1} />;
      this.setState({ formation: 1 });
    } else if (i % 6 === 2) {
      one = <FixtureCard member={this.props.team[key][2]} val={1} />;
      two = <FixtureCard member={this.props.team[key][0]} val={1} />;
      three = <FixtureCard member={this.props.team[key][1]} val={1} />;
      this.setState({ formation: 2 });
    } else if (i % 6 === 3) {
      one = <FixtureCard member={this.props.team[key][2]} val={1} />;
      two = <FixtureCard member={this.props.team[key][1]} val={1} />;
      three = <FixtureCard member={this.props.team[key][0]} val={1} />;
      this.setState({ formation: 3 });
    } else if (i % 6 == 4) {
      one = <FixtureCard member={this.props.team[key][1]} val={1} />;
      two = <FixtureCard member={this.props.team[key][0]} val={1} />;
      three = <FixtureCard member={this.props.team[key][2]} val={1} />;
      this.setState({ formation: 4 });
    } else if (i % 6 == 5) {
      one = <FixtureCard member={this.props.team[key][1]} val={1} />;
      two = <FixtureCard member={this.props.team[key][2]} val={1} />;
      three = <FixtureCard member={this.props.team[key][0]} val={1} />;
      this.setState({ formation: 5 });
    }
    this.props.onClick(i % 6);
  }
  handleStart() {
    this.props.onStartFight();
  }
  componentWillMount() {
    key = Object.keys(this.props.team)[0];
    one = <FixtureCard member={this.props.team[key][0]} val={1} />;
    two = <FixtureCard member={this.props.team[key][1]} val={1} />;
    three = <FixtureCard member={this.props.team[key][2]} val={1} />;
  }
  adjustScreen(x) {
    if (x.matches) {
      return (
        <div>
          <div className='fixture-container'>
            <div className='fixture-div'>
              <div className='fixture-left'>
                <div className='fixture-card'>{one}</div>
                <div className='fixture-card'>{two}</div>
              </div>
              <div className='fixture-right'>
                <div className='fixture-card-right'>{three}</div>
              </div>
              <div className='opponent-stats-container'>
                <button onClick={this.handleNew} className='changeform-button'>
                  Change Formation
                </button>
                <h2>{Object.keys(this.props.team)[0]}'s Stats</h2>
                {stats}
              </div>
            </div>
            <div className='versus'>V/S</div>
            <div className='fixture-div'>
              <div className='opponent-stats-container'>
                <h2>Opponent Team Stats</h2>
                {opponentStats}
              </div>
              <div className='fixture-right'>
                <div className='fixture-card-right'>
                  <FixtureCard member={this.props.opponentTeam[1]} val={2} />
                </div>
              </div>
              <div className='fixture-left'>
                <div className='fixture-card'>
                  <FixtureCard member={this.props.opponentTeam[0]} val={2} />
                </div>
                <div className='fixture-card'>
                  <FixtureCard member={this.props.opponentTeam[2]} val={2} />
                </div>
              </div>
            </div>
          </div>
          <div className='fixture-btn-div'>
            <button onClick={this.handleStart} className='fight-btn'>
              FIGHT!
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className='fixture-container'>
            <div className='fixture-div'>
              <div className='fixture-left'>
                <div className='fixture-card'>{one}</div>
                <div className='fixture-card'>{two}</div>
              </div>
              <div className='fixture-right'>
                <div className='fixture-card-right'>{three}</div>
              </div>
            </div>
            <div className='versus'>V/S</div>
            <div className='fixture-div'>
              <div className='fixture-right'>
                <div className='fixture-card-right'>
                  <FixtureCard member={this.props.opponentTeam[1]} val={2} />
                </div>
              </div>
              <div className='fixture-left'>
                <div className='fixture-card'>
                  <FixtureCard member={this.props.opponentTeam[0]} val={2} />
                </div>
                <div className='fixture-card'>
                  <FixtureCard member={this.props.opponentTeam[2]} val={2} />
                </div>
              </div>
            </div>
          </div>
          <div className='opponent-stats-container'>
            <button onClick={this.handleNew} className='changeform-button'>
              Change Formation
            </button>
            <h2>{Object.keys(this.props.team)[0]}'s Stats</h2>
            {stats}
          </div>
          <div className='opponent-stats-container'>
            <h2>Opponent Team Stats</h2>
            {opponentStats}
          </div>
          <div className='fixture-btn-div'>
            <button onClick={this.handleStart} className='fight-btn'>
              FIGHT!
            </button>
          </div>
        </div>
      );
    }
  }
  render() {
    let fixture;
    const x = window.matchMedia("(max-width: 720px)");
    fixture = this.adjustScreen(x);
    x.addListener(this.adjustScreen);
    stats = (
      <div className='my-team-stats'>
        {abilities.map((a) => {
          return <Stats team={this.props.team[Object.keys(this.props.team)[0]]} name={a} />;
        })}
      </div>
    );
    opponentStats = (
      <div className='opponent-stats'>
        {abilities.map((a) => {
          return <Stats team={this.props.opponentTeam} name={a} />;
        })}
      </div>
    );
    return <div className='fixture-outermost-div'>{fixture}</div>;
  }
}
