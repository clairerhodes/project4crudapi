from django.db import models

# Create your models here.
class blogPost(models.Model):
    subjectLine = models.CharField(max_length = 64)
    companyName = models.CharField(max_length = 64, null = True, blank = True)
    jobTitle = models.CharField(max_length = 64)
    status = models.IntegerField() # default check radio button
    jobLink = models.CharField(max_length = 256, null = True, blank = True)
    description = models.CharField(max_length = 1024)
    userID = models.IntegerField()
    comments = models.JSONField(null = True, blank = True)