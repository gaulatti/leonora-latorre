# Leonora Latorre historical site

This repository preserves a condominium website written in 2013. Prices,
contact information, names and operational notices describe the historical
site; they are not current condominium information.

The existing [read-only disposition](DISPOSITION.md) remains in force until the
owner approves publication. This candidate prepares an HTTPS-compatible archive
for the proposed destination `https://leonora.archive.gaulatti.com/`; it does not
establish that the destination is deployed or healthy.

The original AngularJS, Bootstrap, jQuery, Leaflet and PDFObject dependencies
are committed. There is no npm install or compilation step. Gallery images are
stored locally. Google Fonts and OpenStreetMap tiles still use HTTPS; navigation
must remain usable if those external services are unavailable.

## Local preview

```bash
bash scripts/build-archive
python3 -m http.server 8000 --directory dist
```

Open <http://localhost:8000/>. Hash routes keep navigation on the root document;
governance documents are served from `files/`. The build replaces only its
ignored `dist/` output and copies the historical site into that directory.

## Proposed deployment

The candidate's `master` workflow assumes the OIDC role
`macondo-leonora-archive-deploy`, synchronizes `dist/` into the dedicated private
S3 bucket `macondostack-leonora-archive` with deletion of stale destination
objects, and invalidates CloudFront. Macondo owns the bucket, distribution,
certificate, DNS and deployment role. `LEONORA_ARCHIVE_DISTRIBUTION_ID` must name
the verified distribution before deployment. The workflow refuses to configure
AWS credentials or upload any files when that variable is missing.

Publication would expose the historical contact/person-role content, gallery
and four governance PDFs at the archive destination. Owner approval must cover
that content and the exact AWS deployment before merging this candidate, since
merging triggers the workflow. This patch changes no repository archive setting.
