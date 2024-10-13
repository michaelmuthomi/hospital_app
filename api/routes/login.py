from flask import Blueprint

login = Blueprint('login', __name__)

@login.route('/login')
def login_route():
    return "Login Page"