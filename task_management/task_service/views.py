from django.shortcuts import render
from django.http import JsonResponse
from .models import Task

def task_list(request):
    tasks = Task.objects.all()
    data = {'tasks': list(tasks.values())}
    return JsonResponse(data)

def create_task(request):
    # Handle POST request to create a new task
    pass

def update_task(request, task_id):
    # Handle PUT request to update an existing task
    pass

def delete_task(request, task_id):
    # Handle DELETE request to delete a task
    pass
