from django.shortcuts import render,redirect
from .models import Laptop, Desktop, Mobile
from .forms import LaptopForm, DesktopForm, MobileForm

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

def add_laptop(request):
    if request.method == "POST":
        form = LaptopForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('index')
    else:
        form = LaptopForm()
        return render(request, 'add_new.html', context ={'form': form, 'title':'Laptop'})
    
def add_desktop(request):
		if request.method == "POST":
			form = DesktopForm(request.POST)
			if form.is_valid():
				form.save()
				return redirect('index')
		else:
			form = DesktopForm()
			return render(request, 'add_new.html', context={'form': form,'title':'Desktop'})

def add_mobile(request):
    if request.method == "POST":
        form = MobileForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('index')
    else:
        form = MobileForm()
        return render(request, 'add_new.html', context={'form': form, 'title': 'Mobile'})

    
