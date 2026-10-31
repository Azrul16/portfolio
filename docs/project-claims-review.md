# Project claims review

Reviewed 31 October 2026.

## Scope and evidence

All 28 project entries were compared with GitHub repository metadata and available READMEs. Targeted files were inspected for payment handling, database and UI dependencies, native integration, and CI. Commit searches used `repo:Azrul16/<repository> author:Azrul16`; selected commits were opened to check linked author and changed files. The JSON files alongside this report record README blob SHAs and commit evidence.

This is a source review. No external application was built, deployed, or tested on hardware. A commit records account attribution, not exclusive authorship, independent implementation, original design, or proven runtime behavior. Search returns a sample and can omit unlinked authors. No adoption, performance, or user-impact metrics were established.

## Material corrections

- **BanglaSpeech2Text:** GitHub identifies a fork of shhossain/BanglaSpeech2Text. No Azrul16-authored commits were returned by the search. Removed original-package and model authorship implications; explicitly attributed upstream. This does not prove there are no changes under another author identity.
- **Syncora:** `.github/workflows/test.yml` is named "Backend Tests Disabled", accepts manual dispatch, and gates its job with a false condition. Changed active-CI wording to describe a disabled workflow containing check and test commands. Did not certify tenant isolation or production readiness by execution.
- **SSLCOMMERZ:** `index.js` calls the sandbox API, keeps transaction state in memory, and accepts submitted IPN status without a gateway-validation call in the reviewed handler. Replaced the Flutter-integrated production impression with a Node.js sandbox prototype. The repository contains no Flutter checkout client.
- **Online Food:** Repository code is PHP/MySQL, not a static JavaScript/Vercel application. Removed the unsupported demo association and corrected the stack. Reviewed account-linked commits only establish project-information updates, not original authorship of the entire application.
- **Smart Home:** README is a Flutter starter document; the dependency manifest supports UI, charts, GetX, and preferences, not Firebase. Narrowed description to a UI prototype and removed Firebase technology claims.
- **Lecturer:** README vision is broader than the inspected implementation evidence. Narrowed completed outcomes to a study prototype and distinguished intended AI workflows from validated functionality.
- **Object Detection:** Sparse documentation and multiple Flutter folders do not establish an integrated vision product or detection accuracy. Narrowed the result and recorded verification limits.

## Limitations made visible

| Project | Qualification added or preserved |
| --- | --- |
| ResearchLens AI | Text-based PDFs; no OCR, multi-user authentication, distributed workers, or streaming in the documented MVP; provider key for generation; human citation review |
| Mama Bus Koi | Android-first MVP; trusted membership mirroring; physical-device validation; deferred real-money payments and server-triggered FCM |
| DevDroid | Android/Termux dependencies, runtimes and SSH setup; mockups are previews |
| ROV Commander | Companion server and network required; stop requests depend on reachability; autopilot is server-side |
| Schedula | Firebase and Gemini setup; sample-content mockups |
| Researcher | Groq access through proxy or trusted credential store; demo-profile screenshots |
| Meal Monkey | Cash on delivery; unconfigured social login; Android Firebase configuration |
| Med Reminder | Local medicine data does not sync; OS restrictions affect reminder delivery |
| NotiSaver | Android notification permission and vendor background restrictions |
| GJSWA | Firebase/Cloudinary setup; screenshots without live Firebase content |
| AnySQL | Direct drivers for trusted environments; mobile database credentials belong on a backend |
| OneSignal | Practice app; production REST secrets belong on a backend |
| File Sharing Server | Trusted LAN use; public-hosting protections not established |
| HTTP Proxy | Plain HTTP learning implementation; no HTTPS tunneling or production-grade parsing |
| QuizzApp | Requires Firebase and quiz data; no measured learning outcomes |
| Hospital Management | Requires Firebase; no verified clinical deployment |
| YouTube Downloader | Runtime dependencies and live upstream compatibility not executed |
| Boredom Buster | Offline download prerequisite; browser-local data; no cloud sync or backup import |

Form Flutter, Form Validator, and Animated Status Card now use concrete package functionality rather than claims that they improve portfolio credibility. Personal learning narratives were removed because source history cannot independently validate them. Generic challenge wording is presented as engineering focus, rather than a claim about a documented historical incident.

## Interview preparation

For each project, start with the recorded contribution and linked commit. Explain one changed source file, the tradeoff it represents, and a limitation from the current implementation. Demonstrate the result separately before claiming measured reliability, performance, production use, or sole authorship.

