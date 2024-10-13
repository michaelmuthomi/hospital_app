from flask import Blueprint, redirect
from db.client import supabase
import requests

login = Blueprint('login', __name__)

@login.route('/login')
def login_route(email, password):
    try:
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