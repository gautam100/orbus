
from generator import views
#from Inventory import views
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
urlpatterns = [
    path('',views.home, name="home"),
    path('base',views.base),
    path('generatedpassword',views.password,name="password"),
    path('inventory/',include('Inventory.urls')),
    
    path('admin/', admin.site.urls),
]
