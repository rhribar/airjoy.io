from django.db import models
from api.category.models import Category 

# Create your models here.

class Product(models.Model):
    name = models.CharField(max_length =50)
    activity = models.CharField(max_length = 50, default='')
    country =   models.CharField(max_length = 50, default='')
    mountains = models.CharField(max_length = 50, default='')
    description = models.CharField(max_length = 125)
    price = models.CharField(max_length =50)
    stock = models.CharField(max_length =50)
    

    is_active = models.BooleanField(default = True, blank=True) #can be also empty blank = True
    image = models.ImageField(upload_to = 'images/', blank = True, null = True)
    #how to interlink the tables?!
    category = models.ForeignKey(Category, on_delete = models.SET_NULL, blank = True, null = True)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)

    def __str__(self):
        return self.name #for names in django admin?

