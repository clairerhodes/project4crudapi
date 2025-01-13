from django.shortcuts import render
from rest_framework import generics
from .serializers import blogPostSerializer, UserSerializer
from .models import blogPost, User

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


# /user handles process for POST and GET
class UserList(generics.ListCreateAPIView):
    queryset = User.objects.all().order_by('id')
    serializer_class = UserSerializer

# /user/:id (read, update, or delete specific ID) DOES NOT SUPPORT PUT REQUEST
class UserDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all().order_by('id')
    serializer_class = UserSerializer