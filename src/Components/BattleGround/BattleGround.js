import React from "react";
import "./BattleGround.css";
import Card from "react-bootstrap/Card";
import Right from "./right.png";
import Wrong from "./wrong.png";
import Draw from "./draw.png";
import Message from "./chat.png";
import ReactSpeedometer from "react-d3-speedometer";
import { responses } from "../../util/replies";
let i = 0,
  j = 0,
  leftImage = "message-img",
  rightImage = "message-img";

export class BattleGround extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animation1: false,
      animation2: false,
      animation3: false,
      animation4: false,
      animation5: false,
      animation6: false,
      value: 500,
    };
    this.startFight = this.startFight.bind(this);
    this.handleNextFight = this.handleNextFight.bind(this);
    this.screenSize = this.screenSize.bind(this);
    this.screenSize1 = this.screenSize1.bind(this);
  }
  getRandom() {
    return Math.floor(Math.random() * 60);
  }
  handleNextFight() {
    if (i > j) {
      this.props.handleFightEnd(this.props.number + 1, 1);
    } else if (i < j) {
      this.props.handleFightEnd(this.props.number + 1, 0);
    } else {
      this.props.handleFightEnd(this.props.number + 1, 2);
    }
  }
  factoryRight() {
    const right = document.createElement("img");
    right.setAttribute("src", Right);
    right.setAttribute("class", "answer-img");
    return right;
  }
  factoryWrong() {
    const wrong = document.createElement("img");
    wrong.setAttribute("src", Wrong);
    wrong.setAttribute("class", "answer-img");
    return wrong;
  }
  factoryDraw() {
    const draw = document.createElement("img");
    draw.setAttribute("src", Draw);
    draw.setAttribute("class", "answer-img");
    return draw;
  }
  factoryMessage(imageClassName) {
    const message = document.createElement("div");
    message.className = "message-container";
    message.style.position = "relative";
    const text = document.createElement("p");
    text.className = "message-content";
    text.innerText = responses[this.getRandom()];
    text.style.position = "absolute";
    text.style.left = "10px";
    text.style.width = "80%";
    const backImage = document.createElement("img");
    backImage.setAttribute("src", Message);
    backImage.setAttribute("class", imageClassName);
    message.appendChild(text);
    message.appendChild(backImage);
    return message;
  }
  startFight() {
    document.getElementById("btn").style.display = "none";
    document.getElementById(
      "btn-div"
    ).innerHTML = `Battle: ${this.props.number} ${this.props.character1.name} V/S ${this.props.character2.name}`;
    document.getElementById("btn-div").style = "background-color:#e9c46a";
    document.getElementById("left2").innerHTML = "";
    document.getElementById("left2").appendChild(this.factoryMessage(leftImage));
    document.getElementById("right2").innerHTML = "";
    document.getElementById("right2").appendChild(this.factoryMessage(rightImage));
    setTimeout(() => {
      document.getElementById("battle-props-div").style.display = "";
      document.getElementById("b1").style.display = "flex";
      this.setState({ animation1: true });
    }, 2000);
  }
  screenSize(x) {
    if (x.matches) {
      return (
        <ReactSpeedometer
          width={300}
          height={180}
          needleHeightRatio={0.7}
          value={this.state.value}
          customSegmentStops={[
            0,
            83.3333,
            166.6666,
            249.9999,
            333.3332,
            416.6665,
            500,
            583.3333,
            666.6664,
            749.9997,
            833.333,
            916.6663,
            1000,
          ]}
          segmentColors={[
            "#d00000",
            "#dc2f02",
            "#e85d04",
            "#f48c06",
            "#faa307",
            "#ffba08",
            "#bfd200",
            "#aacc00",
            "#80b918",
            "#55a630",
            "#2b9348",
            "#007f5f",
          ]}
          customSegmentLabels={[
            {
              text: "Lost",
              position: "OUTSIDE",
              color: "#d8dee9",
            },
            {
              text: "",
              position: "OUTSIDE",
              color: "#d8dee9",
            },
            {
              text: "",
              position: "OUTSIDE",
              color: "#d8dee9",
            },
            {
              text: "",
              position: "OUTSIDE",
              color: "#d8dee9",
            },
            {
              text: "",
              position: "OUTSIDE",
              color: "#d8dee9",
            },
            {
              text: "",
              position: "OUTSIDE",
              color: "#d8dee9",
            },
            {
              text: "",
              position: "OUTSIDE",
              color: "#d8dee9",
            },
            {
              text: "",
              position: "OUTSIDE",
              color: "#d8dee9",
            },
            {
              text: "",
              position: "OUTSIDE",
              color: "#d8dee9",
            },
            {
              text: "",
              position: "OUTSIDE",
              color: "#d8dee9",
            },
            {
              text: "",
              position: "OUTSIDE",
              color: "#d8dee9",
            },
            {
              text: "Won",
              position: "OUTSIDE",
              color: "#d8dee9",
            },
          ]}
          currentValueText='Results'
          ringWidth={50}
          needleTransitionDuration={3333}
          needleTransition='easeElastic'
          needleColor={"#90f2ff"}
          textColor={"#d8dee9"}
        />
      );
    } else {
      return (
        <ReactSpeedometer
          width={500}
          needleHeightRatio={0.7}
          value={this.state.value}
          customSegmentStops={[
            0,
            83.3333,
            166.6666,
            249.9999,
            333.3332,
            416.6665,
            500,
            583.3333,
            666.6664,
            749.9997,
            833.333,
            916.6663,
            1000,
          ]}
          segmentColors={[
            "#d00000",
            "#dc2f02",
            "#e85d04",
            "#f48c06",
            "#faa307",
            "#ffba08",
            "#bfd200",
            "#aacc00",
            "#80b918",
            "#55a630",
            "#2b9348",
            "#007f5f",
          ]}
          customSegmentLabels={[
            {
              text: "Lost",
              position: "OUTSIDE",
              color: "#d8dee9",
            },
            {
              text: "",
              position: "OUTSIDE",
              color: "#d8dee9",
            },
            {
              text: "",
              position: "OUTSIDE",
              color: "#d8dee9",
            },
            {
              text: "",
              position: "OUTSIDE",
              color: "#d8dee9",
            },
            {
              text: "",
              position: "OUTSIDE",
              color: "#d8dee9",
            },
            {
              text: "",
              position: "OUTSIDE",
              color: "#d8dee9",
            },
            {
              text: "",
              position: "OUTSIDE",
              color: "#d8dee9",
            },
            {
              text: "",
              position: "OUTSIDE",
              color: "#d8dee9",
            },
            {
              text: "",
              position: "OUTSIDE",
              color: "#d8dee9",
            },
            {
              text: "",
              position: "OUTSIDE",
              color: "#d8dee9",
            },
            {
              text: "",
              position: "OUTSIDE",
              color: "#d8dee9",
            },
            {
              text: "Won",
              position: "OUTSIDE",
              color: "#d8dee9",
            },
          ]}
          currentValueText='Results'
          ringWidth={50}
          needleTransitionDuration={3333}
          needleTransition='easeElastic'
          needleColor={"#90f2ff"}
          textColor={"#d8dee9"}
        />
      );
    }
  }
  screenSize1(x) {
    if (x.matches) {
      rightImage = "message-img-inverted";
      return (
        <div className='battle-right'>
          <div className='answer-div' id='battle-right'></div>
          <div className='battle-right-right'>
            <div className='message-right' id='right2'></div>
            <Card>
              <Card.Img variant='top' src={this.props.character2.image} />
              <Card.ImgOverlay></Card.ImgOverlay>
            </Card>
          </div>
        </div>
      );
    } else {
      return (
        <div className='battle-right'>
          <div className='answer-div' id='battle-right'></div>
          <div className='battle-right-right'>
            <Card>
              <Card.Img variant='top' src={this.props.character2.image} />
              <Card.ImgOverlay></Card.ImgOverlay>
            </Card>
            <div className='message-right' id='right2'></div>
          </div>
        </div>
      );
    }
  }
  componentDidMount() {
    i = 0;
    j = 0;
    document.getElementById("battle-props-div").style.display = "none";
  }
  render() {
    let lastButton, svg, right;
    const x = window.matchMedia("(max-width: 720px)");
    svg = this.screenSize(x);
    right = this.screenSize1(x);
    x.addListener(this.screenSize);
    x.addListener(this.screenSize1);
    if (this.props.number === 3) {
      lastButton = (
        <button onClick={this.handleNextFight} className='end-btn' id='end-btn'>
          End Game
        </button>
      );
    } else {
      lastButton = (
        <button onClick={this.handleNextFight} className='next-fight-btn' id='end-btn'>
          Next Fight
        </button>
      );
    }
    return (
      <div className='battleground'>
        <div className='battle-div'>
          <div className='battle-left'>
            <div className='battle-left-left'>
              <Card>
                <Card.Img variant='top' src={this.props.character1.image} />
                <Card.ImgOverlay></Card.ImgOverlay>
              </Card>
              <div className='messages-left' id='left2'></div>
            </div>

            <div className='answer-div' id='battle-left'></div>
          </div>
          <div className='battle-middle' id='middle'>
            <div className='btn-div' id='btn-div'>
              <button onClick={this.startFight} className='start-btn' id='btn'>
                Start
              </button>
            </div>
            <div className='battle-props-div' id='battle-props-div'>
              <div className='battle-prop' id='b1'>
                <h2 id='1'>Intelligence</h2>
                <div className='results' id='result1'>
                  <div
                    className={this.state.animation1 ? "animation" : ""}
                    id='transform1'
                    onAnimationEnd={() => {
                      document.getElementById("1").style.display = "none";
                      document.getElementById("transform1").style.display = "none";
                      document.getElementById("b2").style.display = "flex";
                      document.getElementById("right2").innerHTML = "";
                      document.getElementById("right2").appendChild(this.factoryMessage(rightImage));
                      if (parseInt(this.props.character1.intelligence, 10) > parseInt(this.props.character2.intelligence, 10)) {
                        document.getElementById("battle-left").appendChild(this.factoryRight());

                        document.getElementById("battle-right").appendChild(this.factoryWrong());
                        i++;
                        this.setState({
                          animation1: false,
                          animation2: true,
                          animation3: false,
                          animation4: false,
                          animation5: false,
                          animation6: false,
                          value: this.state.value + 83.3333,
                        });
                      } else if (parseInt(this.props.character1.intelligence, 10) < parseInt(this.props.character2.intelligence, 10)) {
                        document.getElementById("battle-left").appendChild(this.factoryWrong());

                        document.getElementById("battle-right").appendChild(this.factoryRight());
                        j++;
                        this.setState({
                          animation1: false,
                          animation2: true,
                          animation3: false,
                          animation4: false,
                          animation5: false,
                          animation6: false,
                          value: this.state.value - 83.3333,
                        });
                      } else {
                        document.getElementById("battle-left").appendChild(this.factoryDraw());
                        document.getElementById("battle-right").appendChild(this.factoryDraw());
                        this.setState({
                          animation1: false,
                          animation2: true,
                          animation3: false,
                          animation4: false,
                          animation5: false,
                          animation6: false,
                        });
                      }
                    }}
                  >
                    Ongoing......
                  </div>
                </div>
              </div>
              <div className='battle-prop' id='b2'>
                <h2 id='2'>Speed</h2>
                <div className='results' id='result1'>
                  <div
                    className={this.state.animation2 ? "animation" : ""}
                    id='transform2'
                    onAnimationEnd={() => {
                      document.getElementById("2").style.display = "none";
                      document.getElementById("transform2").style.display = "none";
                      document.getElementById("b3").style.display = "flex";
                      document.getElementById("left2").innerHTML = "";
                      document.getElementById("left2").appendChild(this.factoryMessage(leftImage));
                      if (parseInt(this.props.character1.speed, 10) > parseInt(this.props.character2.speed, 10)) {
                        i++;
                        document.getElementById("battle-left").appendChild(this.factoryRight());

                        document.getElementById("battle-right").appendChild(this.factoryWrong());
                        this.setState({
                          animation1: false,
                          animation2: false,
                          animation3: true,
                          animation4: false,
                          animation5: false,
                          animation6: false,
                          value: this.state.value + 83.3333,
                        });
                      } else if (parseInt(this.props.character1.speed, 10) < parseInt(this.props.character2.speed, 10)) {
                        j++;
                        document.getElementById("battle-left").appendChild(this.factoryWrong());

                        document.getElementById("battle-right").appendChild(this.factoryRight());
                        this.setState({
                          animation1: false,
                          animation2: false,
                          animation3: true,
                          animation4: false,
                          animation5: false,
                          animation6: false,
                          value: this.state.value - 83.3333,
                        });
                      } else {
                        document.getElementById("battle-left").appendChild(this.factoryDraw());
                        document.getElementById("battle-right").appendChild(this.factoryDraw());
                        this.setState({
                          animation1: false,
                          animation2: false,
                          animation3: true,
                          animation4: false,
                          animation5: false,
                          animation6: false,
                        });
                      }
                    }}
                  >
                    Ongoing......
                  </div>
                </div>
              </div>
              <div className='battle-prop' id='b3'>
                <h2 id='3'>Strength</h2>
                <div className='results' id='result1'>
                  <div
                    className={this.state.animation3 ? "animation" : ""}
                    id='transform3'
                    onAnimationEnd={() => {
                      document.getElementById("3").style.display = "none";
                      document.getElementById("transform3").style.display = "none";
                      document.getElementById("b4").style.display = "flex";
                      document.getElementById("right2").innerHTML = "";
                      document.getElementById("right2").appendChild(this.factoryMessage(rightImage));
                      if (parseInt(this.props.character1.strength, 10) > parseInt(this.props.character2.strength, 10)) {
                        i++;
                        document.getElementById("battle-left").appendChild(this.factoryRight());
                        document.getElementById("battle-right").appendChild(this.factoryWrong());
                        this.setState({
                          animation1: false,
                          animation2: false,
                          animation3: false,
                          animation4: true,
                          animation5: false,
                          animation6: false,
                          value: this.state.value + 83.3333,
                        });
                      } else if (parseInt(this.props.character1.strength, 10) < parseInt(this.props.character2.strength, 10)) {
                        j++;
                        document.getElementById("battle-left").appendChild(this.factoryWrong());
                        document.getElementById("battle-right").appendChild(this.factoryRight());
                        this.setState({
                          animation1: false,
                          animation2: false,
                          animation3: false,
                          animation4: true,
                          animation5: false,
                          animation6: false,
                          value: this.state.value - 83.3333,
                        });
                      } else {
                        document.getElementById("battle-left").appendChild(this.factoryDraw());
                        document.getElementById("battle-right").appendChild(this.factoryDraw());
                        this.setState({
                          animation1: false,
                          animation2: false,
                          animation3: false,
                          animation4: true,
                          animation5: false,
                          animation6: false,
                        });
                      }
                    }}
                  >
                    Ongoing......
                  </div>
                </div>
              </div>
              <div className='battle-prop' id='b4'>
                <h2 id='4'>Power</h2>
                <div className='results' id='result1'>
                  <div
                    className={this.state.animation4 ? "animation" : ""}
                    id='transform4'
                    onAnimationEnd={() => {
                      document.getElementById("4").style.display = "none";
                      document.getElementById("transform4").style.display = "none";
                      document.getElementById("b5").style.display = "flex";
                      document.getElementById("left2").innerHTML = "";
                      document.getElementById("left2").appendChild(this.factoryMessage(leftImage));
                      if (parseInt(this.props.character1.power, 10) > parseInt(this.props.character2.power, 10)) {
                        i++;
                        document.getElementById("battle-left").appendChild(this.factoryRight());
                        document.getElementById("battle-right").appendChild(this.factoryWrong());
                        this.setState({
                          animation1: false,
                          animation2: false,
                          animation3: false,
                          animation4: false,
                          animation5: true,
                          animation6: false,
                          value: this.state.value + 83.3333,
                        });
                      } else if (parseInt(this.props.character1.power, 10) < parseInt(this.props.character2.power, 10)) {
                        j++;
                        document.getElementById("battle-left").appendChild(this.factoryWrong());
                        document.getElementById("battle-right").appendChild(this.factoryRight());
                        this.setState({
                          animation1: false,
                          animation2: false,
                          animation3: false,
                          animation4: false,
                          animation5: true,
                          animation6: false,
                          value: this.state.value - 83.3333,
                        });
                      } else {
                        document.getElementById("battle-left").appendChild(this.factoryDraw());
                        document.getElementById("battle-right").appendChild(this.factoryDraw());
                        this.setState({
                          animation1: false,
                          animation2: false,
                          animation3: false,
                          animation4: false,
                          animation5: true,
                          animation6: false,
                        });
                      }
                    }}
                  >
                    Ongoing......
                  </div>
                </div>
              </div>
              <div className='battle-prop' id='b5'>
                <h2 id='5'>Durability</h2>
                <div className='results' id='result1'>
                  <div
                    className={this.state.animation5 ? "animation" : ""}
                    id='transform5'
                    onAnimationEnd={() => {
                      document.getElementById("5").style.display = "none";
                      document.getElementById("transform5").style.display = "none";
                      document.getElementById("b6").style.display = "flex";
                      document.getElementById("right2").innerHTML = "";
                      document.getElementById("right2").appendChild(this.factoryMessage(rightImage));
                      if (parseInt(this.props.character1.durability, 10) > parseInt(this.props.character2.durability, 10)) {
                        i++;
                        document.getElementById("battle-left").appendChild(this.factoryRight());
                        document.getElementById("battle-right").appendChild(this.factoryWrong());
                        this.setState({
                          animation1: false,
                          animation2: false,
                          animation3: false,
                          animation4: false,
                          animation5: false,
                          animation6: true,
                          value: this.state.value + 83.3333,
                        });
                      } else if (parseInt(this.props.character1.durability, 10) < parseInt(this.props.character2.durability, 10)) {
                        j++;
                        document.getElementById("battle-left").appendChild(this.factoryWrong());
                        document.getElementById("battle-right").appendChild(this.factoryRight());
                        this.setState({
                          animation1: false,
                          animation2: false,
                          animation3: false,
                          animation4: false,
                          animation5: false,
                          animation6: true,
                          value: this.state.value - 83.3333,
                        });
                      } else {
                        document.getElementById("battle-left").appendChild(this.factoryDraw());
                        document.getElementById("battle-right").appendChild(this.factoryDraw());
                        this.setState({
                          animation1: false,
                          animation2: false,
                          animation3: false,
                          animation4: false,
                          animation5: false,
                          animation6: true,
                        });
                      }
                    }}
                  >
                    Ongoing......
                  </div>
                </div>
              </div>
              <div className='battle-prop' id='b6'>
                <h2 id='6'>Combat</h2>
                <div className='results' id='result1'>
                  <div
                    className={this.state.animation6 ? "animation" : ""}
                    id='transform6'
                    onAnimationEnd={() => {
                      document.getElementById("6").style.display = "none";
                      document.getElementById("transform6").style.display = "none";
                      document.getElementById("left2").innerHTML = "";
                      document.getElementById("left2").appendChild(this.factoryMessage(leftImage));
                      setTimeout(() => {
                        document.getElementById("b1").style.display = "none";
                        document.getElementById("b2").style.display = "none";
                        document.getElementById("b3").style.display = "none";
                        document.getElementById("b4").style.display = "none";
                        document.getElementById("b5").style.display = "none";
                        document.getElementById("b6").style.display = "none";
                        if (i > j) {
                          document.getElementById("battle-props-div").style =
                            "background-color:#007f5f;color:#264653;text-align:center;padding:0.55rem";
                          document.getElementById("battle-props-div").innerHTML = "Your warrior won, pretty interesting...";
                        } else if (j > i) {
                          document.getElementById("battle-props-div").style =
                            "background-color:#d00000;color:#264653;text-align:center;padding:0.55rem";
                          document.getElementById("battle-props-div").innerHTML = "Your warrior lost, how sad XD";
                        } else if (j === i) {
                          document.getElementById("battle-props-div").style =
                            "background-color:#fe7f2d;color:#264653;text-align:center;padding:0.55rem";
                          document.getElementById("battle-props-div").innerHTML = "Thats a draw, coincidence much";
                        }
                      }, 2000);
                      document.getElementById("end-btn").style.display = "block";
                      if (parseInt(this.props.character1.combat, 10) > parseInt(this.props.character2.combat, 10)) {
                        i++;
                        document.getElementById("battle-left").appendChild(this.factoryRight());
                        document.getElementById("battle-right").appendChild(this.factoryWrong());
                        this.setState({
                          animation1: false,
                          animation2: false,
                          animation3: false,
                          animation4: false,
                          animation5: false,
                          animation6: false,
                          value: this.state.value + 83.3333,
                        });
                      } else if (parseInt(this.props.character1.combat, 10) < parseInt(this.props.character2.combat, 10)) {
                        j++;
                        document.getElementById("battle-left").appendChild(this.factoryWrong());
                        document.getElementById("battle-right").appendChild(this.factoryRight());
                        this.setState({
                          animation1: false,
                          animation2: false,
                          animation3: false,
                          animation4: false,
                          animation5: false,
                          animation6: false,
                          value: this.state.value - 83.3333,
                        });
                      } else {
                        document.getElementById("battle-left").appendChild(this.factoryDraw());
                        document.getElementById("battle-right").appendChild(this.factoryDraw());
                        this.setState({
                          animation1: false,
                          animation2: false,
                          animation3: false,
                          animation4: false,
                          animation5: false,
                          animation6: false,
                        });
                      }
                    }}
                  >
                    Ongoing......
                  </div>
                </div>
              </div>
            </div>
          </div>
          {right}
        </div>
        {svg}
        {lastButton}
      </div>
    );
  }
}
