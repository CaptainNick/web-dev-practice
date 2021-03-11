# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.shortcuts import render
from .models import  EmployeeDatabase as Employee
from .serializers import EmployeeSerializer
from rest_framework import status
from rest_framework.response import Response 
from rest_framework.views import APIView 
# Create your views here.

class EmployeeList(APIView):

    # creating all rest framework functions 

    # get function , returning all the records
    def get(self,request):

        # all means getting all the records , can use filter to get whatever we need 
        model = Employee.objects.all()
        # Passing the data into serializer
        serializer = EmployeeSerializer(model,many = True)
        return Response(serializer.data)
    
    def post(self,request):

        serializer = EmployeeSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status= status.HTTP_201_CREATED)

        return Response(serializer.errors,status=HTTP_400_BAD_REQUEST)


class EmployeeDetail(APIView):

    def get(self,request,pk):
        
        try:
            model = Employee.objects.get(id = pk)
        except Employee.DoesNotExist:
            return Response('User with emp_code is not found in Database',status = status.HTTP_404_NOT_FOUND)

        serializer = EmployeeSerializer(model)
        return Response(serializer.data)

    def put(self,request,pk):
        
        try:
            model = Employee.objects.get(id = pk)
        except Employee.DoesNotExist:
            return Response('User with emp_code is not found in Database',status = status.HTTP_404_NOT_FOUND)
        
        serializer = EmployeeSerializer(model,data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status = status.HTTP_201_CREATED)

        return Response(serializer.errors, status = status.HTTP_404_NOT_FOUND)
    
    def delete(self,request,pk):
        
        try:
            model = Employee.objects.get(id = pk)
        except Employee.DoesNotExist:
            return Response('User with emp_code is not found in Database',status = status.HTTP_404_NOT_FOUND)
        
        model.delete()
        return Response(status = status.HTTP_204_NO_CONTENT)