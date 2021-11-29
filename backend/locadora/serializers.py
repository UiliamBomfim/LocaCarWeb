from rest_framework import serializers
from locadora import models
from django.contrib.auth.models import User, Group
from rest_framework import serializers


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'username', 'email', 'groups']


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ['url', 'name']


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


class VeiculoSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = models.Veiculo
        fields = ['id', 'modelo', 'cor', 'ano', 'status']
        read_only_fields = ('id',)


class FornecedorSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Fornecedor
        fields = '__all__'
        read_only_fields = ('id',)


class LocacaoSerializer(serializers.HyperlinkedModelSerializer):
    veiculo = VeiculoSerializer(many=False)

    class Meta:
        model = models.Locacao
        fields = ['id', 'owner', 'data_locacao',
                  'data_devolucao', 'veiculo', 'status']
        read_only_fields = ('id',)
