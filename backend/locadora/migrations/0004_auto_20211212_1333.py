# Generated by Django 3.2.9 on 2021-12-12 16:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('locadora', '0003_auto_20211212_1302'),
    ]

    operations = [
        migrations.RenameField(
            model_name='locacao',
            old_name='acressimos',
            new_name='acressimos_atraso',
        ),
        migrations.AddField(
            model_name='locacao',
            name='acressimos_manutencao',
            field=models.FloatField(default=0),
        ),
    ]