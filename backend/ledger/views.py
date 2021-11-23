from django.contrib.auth.models import User
from rest_framework.viewsets import ModelViewSet
from ledger.models import Record
from ledger.serializers import RecordSerializer, UserSerializer


class UserViewSet(ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    

class RecordViewSet(ModelViewSet):
    queryset = Record.objects.all()
    serializer_class = RecordSerializer
