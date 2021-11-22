from django.db import models
from django.conf import settings


class Funcionarios(models.Model):
   # usuario = models.ForeignKey( settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    nome = models.CharField(max_length=30)
    nacionalidade = models.CharField(max_length=50)
    dataDeNascimento = models.DateField()
    endereco = models.CharField(max_length=60)
    telefone = models.IntegerField()
    cpf = models.IntegerField()
    email = models.CharField(max_length=60, blank=True, null=True)
    funcao = models.CharField(max_length=30)

    class Meta:
        db_table = 'funcionarios'

    def __str__(self):
        return f'{self.nome}'


class Cliente(models.Model):
    usuario = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    nome = models.CharField(max_length=30)
    nacionalidade = models.CharField(max_length=50)
    dataDeNascimento = models.DateField()
    endereco = models.CharField(max_length=60)
    telefone = models.IntegerField()
    cpf = models.IntegerField()
    email = models.CharField(max_length=60, blank=True, null=True)

    class Meta:
        db_table = 'cliente'

    def __str__(self):
        return self.nome


class Veiculo(models.Model):
    CUPE = 'CUPE'
    CROSSOVER = 'CROSSOVER'
    ESPORTIVO = 'ESPORTIVO'
    HATCH = 'HATCH'
    JIPE = 'JIPE'
    PICAPE = 'PICAPE'
    SEDAN = 'SEDAN'
    SUV = 'SUV'
    VAN = 'VAN E MINIVAM'

    TIPO = (
        (CUPE, 'Cupe'),
        (CROSSOVER, 'Crossover'),
        (ESPORTIVO, 'Esportivo'),
        (HATCH, 'Hacth'),
        (JIPE, 'Jipe'),
        (PICAPE, 'Picape'),
        (SEDAN, 'Sedan'),
        (SUV, 'SUV'),
        (VAN, 'Van/Minivam'),
    )

    DISPONIVEL = 'DISPONÍVEL'
    INDISPONIVEL = 'INDISPONÍVEL'
    STATUS_VEICULO = (
        (DISPONIVEL, 'Disponível'),
        (INDISPONIVEL, 'Indisponível'),
    )

    modelo = models.CharField(max_length=200)
    cor = models.CharField(max_length=15)
    ano = models.IntegerField()
    placa = models.CharField(max_length=15)
    tipo = models.CharField(max_length=15, choices=TIPO)
    status = models.CharField(max_length=20, choices=STATUS_VEICULO)

    class Meta:
        db_table = 'veiculo'

    def __str__(self):
        return self.modelo


class Fornecedor(models.Model):
    empresa = models.CharField(max_length=30)
    endereco = models.CharField(max_length=90)
    telefone = models.IntegerField()
    email = models.CharField(max_length=60)
    produto = models.CharField(max_length=30)

    class Meta:
        db_table = 'fornecedor'

    def __str__(self):
        return self.empresa


class Locacao(models.Model):
    EM_ABERTO = 'EM_ABERTO'
    FECHADA = 'FECHADA'
    DEVOLUCAO_STATUS = (
        (EM_ABERTO, 'Em Aberto'),
        (FECHADA, 'Fechada'),
    )

    data_locacao = models.DateField()
    data_devolucao = models.DateField()
    status = models.CharField(max_length=10, choices=DEVOLUCAO_STATUS)
    funcionario = models.ForeignKey(Funcionarios, on_delete=models.CASCADE)
    cliente = models.ForeignKey(Cliente, on_delete=models.CASCADE)
    veiculo = models.ForeignKey(Veiculo, on_delete=models.CASCADE)

    class Meta:
        db_table = 'locacao'

    def __str__(self):
        return self.status
