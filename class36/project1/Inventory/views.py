from django.shortcuts import render,redirect,get_object_or_404
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
    
    
def edit_laptop(request,item_id):
    item = get_object_or_404(Laptop, id=item_id)
    if request.method == "POST":
        form = LaptopForm(request.POST, instance=item)
        if form.is_valid():
            form.save()
            return redirect('index')
    else:
        form = LaptopForm(instance=item)
        return render(request, 'edit_item.html',context ={'form': form, 'title':'Laptop'})

def edit_desktop(request,item_id):
    item = get_object_or_404(Desktop, id=item_id)
    if request.method == "POST":
        form = DesktopForm(request.POST, instance=item)
        if form.is_valid():
            form.save()
            return redirect('index')
    else:
        form = DesktopForm(instance=item)
        return render(request, 'edit_item.html',context ={'form': form, 'title':'Desktop'})
    
def edit_mobile(request,item_id):
    item = get_object_or_404(Mobile, id=item_id)
    if request.method == "POST":
        form = MobileForm(request.POST, instance=item)
        if form.is_valid():
            form.save()
            return redirect('index')
    else:
        form = MobileForm(instance=item)
        return render(request, 'edit_item.html',context ={'form': form, 'title':'Mobile'})
    
def delete_laptop(request, item_id):
    Laptop.objects.filter(id=item_id).delete()
    items = Laptop.objects.all()
    return render(request,'index.html',context={'items':items,'title':'Laptop'})

    
