from django.db import models
from django.conf import settings


class Funcionario(models.Model):
    #usuario = models.ForeignKey( settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    nome = models.CharField(max_length=30)
    nacionalidade = models.CharField(max_length=50)
    dataDeNascimento = models.DateField()
    endereco = models.CharField(max_length=60)
    telefone = models.IntegerField()
    cpf = models.IntegerField()
    email = models.CharField(max_length=60, blank=True, null=True)
    funcao = models.CharField(max_length=30)

    class Meta:
        db_table = 'funcionario'

    def __str__(self):
        return f'{self.nome}'


class Cliente(models.Model):
    #usuario = models.ForeignKey(   settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    nome = models.CharField(max_length=30)
    nacionalidade = models.CharField(max_length=50)
    dataDeNascimento = models.DateField()
    endereco = models.CharField(max_length=60)
    telefone = models.IntegerField()
    cpf = models.IntegerField()
    email = models.CharField(max_length=60, blank=True, null=True)
    funcao = models.CharField(max_length=30)

    class Meta:
        db_table = 'cliente'

    def __str__(self):
        return self.nome
