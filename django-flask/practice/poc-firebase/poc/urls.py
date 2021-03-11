from django.urls import path, include
from .views import EmployeeAPIView, EmployeeDetails

urlpatterns = [
    path('employee/', EmployeeAPIView.as_view()),
    path('employeedetails/', EmployeeDetails.as_view()),
]