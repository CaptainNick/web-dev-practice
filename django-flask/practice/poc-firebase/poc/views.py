from django.shortcuts import render
from django.http import HttpResponse, JsonResponse

from .models import Employee 
from .serializers import EmployeeSerializer 

from rest_framework.response import Response
from rest_framework import status, authentication, exceptions

####class based APIViews
from rest_framework.views import APIView

from rest_framework.permissions import IsAuthenticated
from django.conf import settings

class EmployeeAPIView(APIView):
    permission_classes = [IsAuthenticated, IsAdminUser]
    def get(self, request):
        employees = Employee.objects.all()
        serializer = EmployeeSerializer(employees, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = EmployeeSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class EmployeeDetails(APIView):
    permission_classes = [IsAuthenticated]
    authentication_header_prefix = 'Bearer'
    
    def get_object(self, id):
        try:
            return Employee.objects.get(id=id)
        except Employee.DoesNotExist:
            return HttpResponse(status=status.HTTP_404_NOT_FOUND)
            
    def get(self, request):
        request.user = None
        auth_header = authentication.get_authorization_header(request).split()
        auth_header_prefix = self.authentication_header_prefix.lower()
        prefix = auth_header[0].decode('utf-8')
        token = auth_header[1].decode('utf-8')
        payload = jwt.decode(token, settings.SECRET_KEY, algorithms=['HS256'])
        ids = payload['user_id']-1

        employee = self.get_object(ids)
        serializer = EmployeeSerializer(employee)
        return Response(serializer.data)

    def put(self, request):
        request.user = None
        auth_header = authentication.get_authorization_header(request).split()
        auth_header_prefix = self.authentication_header_prefix.lower()
        prefix = auth_header[0].decode('utf-8')
        token = auth_header[1].decode('utf-8')
        payload = jwt.decode(token, settings.SECRET_KEY, algorithms=['HS256'])
        ids = payload['user_id']-1

        employee = self.get_object(ids)
        serializer = EmployeeSerializer(employee, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request):
        request.user = None
        auth_header = authentication.get_authorization_header(request).split()
        auth_header_prefix = self.authentication_header_prefix.lower()
        prefix = auth_header[0].decode('utf-8')
        token = auth_header[1].decode('utf-8')
        payload = jwt.decode(token, settings.SECRET_KEY, algorithms=['HS256'])
        ids = payload['user_id']-1

        employee = self.get_object(ids)
        employee.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)