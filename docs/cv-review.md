# CV review — Azrul Amaline

Reviewed 31 October 2026. Source: `public/Azrul Amaline.pdf` (two pages). Both pages were extracted and visually inspected. Compared with the project claims audit and current portfolio source. The served PDF has not been changed.

## Highest-priority corrections

1. **Lecturer overstates verified implementation.** The CV says transcription, generated summaries, quizzes, handwritten OCR, Google Drive sync, and flashcards are implemented. The repository review established a prototype and narrower implementation evidence, not those complete flows. Replace this entry with a stronger evidenced project, or identify it explicitly as a prototype and claim only demonstrated functionality. The audit does not establish that all those features are absent; it establishes that completion was not verified.
2. **Backend positioning lacks a project example.** The CV lists FastAPI, Django, PostgreSQL, and MySQL but all four selected projects emphasize Flutter/Firebase. Use DevDroid, Mama Bus Koi, and Syncora as the primary set. ResearchLens AI is an alternative if the target role emphasizes FastAPI or document processing.
3. **Education dates disagree.** CV: 2020–2026. Portfolio: 2022–August 2026. Confirm the actual enrollment date before changing either. Both state graduation in August 2026; this review did not independently verify the qualification.
4. **Internship bullets repeat.** The first two MemoNEET bullets both describe reminders and task tracking. Merge them and keep the quiz and collaboration contributions separate. Employment dates and scope are CV-provided information, not independently verified by the public-project audit.
5. **Skill breadth exceeds the presented evidence.** Whisper, Google Speech-to-Text, Google ML Kit, and TensorFlow Lite should each be supported by a demonstrable personal implementation. Forking BanglaSpeech2Text does not establish personal model training or Whisper integration work. Avoid conflating a dependency or planned feature with implemented expertise.

## Suggested heading and summary

**Flutter Developer | Python Backend Experience**

Flutter developer with internship experience in reminders, task management, and quiz interfaces. Project work spans Android integrations, Firebase-backed apps, and Python APIs using Django and FastAPI. Comfortable with BLoC, local persistence, REST API integration, Git, and Docker-based application setup.

The internship statement remains subject to the accuracy of the existing CV. Avoid adding production-use or measurable-impact language without evidence.

## Suggested project bullets

These examples describe repository-supported scope and attributed commits; they do not assert sole authorship, field validation, or production adoption.

### DevDroid — Android development workspace

- Contributed Flutter UI and native Android integration changes for a workspace combining project browsing, tabbed editing, terminal sessions, and Git controls.
- Integrated workflows rely on Termux for commands and installed runtimes, with SSH setup for interactive terminal sessions.
- Stack: Flutter, Dart, Provider, native Android integration, Termux, SSH.

### Mama Bus Koi — Bus-tracking MVP

- Contributed the Flutter MVP implementation, including tracking, local data, and application structure.
- The project uses onboard GPS contribution, source-lease coordination, and Drift/SQLite route caching; live tracking requires Firebase setup and trusted membership synchronization.
- Stack: Flutter, Dart, BLoC/Cubit, Firebase, Realtime Database, Drift/SQLite.

Keep the MVP label. Do not claim validated tracking reliability, live campus adoption, payments, or production rollout without separate evidence.

### Syncora — Django business API

- Contributed notification APIs, serializers, and route integration; account-linked history also records transactional business-workflow and real-time implementation changes.
- The backend includes organization/branch-scoped access, inventory and sales operations, and Django Channels events.
- Stack: Python, Django REST Framework, PostgreSQL, Django Channels, JWT, OpenAPI.

Do not describe CI as active or passing: the reviewed test workflow is disabled. Do not convert source-level permission checks into a certified security guarantee.

## If retaining current project entries

- **Schedula:** Keep schedules, assignments, notes, account flows, Firebase, and Gemini assistant claims at the level you can demonstrate. Replace the ambiguous combination of “real-time chat” and “AI-powered chat” with a precise account of the implemented assistant and any separately demonstrated peer-chat functionality.
- **Med Reminder:** The local-storage/reminder focus is useful. Clarify that medicine entries remain local and reminder delivery depends on OS permissions. Detailed claims such as timezone behavior, openFDA, Provider, and RxDart were not all rechecked in this CV review; retain them only if you can locate and explain the implementation.
- **Hospital Management:** Present it as a project application with patient/doctor/admin interfaces, not a clinically deployed system. Firebase configuration is required.

## Suggested internship consolidation

Keep the existing title and dates if accurate, and reduce four bullets to three:

- Contributed scheduled reminders and local-notification workflows for task management in the MemoNEET Flutter app.
- Worked on MCQ-style learning activities and interactive quiz flows.
- Debugged Flutter features and collaborated with the development team through Git and GitHub.

Add numbers only if a reliable source exists. A specific bug, reviewed feature, or tested scenario is better than an invented impact metric.

## Skills organization

- **Mobile:** Flutter, Dart, BLoC, REST integration, Dio/Retrofit, local persistence.
- **Backend:** Python, Django, FastAPI, PostgreSQL; retain MySQL if comfortable demonstrating it.
- **Firebase:** Authentication, Firestore, Storage; add Realtime Database if supported by actual work.
- **Delivery and tools:** Git, GitHub, Docker, Linux, Postman.
- **Additional:** Other languages and AI integrations only where personal familiarity is defensible.

Avoid listing the same technology in three categories. “Clean Architecture” is strongest when explained through a concrete project's boundaries and tradeoffs.

## Layout and scanability

The PDF is selectable text and the extracted reading order is coherent. It uses a straightforward single-column structure with embedded link annotations. That is helpful, but it is not a guarantee for every applicant-tracking system.

Page one is dense, with four similarly long project entries and frequent word hyphenation. Page two has substantial unused space. Reduce selected projects to three and each project to two substantive bullets plus a short stack line. Shorten the five-line summary. Move relevant skills higher; aim for one readable page if it fits without shrinking the text, otherwise rebalance the two pages.

Preserve the visible name **Azrul Amaline** and download filename **Azrul Amaline.pdf**. Email, LinkedIn, GitHub, portfolio, project, and Codeforces links are embedded in the PDF; destination availability was not retested in this review.

## Other facts to confirm

- MemoNEET role, November 2025–February 2026 dates, and claimed feature ownership.
- Enrollment year, degree title, and graduation date.
- CSE Club vice-presidency dates and whether the role is current. Use “Led” for a former role; keep “Lead” only if current.
- Whether National Cyber Drill rank 32 was an individual or team result; state the distinction and event category.
- Codeforces count and training credentials. These were not independently revalidated.

## Website consistency

The current hero source reads “Flutter & Backend Developer” with “DevOps / Cloud Enthusiast.” It no longer matches the narrower headline proposed earlier. Decide on the primary hiring role and use the same emphasis in both places. This review did not modify the site headline.
