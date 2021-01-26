from rest_framework import viewsets, filters

from .serializers import ProductSerializer
from .models import Product
# Create your views here.

class ProductViewSet(viewsets.ModelViewSet):
    serializer_class = ProductSerializer
    queryset = Product.objects.all().order_by('activity') #what it is and how?
    
from rest_framework import generics

from .models import Product
from .serializers import ProductSerializer


class SearchAPIView(generics.ListCreateAPIView):
    search_fields = ['id', 'name', 'activity', 'country', 'mountains','description']
    filter_backends = (filters.SearchFilter,)
    queryset = Product.objects.all()
    serializer_class = ProductSerializer