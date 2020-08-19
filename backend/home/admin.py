from django.contrib import admin
from .models import Inventory, Lokation, Name, Storez

admin.site.register(Name)
admin.site.register(Lokation)
admin.site.register(Inventory)
admin.site.register(Storez)

# Register your models here.
