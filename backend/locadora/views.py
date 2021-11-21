
from rest_framework import mixins, generics, permissions


from .models import Funcionario
from .serializers import FuncionarioSerializer

# Create your views here.


class FuncionarioListAPIView(generics.ListAPIView):
    serializer_class = FuncionarioSerializer
    permission_classes = [permissions.AllowAny]
    queryset = Funcionario.objects.all()
