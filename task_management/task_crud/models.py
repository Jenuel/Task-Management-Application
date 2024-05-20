from django.db import models

# Create your models here.
class Task(models.Model):
    #id = models. testing
    title = models.CharField(max_length=100)
    description = models.TextField()
    status = models.CharField(max_length=20, default='Pending')
    acc_id = models.IntegerField()


    def __str__(self):
        return self.title
