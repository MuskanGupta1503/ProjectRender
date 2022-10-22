from django.shortcuts import render
from rest_framework.response import Response
from .models import Project
from .serializers import ProjectSerializer
from rest_framework import status
from rest_framework.views import APIView


class ProjectAPI(APIView):
    def get(self, request, pk=None, format=None):
        id = pk
        category=request.GET.get('category')
        if category is not None:
            stu = Project.objects.filter(category=category)
            serializer = ProjectSerializer(stu, many=True)
            return Response(serializer.data)
        if id is not None:
            stu = Project.objects.get(id=id)
            print(stu)
            serializer = ProjectSerializer(stu)
            return Response(serializer.data)
        stu = Project.objects.all()
        serializer = ProjectSerializer(stu, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = ProjectSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'msg': "Data Created"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, pk, format=None):
        id = pk
        stu = Project.objects.get(pk=id)
        serializer = ProjectSerializer(stu, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'msg': "Complete Data Updated"})
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def patch(self, request, pk, format=None):
        id = pk
        stu = Project.objects.get(pk=id)
        serializer = ProjectSerializer(stu, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response({'msg': "Partial Data Updated"})
        return Response(serializer.errors)

    def delete(self, request, pk, format=None):
        id = pk
        stu = Project.objects.get(pk=id)
        stu.delete()
        return Response({"msg": "Data Deleted"})