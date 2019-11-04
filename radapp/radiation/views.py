from django.http import HttpResponse
from django.template import loader
from .models import Location
from .models import Rad
from django.shortcuts import render
from django.shortcuts import get_object_or_404, render

# Create your views here.
def index(request):
    city_list = Rad.objects.raw('SELECT * FROM radiation_rad WHERE TOTAL <> 0')[:]
    location_list = Location.objects.order_by('city')
    space_list = Rad.objects.raw('SELECT * FROM radiation_rad WHERE TOTAL = 0 ORDER BY identifier')
    context = {'city_list': city_list, 'location_list': location_list, 'space_list': space_list, 'space9': space_list[0], 'space13': space_list[1], 'space19': space_list[2]}
    return render(request, 'radiation/index.html', context)

def detail(request, question_id):
    city = get_object_or_404(Rad, pk=question_id)
    return render(request, 'radiation/detail.html', {'city': city})

def group(request, city_name):
    city_list = Rad.objects.filter(city__icontains=city_name.replace('_', ' '))[:]
    context = {'city_list': city_list}
    return render(request, 'radiation/group.html', context)