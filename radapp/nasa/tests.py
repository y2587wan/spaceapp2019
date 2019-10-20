from django.test import TestCase

# Create your tests here.
from django.utils import timezone
import datetime
from .models import City


class QuestionModelTests(TestCase):

    def test_city(self):
        """
        was_published_recently() returns False for questions whose pub_date
        is in the future.
        """
        time = timezone.now() + datetime.timedelta(days=30)
        future_question = City(collection_date=time)