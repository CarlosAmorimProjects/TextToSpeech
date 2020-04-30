# utils.py
import random
import os
import glob

def random_tts_filename ():
    text = 'tts'
    number = str(random.randint(1,9999999999999))
    filetext = text + number
    filename = filetext + ".mp3"

    return filename

def delete_all_tts_files (limit=50):
       basedir = os.path.abspath(os.path.dirname(__file__))
       files = glob.glob(os.path.join(basedir, '*.mp3'))
       if len(files)>limit:
           for file in files:  
             os.remove(file)
