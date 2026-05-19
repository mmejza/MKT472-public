# M09 Canvas Sequence Configuration
## MKT 472 · Marketing Channels and Channel Mapping
**Instructor reference — not student-facing**

---

## 1. Module Settings

| Setting | Value |
|---|---|
| Module name | `M09: Marketing Channels and Channel Mapping` |
| Lock until | Set to module open date per summer session schedule |
| Require sequential order | **Yes** — enforced via prerequisites |
| Publish status | Draft until all items verified |

---

## 2. Item-by-Item Setup

### Item 1 — Module Overview & Orientation

| Field | Value |
|---|---|
| Type | Canvas Page |
| Title | `Module 09 Overview & Orientation` |
| Content | Paste `M09_module-overview.html` into Rich Content Editor → HTML view |
| Completion requirement | Mark as done |
| Prerequisite | None |
| Points | 0 |

---

### Item 2 — Chapter 9 Reading + Study Focus Guide

| Field | Value |
|---|---|
| Type | Canvas Page |
| Title | `Chapter 9 Reading: Marketing Channels and Channel Mapping` |
| Content | Link to textbook PDF or publisher URL + embed `M09_study-focus-guide.html` below |
| Completion requirement | Mark as done |
| Prerequisite | Item 1 complete |
| Points | 0 |

---

### Item 3 — Gate 1: Basic Reading Check

| Field | Value |
|---|---|
| Type | Classic Quiz (QTI import) |
| Title | `Gate 1: Basic Reading Check` |
| Import | `M09_Gate1_All_Versions.zip` — import each `gate1_vN.xml` as a separate quiz |
| Points | **0** |
| Allowed attempts | **2** |
| Score to pass | **70%** (3.5 / 5) |
| Time limit | 12 minutes |
| Show correct answers | After each attempt (per-answer feedback embedded in QTI) |
| Shuffle answers | Yes |
| Completion requirement | **Score at least 70%** |
| Prerequisite | Item 2 complete |

**QTI import steps:**
1. Quizzes → Import → Classic Quizzes (QTI)
2. Upload `M09_Gate1_All_Versions.zip`
3. Six quizzes created: `M09 Gate 1: Basic Reading Check (Version 1)` through `(Version 6)`
4. Set points = 0 on all six
5. Assign versions to sections via Settings → Assign to → [Section Name]
6. Set all six as prerequisites for Item 4

---

### Item 4 — Slide Deck Viewer

| Field | Value |
|---|---|
| Type | Canvas Page with iFrame embed |
| Title | `Slide Deck Viewer: Marketing Channels and Channel Mapping` |
| Content | iFrame embed of `M09_Slide_Viewer.zip` (unzipped and hosted) |
| iFrame dimensions | width: 100%, height: 590px |
| Completion requirement | Mark as done |
| Prerequisite | Item 3 (Gate 1 passed at 70%) |
| Points | 0 |

**iFrame embed code:**
```html
<iframe
  src="/courses/[COURSE_ID]/files/[FILE_ID]/download"
  width="100%"
  height="590"
  style="border:none;border-radius:4px;"
  title="M09 Slide Deck Viewer"
  allowfullscreen>
</iframe>
```

**Hosting:** Upload unzipped `viewer/` folder to Canvas Files. Embed `viewer/index.html`.
Inform students in page text that ← → arrow keys navigate slides.

---

### Item 5 — Gate 2: Applied Reading Check

| Field | Value |
|---|---|
| Type | Classic Quiz (QTI import) |
| Title | `Gate 2: Applied Reading Check` |
| Import | `M09_Gate2_All_Versions.zip` — import each `gate2_vN.xml` separately |
| Points | **20** |
| Allowed attempts | **1** |
| Score to pass | None — graded as submitted |
| Time limit | 23 minutes |
| Show correct answers | Correct/Incorrect only — after submission |
| Shuffle answers | Yes |
| Completion requirement | Submit |
| Prerequisite | Item 4 complete |

**Numeric entry questions (Q1, Q2, Q4, Q5, Q6):** Tolerances embedded in QTI XML. Verify on import by previewing each version. Correct answers in `M09_Answer_Key.docx` Section 2.

**Version assignment:** Same as Gate 1 — one version per section. Answer-sharing across sections is ineffective because inputs differ.

---

### Item 6 — Lecture Video

| Field | Value |
|---|---|
| Type | Canvas Studio |
| Title | `Lecture Video: "The Channel Profitability Trap"` |
| Content | Upload recorded lecture (~30 min, two segments) |
| Check questions | 3 embedded via Canvas Studio quiz feature |
| Points | **10** (Q2 auto-graded; Q1 and Q3 instructor-reviewed) |
| Completion requirement | Submit |
| Prerequisite | Item 5 complete |

**Check question specs:**

