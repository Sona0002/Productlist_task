from django.urls import path
from . import views
from .views import *



urlpatterns = [
    path('',ProductCreateView.as_view(), name='create'),
    path('detail/<int:pk>/',ProductDetail.as_view(),name='detail'),
    path('update/<int:pk>/',ProductUpdate.as_view(),name='update'),
    path('delete/<int:pk>/',ProductDelete.as_view(),name='delete')



]
