from django.shortcuts import render
from .models import Product
from .serializers import ProductSerializers
from rest_framework.permissions import AllowAny
# Create your views here.
from rest_framework import generics

class ProductCreateView(generics.ListCreateAPIView):
    queryset=Product.objects.all()
    serializer_class=ProductSerializers
    permission_classes=[AllowAny]


class ProductDetail(generics.RetrieveAPIView):
    queryset=Product.objects.all()
    serializer_class=ProductSerializers

class ProductUpdate(generics.RetrieveUpdateAPIView):
    queryset=Product.objects.all()
    serializer_class=ProductSerializers

class ProductDelete(generics.DestroyAPIView):
    queryset=Product.objects.all()
    serializer_class=ProductSerializers

