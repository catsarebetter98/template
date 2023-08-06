from django.urls import path
from .views import (
    HomePageView,
    ArticleView,
)  # the view responsible for the frontend

urlpatterns = [
    path("data/", HomePageView.as_view()),
    path("data/<slug:slug>/", ArticleView.as_view()),
]
