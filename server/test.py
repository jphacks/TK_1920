from gensim.models.word2vec import Word2Vec
import json
import urllib.request
import requests

url = 'https://labs.goo.ne.jp/api/morph'
data = {
  'app_id': '58e6499c26849459065defb21ba415df2958862d0e2fbbc5fc7bc69f32a09ca5',
  'sentence': '彼氏大好き',
  'pos_filter': '名詞|形容詞語幹|連用詞|連体詞|独立詞'
}
headers = {
  'Content-Type': 'application/x-www-form-urlencoded'
}

r = requests.post(
  url=url,
  data=urllib.parse.urlencode(data),
  headers=headers
)
word_list = json.loads(r.text)['word_list'][0]

model_path = './learning/word2vec_model/word2vec.gensim.model'
model = Word2Vec.load(model_path)
with open('./learning/tweet_data/typical_words.json', 'r') as f:
  data_list = json.load(f)

emoji_num = 8
rank_list = [[i, 0] for i in range(emoji_num)]
for input_word in word_list:
  for data_word in data_list:
    try:
      sim = model.similarity(input_word[0], data_word[0])
      if sim > rank_list[data_word[1]][1]:
        rank_list[data_word[1]][1] = sim
    except KeyError as error:
      pass

print(rank_list)
