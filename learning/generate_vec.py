from gensim.models import KeyedVectors

model_dir = './learning/entity_vector/entity_vector.model.bin'
model = KeyedVectors.load_word2vec_format(model_dir, binary=True)
results = model.most_similar(u'[指原莉乃]')
for result in results:
    print(result)
