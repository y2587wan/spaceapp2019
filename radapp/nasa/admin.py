from django.contrib import admin

from .models import City
from .models import Rad
from .models import Location

admin.site.register(City)
admin.site.register(Location)
admin.site.register(Rad)