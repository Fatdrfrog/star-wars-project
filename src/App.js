//импортируем .svg картинки как компоненты Реакт
import { ReactComponent as StarWarsLogoSVG } from "./assets/star-wars.svg";
import { ReactComponent as IconSearchSVG } from "./assets/icon-search.svg";
import { ReactComponent as FacebookLogoSVG } from "./assets/facebook.svg";
import { ReactComponent as InstagramLogoSVG } from "./assets/instagram.svg";
import { ReactComponent as TwitterLogoSVG } from "./assets/twitter.svg";
import { ReactComponent as YoutubeLogoSVG } from "./assets/youtube.svg";

//импортируем стили
import "./app.css";

//массив данных персонажей
const swCharacters = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    hair_color: "blond",
    skin_color: "fair",
    eye_color: "blue",
    birth_year: "19BBY",
    gender: "male",
    homeworld: "https://starwars-visualguide.com/assets/img/planets/1.jpg",
    created: "2014-12-09T13:50:51.644000Z",
    edited: "2014-12-20T21:17:56.891000Z",
    url: "https://starwars-visualguide.com/assets/img/characters/1.jpg",
  },
  {
    name: "C-3PO",
    height: "167",
    mass: "75",
    hair_color: "n/a",
    skin_color: "gold",
    eye_color: "yellow",
    birth_year: "112BBY",
    gender: "n/a",
    homeworld: "https://starwars-visualguide.com/assets/img/planets/1.jpg",
    created: "2014-12-10T15:10:51.357000Z",
    edited: "2014-12-20T21:17:50.309000Z",
    url: "https://starwars-visualguide.com/assets/img/characters/2.jpg",
  },
  {
    name: "R2-D2",
    height: "96",
    mass: "32",
    hair_color: "n/a",
    skin_color: "white, blue",
    eye_color: "red",
    birth_year: "33BBY",
    gender: "n/a",
    homeworld: "https://starwars-visualguide.com/assets/img/planets/8.jpg",
    created: "2014-12-10T15:11:50.376000Z",
    edited: "2014-12-20T21:17:50.311000Z",
    url: "https://starwars-visualguide.com/assets/img/characters/3.jpg",
  },
];

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
            <button className="favorite-button">You're my fan!</button>
            <img
              className="item-image"
              src="https://starwars-visualguide.com/assets/img/characters/1.jpg"
              alt="asd"
            />
            <button className="delete-button">Delete</button>
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
            <button className="delete-button">Delete</button>
          </div>
        </div>
      </div>
    </>
  );
}
