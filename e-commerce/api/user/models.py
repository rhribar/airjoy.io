from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.

class CustomUser(AbstractUser):
    name = models.CharField(max_length = 50, default = 'Anonymous')
    email = models.EmailField(max_length = 254, unique = True) # i want user to be unique

    username = None

    #we customizing user login, this is also required per docs.
    USERNAME_FIELD = 'email' #email takes place of username
    REQUIRED_FIELDS = []

    phone = models.CharField(max_length = 20, blank = True, null = True) # is optional
    gender = models.CharField(max_length = 10, blank = True, null = True)

    session_token = models.CharField(max_length = 10, default = 0) #restricting the token to be max 10 char
    #session token for specific user for a specific session

    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)

