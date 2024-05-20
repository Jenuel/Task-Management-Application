from django.shortcuts import render
from rest_framework import generics, status
from .serializers import TaskSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Task
# Create your views here.

@api_view(['GET'])
def allTask(request):
    tasks = Task.objects.all()
    serializer = TaskSerializer(tasks, many=True)
    return Response(serializer.data, status=200)

@api_view(['POST'])
def add_task(request):
    serializer = TaskSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=201)
    return Response(serializer.errors, status=401)

#getting certain data for a certain task
@api_view(['GET'])
def read_task(request, id):

    pass

@api_view(['PUT'])
def update_task(request, id):
    task = Task.objects.get(pk=id)
    serializer = TaskSerializer(instance=task, data=request.data)
    if serializer.is_valid:
        serializer.save()
        # return Response(serializer.data, status=)
    return Response(serializer.errors, status=401)

@api_view(['DELETE'])
def delete_task(request, id):
    task = Task.objects.get(pk=id)
    task.delete()
    return Response(204)
