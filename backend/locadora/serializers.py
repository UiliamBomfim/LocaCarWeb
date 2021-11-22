from rest_framework import fields, serializers
from locadora import models
from django.contrib.auth.models import User
<<<<<<< HEAD


class FuncionariosSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Funcionarios
        fields = ('id', 'nome',)
=======
from .models import Funcionario


class FuncionarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Funcionario
        fields = ('nome',)
>>>>>>> 13a237bafbd97b78b31a20e0fbf5f27e33e8ca15
        read_only_fields = ('id',)


class ClienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Cliente
        fields = '__all__'
        read_only_fields = ('id',)
<<<<<<< HEAD


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
=======
>>>>>>> 13a237bafbd97b78b31a20e0fbf5f27e33e8ca15
