import React, { useState, useEffect } from "react";
import Swiper from "react-id-swiper";
import "./AboutS.css";
import Card from "react-bootstrap/Card";
const params = {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
};
let about, resultDiv;
const Gallery = (props) => {
  const [gallerySwiper, getGallerySwiper] = useState(null);
  const [thumbnailSwiper, getThumbnailSwiper] = useState(null);
  const gallerySwiperParams = {
    getSwiper: getGallerySwiper,
    spaceBetween: 100,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  };
  const thumbnailSwiperParams = {
    getSwiper: getThumbnailSwiper,
    spaceBetween: 10,
    centeredSlides: true,
    slidesPerView: "auto",
    touchRatio: 0.2,
    slideToClickedSlide: true,
  };
  useEffect(() => {
    if (gallerySwiper !== null && gallerySwiper.controller && thumbnailSwiper !== null && thumbnailSwiper.controller) {
      gallerySwiper.controller.control = thumbnailSwiper;
      thumbnailSwiper.controller.control = gallerySwiper;
    }
  }, [gallerySwiper, thumbnailSwiper]);
  if (props.result === "no") {
    about = (
      <div>
        <Swiper {...gallerySwiperParams}>
          <div>
            <div className='about-card'>
              <div className='about-card-title'>About Superhero Saga</div>
              <div className='about-card-content'>
                <p>This web application is a strategy game kinda experience, but it is not a mainstream game.</p>
                <p>
                  It brings together superheroes and supervillians from all the universes MARVEL, DC, Dragon Ball Z, Star Wars and many
                  more. You can not only find trivia on superheroes but u can also make them fight, by pitting them against each other.
                </p>
              </div>
            </div>
          </div>
          <div>
            <Swiper {...params}>
              <div>
                <Card className={"vert-card"}>
                  <Card.Body className='about-card-content'>Swipe Through </Card.Body>
                </Card>
              </div>
              <div>
                <Card className={"vert-card"}>
                  <Card.Img variant='top' src='https://www.superherodb.com/pictures2/portraits/10/100/10878.jpg' />
                  <Card.ImgOverlay style={{ backgroundColor: "rgba(0, 0, 0,0.5)" }}>
                    <Card.Title style={{ color: "#e76f51" }} className='abtCard-title'>
                      Harry Potter
                    </Card.Title>
                  </Card.ImgOverlay>
                </Card>
              </div>
              <div>
                <Card className={"vert-card"}>
                  <Card.Img variant='top' src='https://www.superherodb.com/pictures2/portraits/10/100/1284.jpg' />
                  <Card.ImgOverlay style={{ backgroundColor: "rgba(0, 0, 0,0.5)" }}>
                    <Card.Title style={{ color: "#e76f51" }} className='abtCard-title'>
                      Goku
                    </Card.Title>
                  </Card.ImgOverlay>
                </Card>
              </div>
              <div>
                <Card className={"vert-card"}>
                  <Card.Img variant='top' src='https://www.superherodb.com/pictures2/portraits/10/100/10849.jpg' />
                  <Card.ImgOverlay style={{ backgroundColor: "rgba(0, 0, 0,0.5)" }}>
                    <Card.Title style={{ color: "#e76f51" }} className='abtCard-title'>
                      Sauron
                    </Card.Title>
                  </Card.ImgOverlay>
                </Card>
              </div>
              <div>
                <Card className={"vert-card"}>
                  <Card.Img variant='top' src='https://www.superherodb.com/pictures2/portraits/10/100/10404.jpg' />
                  <Card.ImgOverlay style={{ backgroundColor: "rgba(0, 0, 0,0.5)" }}>
                    <Card.Title style={{ color: "#e76f51" }} className='abtCard-title'>
                      James Bond
                    </Card.Title>
                  </Card.ImgOverlay>
                </Card>
              </div>
              <div>
                <Card className={"vert-card"}>
                  <Card.Img variant='top' src='https://www.superherodb.com/pictures2/portraits/10/100/10444.jpg' />
                  <Card.ImgOverlay style={{ backgroundColor: "rgba(0, 0, 0,0.5)" }}>
                    <Card.Title style={{ color: "#e76f51" }} className='abtCard-title'>
                      Darth Vader
                    </Card.Title>
                  </Card.ImgOverlay>
                </Card>
              </div>
              <div>
                <Card className={"vert-card"}>
                  <Card.Img variant='top' src='https://www.superherodb.com/pictures2/portraits/10/100/10560.jpg' />
                  <Card.ImgOverlay style={{ backgroundColor: "rgba(0, 0, 0,0.5)" }}>
                    <Card.Title style={{ color: "#e76f51" }} className='abtCard-title'>
                      Indiana Jones
                    </Card.Title>
                  </Card.ImgOverlay>
                </Card>
              </div>
              <div>
                <Card className={"vert-card"}>
                  <Card.Img variant='top' src='https://www.superherodb.com/pictures2/portraits/10/100/869.jpg' />
                  <Card.ImgOverlay style={{ backgroundColor: "rgba(0, 0, 0,0.5)" }}>
                    <Card.Title style={{ color: "#e76f51" }} className='abtCard-title'>
                      Mr. Incredible
                    </Card.Title>
                  </Card.ImgOverlay>
                </Card>
              </div>
              <div>
                <Card className={"vert-card"}>
                  <Card.Img variant='top' src=' https://www.superherodb.com/pictures2/portraits/10/100/10476.jpg' />
                  <Card.ImgOverlay style={{ backgroundColor: "rgba(0, 0, 0,0.5)" }}>
                    <Card.Title style={{ color: "#e76f51" }} className='abtCard-title'>
                      Ethan Hunt
                    </Card.Title>
                  </Card.ImgOverlay>
                </Card>
              </div>
            </Swiper>
          </div>
          <div>
            <div className='about-card'>
              <div className='about-card-title'>How To Play</div>
              <div className='about-card-content'>
                <p>Search for your beloved characters on the search page, compare their stats and add them to your team</p>
                <p>You can create and manage multiple teams but not more than ten</p>
                <p>Go to the battle page and choose a team to fight from your side, decide upon a formation for your team</p>
                <p>Sit Back and enjoy while you witness epic battles</p>
              </div>
            </div>
          </div>
          <div>
            <div className='about-card'>
              <div className='about-card-title'>Credits</div>
              <div className='about-card-content'>
                <p>Developed by Saatvik Bhatnagar</p>
                <p>Made using React and deployed using Surge</p>
                <div>
                  Icons made by{" "}
                  <a href='https://www.flaticon.com/authors/iconixar' title='iconixar'>
                    iconixar
                  </a>{" "}
                  <a href='https://www.flaticon.com/authors/freepik' title='Freepik'>
                    Freepik
                  </a>{" "}
                  <a href='https://www.flaticon.com/authors/smashicons' title='Smashicons'>
                    Smashicons
                  </a>{" "}
                  <a href='https://www.flaticon.com/authors/becris' title='Becris'>
                    Becris
                  </a>{" "}
                  <a href='https://www.flaticon.com/authors/phatplus' title='phatplus'>
                    phatplus
                  </a>{" "}
                  from{" "}
                  <a href='https://www.flaticon.com/' title='Flaticon'>
                    www.flaticon.com
                  </a>
                </div>

                <div>
                  Logo Source <a href='https://www.logodesign.net/image/smiling-goblin-face-mascot-5757ld'>Logodesign.net</a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className='about-card'>
              <div className='about-card-title'>Contact Me</div>
              <div className='about-card-content'>Scroll Down</div>
            </div>
          </div>
        </Swiper>
        <div>
          <Swiper {...thumbnailSwiperParams} slideClass={"thumbnail-slide"} containerClass={"thumbnail-swiper"}>
            <div>
              <div className='about-card-thumbnail'>About Superhero Saga</div>
            </div>
            <div>
              <div className='about-card-thumbnail'>Featured Heroes</div>
            </div>
            <div>
              <div className='about-card-thumbnail'>How To Play</div>
            </div>
            <div>
              <div className='about-card-thumbnail'>Credits</div>
            </div>
            <div>
              <div className='about-card-thumbnail'>Contact Me</div>
            </div>
          </Swiper>
        </div>
        <div className='feedback'>
          <iframe
            src='https://docs.google.com/forms/d/e/1FAIpQLSduPDw2Oeuo1oto8b_tf4I9F-f1me55mYRCjx8PZV2P2zEhyA/viewform?embedded=true'
            width='640'
            height='706'
            frameborder='0'
            marginheight='0'
            marginwidth='0'
          >
            Loading…
          </iframe>
        </div>
      </div>
    );
  } else {
    if (props.result === "win") {
      resultDiv = (
        <div className='about-card-won'>
          <div className='about-card-title'>Damnnn You actually won</div>
          <div className='about-card-content'>
            <p>Thank you for trying this web app out, maybe the team you used is not invincible so try it against teams as well</p>
            <p>Do let me know your feedback and suggestions</p>
          </div>
        </div>
      );
    } else if (props.result === "lose") {
      resultDiv = (
        <div className='about-card-lost'>
          <div className='about-card-title'>Its a bit disheartening I know</div>
          <div className='about-card-content'>
            <p>
              Thank you for trying this web app out, try again and explore your options thoroughly coz there is a lottt of warriors out
              there.
            </p>
            <p>Do let me know your feedback and suggestions </p>
          </div>
        </div>
      );
    } else if (props.result === "draw") {
      resultDiv = (
        <div className='about-card-draw'>
          <div className='about-card-title'>OOOOOH this a rare occurrence, but you can try again and win</div>
          <div className='about-card-content'>
            <p>Thank you for trying this web app out, be delusional and make the most powerful warriors team up.</p>
            <p>Do let me know your feedback and suggestions</p>
          </div>
        </div>
      );
    }
    about = (
      <div>
        <Swiper {...gallerySwiperParams}>
          <div>{resultDiv}</div>
          <div>
            <div className='about-card'>
              <div className='about-card-title'>About Superhero Saga</div>
              <div className='about-card-content'>
                <p>This web application is a strategy game kinda experience, but it is not a mainstream game.</p>
                <p>
                  It brings together superheroes and supervillians from all the universes{" "}
                  <span className='universes'>MARVEL, DC, Dragon Ball Z, Star Wars and many more</span>. You can not only find trivia on
                  superheroes but u can also make them fight, by pitting them against each other.
                </p>
              </div>
            </div>
          </div>
          <div>
            <Swiper {...params}>
              <div>
                <Card className={"vert-card"}>
                  <Card.Body className='about-card-content'>Swipe Through</Card.Body>
                </Card>
              </div>
              <div>
                <Card className={"vert-card"}>
                  <Card.Img variant='top' src='https://www.superherodb.com/pictures2/portraits/10/100/10878.jpg' />
                  <Card.ImgOverlay style={{ backgroundColor: "rgba(0, 0, 0,0.5)" }}>
                    <Card.Title style={{ color: "#e76f51" }} className='abtCard-title'>
                      Harry Potter
                    </Card.Title>
                  </Card.ImgOverlay>
                </Card>
              </div>
              <div>
                <Card className={"vert-card"}>
                  <Card.Img variant='top' src='https://www.superherodb.com/pictures2/portraits/10/100/1284.jpg' />
                  <Card.ImgOverlay style={{ backgroundColor: "rgba(0, 0, 0,0.5)" }}>
                    <Card.Title style={{ color: "#e76f51" }} className='abtCard-title'>
                      Goku
                    </Card.Title>
                  </Card.ImgOverlay>
                </Card>
              </div>
              <div>
                <Card className={"vert-card"}>
                  <Card.Img variant='top' src='https://www.superherodb.com/pictures2/portraits/10/100/10849.jpg' />
                  <Card.ImgOverlay style={{ backgroundColor: "rgba(0, 0, 0,0.5)" }}>
                    <Card.Title style={{ color: "#e76f51" }} className='abtCard-title'>
                      Sauron
                    </Card.Title>
                  </Card.ImgOverlay>
                </Card>
              </div>
              <div>
                <Card className={"vert-card"}>
                  <Card.Img variant='top' src='https://www.superherodb.com/pictures2/portraits/10/100/10404.jpg' />
                  <Card.ImgOverlay style={{ backgroundColor: "rgba(0, 0, 0,0.5)" }}>
                    <Card.Title style={{ color: "#e76f51" }} className='abtCard-title'>
                      James Bond
                    </Card.Title>
                  </Card.ImgOverlay>
                </Card>
              </div>
              <div>
                <Card className={"vert-card"}>
                  <Card.Img variant='top' src='https://www.superherodb.com/pictures2/portraits/10/100/10444.jpg' />
                  <Card.ImgOverlay style={{ backgroundColor: "rgba(0, 0, 0,0.5)" }}>
                    <Card.Title style={{ color: "#e76f51" }} className='abtCard-title'>
                      Darth Vader
                    </Card.Title>
                  </Card.ImgOverlay>
                </Card>
              </div>
              <div>
                <Card className={"vert-card"}>
                  <Card.Img variant='top' src='https://www.superherodb.com/pictures2/portraits/10/100/10560.jpg' />
                  <Card.ImgOverlay style={{ backgroundColor: "rgba(0, 0, 0,0.5)" }}>
                    <Card.Title style={{ color: "#e76f51" }} className='abtCard-title'>
                      Indiana Jones
                    </Card.Title>
                  </Card.ImgOverlay>
                </Card>
              </div>
              <div>
                <Card className={"vert-card"}>
                  <Card.Img variant='top' src=' https://www.superherodb.com/pictures2/portraits/10/100/10476.jpg' />
                  <Card.ImgOverlay style={{ backgroundColor: "rgba(0, 0, 0,0.5)" }}>
                    <Card.Title style={{ color: "#e76f51" }} className='abtCard-title'>
                      Ethan Hunt
                    </Card.Title>
                  </Card.ImgOverlay>
                </Card>
              </div>
              <div>
                <Card className={"vert-card"}>
                  <Card.Img variant='top' src='https://www.superherodb.com/pictures2/portraits/10/100/869.jpg' />
                  <Card.ImgOverlay style={{ backgroundColor: "rgba(0, 0, 0,0.5)" }}>
                    <Card.Title style={{ color: "#e76f51" }} className='abtCard-title'>
                      Mr.Incredible
                    </Card.Title>
                  </Card.ImgOverlay>
                </Card>
              </div>
            </Swiper>
          </div>
          <div>
            <div className='about-card'>
              <div className='about-card-title'>How To Play</div>
              <div className='about-card-content'>
                <p>Search for your beloved characters on the search page, compare their stats and add them to your team</p>
                <p>You can create and manage multiple teams</p>
                <p>Go to the battle page and choose a team to fight from your side, decide upon a formation for your team</p>
                <p>Sit Back and enjoy while you witness epic battles</p>
                <p>If you are using a smartphone then try out the landscape mode as well.</p>
              </div>
            </div>
          </div>

          <div>
            <div className='about-card'>
              <div className='about-card-title'>Credits</div>
              <div className='about-card-content'>
                <p>Developed by Saatvik Bhatnagar</p>
                <p>Made using React and deployed using Surge</p>
                <div>
                  Icons made by{" "}
                  <a href='https://www.flaticon.com/authors/smashicons' title='Smashicons'>
                    Smashicons
                  </a>{" "}
                  <a href='https://www.flaticon.com/authors/iconixar' title='iconixar'>
                    iconixar
                  </a>{" "}
                  <a href='https://www.flaticon.com/authors/freepik' title='Freepik'>
                    Freepik
                  </a>{" "}
                  <a href='https://www.flaticon.com/authors/becris' title='Becris'>
                    Becris
                  </a>{" "}
                  <a href='https://www.flaticon.com/authors/phatplus' title='phatplus'>
                    phatplus
                  </a>{" "}
                  from{" "}
                  <a href='https://www.flaticon.com/' title='Flaticon'>
                    www.flaticon.com
                  </a>
                </div>
                <div>
                  Logo Source <a href='logomakr.com/1Gljmq'>Logomakr.com</a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className='about-card'>
              <div className='about-card-title'>Contact Me</div>
              <div className='about-card-content'>Scroll Down</div>
            </div>
          </div>
        </Swiper>
        <div>
          <Swiper {...thumbnailSwiperParams} slideClass={"thumbnail-slide"} containerClass={"thumbnail-swiper"}>
            <div>
              <div className='about-card-thumbnail'>Result</div>
            </div>
            <div>
              <div className='about-card-thumbnail'>About Superhero Saga</div>
            </div>
            <div>
              <div className='about-card-thumbnail'>Featured Heroes</div>
            </div>
            <div>
              <div className='about-card-thumbnail'>How To Play</div>
            </div>
            <div>
              <div className='about-card-thumbnail'>Credits</div>
            </div>
            <div>
              <div className='about-card-thumbnail'>Contact Me</div>
            </div>
          </Swiper>
        </div>
        <div className='feedback'>
          <iframe
            src='https://docs.google.com/forms/d/e/1FAIpQLSduPDw2Oeuo1oto8b_tf4I9F-f1me55mYRCjx8PZV2P2zEhyA/viewform?embedded=true'
            width='600'
            height='700'
            frameborder='0'
            marginheight='0'
            marginwidth='0'
          >
            Loading…
          </iframe>
        </div>
      </div>
    );
  }
  return <div>{about}</div>;
};
export default Gallery;
