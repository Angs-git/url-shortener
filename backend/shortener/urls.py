from django.contrib import admin
from django.urls import path, include
from api.views import redirect_url

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')),  # API endpoints
    path('<str:code>/', redirect_url, name='redirect'),  # URL shortener redirect at root
]


