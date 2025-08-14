import random, string
from django.shortcuts import get_object_or_404, redirect
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.core.validators import URLValidator
from django.core.exceptions import ValidationError
from .models import ShortURL
import json

def generate_code(length=6):
    return ''.join(random.choices(string.ascii_letters + string.digits, k=length))

def validate_url(url):
    validate = URLValidator()
    try:
        validate(url)
        return True
    except ValidationError:
        return False

@csrf_exempt
def shorten(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            long_url = data.get('url')
            
            if not long_url:
                return JsonResponse({
                    'error': 'URL is required'
                }, status=400)

            if not validate_url(long_url):
                return JsonResponse({
                    'error': 'Invalid URL format. Please enter a valid URL including http:// or https://'
                }, status=400)

            code = generate_code()
            # Ensure unique code
            while ShortURL.objects.filter(code=code).exists():
                code = generate_code()

            ShortURL.objects.create(long_url=long_url, code=code)
            return JsonResponse({'short_url': f'http://127.0.0.1:8000/{code}'})
        except json.JSONDecodeError:
            return JsonResponse({
                'error': 'Invalid JSON data'
            }, status=400)
        except Exception as e:
            return JsonResponse({
                'error': 'An unexpected error occurred'
            }, status=500)

def redirect_url(request, code):
    short = get_object_or_404(ShortURL, code=code)
    return redirect(short.long_url)
