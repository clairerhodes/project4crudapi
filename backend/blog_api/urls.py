from django.urls import path
from . import views

urlpatterns = [
    path('api/blogPost', views.blogPostList.as_view(), name='blogPost_list'), # api/blogPost is routed to blogPostList view for handling
    path('api/blogPost/<int:pk>', views.blogPostDetail.as_view(), name='blogPost_detail'), # api/blogPost routed to blogPostDetail view for handling
]