from django.contrib import admin

<<<<<<< HEAD
from .models import Funcionarios, Cliente, Locacao, Veiculo, Fornecedor, Locacao

admin.site.register(Funcionarios)
admin.site.register(Cliente)
admin.site.register(Veiculo)
admin.site.register(Fornecedor)
admin.site.register(Locacao)
=======
from .models import Funcionario, Cliente

admin.site.register(Funcionario)
admin.site.register(Cliente)
>>>>>>> 13a237bafbd97b78b31a20e0fbf5f27e33e8ca15
