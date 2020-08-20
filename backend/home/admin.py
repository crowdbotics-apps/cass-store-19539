from django.contrib import admin
from .models import Description, Inventory, Lokation, Name, Storez

admin.site.register(Name)
admin.site.register(Lokation)
admin.site.register(Inventory)
admin.site.register(Storez)
admin.site.register(Description)

# Register your models here.
