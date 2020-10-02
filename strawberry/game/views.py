from django.shortcuts import render
from django.http import HttpResponse
from django.shortcuts import render
import datetime

from game.models import User

def hello(request):
   today = datetime.datetime.now().date()
   return render(request, "hello.html", {"today" : today})

def logon(request, x, y):
    #codename = random gen string
    name = ""
    
    u = User(
        codename = name,
        lat = x,
        lon = y
    )
   
    u.save()
    return name
    
# TODO: implement
def get_nearby(request, x, y):
    objects = User.objects.all()
   
    #sort through objects and save nearby ones
    
    #use function to determine location from long-lat coordinates
    
#delete a user after log off
def delete(request, codename):
    user = User.objects.get(codename=codename)
    user.delete()
