# Generated by Django 3.0.8 on 2020-11-10 14:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0002_auto_20201110_1515'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='activity',
            field=models.CharField(default='', max_length=50),
        ),
        migrations.AlterField(
            model_name='product',
            name='country',
            field=models.CharField(default='', max_length=50),
        ),
        migrations.AlterField(
            model_name='product',
            name='mountains',
            field=models.CharField(default='', max_length=50),
        ),
    ]