from django.shortcuts import render
from .models import Laptop, Desktop, Mobile

# Create your views here.
def index(request):
    return render(request, 'index.html')

def display_laptops(request):
    items = Laptop.objects.all()
    print(items)
    return render(request, 'index.html', context={'items':items, 'title':'Laptop'})

def display_desktops(request):
    items = Desktop.objects.all()
    return render(request, 'index.html', context={'items':items, 'title':'Desktop'})

def display_mobiles(request):
    items = Mobile.objects.all()
    return render(request, 'index.html', context={'items':items, 'title':'Mobile'})
