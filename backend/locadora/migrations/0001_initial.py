# Generated by Django 3.2.9 on 2021-11-28 04:02

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
            name='Cliente',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nome', models.CharField(max_length=30)),
                ('nacionalidade', models.CharField(max_length=50)),
                ('dataDeNascimento', models.DateField()),
                ('endereco', models.CharField(max_length=60)),
                ('telefone', models.IntegerField()),
                ('cpf', models.IntegerField()),
                ('email', models.CharField(blank=True, max_length=60, null=True)),
                ('usuario', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'db_table': 'cliente',
            },
        ),
        migrations.CreateModel(
            name='Fornecedor',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('empresa', models.CharField(max_length=30)),
                ('endereco', models.CharField(max_length=90)),
                ('telefone', models.IntegerField()),
                ('email', models.CharField(max_length=60)),
                ('produto', models.CharField(max_length=30)),
            ],
            options={
                'db_table': 'fornecedor',
            },
        ),
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
            ],
            options={
                'db_table': 'funcionarios',
            },
        ),
        migrations.CreateModel(
            name='Veiculo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('modelo', models.CharField(max_length=200)),
                ('cor', models.CharField(max_length=15)),
                ('ano', models.IntegerField()),
                ('placa', models.CharField(max_length=15)),
                ('tipo', models.CharField(choices=[('CUPE', 'Cupe'), ('CROSSOVER', 'Crossover'), ('ESPORTIVO', 'Esportivo'), ('HATCH', 'Hacth'), ('JIPE', 'Jipe'), ('PICAPE', 'Picape'), ('SEDAN', 'Sedan'), ('SUV', 'SUV'), ('VAN E MINIVAM', 'Van/Minivam')], max_length=15)),
                ('status', models.CharField(choices=[('DISPONÍVEL', 'Disponível'), ('INDISPONÍVEL', 'Indisponível')], max_length=20)),
            ],
            options={
                'db_table': 'veiculo',
            },
        ),
        migrations.CreateModel(
            name='Locacao',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('data_locacao', models.DateField()),
                ('data_devolucao', models.DateField()),
                ('status', models.CharField(choices=[('EM_ABERTO', 'Em Aberto'), ('FECHADA', 'Fechada')], max_length=10)),
                ('cliente', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='locadora.cliente')),
                ('funcionario', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='locadora.funcionarios')),
                ('owner', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
                ('veiculo', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='locadora.veiculo')),
            ],
            options={
                'db_table': 'locacao',
            },
        ),
    ]
