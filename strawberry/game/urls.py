from django.contrib import admin
from django.urls import path
from django.conf.urls import url, include
from game import views
admin.autodiscover()

urlpatterns = [
    url(r'^help/', views.help),
    url(r'^logon/', views.logon),
    url(r'^locate/', views.get_nearby),
    url(r'^logoff/', views.logoff),
]