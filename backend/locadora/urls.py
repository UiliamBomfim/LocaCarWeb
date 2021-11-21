from django.urls import path

from . import views

app_name = 'locadora'

urlpatterns = [
    path('locadora/',  views.FuncionarioListAPIView.as_view(),
         name='funcionario-list'),

    # utilizada para teste
    # path('locadora/',  views.FuncionariosViewSet.as_view({'get': 'list'}),
    #     name='funcionarios-list'),

]
