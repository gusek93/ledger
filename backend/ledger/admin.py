from django.contrib import admin
from .models import Record


@admin.register(Record)
class RecordAdmin(admin.ModelAdmin):
    list_display = [
        'classify',
        'date',
        'detail',
        'money',
    ]

