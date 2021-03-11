from app import db

class Task(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    date = db.Column(db.Date, nullable=False)

    def __repr__(self):
        return f'{self.title} created on {self.date}'

### to test SQLAlchemy try creating a db in python interpreter on terminal
# from app import db
# db.create_all()
# from models import Task
# from datetime import datetime
# t = Task(title="xyz", date=datetime.utcnow())
# t >>> xyz created on 2020-11-26 18:55:57.663345
# db.session.add(t)
# db.session.commit() >>> error: sqlalchemy.exc.OperationalError: (sqlite3.OperationalError) no such table: task
#                            [SQL: INSERT INTO task (title, date) VALUES (?, ?)]
#                            [parameters: ('xyz', '2020-11-26')]
#                           (Background on this error at: http://sqlalche.me/e/13/e3q8)
# this happens since db is import from app.py file so it is not aware of the instance of Task class
# So, use `from models import db` instead of `from app import db`
# folloe all steps again and check `Task.query.all()`
### 
