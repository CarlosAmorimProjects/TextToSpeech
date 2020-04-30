# filename.py
import random

def random_filename ():
    text = "tts"
    number = str(random.randint(1,9999999999999))
    filetext = text + number
    filename = filetext + ".mp3"

    return filename
