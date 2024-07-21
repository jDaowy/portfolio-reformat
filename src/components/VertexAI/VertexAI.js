import "./VertexAI.css";

function VertexAI() {
  const vertexLink = "https://gemini-fb-382fd.web.app/";

  return (
    <div className="vertex-flex">
      <img className="vertex-logo" src="./vertex-ai-logo.png"></img>
      <div className="vertex-text">
        <div className="grad-container">
          <h1>Image2Text</h1>
        </div>
        <p>
          An app for digitizing handwriting. Leverages Google VertexAI(Model:
          gemini-1.0-pro-vision-001) and Google Firebase.
        </p>
        <strong className="strongbox">
          <a
            className="v-link"
            href={vertexLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Click Here To Go To The App
          </a>
        </strong>
      </div>
    </div>
  );
}

export default VertexAI;
