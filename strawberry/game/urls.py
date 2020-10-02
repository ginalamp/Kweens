from django.contrib import admin
from django.urls import path
from django.conf.urls import url, include
from game import views
admin.autodiscover()

urlpatterns = [
    url(r'^hello/', views.hello),
    url(r'create_report', views.create_report),
]