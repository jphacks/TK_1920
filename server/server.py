# -*- coding:utf-8 -*-

import http.server

class EmojiHandler(http.server.BaseHTTPRequestHandler):
  def do_GET(self):
    self.send_response(200)
    # self.send_header('Content-type', 'aplication/json')
    self.send_header('Content-type', 'aplication/json')
    self.send_header('Access-Control-Allow-Origin', '*')
    self.end_headers()
    self.wfile.write('[3,1,4,5]'.encode('utf-8'))

with http.server.HTTPServer(('', 8000), EmojiHandler) as server:
  print('server runing...')
  server.serve_forever()