| Q | Timing | Type | Points |
|---|---|---|---|
| Q1 | ~10 min into Segment 1 | Free response | 3 pts (instructor-reviewed) |
| Q2 | ~22 min total | Numeric entry | 4 pts (auto-graded) |
| Q3 | ~28 min total | Interpretive | 3 pts (instructor-reviewed) |

**Script:** `M09_Lecture_Script.docx`. Segment 1 (~12 min) is original writing — cannot be adapted from prior narration. Uses Meridian Industrial scenario. **Do NOT use NovaTech case numbers in the lecture.**

---

### Item 7 — App 1 + Worksheet

| Field | Value |
|---|---|
| Type | Canvas Page (app embed) + Canvas Assignment (worksheet) |
| App page title | `App 1: Channel Pocket Price & Profitability Calculator` |
| Worksheet assignment title | `App 1 Worksheet` |
| App iFrame dimensions | width: 100%, height: 720px |
| Worksheet content | Paste `M09_worksheet-app1.html` into assignment description |
| Points | **10** (5 per question, auto-graded short answer) |
| Completion requirement | Submit (assignment) |
| Prerequisite | Item 6 complete |

**iFrame embed code (App 1):**
```html
<iframe
  src="/courses/[COURSE_ID]/files/[APP1_FILE_ID]/download"
  width="100%"
  height="720"
  style="border:none;border-radius:4px;"
  title="App 1: Channel Pocket Price Calculator"
  allowfullscreen>
</iframe>
```

**Grading:** Q1 — explain ROI paradox, cite M&S expense mechanism (3 pts explanation + 2 pts correct channel ID). Q2 — break-even M&S %: accept 5–7% range. Full answer anchors in `M09_Answer_Key.docx` Section 3.

---

### Item 8 — App 2 + Worksheet

| Field | Value |
|---|---|
| Type | Canvas Page (app embed) + Canvas Assignment (worksheet) |
| App page title | `App 2: Channel Strategy Comparator` |
| Worksheet assignment title | `App 2 Worksheet` |
| App iFrame dimensions | width: 100%, height: 720px |
| Worksheet content | Paste `M09_worksheet-app2.html` into assignment description |
| Points | **10** (5 per question, auto-graded short answer) |
| Completion requirement | Submit (assignment) |
| Prerequisite | Item 7 complete |

**Pre-publish app verification:**
- Indirect @ 20% share: NMC = $18,960,000 · ROI = 242% (matches Fig. 9-24)
- Direct @ 20% share: NMC = $36,000,000 · ROI = 120% (matches Fig. 9-24)
- Direct break-even share = **10.0%** (verify: $30M ÷ $300 ÷ 1,000,000 = 10.0%)

Full verification checklist in `M09_App_Specifications.docx` Section 2.7.

---

### Item 9 — Discussion: The VP of Sales vs. the CFO

| Field | Value |
|---|---|
| Type | Canvas Discussion |
| Title | `Discussion: The VP of Sales vs. the CFO` |
| Prompt content | Paste `M09_discussion-prompt.html` into discussion description |
| Points | **20** |
| Due date | **3 days before case deadline** |
| Reply requirement | 1 peer reply, minimum 100 words, due with case deadline |
| Completion requirement | Contribute to the discussion |
| Prerequisite | Item 8 complete |

**Grading:** 3–4 min/student in SpeedGrader. 4-criterion rubric embedded in prompt HTML. Select rubric cell + 1-sentence qualifier only where cell is insufficient.

---

### Item 10 — Case Analysis: NovaTech Distribution

| Field | Value |
|---|---|
| Type | Canvas Assignment |
| Title | `Case Analysis: NovaTech Distribution` |
| Content | Paste `M09_case-novatech.html` into assignment description |
| Points | **120** |
| Submission type | Text entry or file upload |
| Due date | Per summer session schedule |
| Completion requirement | Submit |
| Prerequisite | Item 9 complete |

**Grading:** 8–12 min/student. Verify Parts 1–3 against `M09_Answer_Key.docx` Section 1. Select 4-part rubric cells. One sentence per criterion only where rubric cell is insufficient.

**Answer key is RESTRICTED — do not post to Canvas.**

---

### Item 11 — Module Self-Check (Optional)

| Field | Value |
|---|---|
| Type | Canvas Quiz (ungraded) |
| Title | `Module Self-Check (Optional Practice)` |
| Points | 0 · Unlimited attempts · Show answers immediately |
| Prerequisite | None |

---

## 3. Due Date Logic

| Item | Deadline |
|---|---|
| Gates 1 & 2 | No hard deadline — recommended completion 36–48 hrs before case |
| Discussion initial post | **3 days before case deadline** |
| Discussion peer reply | Case deadline |
| Case Analysis | Per summer session schedule |

