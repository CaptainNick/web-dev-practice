
def userinfo(claims, user):
    # Populate claims dict.
    claims['name'] = user.fullname
    claims['email'] = user.email
    claims['phone_number'] = user.mobile
    

    return claims