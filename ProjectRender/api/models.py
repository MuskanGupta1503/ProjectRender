from email.policy import default
from unicodedata import category
from django.db import models
CATEGORY_CHOICE = ((
 ('WebDev','WebDev'),
 ('AppDev','AppDev'),
 ('ML','ML'),
 ('Others','Others'),
))
DIFFICULTY_CHOICE=((
    ('easy','easy'),
    ('medium','medium'),
    ('tough','tough')
))

class Project(models.Model):
    title = models.CharField(max_length = 200)
    description = models.TextField()
    techstack = models.CharField(max_length=300)
    githublink = models.CharField(max_length=300)
    linkedinlink = models.CharField(max_length=300)
    category = models.CharField(choices=CATEGORY_CHOICE, max_length=10, default='others')
    difficulty = models.CharField(choices=DIFFICULTY_CHOICE, max_length=10, default='medium')

    def __str__(self):
        return self.title