"""
URL configuration for project1 project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from generator import views
from Inventory import views
from django.contrib import admin
from django.urls import path

urlpatterns = [
    #path('',views.home, name="home"),
    #path('base',views.base),
    #path('generatedpassword',views.password,name="password"),
    
    path('',views.index),
    path('display_laptops',views.display_laptops, name="display_laptops"),
    path('display_desktops',views.display_desktops, name="display_desktops"),
    path('display_mobiles',views.display_mobiles, name="display_mobiles"),
    
    
    path('admin/', admin.site.urls),
]
