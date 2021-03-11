#from flask import Flask, render_template
#we no longer need to include render_template in app.py , its in routes.py
from flask import Flask
#time for SQLAlchemy
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__) #instance of flask app
app.config['SECRET_KEY'] = 'mysecretkey'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///data.db'

db = SQLAlchemy(app)

from routes import *

if __name__ == '__main__':
    app.run(debug=True)
