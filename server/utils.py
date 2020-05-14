# utils.py
import uuid
import os
import glob

def random_tts_filename ():
    filetext = str(uuid.uuid4())
    filename = "files/" + filetext + ".mp3"
    return filename

def delete_all_tts_files (limit=50):
       files = glob.glob(os.path.join("static", '*.mp3'))
       if len(files)>limit:
           for file in files:  
             os.remove(file)
