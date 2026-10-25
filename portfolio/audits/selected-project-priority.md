# Selected project priority

Reviewed 25 October 2026 for a general software engineering portfolio spanning Flutter, web, and AI. This is an editorial ranking based on repository READMEs, source structure, test inventory, and existing portfolio presentation. It is not a runtime audit or a claim of production readiness, user adoption, or passing CI.

Prioritize engineering depth and distinctiveness, then complete user workflows, verification evidence, and ease of demonstration. Sample UI mockups carry less evidence than a running application. Preserve all nine selected projects and their galleries.

| Priority | Project / source | Reason |
| --- | --- | --- |
| 1 | [ResearchLens AI](https://github.com/Azrul16/researchlens-ai-rag-assistant) | Broadest engineering evidence: full-stack RAG pipeline, persistent retrieval, citation validation, database migrations, evaluation, backend/browser tests, and documented verification limits. |
| 2 | [DevDroid](https://github.com/Azrul16/DevDroid-android-code-editor) | Distinctive Flutter work: editor controllers, file services, native Android command bridge, SSH terminal, and Git integration. Active development and Termux setup reduce immediate demo accessibility. |
| 3 | [Boredom Buster](https://github.com/Azrul16/boredom-buster) | Linked playable demo, 20 games, offline support, persistence, physics, and a substantial logic/browser test inventory make it easy to assess. |
| 4 | [Schedula](https://github.com/Azrul16/Schedula) | Broad academic workflow with files, assignments, administration, messaging, and Gemini integration; README links an Android download. Starter test does not establish workflow coverage. |
| 5 | [Researcher Web Browser](https://github.com/Azrul16/Researcher-WebBrowser) | Distinctive native/web desktop integration, AI browser actions, persistent sessions, credential handling, and screenshots from the running app. No test suite found in the reviewed tree. |
| 6 | [Hospital Management / MedEase](https://github.com/Azrul16/hospital-management) | Multi-role patient/doctor/admin workflow with appointments and prescriptions shows domain modeling beyond a simple CRUD interface. Portfolio visuals are sample UI mockups. |
| 7 | [Meal Monkey](https://github.com/Azrul16/Meal-Monkey) | Coherent customer/admin ordering journey, persistent cart, and order updates. README documents cash-only checkout, unconfigured social login, and bundled admin credential limitations. |
| 8 | [Med Reminder](https://github.com/Azrul16/med-reminder) | Useful device integration through local notifications, local storage, and a medicine-information API. Narrower workflow and platform reminder verification requirements. |
| 9 | [GJSWA Website](https://github.com/Azrul16/GJSWA-website) | Clear community purpose, member profiles, content publishing, service modules, and Firestore rules. Simpler technical scope; current home captures lack Firebase configuration and live content. |

Implementation: `caseStudyTitles` in `src/data/projects.jsx` is the display-order source consumed by the Selected Projects carousel. Changing this list also preserves the archive exclusion logic.
