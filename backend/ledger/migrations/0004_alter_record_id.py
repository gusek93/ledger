# Generated by Django 3.2.9 on 2021-11-27 15:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ledger', '0003_alter_record_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='record',
            name='id',
            field=models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
    ]
