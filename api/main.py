from flask import Flask
from routes.login import login 

app = Flask(__name__)

# Link Favicon
@app.route('/favicon.ico')
def favicon():
    return url_for('static', filename='image/favicon.ico')

# Register the blueprint
app.register_blueprint(login)

@app.route("/")
def index():
    return "MediLink: Home Page"

if __name__ == "__main__":
    app.run(debug=True)