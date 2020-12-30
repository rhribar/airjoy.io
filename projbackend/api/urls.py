
from django.urls import path, include
from rest_framework.authtoken import views
from .views import home 

urlpatterns = [
    # Home page urls#
    path('', home, name = 'api.home'),
    path('discover/', home, name = 'api.home'),
    path('winter/', home, name = 'api.home'),
    path('summer/', home, name = 'api.home'),


    path('category/', include('api.category.urls')),
    path('product/', include('api.product.urls')),
    path('user/', include('api.user.urls')), #access user.url
    path('order/', include('api.order.urls')),
    path('payment/', include('api.payment.urls')),
    path('api-token-auth', views.obtain_auth_token, name = 'api_token_auth'),

]

