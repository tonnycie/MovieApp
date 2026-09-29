from django.db import models

# Create your models here.
from django.db import models
class Movie(models.Model):
    title = models.CharField(max_length=100)
genre = models.CharField(max_length=50)
def __str__(self):
    return self.title