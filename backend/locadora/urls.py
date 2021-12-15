from django.urls import path
from django.urls import path, include


from . import views

app_name = 'locadora'

urlpatterns = [
    path('aquisicao/', views.AquisicaoViewSet.as_view({'get': 'list'}),
         name='aquisicao-list'),
    path('funcionarios/', views.FuncionariosViewSet.as_view({'get': 'list'}),
         name='funcionarios-list'),
    path('cliente/', views.ClientesViewSet.as_view({'get': 'list'}),
         name='cliente-list'),
    path('cliente_create/', views.CreateClienteViewSet.as_view({'post': 'create'}),
         name='cliente_create'),
    path('veiculo/', views.VeiculoViewSet.as_view({'get': 'list'}),
         name='veiculo-list'),
    path('fornecedor/', views.VeiculoViewSet.as_view({'get': 'list'}),
         name='fornecedor-list'),
    path('locacao/', views.LocacaoViewSet.as_view({'get': 'list'}),
         name='locacao-list'),
    path('funcaoFuncionario/', views.FuncaoFuncionarioViewSet.as_view({'get': 'list'}),
         name='funcaoFuncionario-list'),
    path('relatorio/despesas/', views.RelatorioDespesasViewSet.as_view(),
         name='relatorioDespesas-list'),
    path('relatorio/receitas', views.RelatorioReceitasViewSet.as_view(),
         name='relatorioFinanceiro-list'),
    path('tipoVeiculo/', views.TipoVeiculoViewSet.as_view(),
         name='tipoVeiculo-list'),
    path('statusVeiculo/', views.StatusVeiculoViewSet.as_view(),
         name='statusVeiculo-list'),
    path('corVeiculo/', views.CorVeiculoViewSet.as_view(),
         name='corVeiculo-list'),
    path('statusLocacao/', views.StatusLocacaoViewSet.as_view(),
         name='statusLocacao-list'),
]
