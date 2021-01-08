from rest_framework import viewsets

# Create your views here.

from .serializers import CategorySerializer
from .models import Category #-> why?!

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all().order_by('name') #=> runs a sqls query
    
    serializer_class = CategorySerializer # data is not serialized

