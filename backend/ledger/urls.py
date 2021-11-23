from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'record', views.RecordViewSet)

urlpatterns = [ 
    path('api/', include(router.urls), name='users'),
    path('record/', include(router.urls), name='record'),
]
