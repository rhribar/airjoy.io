from django.db import migrations
from api.user.models import CustomUser

class Migration(migrations.Migration):
    def seed_data(apps, schema_editor):
        # added a custom user, so i dont get locked out
        user = CustomUser(name = "rok", 
                            email = "a.rok.hribar@gmail.com",
                            is_staff = True,
                            is_superuser = True,
                            phone = "12345667778",
                            gender = "Male"
                            )

        user.set_password("12345")
        user.save()

    dependencies = [
     
    ]

    operations = [
        migrations.RunPython(seed_data),
    ]

    