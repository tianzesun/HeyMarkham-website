// Run with `pnpm test` (Node's built-in test runner; Node 22.18+ strips the types)
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { attachmentName, detectDocument, extensionOf, isSafeLink, roleSubject } from './careers.ts';

const bytes = (...b: number[]) => new Uint8Array([...b, 0, 0, 0, 0]);
const PDF = bytes(0x25, 0x50, 0x44, 0x46, 0x2d, 0x31);
const ZIP = bytes(0x50, 0x4b, 0x03, 0x04);
const OLE = bytes(0xd0, 0xcf, 0x11, 0xe0, 0xa1, 0xb1, 0x1a, 0xe1);

test('documents are recognised by their contents and extension together', () => {
  assert.equal(detectDocument(PDF, 'cv.pdf'), 'pdf');
  assert.equal(detectDocument(PDF, 'CV.PDF'), 'pdf');
  assert.equal(detectDocument(ZIP, 'cover letter.docx'), 'docx');
  assert.equal(detectDocument(OLE, 'resume.doc'), 'doc');
});

test('renamed or unsupported files are refused', () => {
  assert.equal(detectDocument(ZIP, 'cv.pdf'), null); // a ZIP pretending to be a PDF
  assert.equal(detectDocument(PDF, 'cv.docx'), null);
  assert.equal(detectDocument(bytes(0x4d, 0x5a), 'cv.exe'), null);
  assert.equal(detectDocument(PDF, 'cv'), null);
  assert.equal(detectDocument(new Uint8Array(), 'cv.pdf'), null);
});

test('attachment names come from the applicant, never the uploaded file name', () => {
  assert.equal(attachmentName('Resume', 'Jane Doe', 'pdf'), 'Resume - Jane Doe.pdf');
  assert.equal(attachmentName('Resume', '王小明', 'docx'), 'Resume - 王小明.docx');
  assert.equal(attachmentName('Resume', 'Zoë O’Neil-Côté', 'pdf'), 'Resume - Zoë ONeil-Côté.pdf');
  assert.equal(attachmentName('Cover letter', 'a\r\nBcc: x@y.z', 'pdf'), 'Cover letter - aBcc xy.z.pdf');
  assert.equal(attachmentName('Resume', '../../etc', 'pdf'), 'Resume - ....etc.pdf');
  assert.equal(attachmentName('Resume', '', 'pdf'), 'Resume.pdf');
});

test('only https links are accepted', () => {
  assert.equal(isSafeLink('https://www.linkedin.com/in/someone'), true);
  assert.equal(isSafeLink('http://example.com'), false);
  assert.equal(isSafeLink('javascript:alert(1)'), false);
  assert.equal(isSafeLink('not a url'), false);
});

test('roles and extensions', () => {
  assert.equal(roleSubject('ai-rag-engineer'), 'AI/RAG Engineer');
  assert.equal(roleSubject('general'), 'General application');
  assert.equal(roleSubject('ceo'), null);
  assert.equal(extensionOf('My.CV.Docx'), '.docx');
  assert.equal(extensionOf('noext'), '');
});
