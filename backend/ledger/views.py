from django.contrib.auth.models import User
from rest_framework.viewsets import ModelViewSet
from rest_framework.mixins import DestroyModelMixin
from ledger.models import Record
from ledger.serializers import RecordSerializer, UserSerializer
from django.http import Http404, response
from rest_framework.generics import RetrieveUpdateDestroyAPIView




class UserViewSet(ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    

class RecordViewSet(ModelViewSet):
    queryset = Record.objects.all()
    serializer_class = RecordSerializer
        


