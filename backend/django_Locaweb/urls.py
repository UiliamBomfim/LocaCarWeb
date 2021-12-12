"""django_Locaweb URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django import urls
from django.contrib import admin
from django.urls import path, include, re_path, path
from django.views.generic import TemplateView

from locadora.views import *

from django.urls import path
from rest_framework import routers
from rest_framework.authtoken import views

router = routers.DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'groups', GroupViewSet)
router.register(r'locacao', LocacaoViewSet, basename='locacao')
router.register(r'veiculo', VeiculoViewSet, basename='cliente')
router.register(r'funcionario', FuncionariosViewSet)
router.register(r'fornecedor', FornecedorViewSet)
router.register(r'funcaoFuncionario', FuncaoFuncionarioViewSet)
router.register(r'cliente', ClientesViewSet, basename='cliente')
router.register(r'relatorio/despesas', RelatorioDespesasViewSet, basename='relatorio')
router.register(r'relatorio/receitas', RelatorioReceitasViewSet, basename='relatorio')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-token-auth/', views.obtain_auth_token),
    #add depois
    #path('api/', include('locadora.urls')),
    path('', include(router.urls)),

]

#urlpatterns += [re_path(r'^.*', TemplateView.as_view(template_name='index.html'))]
