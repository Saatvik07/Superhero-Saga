import React from "react";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";
import "./App.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./Components/NavBar/NavBar";
import { SearchBar } from "./Components/SearchBar/SearchBar";
import { FtBoard } from "./Components/FtBoard/FtBoard";
import { Api } from "../src/util/Api";
import { SearchRes } from "./Components/SearchRes/SearchRes";
import { Team } from "./Components/Team/Team";
import { Stats } from "./Components/Stats/Stats";
import { TeamList } from "./Components/TeamList/TeamList";
import { Fixture } from "./Components/Fixture/Fixture";
import { BattleGround } from "./Components/BattleGround/BattleGround";
import { About } from "./Components/About/About";
import { heroes } from "../src/util/data";
const abilities = ["intelligence", "power", "strength", "speed", "durability", "combat"];
let modal1,
  addedExtraMember = 0,
  addedNullValue = 0,
  addedExtraTeam = 0,
  teamMemberNotSufficient = 0,
  firstSearch = 0,
  firstAddTeam = 0,
  firstSave = 0,
  firstBattle = 0,
  params,
  battle = <div></div>,
  search = <div></div>,
  battleBegin = <div></div>,
  battle1 = <div></div>,
  battle2 = <div></div>,
  battle3 = <div></div>,
  about = <div></div>;
