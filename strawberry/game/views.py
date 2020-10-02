from django.shortcuts import render
from django.http import HttpResponse
from django.http.response import JsonResponse
from django.shortcuts import render
import datetime
from math import sin, cos, sqrt, atan2, radians
import random
import string

from django.views.decorators.csrf import csrf_exempt

from game.models import User

def logon(request, x, y):
    #codename = random gen string
    name = ''.join(random.choices(string.ascii_uppercase + string.digits, k=6))
    
    u = User(
        codename = name,
        lat = x,
        lon = y
    )
   
    u.save()
    return HttpResponse(name)

def help(request, codename):
    u = User.objects.get(codename = codename)
    u.help_me = True
    u.save()
    return HttpResponse("turned on")

def get_nearby(request, x, y):
    objects = User.objects.all()
    saved = list()
   
    #sort through objects and save nearby ones
    for user in objects:
        lat = user.lat; lon = user.lon
        if distance_between(x,y, lat,lon) <= 5: #if within 5km from each other
            saved.append(user)
            
    return HttpResponse(get_codenames(saved))
    
#delete a user after log off
def logoff(request, codename):
    user = User.objects.get(codename=codename)
    user.delete()
    return HttpResponse("logged off")
    
def distance_between(x1, y1, x2, y2):
    # approximate radius of earth in km
    R = 6373.0

    lat1 = radians(x1)
    lon1 = radians(y1)
    lat2 = radians(x2)
    lon2 = radians(y2)

    dlon = lon2 - lon1
    dlat = lat2 - lat1

    a = sin(dlat / 2)**2 + cos(lat1) * cos(lat2) * sin(dlon / 2)**2
    c = 2 * atan2(sqrt(a), sqrt(1 - a))

    distance = R * c
    return distance #in kms

def get_codenames(l): #list of users
    s = ""
    for item in l:
        name = item.codename
        s = s + name + ", "
    return s[:-2]


@csrf_exempt
def create_report(request):
    data = extract_data_POST(request)

    try:
        title = data['title']
        what_to_report = data['what_to_report']
        location = data['location']
        report_to_who = data['report_to_who']
        # report_to_who = data['report_to_who']
    except:
        return JsonResponse({"msg": "failed"}, 404)

    return JsonResponse({"msg": "Report created"})

    

# ==============================================================================
#                              HELPER FUNCTIONS
# ==============================================================================
def extract_data_POST(request):
    ''' converts a http request's body to a dict '''
    # return dict(request.GET)
    body_unicode = request.body.decode('utf-8')
    # In case a bad request comes through
    if (body_unicode == ""):
        return None
    return json.loads(body_unicode)
