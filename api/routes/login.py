from flask import Blueprint, request
from api.db.client import supabase
import requests

login = Blueprint('login', __name__)

@login.route('/login', methods=['POST'])
def login_route():
    try {
        data = request.get_json()
        email = data.get('email')
        password = data.get('password')

        response = supabase.auth.sign_in_with_password(
            {"email": email, "password": password}
        )
        if response:
            posts = response.json()
            return posts
        else:
            print('Error:', response.status_code)
            return None

    except requests.exceptions.RequestException as e:
        print('Error:', e)
        return None