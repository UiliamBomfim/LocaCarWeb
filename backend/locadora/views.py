from django.shortcuts import render
from rest_framework import viewsets
from . import serializers
from . import models


# Create your views here.
class FuncionariosViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.FuncionariosSerializer
    queryset = models.Funcionarios.objects.all()


class ClientesViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.ClienteSerializer
    queryset = models.Cliente.objects.all()


class VeiculoViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.VeiculoSerializer
    queryset = models.Veiculo.objects.all()


class FornecedorViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.FornecedorSerializer
    queryset = models.Fornecedor.objects.all()


class LocacaoViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.LocacaoSerializer
    queryset = models.Locacao.objects.all()
