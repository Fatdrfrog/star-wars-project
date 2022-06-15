//импортируем стили
import "./app.css";

//импортируем .svg картинки как компоненты Реакт
import { ReactComponent as StarWarsLogoSVG } from "./assets/star-wars.svg";
import { ReactComponent as IconSearchSVG } from "./assets/icon-search.svg";
import { ReactComponent as FacebookLogoSVG } from "./assets/facebook.svg";
import { ReactComponent as InstagramLogoSVG } from "./assets/instagram.svg";
import { ReactComponent as TwitterLogoSVG } from "./assets/twitter.svg";
import { ReactComponent as YoutubeLogoSVG } from "./assets/youtube.svg";

import swCharacters from "./data/characters.json";
import swPlanets from "./data/planets.json";
import swStarships from "./data/starships.json";

//массив данных ссылок
const swLinks = [
  {
    url: "https://www.facebook.com/StarWars",
    name: "facebook_logo",
    component: <FacebookLogoSVG />,
  },
  {
    url: "https://www.instagram.com/starwars/",
    name: "instagram_logo",
    component: <InstagramLogoSVG />,
  },
  {
    url: "https://twitter.com/starwars",
    name: "twitter_logo",
    component: <TwitterLogoSVG />,
  },
  {
    url: "https://www.youtube.com/user/starwars",
    name: "youtube_logo",
    component: <YoutubeLogoSVG />,
  },
];

export default function App() {
  return (
    <>
      <header>
        <div className="links-layout">
          <a
            className="link"
            href="https://www.facebook.com/StarWars"
            target="_blank"
            alt="facebook_logo"
            rel="noreferrer"
          >
            <FacebookLogoSVG />
          </a>
          <a
            className="link"
            href="https://www.instagram.com/starwars/"
            target="_blank"
            alt="instagram_logo"
            rel="noreferrer"
          >
            <InstagramLogoSVG />
          </a>
          <a
            className="link"
            href="https://twitter.com/starwars"
            target="_blank"
            alt="facebook_logo"
            rel="noreferrer"
          >
            <TwitterLogoSVG />
          </a>
          <a
            className="link"
            href="https://www.youtube.com/user/starwars"
            target="_blank"
            alt="facebook_logo"
            rel="noreferrer"
          >
            <YoutubeLogoSVG />
          </a>
        </div>
        <StarWarsLogoSVG />
        <div className="search-layout">
          <IconSearchSVG className="search-icon" />
          <input placeholder="Search Star Wars" type="text" />
          <div style={{ color: "white", paddingTop: "1rem" }}>I am fan of:</div>
        </div>
      </header>
      <hr />
      <div className="content-layout">
        <select placeholder="Choose your path" className="select-item">
          <option>Characters</option>
          <option>Planets</option>
          <option>Starships</option>
        </select>

        <div className="item-list-layout">
          <div>
            <p>name: Luke</p>
            <p>gender: male</p>
            <p>birthday: 33BBY</p>
          </div>
          <div className="item-image-layout">
            <button className="favorite-button">I am your fan!!</button>
            <img
              className="item-image"
              src="https://starwars-visualguide.com/assets/img/characters/1.jpg"
              alt="asd"
            />
          </div>
        </div>

        <div className="item-list-layout">
          <div>
            <p>name: C-3PO</p>
            <p>gender: n/a</p>
            <p>birthday: 112BBY</p>
          </div>
          <div className="item-image-layout">
            <button className="favorite-button">You're my fan!</button>
            <img
              className="item-image"
              src="https://starwars-visualguide.com/assets/img/characters/2.jpg"
              alt="asd"
            />
          </div>
        </div>
      </div>
    </>
  );
}
