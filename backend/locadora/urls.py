from django.urls import path

from . import views

app_name = 'locadora'

urlpatterns = [
<<<<<<< HEAD
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
=======
    path('locadora/',  views.FuncionarioListAPIView.as_view(),
         name='funcionario-list'),

    # utilizada para teste
    # path('locadora/',  views.FuncionariosViewSet.as_view({'get': 'list'}),
    #     name='funcionarios-list'),

>>>>>>> 13a237bafbd97b78b31a20e0fbf5f27e33e8ca15
]
