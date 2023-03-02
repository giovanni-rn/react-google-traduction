import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [translation, setTranslation] = useState("");

  const translate = async (e) => {
    e.preventDefault();
    const encodedParams = new URLSearchParams();
    encodedParams.append("q", text);
    encodedParams.append("target", "en");
    encodedParams.append("source", "fr");

    const options = {
      method: "POST",
      url: "https://google-translate1.p.rapidapi.com/language/translate/v2",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "Accept-Encoding": "application/gzip",
        "X-RapidAPI-Key": "33a38a48e2msh345936a2215c570p1a003cjsn277d5a16ce04",
        "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
      },
      data: encodedParams,
    };

    const { data } = await axios.request(options);
    setTranslation(data.data.translations[0].translatedText);
  };

  return (
    <div className="App">
      <form onSubmit={(e) => translate(e)}>
        <input
          type="text"
          name=""
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input type="submit" value="Traduire !" />
      </form>
      <div>{translation}</div>
    </div>
  );
}

export default App;
