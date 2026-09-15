import React from 'react';
import { renderToPipeableStream } from 'react-dom/server';
import { PassThrough } from 'node:stream';
import App from './App';
import SiteProviders from './SiteProviders';

export function render() {
  return new Promise((resolve, reject) => {
    const output = new PassThrough();
    output.setEncoding('utf8');
    let html = '';
    output.on('data', (chunk) => { html += chunk; });
    output.on('end', () => resolve(html));
    output.on('error', reject);
    const stream = renderToPipeableStream(<SiteProviders><App /></SiteProviders>, {
      onAllReady() { stream.pipe(output); },
      onError: reject,
    });
  });
}
