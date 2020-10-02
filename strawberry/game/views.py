from django.shortcuts import render
from django.http import HttpResponse
from django.http.response import JsonResponse
from django.shortcuts import render
import datetime

from django.views.decorators.csrf import csrf_exempt

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


@csrf_exempt
def create_report(request):
    data = extract_data_POST(request)
    print(f"create_report({data}")

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