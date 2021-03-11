from django.conf.urls import url,include
from django.contrib import admin
from .views import EmployeeList,EmployeeDetail
#from django.urls import path
urlpatterns = [
    url('', EmployeeList.as_view(), name='employeelist'),
    url('<int:id>/', EmployeeDetail.as_view(), name='employeedetail'),
]
