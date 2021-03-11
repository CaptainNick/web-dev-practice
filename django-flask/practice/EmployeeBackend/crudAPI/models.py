from django.db import models

# Create your models here.
class Employee(models.Model):
    # Fullname , emp_code , age , mobile , position
    #emp_code = models.CharField(max_length=4,primary_key=True)

    position = models.CharField(max_length=100)
    fullname = models.CharField(max_length=100)
    age = models.IntegerField()
    mobile = models.IntegerField(unique=True)
    email = models.EmailField(unique=True)
    
    def __str__(self):
        return self.emp_code