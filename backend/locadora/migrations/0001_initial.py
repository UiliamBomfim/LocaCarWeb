# Generated by Django 3.2.9 on 2021-11-20 05:05

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Funcionarios',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nome', models.CharField(max_length=30)),
                ('nacionalidade', models.CharField(max_length=50)),
                ('dataDeNascimento', models.DateField()),
                ('endereco', models.CharField(max_length=60)),
                ('telefone', models.IntegerField()),
                ('cpf', models.IntegerField()),
                ('email', models.CharField(blank=True, max_length=60, null=True)),
                ('funcao', models.CharField(max_length=30)),
                ('usuario', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'db_table': 'funcionarios',
            },
        ),
    ]
