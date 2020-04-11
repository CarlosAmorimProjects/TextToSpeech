# speak.py
from gtts import gTTS
from playsound import playsound

FILENAME = "tts.mp3"

def get_speak (text, lang):
    print("speak" + text)
    print("speaklang" + lang)
    tts = gTTS(text=text, lang=lang, slow=False)
    tts.save(FILENAME)
    playsound(FILENAME)