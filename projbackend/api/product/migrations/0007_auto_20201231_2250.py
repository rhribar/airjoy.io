# Generated by Django 3.0.8 on 2020-12-31 21:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0006_product_product_url'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='product_url',
            field=models.CharField(blank=True, default='', max_length=30),
        ),
    ]