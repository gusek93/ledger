from django.db import models


class Record(models.Model):
    classify = models.CharField(max_length=100)
    date = models.DateField()
    detail = models.CharField(max_length=100)
    money = models.IntegerField()
