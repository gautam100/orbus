from django.db import models

# Base Class
class Device(models.Model):
    type = models.CharField(max_length=200, blank=False)
    price = models.IntegerField()
    
    choices = (
        ('AVAILABLE','Ready to Purchase'),
        ('SOLD','Item Sold'),
        ('RESTOCKING','Restocking in few days')
    )
    status = models.CharField(max_length=20, choices=choices, default="SOLD" )
    
    issues = models.CharField(max_length=100,default="No Issues")
    
    class Meta:
        abstract = True
    
    def __str__(self):
        return 'Type:{0} Price:{1}'.format(self.type, self.price)    
    
    
    
class Laptop(Device):
    pass

class Desktop(Device):
    pass

class Mobile(Device):
    pass

