
from django.contrib.auth.models import User
from django.db.models.query import QuerySet
from rest_framework import permissions, authentication
from rest_framework.decorators import api_view, authentication_classes, permission_classes, renderer_classes
from .serializers import UserSerializer
from django.shortcuts import render
from rest_framework import viewsets
from . import serializers
from . import models
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from rest_framework import permissions
from .serializers import UserSerializer, GroupSerializer


# Create your views here.
class FuncionariosViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.FuncionariosSerializer
    queryset = models.Funcionarios.objects.all()
    permission_classes = [permissions.IsAuthenticated]
    authentication_classes = [
        authentication.TokenAuthentication, authentication.SessionAuthentication]


class FuncaoFuncionarioViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.FuncaoFuncionarioSerializer
    queryset = models.FuncaoFuncionario.objects.all()
    permission_classes = [permissions.IsAuthenticated]
    authentication_classes = [
        authentication.TokenAuthentication, authentication.SessionAuthentication]


class ClientesViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.ClienteSerializer
    permission_classes = [permissions.IsAuthenticated]
    authentication_classes = [
        authentication.TokenAuthentication, authentication.SessionAuthentication]
    
    def get_queryset(self):
        queryset = models.Cliente.objects.all()
        approvedUser = self.request.query_params.get('aprovado')
        if approvedUser is not None:
            queryset = queryset.filter(aprovado=approvedUser)
        return queryset


class VeiculoViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.VeiculoSerializer
    permission_classes = [permissions.IsAuthenticated]
    authentication_classes = [
        authentication.TokenAuthentication, authentication.SessionAuthentication]
    
    def get_queryset(self):
        queryset = models.Veiculo.objects.all()
        itemStatus = self.request.query_params.get('status')
        if itemStatus is not None:
            queryset = queryset.filter(status=itemStatus)
        itemTipo = self.request.query_params.get('tipo')
        if itemTipo is not None:
            queryset = queryset.filter(tipo=itemTipo)
        itemCor = self.request.query_params.get('cor')
        if itemCor is not None:
            queryset = queryset.filter(cor=itemCor)
        return queryset


class FornecedorViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.FornecedorSerializer
    queryset = models.Fornecedor.objects.all()
    permission_classes = [permissions.IsAuthenticated]
    authentication_classes = [
        authentication.TokenAuthentication, authentication.SessionAuthentication]


class LocacaoViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.LocacaoSerializer
    permission_classes = [permissions.IsAuthenticated]
    authentication_classes = [
        authentication.TokenAuthentication, authentication.SessionAuthentication]

    def get_queryset(self):
        user = self.request.user
        return models.Locacao.objects.filter(owner=user)


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]


class GroupViewSet(viewsets.ModelViewSet):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    permission_classes = [permissions.IsAuthenticated]
