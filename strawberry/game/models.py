from django.db import models

class User(models.Model):
   codename = models.CharField(max_length = 6)
   lat = models.FloatField()
   lon = models.FloatField()
   help_me = models.BooleanField(default=False)

   class Meta:
      db_table = "strawberry"
