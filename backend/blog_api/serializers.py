from rest_framework import serializers
from .models import blogPost
from django.contrib.auth.models import User # import the User model


class blogPostSerializer(serializers.ModelSerializer):
    jobTitle = serializers.CharField(required=False, allow_blank=True)
    jobLink = serializers.CharField(required=False, allow_blank=True)
    description = serializers.CharField(required=False, allow_blank=True)
    comments = serializers.JSONField(required=False, allow_null=True)

    class Meta:
        model = blogPost
        fields = '__all__'

class UserSerializer(serializers.ModelSerializer): # convert SQL to JSON
    class Meta:
        model = User
        fields = ('username',)