**3-day module window example:**
```
Day 1: Chapter → Gate 1 → Slides → Gate 2
Day 2: Lecture → App 1 → App 2 → Discussion post
Day 3: Case Analysis + peer reply
```

---

## 4. Assignment Group Weights

| Group | Items | Points | Weight |
|---|---|---|---|
| Case Analysis | NovaTech case | 120 | 60% |
| Gate 2 / Applied | Gate 2 | 20 | 10% |
| Discussion | VP vs. CFO | 20 | 10% |
| App Worksheets | App 1 + App 2 | 20 | 10% |
| In-Video | Lecture check Qs | 10 | 5% |
| Access Control | Gate 1 | 0 | 0% |
| **Total** | | **190** | **100%** |

---

## 5. Parallel Version Assignment

6 versions per gate. Assign one per section.

| Section | Gate 1 | Gate 2 |
|---|---|---|
| Section 01 | v1 | v1 |
| Section 02 | v2 | v2 |
| Section 03 | v3 | v3 |
| Section 04 | v4 | v4 |
| Section 05 | v5 | v5 |
| Section 06 | v6 | v6 |

Fewer than 6 sections: rotate (e.g., 3 sections → v1, v3, v5).
More than 6: wrap (section 7 → v1, etc.).

---

## 6. File Upload Checklist

| File | Upload to | Student-facing |
|---|---|---|
| `M09_module-overview.html` | Course Files → M09-Assets | Yes |
| `M09_study-focus-guide.html` | Course Files → M09-Assets | Yes |
| `M09_Gate1_All_Versions.zip` | QTI import (Quizzes) | No (quiz) |
| `M09_Gate2_All_Versions.zip` | QTI import (Quizzes) | No (quiz) |
| `M09_Slide_Viewer.zip` | Course Files → M09-Assets (unzip) | Yes |
| `M09_worksheet-app1.html` | Course Files → M09-Assets | Yes |
| `M09_worksheet-app2.html` | Course Files → M09-Assets | Yes |
| `M09_discussion-prompt.html` | Course Files → M09-Assets | Yes |
| `M09_case-novatech.html` | Course Files → M09-Assets | Yes |
| App 1 HTML (Copilot build) | Course Files → M09-Assets | Yes |
| App 2 HTML (Copilot build) | Course Files → M09-Assets | Yes |
| `M09_Lecture_Script.docx` | Instructor folder | **No** |
| `M09_App_Specifications.docx` | Instructor folder | **No** |
| `M09_Answer_Key.docx` | Instructor folder | **No — restricted** |

---

## 7. Pre-Publish Verification Checklist

**Gates:**
- [ ] Gate 1 v1–v6: points = 0, attempts = 2, threshold = 70%, per-answer feedback active
- [ ] Gate 2 v1–v6: points = 20, attempts = 1, no threshold, correct/incorrect only
- [ ] Each version assigned to correct section
- [ ] Gate 1 Q5 preview: requires specific wholesaler math figures not in slides
- [ ] Gate 2 Q1 preview: numeric entry accepts correct PP ± tolerance

**Slide viewer:**
- [ ] iFrame loads without CORS errors
- [ ] Arrow key navigation works
- [ ] Slide count: 19 / 19
- [ ] S03 lists all 5 chapter-exclusive topics

**Apps (post-Copilot build):**
- [ ] App 1 Base Case: PP = $9,500 / $2,352 / $673; ROI = 146% / 353% / 415%
- [ ] App 1 Shift to Direct: NMC ↑, ROI ↓ vs. Base Case
- [ ] App 2 Indirect @ 20%: NMC = $18,960,000; ROI = 242%
- [ ] App 2 Direct @ 20%: NMC = $36,000,000; ROI = 120%
- [ ] App 2 Direct BE share = 10.0%

**Assessments:**
- [ ] Case HTML loads; all 4 parts visible; NovaTech data complete
- [ ] Discussion HTML loads; rubric visible
- [ ] Worksheet 1 references "Shift to Direct" and "Base Case" exactly
- [ ] Worksheet 2 references "Indirect" and "Direct" exactly

**Prerequisites:**
- [ ] Item 1 → no prerequisite
- [ ] Items 2–10 → sequential prerequisites confirmed
- [ ] Item 3 completion = score at least 70% (not just submit)
- [ ] Item 11 → no prerequisite

**Instructor assets:**
- [ ] Answer key in instructor folder, not student-facing
- [ ] Lecture script accessible for recording
- [ ] App spec accessible for developer reference

---

## 8. Post-Publish Checks (after first student completes)

- [ ] Gate 2 numeric answers scoring correctly — check one submission against answer key
- [ ] App iFrames load on student devices (mobile + desktop)
- [ ] Canvas Studio check questions firing at correct timestamps
- [ ] Review first 2–3 Gate 1 submissions for unexpected patterns

---

*M09 Canvas Configuration · MKT 472 · Built May 2026*
