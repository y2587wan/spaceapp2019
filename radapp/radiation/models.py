from django.core.validators import MinValueValidator, MaxValueValidator
from django.db import models
import datetime

class Location(models.Model):
    city = models.CharField(max_length=200)
    lat = models.DecimalField(max_digits=20, decimal_places=3)
    lng = models.DecimalField(max_digits=20, decimal_places=3)
    def __str__(self):
        return self.city

class NeutronRadiation(models.Model):
    identifier = models.CharField(max_length=200)
    collectionDate = models.DateField(default=datetime.date.today)
    number_of_Bubbles = models.PositiveIntegerField(validators=[MinValueValidator(1)])
    CATEGORY_CHOICES = (
        ('ON', 'Ontario'),
        ('QC', 'Quebec'),
        ('NS', 'Nova Scotia'),
        ('NB', 'New Brunswick'),
        ('MB', 'Manitoba'),
        ('BC', 'British Columbia'),
        ('PE', 'Prince Edward Island'),
        ('SK', 'Saskatchewan'),
        ('AB', 'Albert'),
        ('NL', 'Newfoundland and Labrador'),
    )
    bubble_Detector_ID = models.IntegerField(
        default=10000000,
        validators=[
            MaxValueValidator(99999999),
            MinValueValidator(10000000)
        ]
     )
    sensitivity = models.PositiveIntegerField(validators=[MinValueValidator(1)])
    calculated_Exposure = models.DecimalField(max_digits=20, decimal_places=3)
    city = models.ForeignKey(Location, related_name="adminchoices_related", on_delete=models.CASCADE)
    province = models.CharField(max_length=200, choices=CATEGORY_CHOICES)
    def __str__(self):
        return self.identifier

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