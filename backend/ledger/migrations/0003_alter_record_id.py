# Generated by Django 3.2.9 on 2021-11-26 15:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ledger', '0002_alter_record_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='record',
            name='id',
            field=models.IntegerField(primary_key=True, serialize=False),
        ),
    ]
