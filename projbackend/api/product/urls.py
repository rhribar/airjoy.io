#handled with router

from rest_framework import routers
from django.urls import path, include

from . import views

from .views import SearchAPIView

router = routers.DefaultRouter()
router.register(r'', views.ProductViewSet)

urlpatterns = [
    path('search/', views.SearchAPIView.as_view()),
    path('', include(router.urls)),
    
]
