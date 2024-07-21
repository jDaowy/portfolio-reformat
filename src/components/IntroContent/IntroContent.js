import "./IntroContent.css";

function IntroContent() {
  const vertexLink = "https://gemini-fb-382fd.web.app/";

  return (
    <div className="content">
      <img src="/me.png" alt="AI Generated Me" className="me" />
      <div className="intro-text">
        <div className="gradient-container">
          <h1 className="name">Jordon-Luc Dao</h1>
        </div>

        <p className="speel">
          I'm a full-stack developer passionate about building seamless user
          experiences. My expertise lies in crafting efficient back-end systems
          and visually engaging front-end interfaces. I'm eager to contribute my
          skills to innovative projects that push the boundaries of software
          engineering.{" "}
          <strong>
            Try my latest app in the following link that uses Google Firebase
            and Google VertexAI to digitize handwriting.{" "}
          </strong>
          <a
            className="vertex-link"
            href={vertexLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Image2Text
          </a>
        </p>
        <img
          src="/umlogo.jpg"
          alt="University of Manitoba Logo"
          className="UM"
        />
      </div>
    </div>
  );
}

export default IntroContent;
