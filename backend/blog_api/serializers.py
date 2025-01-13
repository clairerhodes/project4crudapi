from rest_framework import serializers
from .models import blogPost

class blogPostSerializer(serializers.ModelSerializer): # convert SQL to JSON
    class Meta:
        model = blogPost # tell django which model to use
        fields = ('subjectLine', 'companyName', 'jobTitle', 'status', 'jobLink', 'description', 'userID', 'comments',) # tell django which fields to include

class UserSerializer(serializers.ModelSerializer): # convert SQL to JSON
    class Meta:
        model = User
        fields = ('username',)