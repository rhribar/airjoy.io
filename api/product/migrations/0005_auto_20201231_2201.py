# Generated by Django 3.0.8 on 2020-12-31 21:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0004_product_description_long'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='description_long',
            field=models.CharField(default='0', max_length=500),
        ),
    ]
