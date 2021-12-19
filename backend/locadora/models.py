from django.db import models
from django.conf import settings
from django.contrib.auth.models import User


class FuncaoFuncionario(models.Model):
    nome = models.CharField(max_length=50)
    salarioBase = models.FloatField()

    class Meta:
        db_table = 'funcaoFuncionario'

    def __str__(self):
        return self.nome


class Funcionarios(models.Model):
    usuario = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.RESTRICT)
    nome = models.CharField(max_length=30)
    nacionalidade = models.CharField(max_length=50)
    dataDeNascimento = models.DateField()
    endereco = models.CharField(max_length=60)
    telefone = models.IntegerField()
    cpf = models.IntegerField()
    email = models.CharField(max_length=60, blank=True, null=True)
    funcao = models.ForeignKey(FuncaoFuncionario, on_delete=models.RESTRICT)

    class Meta:
        db_table = 'funcionarios'

    def __str__(self):
        return f'{self.nome}'


class Cliente(models.Model):
    usuario = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.RESTRICT)
    nome = models.CharField(max_length=30)
    nacionalidade = models.CharField(max_length=50)
    dataDeNascimento = models.DateField()
    endereco = models.CharField(max_length=60)
    telefone = models.IntegerField()
    email = models.CharField(max_length=60, unique=True)
    cpf = models.IntegerField(unique=True)
    cnh = models.IntegerField(unique=True)
    aprovado = models.BooleanField(default=False)

    class Meta:
        db_table = 'cliente'

    def __str__(self):
        return self.nome


class JustificativaReprovacao(models.Model):
    funcionario = models.ForeignKey(Funcionarios, on_delete=models.RESTRICT)
    cliente = models.ForeignKey(Cliente, on_delete=models.RESTRICT)
    texto = models.CharField(max_length=200)

    class Meta:
        db_table = 'justificativa'

    def __str__(self):
        return self.texto


class Veiculo(models.Model):
    TIPO_VEICULO = (
        ('CUPE', 'Cupe'),
        ('CROSSOVER', 'Crossover'),
        ('ESPORTIVO', 'Esportivo'),
        ('HATCH', 'Hacth'),
        ('JIPE', 'Jipe'),
        ('PICAPE', 'Picape'),
        ('SEDAN', 'Sedan'),
        ('SUV', 'SUV'),
        ('VAN/MINIVAM', 'Van/Minivam'),
    )

    STATUS_VEICULO = (
        ('DISPONIVEL', 'Disponível'),
        ('INDISPONIVEL', 'Indisponível'),
        ('EM_AVALIACAO', 'Devolvido - Em Avaliação'),
        ('CONSERTO', 'Devolvido - Conserto'),
    )

    COR_VEICULO = (
        ('PRETO', 'Preto'),
        ('BRANCO', 'Branco'),
        ('PRATA', 'Prata'),
        ('VERMELHO', 'Vermelho'),
        ('CINZA', 'Cinza'),
        ('AZUL', 'Azul'),
        ('AMARELO', 'Amarelo'),
        ('VERDE', 'Verde'),
        ('LARANJA', 'Laranja'),
        ('OUTRA', 'Outra')
    )

    ano = models.IntegerField()
    modelo = models.CharField(max_length=200)
    placa = models.CharField(max_length=15)
    cor = models.CharField(max_length=10, choices=COR_VEICULO)
    tipo = models.CharField(max_length=15, choices=TIPO_VEICULO)
    status = models.CharField(max_length=20, choices=STATUS_VEICULO)
    quilometragem = models.IntegerField()
    combustivel = models.IntegerField()

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

class Aquisicao(models.Model):
    fornecedor = models.ForeignKey(Fornecedor, on_delete=models.RESTRICT)
    valor = models.FloatField()
    data = models.DateField()
    descricao = models.CharField(max_length=200)

    class Meta:
        db_table = 'aquisicao'

    def __str__(self):
        return self.descricao


class Locacao(models.Model):
    LOCACAO_STATUS = (
        ('RESERVA', 'Reserva'),
        ('EM_ABERTO', 'Em Aberto'),
        ('EM_AVALIACAO', 'Em Avaliacao'),
        ('FECHADA', 'Fechada'),
    )

    data_locacao = models.DateField()
    data_prevista_devolucao = models.DateField()
    data_devolucao = models.DateField(null=True, blank=True)
    status = models.CharField(max_length=15, choices=LOCACAO_STATUS)
    funcionario = models.ForeignKey(Funcionarios, on_delete=models.RESTRICT, null=True, blank=True)
    cliente = models.ForeignKey(Cliente, on_delete=models.RESTRICT)
    veiculo = models.ForeignKey(Veiculo, on_delete=models.RESTRICT)
    acressimos_manutencao = models.FloatField(default=0)
    acressimos_atraso = models.FloatField(default=0)
    valor = models.FloatField(default=0)

    class Meta:
        db_table = 'locacao'

    def __str__(self):
        return self.status