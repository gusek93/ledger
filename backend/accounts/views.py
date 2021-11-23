from django.contrib.auth import get_user_model
from django.contrib.auth.models import Permission
from django.db import models
from django.shortcuts import render
from rest_framework.generics import CreateAPIView
from rest_framework.permissions import AllowAny
from .serializers import SignupSerializer


class SignupView(CreateAPIView):
    model = get_user_model()
    serializer_class = SignupSerializer
    permission_class = [
        AllowAny,
    ]
    pass
