from rest_framework import serializers
from .models import employees

class employeeSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = employees
        #fields = {'firstName','lastName','department','emp_id'}
        fields = '__all__'
        