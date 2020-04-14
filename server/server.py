# server.py
from flask import Flask, render_template, request, url_for
import speak

app = Flask(__name__, static_folder="../static/dist", template_folder="../static")
@app.route("/", methods=["GET","POST"])
def index():
    return render_template("index.html")

@app.route("/hello/<text>/<lang>")
def hello(text,lang):
    if request.method == "GET":
        speak.get_speak(text,lang)
        return flask.url_for("hello", filename="mp3_path")

if __name__ == "__main__":
    app.run()