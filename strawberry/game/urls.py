from django.contrib import admin
from django.urls import path
from django.conf.urls import url, include
from game import views
admin.autodiscover()

urlpatterns = [
    url(r'help/(\w{6})', views.help),
    url(r'logon/(\d+)&(\d+)', views.logon),
    url(r'locate/(\d+)&(\d+)', views.get_nearby),
    url(r'logoff/(\w{6})', views.logoff),
    url(r'create_report', views.create_report),
]