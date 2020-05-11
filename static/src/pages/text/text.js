import React , { useState } from 'react';
import axios from 'axios';
import api from "../../services/api";

export default function Text () {

    const [text, setText] = useState("");
    const [lang, setLang] = useState("");

  async function handleNewTranslation(e) {
      e.preventDefault();
      console.log(text);
      console.log(lang);

      const res = await axios.get('http://127.0.0.1:5000', {
        headers: {
        'text': text,
        'lang': lang
         }
        });

        console.log(res);

    }


    return (
      <div className="container">
        <div className="title">
          <h1>
            Text Screen
          </h1>
        </div>
      <form onSubmit={handleNewTranslation}>
          <input
            placeholder="Text to translate"
            value={text}
            onChange={e => setText(e.target.value)}
          />        
       
        <select
          value={lang}
          onChange={e => setLang(e.target.value)}
          >
          <option value='af'>Afrikaans</option>
          <option value='sq'>Albanian</option>
          <option value='ar'>Arabic</option>
          <option value='hy'>Armenian</option> 
        </select>

        <button className="button" type="submit">Translate</button>
        </form>

      </div>

    );

}