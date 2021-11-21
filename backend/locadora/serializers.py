from rest_framework import fields, serializers
from locadora import models
from django.contrib.auth.models import User
from .models import Funcionario


class FuncionarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Funcionario
        fields = ('nome',)
        read_only_fields = ('id',)


class ClienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Cliente
        fields = '__all__'
        read_only_fields = ('id',)
