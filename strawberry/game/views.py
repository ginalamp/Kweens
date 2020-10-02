from django.shortcuts import render
from django.http import HttpResponse
from django.shortcuts import render

def hello(request):
   return render(request, "game/template/hello.html", {})

def hello(request, number):
   text = "<h1>welcome to my app number %s!</h1>"% number
   return HttpResponse(text)

