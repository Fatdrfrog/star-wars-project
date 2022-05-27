import { ReactComponent as StarWarsLogoSVG } from "./assets/star-wars.svg";
import { ReactComponent as IconSearchSVG } from "./assets/icon-search.svg";

export default function App() {
  return (
    <div>
      <header
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          justifyItems: "center",
        }}
      >
        <p>logo</p>
        <StarWarsLogoSVG />
        <div style={{ justifySelf: "flex-end" }}>
          <div style={{ position: "relative", margin: "1rem" }}>
            <IconSearchSVG
              style={{
                height: "1.5rem",
                width: "1.5rem",
                padding: "4px",
                position: "absolute",
                boxSizing: "border-box",
                top: "50%",
                right: ".5rem",
                transform: "translateY(-50%)",
                cursor: "pointer",
              }}
            />
            <input
              placeholder="Search Star Wars"
              type="text"
              style={{
                boxSizing: "border-box",
                height: "10px",
                backgroundColor: "#343434",
                fontFamily: "DIN, Helvetica, Arial, sans-serif",
                color: "white",
                padding: "1rem",
              }}
            />
          </div>
        </div>
      </header>
    </div>
  );
}
