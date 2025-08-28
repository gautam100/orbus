from django.urls import path
from Inventory import views

urlpatterns = [
    path('',views.index,name="index"),
    path('display_laptops',views.display_laptops,name="display_laptops"),
    path('display_desktops',views.display_desktops,name="display_desktops"),
    path('display_mobiles',views.display_mobiles,name="display_mobiles"), 
    
    path('add_laptop',views.add_laptop,name="add_laptop"),
    path('add_desktop',views.add_desktop,name="add_desktop"),
    path('add_mobile',views.add_mobile,name="add_mobile"),
    
    
]