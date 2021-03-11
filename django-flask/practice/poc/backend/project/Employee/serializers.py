from .models import EmployeeDatabase
from rest_framework import serializers


class EmployeeSerializer(serializers.ModelSerializer):

    class Meta:
        model = EmployeeDatabase
        fields = '__all__'