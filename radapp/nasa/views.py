from django.http import HttpResponse
from django.template import loader
from .models import City
from .models import Location
from .models import Rad
from django.shortcuts import render
from django.shortcuts import get_object_or_404, render
import pandas as pd
from django_pandas.io import read_frame

def index(request):
    city_list = Rad.objects.raw('SELECT * FROM nasa_rad WHERE NOT TOTAL == 0 GROUP BY city ORDER BY city')[:]
    location_list = Location.objects.order_by('city')
    space_list = Rad.objects.raw('SELECT * FROM nasa_rad WHERE TOTAL == 0 ORDER BY identifier')
    #geolocator = Nominatim(user_agent="specify_your_app_name_here")
    #cities_latlng = []
    context = {'city_list': city_list, 'location_list': location_list, 'space_list': space_list, 'space9': space_list[0], 'space13': space_list[1], 'space19': space_list[2]}
    return render(request, 'nasa/index.html', context)

def detail(request, question_id):
    city = get_object_or_404(Rad, pk=question_id)
    return render(request, 'nasa/detail.html', {'city': city})

def results(request, question_id):
    response = "You're looking at the results of question %s."
    return HttpResponse(rcity_listesponse % question_id)

def group(request, city_name):
    city_list = Rad.objects.filter(city__icontains=city_name)[:]
    context = {'city_list': city_list}
    return render(request, 'nasa/group.html', context)

    