from rest_framework import serializers
from .models import Article

#model serializer
class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        #fields = '__all__' 
        fields = ['id', 'title', 'author']

#define serializer class
# class ArticleSerializer(serializers.Serializer):
#     title = serializers.CharField(max_length=100)
#     author = serializers.CharField(max_length=100)
#     email = serializers.EmailField(max_length=100)
#     date = serializers.DateTimeField()

#     def create(self, validated_data):
#         return Article.objects.create(validated_data)

#     def update(self, instance, validated_data):
#         instance.title = validated_data.get('title', instance.title)
#         instance.author = validated_data.get('author', instance.author)
#         instance.email = validated_data.get('email', instance.email)
#         instance.date = validated_data.get('date', instance.date)
#         instance.save()
#         return instance

########## Shell
# >>> from api_basic.models import Article
# >>> from api_basic.serializers import ArticleSerializer
# >>> from rest_framework.renderers import JSONRenderer
# >>> from rest_framework.parsers import JSONParser
# >>> a = Article(title='Article Title', author='admin', email='admin@admin.com')
# >>> a
# <Article: Article Title>
# >>> a.save()
# >>> serializer = ArticleSerializer(a)
# >>> serializer.data
# {'title': 'Article Title', 'author': 'admin', 'email': 'admin@admin.com', 'date': '2020-12-07T19:11:37.660762Z'}
# >>> content = JSONRenderer().render(serializer.data)
# >>> content
# b'{"title":"Article Title","author":"admin","email":"admin@admin.com","date":"2020-12-07T19:11:37.660762Z"}'
# >>> serializer = ArticleSerializer(Article.objects.all(), many=True)
# >>> serializer.data
# [OrderedDict([('title', 'Article Title'), ('author', 'admin'), ('email', 'admin@admin.com'), ('date', '2020-12-07T19:11:37.660762Z')])]

# >>> serializer = ArticleSerializer()
# >>> print(repr(serializer))
# ArticleSerializer():
#     id = IntegerField(label='ID', read_only=True)
#     title = CharField(max_length=100)
#     author = CharField(max_length=100)