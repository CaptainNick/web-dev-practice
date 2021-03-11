from django.db import models

# Create your models here.
class Employee(models.Model):
    #emp_code = models.CharField(max_length=4,primary_key=True)
    fullname = models.CharField(max_length=100)
    position = models.CharField(max_length=100)    
    age = models.IntegerField()
    mobile = models.CharField(max_length=10,unique=True)
    email = models.EmailField(unique=True)
    
    def __str__(self):
        return self.fullname