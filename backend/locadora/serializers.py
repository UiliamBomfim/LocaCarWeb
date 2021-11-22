from rest_framework import fields, serializers
from locadora import models
from django.contrib.auth.models import User


class FuncionariosSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Funcionarios
        fields = ('id', 'nome',)
        read_only_fields = ('id',)


class ClienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Cliente
        fields = '__all__'
        read_only_fields = ('id',)


class VeiculoSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Veiculo
        fields = '__all__'
        read_only_fields = ('id',)


class FornecedorSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Fornecedor
        fields = '__all__'
        read_only_fields = ('id',)


class LocacaoSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Locacao
        fields = '__all__'
        read_only_fields = ('id',)
