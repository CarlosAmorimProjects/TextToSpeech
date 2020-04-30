# delete_function
import os
import glob

global x
x = 0
def delete_all ():
    global x
    x = x + 1
    print (x)
    if x > 2:
       files = glob.glob(os.path.join('/home/kajo/Desktop/TTS/TextToSpeech/server/*.mp3'))
       for file in files:
         os.remove(file)
