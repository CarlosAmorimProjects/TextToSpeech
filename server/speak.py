# speak.py
from gtts import gTTS
import os
import filename
import delete_function

def get_speak (text, lang):
    FILENAME = filename.random_filename()
    tts = gTTS(text=text, lang=lang, slow=False)
    tts.save(FILENAME)
    delete_function.delete_all()

mp3_path = os.path.join(os.path.dirname(__file__), "../static/dist/FILENAME")
