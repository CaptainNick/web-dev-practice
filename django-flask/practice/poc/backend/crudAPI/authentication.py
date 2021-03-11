from drf_firebase.authentication import BaseFirebaseAuthentication
from firebase_admin import credentials, initialize_app
from django.contrib.auth import get_user_model

firebase_creds = credentials.Certificate('EmployeeApp/authtest-firebase.json')
firebase_app = initialize_app(firebase_creds)

class FirebaseAuthentication(BaseFirebaseAuthentication):
	"""
	Example implementation of a DRF Firebase Authentication backend class
	"""
	def get_firebase_app(self):
		return firebase_app

	def get_django_user(self, firebase_user_record):
		print("here")
		return get_user_model().objects.get_or_create(
			username=firebase_user_record.uid,
		)[0]