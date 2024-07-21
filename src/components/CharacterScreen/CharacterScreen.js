import "./CharacterScreen.css";

function CharacterScreen() {
  return (
    <div className="main-gallery">
      <div className="image-container">
        <img
          src="./cyborg.png"
          alt="Jordon as a cyborg"
          className="box box-1"
        />
        <img
          src="./wizard.png"
          alt="Jordon as a cartoon wizard"
          className="box box-2"
        />
        <img
          src="./astro.png"
          alt="Jordon as a cartoon astronaught"
          className="box box-3"
        />
        <img
          src="./pirate.png"
          alt="Jordon as a cartoon pirate"
          className="box box-4"
        />
        <img
          src="./knight.png"
          alt="Jordon as a knight"
          className="box box-5"
        />
      </div>
      <div className="stable-grad">
        <h1 className="stable-title">Stable Diffusion Image Generation</h1>
      </div>
      <p className="stable-text">
        AI generated images using a LoRa model trained on 10 images of myself.
        Training and generation run on a Google Compute Engine.
      </p>
    </div>
  );
}

export default CharacterScreen;
