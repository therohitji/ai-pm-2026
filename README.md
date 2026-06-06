# AI-PM-2026 (Playbook)

Build-first AI courses by **Rohit Swerashi** (Founder, GeniOS). Live at **hustlersfellowship.com**.

Practical field guides — not theory — that turn into a real portfolio and a real job.

## What's here

```
.
├── index.html                  # the fellowship landing page (course catalog)
└── ai-pm-2026/                 # AI Product Management (2026 edition)
    ├── ai-pm-course-master.html  # the generated, served course (single file)
    ├── build.py                  # stitches the course together
    ├── shell.html                # app shell — all CSS + the reader engine
    ├── course_map.json           # curriculum: chapter/lesson titles + order
    ├── chapters/                 # lesson content, one file per chapter (chNN.js)
    ├── BUILD_GUIDE.md            # authoring rules + the build pipeline
    └── CURRICULUM.md             # the full curriculum outline
```

## Building the course

The course is a single static HTML file generated from sources. To rebuild after editing
`course_map.json`, `shell.html`, or any `chapters/chNN.js`:

```bash
cd ai-pm-2026
python3 build.py        # writes ai-pm-course-master.html
```

Never hand-edit `ai-pm-course-master.html` — it is generated.

## Hosting (GitHub Pages)

Served straight from the repo root:

- `/` → `index.html` (landing)
- `/ai-pm-2026/ai-pm-course-master.html` → the AI PM course

No build step on the server — everything is static. To use the custom domain, add a
`CNAME` file at the repo root containing `hustlersfellowship.com` (GitHub Pages also
creates this automatically when you set the domain in repo Settings → Pages).
