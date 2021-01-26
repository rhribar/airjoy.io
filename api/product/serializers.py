from rest_framework import serializers

from .models import Product

class ProductSerializer(serializers.HyperlinkedModelSerializer):
    image = serializers.ImageField(
        max_length = None, allow_empty_file = False, allow_null = True, required = False) #requirements
    class Meta:
        model = Product
        fields = ('id', 'name', 'activity', 'country','mountains','description', 'price', 'image', 'category','description_long', 'product_url', 'location', 'slopes_easy', 'slopes_medium', 'slopes_hard', 'slopes_total', 'snow_mountain','snow_valley', 'rating_resort', 'rating_family' ,'rating_scenery', 'resort_map', 'peak_altitude')

