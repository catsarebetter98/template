import json

from django.shortcuts import render

from django.core import serializers
from rest_framework import status

from rest_framework.response import Response
from rest_framework.views import APIView

from blog.articles.models import Article


# This is the view that you imported in the frontend/urls.py
def indexView(request, *args, **kwargs):
    return render(request, "frontend/index.html")  # notice the template used here

class HomePageView(APIView):
    def get(self, request):
        content = Article.objects.all().values("path", "title", "author", "updated_at", "description").filter(hide=False)
        return Response(content, status=status.HTTP_200_OK)

class ArticleView(APIView):
    def get(self, request, slug):
        content = Article.objects.filter(path=slug)
        if content:
            content_list = serializers.serialize("json", content, fields = ("path", "title", "author", "updated_at", "description", "body"))
            return Response(content_list, status=status.HTTP_200_OK)
        return Response({}, status=status.HTTP_404_NOT_FOUND)
