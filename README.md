# Leonora Latorre historical site

This is an archive of a condominium website written in 2013. It is
published at <https://leonora.archive.gaulatti.com/> as a record of the original
work. All prices, contact information, names, and operational notices are
historical and should not be used for current condominium business.

The original AngularJS, Bootstrap, jQuery, Leaflet, and PDFObject files are
committed in this repository. There is no npm install or compilation step.
Gallery photos are stored locally to preserve the site if the former external
image host disappears. Google Fonts and OpenStreetMap tiles still load over
HTTPS; the site remains navigable if they are unavailable.

## Preview

```bash
bash scripts/build-archive
python3 -m http.server 8000 --directory dist
```

Open <http://localhost:8000/>. The site uses hash routes, so navigation stays
on the root document. Documents are served from `files/`.

## Deployment

The GitHub Actions workflow on `master` syncs `dist/` to the dedicated private
S3 bucket and invalidates CloudFront. Macondo owns the bucket, distribution,
certificate, DNS, and narrowly scoped OIDC deployment role. Set the
`LEONORA_ARCHIVE_DISTRIBUTION_ID` Actions variable from Macondo's
`MacondoStackLeonoraArchiveDistributionId` output before the first run. GitHub
Actions cannot run while this repository is archived: temporarily unarchive it
for a future update, merge the change to `master`, verify deployment, then
archive it again.
