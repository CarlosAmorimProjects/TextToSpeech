# app.py
from flask import Flask, render_template, request, url_for, send_from_directory
import speak

app = Flask(__name__, static_folder="/", template_folder="../static/build")
@app.route("/", methods=["GET","POST"])
def index():
    return render_template("index.html")

@app.route("/text/<text>/<lang>")
def text(text,lang):
    if request.method == "GET":
       mp3_path = speak.get_speak(text,lang)
       return mp3_path

if __name__ == "__main__":
    app.run()
