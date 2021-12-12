
from collections import namedtuple
import datetime
from django.contrib.auth.models import User, Group
from django.db.models.query import QuerySet
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework import viewsets
from rest_framework import permissions
from rest_framework import status, viewsets
from rest_framework import permissions, authentication
from rest_framework.decorators import api_view, authentication_classes, permission_classes, renderer_classes
from rest_framework.response import Response
from . import serializers
from . import models
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


class TipoVeiculoViewSet(viewsets.ViewSet):
    permission_classes = [permissions.IsAuthenticated]
    authentication_classes = [
        authentication.TokenAuthentication, authentication.SessionAuthentication]
    
    def list(self, request, *args, **kwargs):
        return Response(models.Veiculo.TIPO_VEICULO, status=status.HTTP_200_OK)


class StatusVeiculoViewSet(viewsets.ViewSet):
    permission_classes = [permissions.IsAuthenticated]
    authentication_classes = [
        authentication.TokenAuthentication, authentication.SessionAuthentication]
    
    def list(self, request, *args, **kwargs):
        return Response(models.Veiculo.STATUS_VEICULO, status=status.HTTP_200_OK)


class CorVeiculoViewSet(viewsets.ViewSet):
    permission_classes = [permissions.IsAuthenticated]
    authentication_classes = [
        authentication.TokenAuthentication, authentication.SessionAuthentication]
    
    def list(self, request, *args, **kwargs):
        return Response(models.Veiculo.COR_VEICULO, status=status.HTTP_200_OK)


class StatusLocacaoViewSet(viewsets.ViewSet):
    permission_classes = [permissions.IsAuthenticated]
    authentication_classes = [
        authentication.TokenAuthentication, authentication.SessionAuthentication]
    
    def list(self, request, *args, **kwargs):
        return Response(models.Locacao.LOCACAO_STATUS, status=status.HTTP_200_OK)


class RelatorioDespesasViewSet(viewsets.ViewSet):
    permission_classes = [permissions.IsAuthenticated]
    authentication_classes = [
        authentication.TokenAuthentication, authentication.SessionAuthentication]

    def list(self, request, *args, **kwargs):
        mesPesquisa = datetime.date.today().month

        mesFiltro = self.request.query_params.get('mes')
        if mesFiltro is not None:
            mesPesquisa = mesPesquisa
        
        #aquisicoes realizadas no mes pesquisado
        aquisicoes_mes = models.Aquisicao.objects.filter(data__month=mesPesquisa)
        #os funcionarios sao custos fixos, entao eh o salario de todos
        funcionarios_mes = models.Funcionarios.objects.all()
        #locacoes devolvidas no mes de pesquisa que tem acressimo de manutencao
        manutencoes_mes = models.Locacao.objects.filter(data_devolucao__month=mesPesquisa, acressimos_manutencao__gt=0)

        model = { "aquisicoes": aquisicoes_mes, "funcionarios": funcionarios_mes, "manutencoes": manutencoes_mes }
        return Response(model, status=status.HTTP_200_OK)


class RelatorioReceitasViewSet(viewsets.ViewSet):
    permission_classes = [permissions.IsAuthenticated]
    authentication_classes = [
        authentication.TokenAuthentication, authentication.SessionAuthentication]

    def list(self, request, *args, **kwargs):
        hoje = datetime.date.today()
        mesPesquisa = hoje.month

        mesFiltro = self.request.query_params.get('mes')
        if mesFiltro is not None:
            mesPesquisa = mesPesquisa
        
        #as reservas so sao exibidas no mes atual pq depois muda de status
        reservas_mes = []
        if mesPesquisa == hoje.month:
            reservas_mes = models.Locacao.objects.filter(status='RESERVA')

        #locacoes devolvidas no mes de pesquisa
        locacoes_mes = models.Locacao.objects.filter(data_devolucao__month=mesPesquisa)

        model = { "locacoes": locacoes_mes, "reservas": reservas_mes }
        return Response(model, status=status.HTTP_200_OK)