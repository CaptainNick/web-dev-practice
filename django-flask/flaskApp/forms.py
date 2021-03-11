from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField
from wtforms.validators import DataRequired #validation class

#every form is a class form extended from flask wtforms
class AddTaskForm(FlaskForm):
    title = StringField('Title', validators=[DataRequired()])
    submit = SubmitField('Submit')

class DeleteTaskForm(FlaskForm):
    submit = SubmitField('Delete')
    