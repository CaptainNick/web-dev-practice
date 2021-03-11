from django.shortcuts import render

# Create your views here.
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods

from oidc_provider.lib.utils.oauth2 import protected_resource_view


@require_http_methods(['GET'])
@protected_resource_view(['read_books'])
def protected_api(request, *args, **kwargs):

    dic = {
        'protected': 'information',
    }

    return JsonResponse(dic, status=200)