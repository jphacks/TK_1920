from gensim.models.word2vec import Word2Vec
import json

model_path = './learning/word2vec_model/word2vec.gensim.model'
model = Word2Vec.load(model_path)
with open('./learning/tweet_data/ranking.json', 'r') as f:
  ranking_list = json.load(f)

data_list = []
for row in ranking_list:
  if row[0] <= 0.5:
    break
  try:
    model.similarity(row[1], 'こんにちは')
    if max(row[2]) >= 4:
      data_list.append([row[1], row[2].index(max(row[2]))]);
  except KeyError as error:
    pass

with open('./learning/tweet_data/typical_words.json', 'w') as f:
  json.dump(data_list, f, ensure_ascii=False)
