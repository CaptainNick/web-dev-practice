from rest_framework.permissions import BasePermission

class IsOwner(BasePermission):
    def has_object_permission(self, request, view, obj):
        message = "You must be owner of this employee's details."
        return obj.user == request.user
