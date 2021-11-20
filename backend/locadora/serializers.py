from rest_framework import fields, serializers
from locadora import models
from django.contrib.auth.models import User


class FuncionariosSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Funcionarios
        fields = '__all__'
        read_only_fields = ('id',)


class ClienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Cliente
        fields = '__all__'
        read_only_fields = ('id',)
