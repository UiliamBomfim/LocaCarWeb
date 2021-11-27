from django.contrib import admin


from .models import Funcionarios, Cliente, Locacao, Veiculo, Fornecedor, Locacao

admin.site.register(Funcionarios)
admin.site.register(Cliente)
admin.site.register(Veiculo)
admin.site.register(Fornecedor)
admin.site.register(Locacao)

