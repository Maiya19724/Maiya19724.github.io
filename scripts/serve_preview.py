#!/usr/bin/env python3
"""Serve a Jekyll build locally, including GitHub Pages-style clean URLs."""
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from functools import partial
import argparse

class Handler(SimpleHTTPRequestHandler):
    def translate_path(self, path):
        target = Path(super().translate_path(path))
        if not target.exists():
            clean = Path(str(target) + '.html')
            if clean.is_file():
                return str(clean)
        return str(target)

parser = argparse.ArgumentParser()
parser.add_argument('--port', type=int, default=8768)
parser.add_argument('--directory', default='_site')
args = parser.parse_args()
handler = partial(Handler, directory=str(Path(args.directory).resolve()))
server = ThreadingHTTPServer(('127.0.0.1', args.port), handler)
print(f'Preview: http://127.0.0.1:{args.port}/', flush=True)
try:
    server.serve_forever()
except KeyboardInterrupt:
    server.server_close()
