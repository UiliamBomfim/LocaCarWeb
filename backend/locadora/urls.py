from django.urls import path
from django.urls import path, include


from . import views

app_name = 'locadora'

urlpatterns = [
    path('funcionarios/', views.FuncionariosViewSet.as_view({'get': 'list'}),
         name='funcionarios-list'),
    path('cliente/', views.ClientesViewSet.as_view({'get': 'list'}),
         name='cliente-list'),
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
]
