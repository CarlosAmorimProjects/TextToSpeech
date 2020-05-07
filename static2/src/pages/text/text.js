import React , { useState } from 'react';
import api from "../../services/api";


function Text () {

    const [text, setText] = useState(" ");
    const [lang, setLang] = useState(" ");

   async function handleNewTranslation(e) {
      e.preventDefault();
  
      const data = {
        text,
        lang
      };

      try {

        await api.get('/text', data, {
          headers: {
            text: text,
            lang: lang
          }
        });
  
      } catch (error) {
        alert("Error registering the case");
      }

      console.log(data.text);
      console.log(data.lang)
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

export default Text;