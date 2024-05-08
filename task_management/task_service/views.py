from django.shortcuts import render
from django.http import JsonResponse
from rest_framework import generics, status
from .serializers import serializers
from rest_framework.decorators import api_view
from .models import Task

import requests

@api_view(['GET'])
def allTask(request):
    tasks = Task.objects.all()
    data = {'tasks': list(tasks.values())}
    return JsonResponse(data)

@api_view(['POST'])
def add_task(request):
    pass

@api_view(['GET'])
def read_task(request):

    pass

@api_view(['PUT'])
def update_task(request, task_id):
    # Handle PUT request to update an existing task
    pass

@api_view(['DELETE'])
def delete_task(request, task_id):
    # Handle DELETE request to delete a task
    pass
