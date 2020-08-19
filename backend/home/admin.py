from django.contrib import admin
from .models import Inventory, Lokation, Name

admin.site.register(Name)
admin.site.register(Lokation)
admin.site.register(Inventory)

# Register your models here.
