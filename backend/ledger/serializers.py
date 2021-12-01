from django.contrib.auth.models import User
from rest_framework import serializers
from django.db import models
from .models import Record



class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['pk', 'username','email', 'password']


class RecordSerializer(serializers.ModelSerializer):
    class Meta:
        model = Record
        fields = '__all__'
