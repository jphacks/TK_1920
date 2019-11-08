from janome.tokenizer import Tokenizer
import json

def learning():
  emoji_num = 12
  counter_map = {}
  tokenizer = Tokenizer()

  # 絵文字ごとにjsonを開く
  for emoji_i in range(emoji_num):
    print(str(emoji_i), 'th 絵文字')
    with open(
      './learning/tweet_data/data_' + str(emoji_i) + '.json',
      'r'
    ) as f:
      data = json.load(f)

    # 文ごとに処理
    for sentence in data:
      # 単語が名刺か形容詞か副詞ならカウントする
      for token in tokenizer.tokenize(sentence):
        part = token.part_of_speech
        if (
          part.find('名詞') >= 0 or
          part.find('形容詞') >= 0 or
          part.find('副詞') >= 0 or
          part.find('連体詞') >= 0 or
          part.find('感動詞') >= 0 or
          part.find('動詞') >= 0
        ):
          word = token.base_form
          if word not in counter_map:
            counter_map[word] = [
              1 if i == emoji_i else 0 for i in range(emoji_num)
            ]
          else:
            counter_map[word][emoji_i] += 1

  ranking_list = []
  for word, count_list in counter_map.items():
    maxnum = max(count_list)
    if maxnum >= 2:
      ranking_list.append([maxnum / sum(count_list), word, count_list])

  ranking_list.sort(key=lambda x: x[0], reverse=True)

  with open('./learning/tweet_data/ranking.json', 'w') as f:
    json.dump(ranking_list, f, ensure_ascii=False)

learning()
