# server.py
from flask import Flask, render_template, request
import speak
import url_for

# text = "AI AI minha machadinha !!"
# lang = "pt"

app = Flask(__name__, static_folder="../static/dist", template_folder="../static")
@app.route("/", methods=["GET","POST"])
def index():
    return render_template("index.html")

@app.route("/hello", methods=["GET","POST"])
def hello():
    text=''
    lang=''
    if request.method == "GET":
        text = request.form["text"]
        lang = request.form["lang"]
        print(text)
        speak.get_speak(text,lang)
        return url_for ("static", filename="mp3_path")

if __name__ == "__main__":
    app.run()