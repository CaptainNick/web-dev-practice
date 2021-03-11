# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.

class EmployeeDatabase(models.Model):
    
    fullname = models.CharField(max_length=100)
    age = models.IntegerField()
    mobile_number = models.IntegerField(unique=True)
    email = models.EmailField(unique=True)
    position = models.CharField(max_length=100)

    def __str__(self):
        return self.fullname
