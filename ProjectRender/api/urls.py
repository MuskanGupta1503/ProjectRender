from django.urls import path
from api import views

urlpatterns = [
  path('', views.ProjectAPI.as_view()),
  path('<int:pk>', views.ProjectAPI.as_view()),
]