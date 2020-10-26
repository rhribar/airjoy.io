from rest_framework import serializers # imports serializations from rest_framework

from .models import Category

class CategorySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Category #why?!
        fields = ('name', 'description') #where are fields