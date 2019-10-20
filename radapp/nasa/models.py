from django.db import models

# Create your models here.
class City(models.Model):
    city = models.CharField(max_length=200)
    collection_date = models.DateTimeField('date collection')
    identifier = models.CharField(max_length=200)
    num_of_bubbles = models.IntegerField(default=1)
    bubble_detector_id = models.CharField(max_length=200)
    sensitivity = models.DecimalField(max_digits=20, decimal_places=3)
    calculated_exposure = models.DecimalField(max_digits=20, decimal_places=3)
    province = models.CharField(max_length=200)

class Location(models.Model):
    city = models.CharField(max_length=200)
    lat = models.DecimalField(max_digits=20, decimal_places=3)
    lng = models.DecimalField(max_digits=20, decimal_places=3)

class Rad(models.Model):
    identifier = models.CharField(max_length=200)
    city = models.CharField(max_length=200)
    province = models.CharField(max_length=200)
    exposure = models.DecimalField(max_digits=20, decimal_places=3)
    radon = models.DecimalField(max_digits=20, decimal_places=3)
    terrestrial = models.DecimalField(max_digits=20, decimal_places=3)
    cosmic = models.DecimalField(max_digits=20, decimal_places=3)
    ingestion = models.DecimalField(max_digits=20, decimal_places=3)
    total = models.DecimalField(max_digits=20, decimal_places=3)