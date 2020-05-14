import React , { useState } from 'react';
import api from "../../services/api";
import ReactAudioPlayer from 'react-audio-player';
import Button from 'react-bootstrap/Button';
import "./styles.css";

export default function Text () {

    const [text, setText] = useState("");
    const [lang, setLang] = useState("");
    const [audio, setAudio] = useState("");

  async function handleNewTranslation(e) {
      e.preventDefault();
      console.log(text);
      console.log(lang);

      const url = "/text/"+text+"/"+lang;

      api.get(url)
      .then((response) => {
        console.log(response.data);
        var data = response.data;
        setAudio (data);
        
      }, (error) => {
        alert(error);
      });
  }


    return (
      <div className="container">
        <div className="title">
          <h1>
            Text to Speech Translator
          </h1>
        </div>

      <form className="form" onSubmit={handleNewTranslation}>
          <input className="textbox"
            value={text}
            onChange={e => setText(e.target.value)}
          />        
       
        <select className="dropMenu"
          value={lang}
          onChange={e => setLang(e.target.value)}
          >
          <option value='af'>Afrikaans</option>
          <option value='sq'>Albanian</option>
          <option value='ar'>Arabic</option>
          <option value='hy'>Armenian</option>
          <option value='pt'>Portuguese</option>
        </select>

        <Button variant="warning" size="lg" type="submit">Translate</Button>{' '}
        </form>

        <div className="player">
        <ReactAudioPlayer
        src={audio}
        autoPlay
        controls
        />
        </div>
      </div>

    );
}