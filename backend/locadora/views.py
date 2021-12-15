
from collections import namedtuple
import datetime
from django.contrib.auth.models import User, Group
from django.db.models.query import QuerySet
from rest_framework import viewsets
from rest_framework import permissions
from rest_framework import status, viewsets
from rest_framework import permissions, authentication
from rest_framework.decorators import api_view, authentication_classes, permission_classes, renderer_classes
from rest_framework.response import Response
from . import serializers
from . import models
from .serializers import AquisicaoSerializer, ClienteSerializer, FuncionariosSerializer, LocacaoSerializer, UserSerializer, GroupSerializer


# Create your views here.
class AquisicaoViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.AquisicaoSerializer
    queryset = models.Aquisicao.objects.all()
    permission_classes = [permissions.IsAuthenticated]
    authentication_classes = [
        authentication.TokenAuthentication, authentication.SessionAuthentication]


class FuncionariosViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.FuncionariosSerializer
    queryset = models.Funcionarios.objects.all()
    permission_classes = [permissions.IsAuthenticated]
    authentication_classes = [
        authentication.TokenAuthentication, authentication.SessionAuthentication]
    
    #criar o usuario de autenticacao e o funcionario ao mesmo tempo
    def create(self, request, *args, **kwargs):
        funcionario_data = request.data
        
        auth_user = User.objects.create_user(funcionario_data["nome"], funcionario_data["email"], funcionario_data["senha"])
        
        funcionario = models.Funcionarios.objects.create(usuario=auth_user, nome=funcionario_data["nome"], nacionalidade=funcionario_data["nacionalidade"],
            dataDeNascimento=funcionario_data["dataDeNascimento"], endereco=funcionario_data["endereco"], telefone=funcionario_data["telefone"],
            cpf=funcionario_data["cpf"], email=funcionario_data["email"], funcao_id=funcionario_data["funcao"])
        
        funcionario.save()

        return Response(FuncionariosSerializer(funcionario).data, status=status.HTTP_201_CREATED)


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
    
    #criar o usuario de autenticacao e o cliente ao mesmo tempo
    def create(self, request, *args, **kwargs):
        cliente_data = request.data
        
        auth_user = User.objects.create_user(cliente_data["nome"], cliente_data["email"], cliente_data["senha"])
        
        cliente = models.Cliente.objects.create(usuario=auth_user, nome=cliente_data["nome"], nacionalidade=cliente_data["nacionalidade"],
            dataDeNascimento=cliente_data["dataDeNascimento"], endereco=cliente_data["endereco"], telefone=cliente_data["telefone"],
            cpf=cliente_data["cpf"], email=cliente_data["email"], cnh=cliente_data["cnh"], aprovado=cliente_data["aprovado"])
        
        cliente.save()

        return Response(ClienteSerializer(cliente).data, status=status.HTTP_201_CREATED)


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
        queryset = models.Locacao.objects.all()
        itemUsuario = self.request.query_params.get('listAll')
        if itemUsuario == 'False':
            user = self.request.user
            queryset = queryset.filter(cliente__usuario__id=user.id)
        return queryset


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]
    authentication_classes = [
        authentication.TokenAuthentication, authentication.SessionAuthentication]


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
            mesPesquisa = mesFiltro
        
        #aquisicoes realizadas no mes pesquisado
        aquisicoes_mes = AquisicaoSerializer(models.Aquisicao.objects.filter(data__month=mesPesquisa), many=True).data
        #os funcionarios sao custos fixos, entao eh o salario de todos
        funcionarios_mes = FuncionariosSerializer(models.Funcionarios.objects.all(), many=True).data
        #locacoes devolvidas no mes de pesquisa que tem acressimo de manutencao
        manutencoes_mes = LocacaoSerializer(models.Locacao.objects.filter(data_devolucao__month=mesPesquisa, acressimos_manutencao__gt=0), many=True).data

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
            mesPesquisa = mesFiltro
        
        #as reservas so sao exibidas no mes atual pq depois muda de status
        reservas_mes = []
        if mesPesquisa == hoje.month:
            reservas_mes = LocacaoSerializer(models.Locacao.objects.filter(status='RESERVA', data_prevista_devolucao__month=mesPesquisa), many=True).data

        #locacoes devolvidas no mes de pesquisa
        locacoes_mes = LocacaoSerializer(models.Locacao.objects.filter(data_devolucao__month=mesPesquisa), many=True).data

        model = { "locacoes": locacoes_mes, "reservas": reservas_mes }
        return Response(model, status=status.HTTP_200_OK)