from django.contrib import admin
from api.models import Project

@admin.register(Project)
class ProjectModelAdmin(admin.ModelAdmin):
  list_display = ['id', 'title']
