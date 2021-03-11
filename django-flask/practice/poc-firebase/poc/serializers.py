from rest_framework import serializers
from .models import Employee

#model serializer
class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = '__all__' 
        #fields = ['emp_code', 'position', 'fullname']