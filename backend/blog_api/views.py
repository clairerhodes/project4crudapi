from django.shortcuts import render
from rest_framework import generics
from .serializers import blogPostSerializer
from .models import blogPost

# Create your views here.

# /blogPost handles process for POST and GET
class blogPostList(generics.ListCreateAPIView):
    queryset = blogPost.objects.all().order_by('id') # retrieve all objects from DB and order by ascending ID
    serializer_class = blogPostSerializer

# # /blogPost/:id (read, update, or delete specific ID) DOES NOT SUPPORT PUT REQUEST
# class blogPostDetail(generics.RetrieveDestroyAPIView):
#     queryset = blogPost.objects.all().order_by('id')
#     serializer_class = blogPostSerializer


class blogPostDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = blogPost.objects.all().order_by('id')
    serializer_class = blogPostSerializer