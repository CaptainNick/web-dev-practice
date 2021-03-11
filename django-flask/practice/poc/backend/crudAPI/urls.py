from django.urls import path, include
# from django.conf.urls import url
# from rest_framework.authtoken.views import obtain_auth_token
# from rest_framework_simplejwt import views as jwt_views 
from .views import EmployeeAPIView#, EmployeeDetails

urlpatterns = [
    path('employee/', EmployeeAPIView.as_view()),
    # path('employeedetails/', EmployeeDetails.as_view()),
    # path('api-token-auth/', obtain_auth_token, name='api_token_auth'),
    # path('api/token/', jwt_views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    # path('api/token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
    # url(r'^openid/', include('oidc_provider.urls', namespace='oidc_provider')),
]