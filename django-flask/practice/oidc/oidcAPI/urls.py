from django.urls import path, include
from django.conf.urls import url
from django.contrib.auth import views as auth_views
from rest_framework.authtoken.views import obtain_auth_token
from .views import protected_api

urlpatterns = [
    url(r'^accounts/login/$', auth_views.LoginView.as_view(), name='login'),
    #url(r'^accounts/login/$', LoginView.as_view()), 
    url(r'^', include('oidc_provider.urls', namespace='oidc_provider')),
]