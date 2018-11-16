from django.shortcuts import render
from django.shortcuts import HttpResponse
from cmdb import models
import json
# Create your views here.


def index(request):
    return render(request, "index.html")


def all_user(request):
    user_list = models.UserInfo.objects.all()
    return HttpResponse(json.dumps(list(user_list), default=lambda obj: obj.__dict__), content_type='application/json')
