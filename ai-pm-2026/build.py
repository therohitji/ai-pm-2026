#!/usr/bin/env python3
"""
build.py — stitches the AI PM course into one master HTML file.

WHAT IT DOES
  1. Reads course_map.json   -> the curriculum (chapter titles + lesson titles, in order)
  2. Reads chapters/chNN.js  -> the actual lesson content (one JS object entry per lesson)
  3. Derives each lesson's state:  "live" if its content exists in a chapter file, else "soon"
  4. Generates the COURSE sidebar array + the LESSONS content object
  5. Injects everything into shell.html and writes ai-pm-course-master.html

HOW TO USE
  - To add Chapter N: create chapters/chNN.js with that chapter's lesson entries,
    make sure course_map.json lists the chapter + its lesson ids/titles, then run:
        python3 build.py
  - That's it. States, the open chapter, the progress bar, and nav update automatically.

RULES (do not break these)
  - NEVER hand-edit ai-pm-course-master.html. It is generated. Edits go in chapters/ or shell.html.
  - Lesson ids must match between course_map.json and the keys in chapters/chNN.js (e.g. "4.1").
  - Each lesson's content must end with the literal token  __NAV__  (build leaves it; the
    runtime JS replaces it with prev/next navigation). Do not replace __NAV__ yourself.
"""
import json, re, glob, os, sys

HERE = os.path.dirname(os.path.abspath(__file__))
os.chdir(HERE)

# ---------- 1. curriculum ----------
cfg = json.load(open('course_map.json', encoding='utf-8'))
chapters = cfg['chapters']

# ---------- 2. lesson content ----------
lesson_blocks = []
live_ids = set()
for f in sorted(glob.glob('chapters/ch*.js')):
    txt = open(f, encoding='utf-8').read().strip()
    if txt.endswith(','):
        txt = txt[:-1]
    if not txt:
        continue
    lesson_blocks.append(txt)
    for k in re.findall(r'"(\d+\.\d+)"\s*:\s*`', txt):
        live_ids.add(k)

LESSONS_BODY = ",\n\n".join(lesson_blocks)

# ---------- 3. derive states ----------
live_chapter_nums = sorted({int(i.split('.')[0]) for i in live_ids})
open_ch = live_chapter_nums[0] if live_chapter_nums else 1   # opens at the first chapter (Start Here)

# ---------- 4. build COURSE array ----------
def js_str(s):
    return json.dumps(s, ensure_ascii=False)

items = []
for ch in chapters:
    cn = int(ch['n'])
    has_live = any(les['id'] in live_ids for les in ch['lessons'])
    flags = ''
    if cn == open_ch:
        flags += ' open:true,'
    if not has_live:
        flags += ' locked:true,'
    les_js = []
    for les in ch['lessons']:
        st = 'live' if les['id'] in live_ids else 'soon'
        les_js.append('{id:"%s", t:%s, state:"%s"}' % (les['id'], js_str(les['t']), st))
    items.append('  { n:"%s", title:%s,%s lessons:[\n      %s\n  ]}' %
                 (ch['n'], js_str(ch['title']), flags, ',\n      '.join(les_js)))
COURSE_JS = 'const COURSE = [\n' + ',\n'.join(items) + '\n];'

# ---------- 5. active lesson + progress ----------
open_lessons = sorted([i for i in live_ids if int(i.split('.')[0]) == open_ch],
                      key=lambda x: tuple(int(p) for p in x.split('.')))
active = open_lessons[0] if open_lessons else (chapters[0]['lessons'][0]['id'] if chapters else "1.1")
total = sum(len(ch['lessons']) for ch in chapters)
progress = round(len(live_ids) / total * 100) if total else 0

# ---------- 6. inject ----------
shell = open('shell.html', encoding='utf-8').read()
shell = shell.replace('__COURSE__', COURSE_JS)
shell = shell.replace('__LESSONS__', LESSONS_BODY)
shell = shell.replace('__ACTIVE__', active)
shell = shell.replace('__PROGRESS__', str(progress))

out = 'ai-pm-course-master.html'
open(out, 'w', encoding='utf-8').write(shell)

print("Built %s" % out)
print("  live lessons: %d / %d  (%d%%)" % (len(live_ids), total, progress))
print("  live chapters: %s" % ", ".join(str(n) for n in live_chapter_nums))
print("  open chapter: %d   first lesson: %s" % (open_ch, active))
print("  size: %d bytes" % len(shell))
