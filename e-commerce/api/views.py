from django.http import JsonResponse #simple json response

# Create your views here.

def home(request): # expecting to make a request
    return JsonResponse({'info': 'Django React Course', 'name':"rok"})