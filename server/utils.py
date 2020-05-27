# utils.py
import uuid
import os
import glob

def random_tts_filename ():
    filetext = str(uuid.uuid4())
    if not os.path.exists("../static/build/static/audiofiles/"):
        os.makedirs("../static/build/static/audiofiles/")
    filename = "../static/build/static/audiofiles/" + filetext + ".mp3"
    return filename

def delete_all_tts_files (limit=50):
       files = glob.glob(os.path.join("../static/build/static/audiofiles/", '*.mp3'))
       if len(files)>limit:
           for file in files:  
             os.remove(file)
