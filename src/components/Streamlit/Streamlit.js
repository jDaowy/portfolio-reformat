import "./Streamlit.css";

function Streamlit() {
  return (
    <div className="st-main">
      <div className="st-image">
        <img
          className="my-st-pic"
          src="./StreamlitProject.jpg"
          alt="my streamlit project"
        />
      </div>
      <div className="st-text">
        <div className="magic-gradient">
          <h1 className="name">MagicPrompt Streamlit</h1>
        </div>
        <p className="st-info">
          A streamlit app for the textual generation of stablediffusion prompts.
          Coded in Python and uses LangChain framework, Huggingface API and
          StreamLit.
        </p>
        <a
          className="st-link"
          href="https://st-magicprompt-stablediffusion-1exnyen2k2h.streamlit.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit The App
        </a>
      </div>
    </div>
  );
}

export default Streamlit;
