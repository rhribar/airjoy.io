from django.db import models
from api.category.models import Category 

# Create your models here.
""" STRUCTURE THIS AS APIS ARE STRUCTURED
    SMTH LIKE
    DATA:
        1.
        2.
        3.
        IMAGES
            IMG LARGE
            IMG SMALL
"""

class Product(models.Model):

    # BASIC INFO ABOUT RESORT
    name = models.CharField(max_length =50)
    activity = models.CharField(max_length = 50, default='')
    category = models.ForeignKey(Category, on_delete = models.SET_NULL, blank = True, null = True)
    
    # GENERAL INFO ABOUT RESORT
    country = models.CharField(max_length = 50, default='')
    mountains = models.CharField(max_length = 50, default='')
    location = models.CharField(max_length = 25, default='')
    description = models.CharField(max_length = 125)
    description_long = models.TextField(max_length = 500, default='0')
    price = models.CharField(max_length = 50)
    stock = models.CharField(max_length = 50)
    image = models.ImageField(upload_to = 'images/', blank = True, null = True)
    price_table = models.ImageField(upload_to = 'images/', blank = True, null = True)

    # IN-DEPTH INFO ABOUT RESORT
    slopes_easy = models.DecimalField(max_digits=4, decimal_places=1, default=0.0)
    slopes_medium = models.DecimalField(max_digits=4, decimal_places=1, default=0.0)
    slopes_hard = models.DecimalField(max_digits=4, decimal_places=1, default=0.0)
    slopes_total = models.DecimalField(max_digits=5, decimal_places=1, default=0.0)
    snow_mountain = models.IntegerField(default=0)
    snow_valley = models.IntegerField(default=0)
    peak_altitude = models.IntegerField(default=0)
    resort_map = models.ImageField(upload_to = 'images/', blank = True, null = True)

    # FEATURES
    rating_resort = models.DecimalField(max_digits=2, decimal_places=1, default=0.0)
    rating_family = models.DecimalField(max_digits=2, decimal_places=1, default=0.0)
    rating_scenery = models.DecimalField(max_digits=2, decimal_places=1, default=0.0)

    # TEHNICAL STUFF
    product_url = models.CharField(blank=True, max_length = 30, default='')
    is_active = models.BooleanField(default = True, blank=True) #can be also empty blank = True
    #how to interlink the tables?!
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)

    def save(self, *args, **kwargs):
        self.product_url = self.name.lower().replace(" ", "-")

        super(Product, self).save(*args, **kwargs)

    def __str__(self):
        return self.name #for names in django admin?
