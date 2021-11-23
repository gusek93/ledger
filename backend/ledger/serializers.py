from django.contrib.auth.models import User
from rest_framework import serializers
from django.db import models
from .models import Record



class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['pk', 'username','email', 'password']


class RecordSerializer(serializers.ModelSerializer):
    classify = models.CharField(max_length=100)
    date = models.DateField()
    detail = models.CharField(max_length=100)
    money = models.IntegerField()

    class Meta:
        model = Record
        fields = '__all__'
