from django.contrib import admin
from django.urls import path

from . import views

app_name = 'radiation'
urlpatterns = [
    path('', views.index, name='index'),
    path('<int:question_id>/', views.detail, name='detail'),
    path('<str:city_name>/group/', views.group, name='group'),
]
