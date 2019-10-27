# サンプル（プロダクト名）

[![Introduction](./intro.png)](https://youtu.be/46ZuBMtzqws)

## 製品概要
### Message Tech
### 背景（製品開発のきっかけ、課題等）
- メッセージを送る際、文章が硬くなってしまったり、同じ絵文字を使ってしまったり、どんな絵文字を使って良いのか分からなかったりする時があります。そのような悩みを解決するためにこのGoogle拡張機能を作りました。
- 仕事場などでメッセージをよく送っている方、コミュニケーションが苦手な方、ツイ廃

### 製品説明（具体的な製品の説明）
#### 概要図
![System](./system.png)

### 特長

#### 1. AIによる絵文字の推奨

#### 2. 汎用性の高いGoogle拡張

#### 3. スムーズな絵文字の入力

### 解決出来ること
メッセージにおけるスムーズで豊かなコミュニケーションを行うことが可能になります。
更にパソコンでは変換しにくい絵文字のスムーズな入力を可能とします。

### 今後の展望
絵文字が8種類しかないので、絵文字の種類を増やしていくことです。


## 開発内容・開発技術

### 活用した技術
#### API・データ
* 形態素解析API
* 日本語word2vecモデル(http://aial.shiroyagi.co.jp/2017/02/japanese-word2vec-model-builder/)

#### フレームワーク・ライブラリ・モジュール
* word2vec
* Janome

#### デバイス
* 特に無し

### 研究内容・事前開発プロダクト（任意）
* 特に無し


### 独自開発技術（Hack Dayで開発したもの）
#### 2日間に開発した独自の機能・技術
* chrome拡張機能、推奨欄の出現
* Tweetデータセットから、特定の絵文字とよく使われる単語の抽出と、意味の類似度による最適な絵文字の提案AI。
* 特に力を入れた部分をファイルリンク、またはcommit_idを記載してください（任意）
