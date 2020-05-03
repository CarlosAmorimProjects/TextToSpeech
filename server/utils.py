# utils.py
import uuid
import os
import glob

def random_tts_filename ():
    filetext = str(uuid.uuid4())
    filename = filetext + ".mp3"
    return filename

def delete_all_tts_files (limit=100):
       basedir = os.path.abspath(os.path.dirname(__file__))
       files = glob.glob(os.path.join(basedir, '*.mp3'))
       if len(files)>limit:
           for file in files:  
             os.remove(file)
