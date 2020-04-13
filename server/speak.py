# speak.py
from gtts import gTTS
import os

FILENAME = "tts.mp3"

def get_speak (text, lang):
    print("speak" + text)
    print("speaklang" + lang)
    tts = gTTS(text=text, lang=lang, slow=False)
    tts.save(FILENAME)

mp3_path = os.path.join(os.path.dirname(__file__), "tts.mp3")