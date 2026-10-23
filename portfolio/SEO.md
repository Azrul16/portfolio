# Search visibility for Azrul Amaline

The canonical portfolio URL is https://azrul.is-a.dev/. Deploy with `npm run build`
and publish the complete `dist/` directory. The build prerenders all portfolio
sections and checks the name heading, canonical URL, linked Person/ProfilePage
structured data, sitemap, and domain configuration.

## After deployment

1. Open [Google Search Console](https://search.google.com/search-console/).
   Add the URL-prefix property `https://azrul.is-a.dev/` and verify ownership.
   Use the exact verification meta tag or HTML file Google provides; do not use
   a placeholder token. Put an HTML verification file in `public/` so builds keep it.
2. Inspect `https://azrul.is-a.dev/` with URL Inspection. Run **Test live URL**,
   confirm the page is accessible and the rendered HTML contains your name,
   projects, and biography, then choose **Request indexing**.
3. Submit `https://azrul.is-a.dev/sitemap.xml` in the Sitemaps report.
4. If the URL remains absent, read the Page indexing reason and Google's selected
   canonical in URL Inspection. This distinguishes an undiscovered URL from a
   crawled but unindexed page or a duplicate. Public search alone cannot diagnose it.
5. Check the deployed URL with Google's
   [Rich Results Test](https://search.google.com/test/rich-results).
   Structured data helps describe the page; it does not guarantee a rich result.
6. Link to this exact URL from your GitHub profile, LinkedIn contact details,
   and other profiles you maintain. Use your full name, **Azrul Amaline**,
   consistently. Relevant project READMEs can link back to your portfolio too.
7. Track impressions and clicks for your name in Search Console's Performance
   report after Google processes the site. Recheck indexing after substantive
   changes; repeated indexing requests do not accelerate crawling.

The live homepage, robots.txt, and sitemap returned HTTP 200 during this review,
with no X-Robots-Tag block on the homepage. Its HTML already contained portfolio
content and the intended canonical URL. These checks do not establish Google
indexing status; that requires the owner's Search Console reports.

No code change can promise first place, and Google does not guarantee indexing
or a fixed processing time. Focus on the full-name query first; “Azrul” alone
can refer to many people. Avoid keyword stuffing, paid link schemes, and fake
reviews or credentials.

References: [Google's JavaScript SEO guidance](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics),
[profile page markup](https://developers.google.com/search/docs/appearance/structured-data/profile-page),
and [requesting a recrawl](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl).