let team, stats, searchResults, allTeams, opponentStats;
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: "search",
      feature: {},
      searchResults: [],
      team: [],
      allTeams: [],
      showModal: false,
      selectedTeam: {},
      formation: 0,
      fight: 1,
      score: 0,
      draw: 0,
      result: "no",
      opponentTeam: [],
      search: true,
      firstModals: [false, false, false, false],
    };
    this.handleNavClick = this.handleNavClick.bind(this);
    this.handleRefreshButton = this.handleRefreshButton.bind(this);
    this.handleSearchButtonClick = this.handleSearchButtonClick.bind(this);
    this.handleOpenFeature = this.handleOpenFeature.bind(this);
    this.handleAddToTeam = this.handleAddToTeam.bind(this);
    this.handleRemoveFromTeam = this.handleRemoveFromTeam.bind(this);
    this.statsCompute = this.statsCompute.bind(this);
    this.handleSaveClick = this.handleSaveClick.bind(this);
    this.handleEditTeam = this.handleEditTeam.bind(this);
    this.handleSelectTeam = this.handleSelectTeam.bind(this);
    this.handleStartfight = this.handleStartfight.bind(this);
    this.handleChangeFormation = this.handleChangeFormation.bind(this);
    this.handleFightEnd = this.handleFightEnd.bind(this);
    this.generateRandomTeam = this.generateRandomTeam.bind(this);
    this.adjustScreen = this.adjustScreen.bind(this);
  }
  handleNavClick(pageName) {
    this.setState({ activePage: pageName, result: "no" });
  }
  findnum(arr, num) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === num) return true;
    }
    return false;
  }
  getRandom() {
    const a = [];
    for (let i = 0; i < 4; i++) {
      const num = Math.floor(Math.random() * 732);
      if (!this.findnum(a, num)) {
        a.push(num);
      }
    }
    return a;
  }
  handleRefreshButton() {
    const list = this.getRandom();
    Api.getFeature(list[0]).then((s) => {
      if (!s.image) {
        const a = this.getRandom();
        s = Api.getFeature(a[0]).then((resolve) => {
          return resolve;
        });
      }
      this.setState({ feature: s });
    });
  }
  handleSearchButtonClick(searchterm) {
    Api.getSearch(searchterm).then((resolve) => {
      if (resolve.length === 0) {
        this.setState({ search: false });
      } else {
        if (!firstSearch) {
          firstSearch = 1;
          this.setState({ searchResults: resolve, firstModals: [true, false, false, false] });
        } else {
          this.setState({ searchResults: resolve });
        }
      }
    });
  }
  handleOpenFeature(obj) {
    this.setState({ feature: obj });
  }
  handleAddToTeam(obj) {
    const arr_id = this.state.team.map((obj) => {
      return obj.id;
    });
    let ctr = 0;
    for (let key in obj) {
      if (abilities.includes(key)) {
        if (obj[key] !== "null") {
          ctr++;
        }
      }
    }
    console.log(ctr);
    if (this.state.team.length === 3) {
      addedExtraMember = 1;
      this.setState({ showModal: true });
    } else if (ctr < 6) {
      addedNullValue = 1;
      this.setState({ showModal: true });
    } else if (this.state.team.length < 4 && !arr_id.includes(obj.id) && !firstAddTeam) {
      firstAddTeam = 1;
      const arr_1 = this.state.team;
      arr_1[arr_1.length] = obj;
      this.setState({ team: arr_1, firstModals: [false, true, false, false] });
    } else if (this.state.team.length < 4 && !arr_id.includes(obj.id)) {
      const arr_1 = this.state.team;
      arr_1[arr_1.length] = obj;
      this.setState({ team: arr_1 });
    }
  }
  handleEditTeam(team, num) {
    const inputTeamName = Object.keys(team)[0];
    const arr = team[inputTeamName];
    const a = [];
    for (let key in this.state.allTeams) {
      const name = Object.keys(this.state.allTeams[key])[0];
      console.log(inputTeamName);
      if (name !== inputTeamName) {
        a.push(this.state.allTeams[key]);
      }
    }
    if (num === 1) this.setState({ team: arr, allTeams: a });
    else this.setState({ allTeams: a });
  }
  handleRemoveFromTeam(obj) {
    const arr_1 = this.state.team.filter((member) => {
      return member.id !== obj.id;
    });
    this.setState({ team: arr_1 });
  }
  statsCompute(inp) {
    const intelligence_arr = this.state.team.map((obj) => {
      return obj[inp];
    });
    const intell_avg = Math.floor(
      intelligence_arr.reduce((acc, curr) => {
        return acc + curr;
      }, 0) / this.state.team.length
    );
    return intell_avg;
  }
  handleSaveClick(teamName) {
    const arrStats = abilities.map((inp) => {
      const arr = this.state.team.map((obj) => {
        return parseInt(obj[inp], 10);
      });
      let sum = 0;
      for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
      }
      return Math.floor(sum / arr.length);
    });
    const teamNames = this.state.allTeams.map((team) => {
      return Object.keys(team)[0];
    });
    if (this.state.allTeams.length > 10) {
      addedExtraTeam = 1;
      this.setState({ showModal: true });
    } else if (this.state.allTeams.length <= 10 && !teamNames.includes(teamNames) && !firstSave) {
      firstSave = 1;
      const currTeams = this.state.allTeams;
      const team_object = {};
      team_object[teamName] = this.state.team;
      team_object["intelligence"] = arrStats[0];
      team_object["power"] = arrStats[1];
      team_object["strength"] = arrStats[2];
      team_object["speed"] = arrStats[3];
      team_object["durability"] = arrStats[4];
      team_object["combat"] = arrStats[5];
      currTeams.push(team_object);
      console.log(team_object);
      this.setState({ allTeams: currTeams, team: [], firstModals: [false, false, true, false] });
    } else if (this.state.allTeams.length <= 10 && !teamNames.includes(teamNames)) {
      const currTeams = this.state.allTeams;
      const team_object = {};
      team_object[teamName] = this.state.team;
      team_object["intelligence"] = arrStats[0];
      team_object["power"] = arrStats[1];
      team_object["strength"] = arrStats[2];
      team_object["speed"] = arrStats[3];
      team_object["durability"] = arrStats[4];
      team_object["combat"] = arrStats[5];
      currTeams.push(team_object);
      console.log(team_object);
      this.setState({ allTeams: currTeams, team: [] });
    }
  }
  handleSelectTeam(team) {
    let key = Object.keys(team)[0];

    if (team[key].length < 3) {
      teamMemberNotSufficient = 1;
      console.log("s");
      this.setState({ showModal: true });
    } else if (!firstBattle) {
      firstBattle = 1;
      this.setState({ selectedTeam: team, activePage: "battleMode", firstModals: [false, false, false, true] });
    } else {
      this.setState({ selectedTeam: team, activePage: "battleMode" });
    }
  }
  handleStartfight() {
    this.setState({ activePage: "battleBegun" });
  }
  handleChangeFormation(val) {
    this.setState({ formation: val });
  }
  handleFightEnd(val, win) {
    if (val <= 3) {
      if (win === 1) {
        this.setState({ fight: val, score: this.state.score + 1 });
      } else if (win === 2) {
        this.setState({ fight: val, draw: this.state.draw + 1 });
      } else {
        this.setState({ fight: val });
      }
    } else {
      let curr_score = this.state.score;
      let curr_draw = this.state.draw;
      if (win === 1) {
        curr_score += 1;
      } else if (win === 2) {
        curr_draw += 1;
      }
      if (curr_draw === 3 || (curr_draw == 1 && curr_score == 1)) {
        this.setState({ result: "draw", activePage: "about" });
      } else if (curr_score + curr_draw == 3 || curr_score == 2) {
        this.setState({ result: "win", activePage: "about" });
      } else {
        this.setState({ result: "lose", activePage: "about" });
      }
    }
  }
  generateRandomTeam() {
    let arr_id = [],
      teamFormed = [];
    while (teamFormed.length < 3) {
      const num = Math.floor(Math.random() * 57);
      if (!arr_id.includes(heroes[num].id)) {
        teamFormed.push(heroes[num]);
        arr_id.push(heroes[num].id);
      }
    }
    this.setState({ opponentTeam: teamFormed });
  }
  componentDidMount() {
    this.handleRefreshButton();
    this.generateRandomTeam();
    params = {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      },
      pagination: {
        el: ".swiper-pagination",
      },
    };
  }
  createTeamSwiper(val) {
    let teamNames,
      i = -1;
    const emptySlot = (
      <div className='first-team-card'>
        <div className='first-team-card-text'>
          <h3>Empty Slot</h3>
        </div>
      </div>
    );
    teamNames = this.state.allTeams.map((team) => {
      i++;
      return <h5 key={i}>{Object.keys(team)[0]}</h5>;
    });
    const a = this.state.allTeams.map((team) => {
      return <TeamList team={team} onClick={this.handleEditTeam} value={val} handleSelect={this.handleSelectTeam} />;
    });
    return (
      <Swiper {...params} className='swiper-team'>
        <div>
          <div className='first-team-card'>
            <div className='first-team-card-text'>
              <h3>Teams</h3>
            </div>
            <div className='first-team-card-content'>{teamNames}</div>
          </div>
        </div>
        <div>{a[0] ? a[0] : emptySlot}</div>
        <div>{a[1] ? a[1] : emptySlot}</div>
        <div>{a[2] ? a[2] : emptySlot}</div>
        <div>{a[3] ? a[3] : emptySlot}</div>
        <div>{a[4] ? a[4] : emptySlot}</div>
        <div>{a[5] ? a[5] : emptySlot}</div>
        <div>{a[6] ? a[6] : emptySlot}</div>
        <div>{a[7] ? a[7] : emptySlot}</div>
        <div>{a[8] ? a[8] : emptySlot}</div>
        <div>{a[9] ? a[9] : emptySlot}</div>
      </Swiper>
    );
  }
  adjustScreen(x) {
    if (this.state.allTeams.length > 0 && this.state.activePage === "search") {
      allTeams = this.createTeamSwiper(1);
    } else {
      allTeams = <div></div>;
    }
    if (x.matches && this.state.activePage === "search") {
      battle = <div></div>;
      about = <div></div>;
      battleBegin = <div></div>;
      battle1 = <div></div>;
      battle2 = <div></div>;
      battle3 = <div></div>;
      return (
        <div>
          <div className='navbar1'>
            <NavBar onClick={this.handleNavClick} />
          </div>
          <div className='App'>
            <div className='left-flex'>
              <SearchBar onClick={this.handleSearchButtonClick} />
              {searchResults}
              {allTeams}
            </div>
            <div className='team-maker'>
              {team}
              {stats}
            </div>
            <div className='right-flex'>
              <FtBoard handleRefresh={this.handleRefreshButton} list_obj={this.state.feature} />
            </div>
          </div>

          <footer>
            <p>
              &copy; Copyright 2020 <a href='mailto:saatvik19097@iiitd.ac.in?subject = Feedback&body = Message'>Saatvik Bhatnagar</a>
            </p>
          </footer>
        </div>
      );
    } else if (this.state.activePage === "search") {
      battle = <div></div>;
      about = <div></div>;
      battleBegin = <div></div>;
      battle1 = <div></div>;
      battle2 = <div></div>;
      battle3 = <div></div>;
      return (
        <div>
          <div className='navbar1'>
            <NavBar onClick={this.handleNavClick} />
          </div>
          <div className='App'>
            <div className='left-flex'>
              <SearchBar onClick={this.handleSearchButtonClick} />
              {searchResults}
              {allTeams}
            </div>
            <div className='right-flex'>
              <FtBoard handleRefresh={this.handleRefreshButton} list_obj={this.state.feature} />
            </div>
          </div>
          <div className='team-maker'>
            {team}
            {stats}
          </div>
          <footer>
            <p>
              &copy; Copyright 2020 <a href='mailto:saatvik19097@iiitd.ac.in?subject = Feedback&body = Message'>Saatvik Bhatnagar</a>
            </p>
          </footer>
        </div>
      );
    }
  }
  render() {
    const x = window.matchMedia("(max-width: 720px)");
    search = this.adjustScreen(x);
    x.addListener(this.adjustScreen);
    opponentStats = (
      <div className='opponent-stats'>
        {abilities.map((a) => {
          return <Stats team={this.state.opponentTeam} name={a} />;
        })}
      </div>
    );
    if (this.state.team.length > 0) {
      team = (
        <div className='team-display'>
          <Team
            team_list={this.state.team}
            handleClick={this.handleOpenFeature}
            handleAddClick={this.handleAddToTeam}
            handleRemove={this.handleRemoveFromTeam}
            onSaveClick={this.handleSaveClick}
          />
        </div>
      );
      stats = (
        <div className='stats'>
          {abilities.map((a) => {
            return <Stats team={this.state.team} name={a} />;
          })}
        </div>
      );
    } else {
      stats = <div></div>;
      team = <div></div>;
    }
    if (this.state.searchResults.length > 0) {
      searchResults = (
        <SearchRes
          searchResults={this.state.searchResults}
          handleClick={this.handleOpenFeature}
          handleAddClick={this.handleAddToTeam}
          handleRemove={this.handleRemoveFromTeam}
        />
      );
    } else {
      searchResults = <div></div>;
    }

    if (this.state.showModal && addedExtraMember) {
      addedExtraMember = 0;
      modal1 = (
        <Modal
          show={this.state.showModal}
          onHide={() => {
            this.setState({ showModal: false });
          }}
        >
          <Modal.Header closeButton style={{ backgroundColor: "#264653", color: "#f4a261" }}>
            <Modal.Title style={{ backgroundColor: "#264653", color: "#f4a261" }}>Sorry, you can't add this player</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ backgroundColor: "#264653", color: "#f4a261" }}>A team can contain only three members</Modal.Body>
          <Modal.Footer style={{ backgroundColor: "#264653", color: "#f4a261" }}>
            <Button
              style={{ backgroundColor: "#e76f51", color: "#264653" }}
              onClick={() => {
                this.setState({ showModal: false });
              }}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      );
    } else if (this.state.showModal && addedExtraTeam) {
      addedExtraTeam = 0;
      modal1 = (
        <Modal
          show={this.state.showModal}
          onHide={() => {
            this.setState({ showModal: false });
          }}
        >
          <Modal.Header closeButton style={{ backgroundColor: "#264653", color: "#f4a261" }}>
            <Modal.Title style={{ backgroundColor: "#264653", color: "#f4a261" }}>Sorry you cannot add another team</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ backgroundColor: "#264653", color: "#f4a261" }}>
            You can add at max 10 teams at a time, delete a team and try again
          </Modal.Body>
          <Modal.Footer style={{ backgroundColor: "#264653", color: "#f4a261" }}>
            <Button
              style={{ backgroundColor: "#e76f51", color: "#264653" }}
              onClick={() => {
                this.setState({ showModal: false });
              }}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      );
    } else if (this.state.showModal && addedNullValue) {
      addedNullValue = 0;
      modal1 = (
        <Modal
          show={this.state.showModal}
          onHide={() => {
            this.setState({ showModal: false });
          }}
        >
          <Modal.Header closeButton style={{ backgroundColor: "#264653", color: "#f4a261" }}>
            <Modal.Title style={{ backgroundColor: "#264653", color: "#f4a261" }}>Sorry this member cannot be added</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ backgroundColor: "#264653", color: "#f4a261" }}>
            This is present in the database but one or more of its abilites are null
          </Modal.Body>
          <Modal.Footer style={{ backgroundColor: "#264653", color: "#f4a261" }}>
            <Button
              style={{ backgroundColor: "#e76f51", color: "#264653", border: "none", fontWeight: "bold" }}
              onClick={() => {
                this.setState({ showModal: false });
              }}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      );
    } else if (this.state.showModal && teamMemberNotSufficient) {
      teamMemberNotSufficient = 0;
      modal1 = (
        <Modal
          show={this.state.showModal}
          onHide={() => {
            this.setState({ showModal: false });
          }}
        >
          <Modal.Header closeButton style={{ backgroundColor: "#264653", color: "#f4a261" }}>
            <Modal.Title style={{ backgroundColor: "#264653", color: "#f4a261" }}>
              Sorry this team cannot be selected for battle as it has insufficient number of members
            </Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ backgroundColor: "#264653", color: "#f4a261" }}>
            Go to search and edit this team to add members to it
          </Modal.Body>
          <Modal.Footer style={{ backgroundColor: "#264653", color: "#f4a261" }}>
            <Button
              style={{ backgroundColor: "#e76f51", color: "#264653", border: "none", fontWeight: "bold" }}
              onClick={() => {
                this.setState({ showModal: false });
              }}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      );
    } else if (this.state.firstModals[1]) {
      modal1 = (
        <Modal
          show={this.state.firstModals[1]}
          onHide={() => {
            this.setState({ firstModals: [false, false, false, false] });
          }}
        >
          <Modal.Header closeButton style={{ backgroundColor: "#264653", color: "#f4a261" }}>
            <Modal.Title style={{ backgroundColor: "#264653", color: "#f4a261" }}>
              The member was added to the team scroll down to see your current team
            </Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ backgroundColor: "#264653", color: "#f4a261" }}>Below that you can see your team stats</Modal.Body>
          <Modal.Footer style={{ backgroundColor: "#264653", color: "#f4a261" }}>
            <Button
              style={{ backgroundColor: "#e76f51", color: "#264653", border: "none", fontWeight: "bold" }}
              onClick={() => {
                this.setState({ firstModals: [false, false, false, false] });
              }}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      );
    } else if (this.state.firstModals[0]) {
      modal1 = (
        <Modal
          show={this.state.firstModals[0]}
          onHide={() => {
            this.setState({ firstModals: [false, false, false, false] });
          }}
        >
          <Modal.Header closeButton style={{ backgroundColor: "#264653", color: "#f4a261" }}>
            <Modal.Title style={{ backgroundColor: "#264653", color: "#f4a261" }}>The search was successful</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ backgroundColor: "#264653", color: "#f4a261" }}>
            You can hover/click on the card to add it your team or know trivia about the character
          </Modal.Body>
          <Modal.Footer style={{ backgroundColor: "#264653", color: "#f4a261" }}>
            <Button
              style={{ backgroundColor: "#e76f51", color: "#264653", border: "none", fontWeight: "bold" }}
              onClick={() => {
                this.setState({ firstModals: [false, false, false, false] });
              }}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      );
    } else if (this.state.firstModals[2]) {
      modal1 = (
        <Modal
          show={this.state.firstModals[2]}
          onHide={() => {
            this.setState({ firstModals: [false, false, false, false] });
          }}
        >
          <Modal.Header closeButton style={{ backgroundColor: "#264653", color: "#f4a261" }}>
            <Modal.Title style={{ backgroundColor: "#264653", color: "#f4a261" }}>Successfully Saved</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ backgroundColor: "#264653", color: "#f4a261" }}>
            You can manage your teams above and select your team for battle{" "}
          </Modal.Body>
          <Modal.Footer style={{ backgroundColor: "#264653", color: "#f4a261" }}>
            <Button
              style={{ backgroundColor: "#e76f51", color: "#264653", border: "none", fontWeight: "bold" }}
              onClick={() => {
                this.setState({ firstModals: [false, false, false, false] });
              }}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      );
    } else if (this.state.firstModals[3]) {
      modal1 = (
        <Modal
          show={this.state.firstModals[3]}
          onHide={() => {
            this.setState({ firstModals: [false, false, false, false] });
          }}
        >
          <Modal.Header closeButton style={{ backgroundColor: "#264653", color: "#f4a261" }}>
            <Modal.Title style={{ backgroundColor: "#264653", color: "#f4a261" }}>Ah I see you are ready for battle</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ backgroundColor: "#264653", color: "#f4a261" }}>
            Before beginning the battle compare your team stats with the opponent team's stats
          </Modal.Body>
          <Modal.Footer style={{ backgroundColor: "#264653", color: "#f4a261" }}>
            <Button
              style={{ backgroundColor: "#e76f51", color: "#264653", border: "none", fontWeight: "bold" }}
              onClick={() => {
                this.setState({ firstModals: [false, false, false, false] });
              }}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      );
    } else if (!this.state.search) {
      modal1 = (
        <Modal
          show={!this.state.search}
          onHide={() => {
            this.setState({ search: true });
          }}
        >
          <Modal.Header closeButton style={{ backgroundColor: "#264653", color: "#f4a261" }}>
            <Modal.Title style={{ backgroundColor: "#264653", color: "#f4a261" }}>Sorry that was not found</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ backgroundColor: "#264653", color: "#f4a261" }}>
            Try searching something else or just a part of the name
          </Modal.Body>
          <Modal.Footer style={{ backgroundColor: "#264653", color: "#f4a261" }}>
            <Button
              style={{ backgroundColor: "#e76f51", color: "#264653", border: "none", fontWeight: "bold" }}
              onClick={() => {
                this.setState({ search: true });
              }}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      );
    } else {
      modal1 = <div></div>;
    }
    if (this.state.activePage === "battle") {
      search = <div></div>;
      about = <div></div>;
      battleBegin = <div></div>;
      battle1 = <div></div>;
      battle2 = <div></div>;
      battle3 = <div></div>;
      battle = (
        <div>
          <div className='navbar1'>
            <NavBar onClick={this.handleNavClick} />
          </div>
          <div>
            <div className='battle-team-selector'>{this.createTeamSwiper(2)}</div>
          </div>
        </div>
      );
    } else if (this.state.activePage === "battleMode") {
      search = <div></div>;
      about = <div></div>;
      battle = <div></div>;
      battle1 = <div></div>;
      battle2 = <div></div>;
      battle3 = <div></div>;

      battleBegin = (
        <div>
          <div className='navbar1'>
            <NavBar onClick={this.handleNavClick} />
          </div>
          <div>
            <Fixture
              team={this.state.selectedTeam}
              onClick={this.handleChangeFormation}
              onStartFight={this.handleStartfight}
              opponentTeam={this.state.opponentTeam}
            />
          </div>

          <footer>
            <p>
              &copy; Copyright 2020 <a href='mailto:saatvik19097@iiitd.ac.in?subject = Feedback&body = Message'>Saatvik Bhatnagar</a>
            </p>
          </footer>
        </div>
      );
    } else if (this.state.activePage === "battleBegun") {
      let one, two, three;
      let key = Object.keys(this.state.selectedTeam)[0];
      const arr = this.state.selectedTeam[key];
      if (this.state.formation === 0) {
        one = arr[0];
        two = arr[2];
        three = arr[1];
      } else if (this.state.formation === 1) {
        one = arr[0];
        two = arr[1];
        three = arr[2];
      } else if (this.state.formation === 2) {
        one = arr[2];
        two = arr[1];
        three = arr[0];
      } else if (this.state.formation === 3) {
        one = arr[2];
        two = arr[0];
        three = arr[1];
      } else if (this.state.formation === 4) {
        one = arr[1];
        two = arr[2];
        three = arr[0];
      } else if (this.state.formation === 5) {
        one = arr[1];
        two = arr[0];
        three = arr[2];
      }
      if (this.state.fight === 1) {
        battle = <div></div>;
        battleBegin = <div></div>;
        about = <div></div>;
        search = <div></div>;
        battle2 = <div></div>;
        battle3 = <div></div>;
        battle1 = (
          <div className='battleground-div-one'>
            <BattleGround
              character1={one}
              character2={this.state.opponentTeam[0]}
              number={1}
              handleFightEnd={this.handleFightEnd}
              handleEndGame={this.handleEndGame}
            />
            <footer>
              <p>
                &copy; Copyright 2020 <a href='mailto:saatvik19097@iiitd.ac.in?subject = Feedback&body = Message'>Saatvik Bhatnagar</a>
              </p>
            </footer>
          </div>
        );
      } else if (this.state.fight === 2) {
        battle = <div></div>;
        battleBegin = <div></div>;
        about = <div></div>;
        search = <div></div>;
        battle1 = <div></div>;
        battle3 = <div></div>;
        battle2 = (
          <div className='battleground-div-two'>
            <BattleGround
              character1={two}
              character2={this.state.opponentTeam[1]}
              number={2}
              handleFightEnd={this.handleFightEnd}
              handleEndGame={this.handleEndGame}
            />
            <footer>
              <p>
                &copy; Copyright 2020 <a href='mailto:saatvik19097@iiitd.ac.in?subject = Feedback&body = Message'>Saatvik Bhatnagar</a>
              </p>
            </footer>
          </div>
        );
      } else if (this.state.fight === 3) {
        battle = <div></div>;
        battleBegin = <div></div>;
        about = <div></div>;
        search = <div></div>;
        battle1 = <div></div>;
        battle2 = <div></div>;
        battle3 = (
          <div className='battleground-div-three'>
            <BattleGround
              character1={three}
              character2={this.state.opponentTeam[2]}
              number={3}
              handleFightEnd={this.handleFightEnd}
              handleEndGame={this.handleEndGame}
            />
            <footer>
              <p>
                &copy; Copyright 2020 <a href='mailto:saatvik19097@iiitd.ac.in?subject = Feedback&body = Message'>Saatvik Bhatnagar</a>
              </p>
            </footer>
          </div>
        );
      }
    } else if (this.state.activePage === "about") {
      search = <div></div>;
      battle = <div></div>;
      battle1 = <div></div>;
      battle2 = <div></div>;
      battle3 = <div></div>;
      battleBegin = <div></div>;
      about = (
        <div className='about-container'>
          <div className='navbar1'>
            <NavBar onClick={this.handleNavClick} />
          </div>
          <About result={this.state.result} />
          <footer>
            <p>
              &copy; Copyright 2020 <a href='mailto:saatvik19097@iiitd.ac.in?subject = Feedback&body = Message'>Saatvik Bhatnagar</a>
            </p>
          </footer>
        </div>
      );
    }
    return (
      <div className='body'>
        {search}
        {battle}
        {battleBegin}
        {battle1}
        {battle2}
        {battle3}
        {about}
        {modal1}
      </div>
    );
  }
}

export default App;
