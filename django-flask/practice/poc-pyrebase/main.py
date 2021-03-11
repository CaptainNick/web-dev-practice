import pyrebase

firebaseConfig = {
	# firebase-credentials.json
}

firebase = pyrebase.initialize_app(firebaseConfig)

db = firebase.database()
# auth = firebase.auth()
# storage = firebase.storage()

# Login
# email = input("Enter your email: ")
# password = input("Enter your password : ")
# try:
#     login = auth.sign_in_with_email_and_password(email, password)
#     print("Success..")
# except:
#     print("Invalid email or password. Try again.")

# Signup
# email = input("Enter your email: ")
# password = input("Enter your password : ")
# confirmpass = input("Confirm your password")
# if password==confirmpass:
#     try:
#         auth.create_user_with_email_and_password(email,password)
#         print("Success")
#     except:
#         print("email already exists")

# Storage upload
# filename = input("Enter name of file to upload: ") #eg. textfilename.txt
# cloudfilename = input("Enter the name of the file on the cloud: ") #eg. files/text/textfile.txt
# storage.child(cloudfilename).put(filename)
# print(storage.child(cloudfilename).get_url(None))


# Storage download
# cloudfilename = input("Enter the name of the file on the cloud: ") #eg. files/text/textfile.txt
# storage.child(cloudfilename).download("", "downloadedfile.txt")

#read file
# cloudfilename = input("Enter the name of the file on the cloud: ") #eg. files/text/textfile.txt
# url=storage.child(cloudfilename).get_url(None)
# f = urllib.request.urlopen(url).read()
# print(f)

# Database
# create
data = {
    'age':40,
    'address':'Bangalore',
    'employed':True,
    'name':'John'
}
# db.push(data)
db.child("people").push(data)
db.child("people").child("myownID").set(data)

