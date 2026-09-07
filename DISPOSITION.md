# Repository disposition

## Decision

- **Snapshot date:** 2026-09-07
- **Disposition:** superseded/read-only
- **Preservation owner:** `gaulatti`
- **Current software or delivery owner:** none identified
- **Canonical checkout:** none; the ticket used only the isolated checkout
  `/Users/gaulatti/source/gaulatti/leonora-latorre.worktrees/issue-1-disposition`
- **Git origin:** `git@github.com:gaulatti/leonora-latorre.git`

This repository does not own a live delivery surface. It is retained unchanged
as historical source rather than archived because the authority and retention
requirements for its public governance documents, contact information, and
independent Blogspot content have not been established. Keeping it explicitly
read-only preserves recovery and leaves the repository available for a future
privacy or ownership correction without presenting the site as deployable.

## Evidence

| Surface checked | Method and immutable evidence | Result on 2026-09-07 |
| --- | --- | --- |
| Repository metadata | GitHub repository and branch APIs | Public, unarchived, enabled, default branch `master`; exact starting SHA [`5e02524d6d48116b1386cf04e5433f4552085dd6`](https://github.com/gaulatti/leonora-latorre/commit/5e02524d6d48116b1386cf04e5433f4552085dd6). Before this work, the description was only the dead domain URL and the empty wiki was enabled. |
| History and branches | Git history plus GitHub branches API | Two commits total. The last change was 2015-09-08. Before this work, `master` was the only branch and was unprotected; no tags or releases exist. |
| Source and delivery contract | Recursive tree and project-authored HTML, CSS, and JavaScript review | A client-only AngularJS site with no README, manifest, build, test, deployment, backend, analytics, store identifier, infrastructure definition, or credential reference. No `CNAME` exists in either commit. |
| Vendored dependencies | Source headers in `js/` and `plugins/` | AngularJS 1.2.4, jQuery 2.0.3, Bootstrap 3.0.3, Leaflet 0.7.1, and PDFObject 1.2 are committed directly. Dependency modernization is outside this disposition. |
| Preserved content | Tree, file-type, and checksum inspection | Static images and four PDF documents are committed. They are historical content, not evidence of a live deployment. Their publication authority and retention requirements are unverified, so no content was edited or deleted. |
| Actions and schedules | GitHub Actions workflows and runs APIs plus recursive tree | No workflow, scheduled trigger, or historical Actions run exists. |
| Delivery settings | GitHub environments, deployments, Pages, webhooks, Actions secrets, and Actions variables APIs | No environments, deployments, Pages site, webhooks, Actions secrets, or Actions variables were reported. The public Pages URL returned HTTP 404. |
| Packages | No package manifest; exact-name search on the public GitHub Packages page | No `leonora-latorre` package result. Direct package inventory through the API remains unavailable to the current token. |
| Security and rules | Project-authored source scan; GitHub Dependabot, code-scanning, secret-scanning, branch, and rules APIs | No credential-shaped value was found in project-authored text. Dependabot reported no alerts; code scanning has no analysis; secret scanning is disabled; no repository ruleset exists. |
| Advertised domain | DNS A/AAAA/CNAME queries, HTTP/HTTPS requests, and NIC Chile WHOIS for `condominioleonoralatorre.cl` and `www` | No DNS records, both URLs fail name resolution, and NIC Chile reports no registration entry. The repository description was therefore misleading. |
| Resident-login link | DNS and HTTP/HTTPS checks for the source link to `www.mastercode.cl/Home` | `mastercode.cl` and `www.mastercode.cl` have no DNS records and the link cannot resolve. |
| GitHub-hosted surface | Repository Pages metadata and `https://gaulatti.github.io/leonora-latorre/` | Pages is disabled and the public URL returns HTTP 404. |
| Surviving external content | Read-only HTTPS and Blogger feed checks for [`condominioleonora.blogspot.com`](https://condominioleonora.blogspot.com/) | The independent Blogspot returns HTTP 200 and has 19 posts; its latest post was published 2012-11-22. Repository gallery markup hotlinks Blogspot-hosted images, but no evidence ties the Blogspot deployment or account to this Git repository. |
| Portfolio consumers | GitHub code search across the `gaulatti` user and `fifthbell` organization; exhaustive local text search under `/Users/gaulatti/source` | No indexed repository name, domain, email-domain, or exact product-name reference was found outside this isolated checkout. The repository has no forks, stars, or subscribers. |

## Resulting repository state

- The README states the read-only disposition before any historical site
  instructions or content.
- The GitHub description identifies the repository as historical and
  superseded instead of linking the unregistered domain.
- The empty wiki is disabled.
- There were no workflow or scheduled triggers to disable.
- All historical site files and Git history remain byte-for-byte unchanged.

## Recovery and rollback impact

The two historical commits, static site, images, and PDFs remain available on
`master`. This change adds documentation only; reverting it restores the prior
repository tree but does not make the dead domain or external services live.
Any future deployment must start with a separate ticket that names the current
product owner, Git origin and checkout, publishing destination, content/privacy
authority, verification procedure, and rollback. No such deployment work is
currently identified.

## Residual unknowns

- The owner and credentials for the Blogspot site are unknown, and its latest
  content predates this repository.
- The historical hosting provider and registrar relationship for the expired
  `.cl` domain are unknown.
- The owner and former role of the dead `mastercode.cl` resident-login service
  are unknown.
- No owner has confirmed whether the public PDFs and contact/person-role content
  should remain public, move elsewhere, or be removed under a separate privacy
  review.
- API-level GitHub package enumeration was not available to the current token;
  the public exact-name package search was negative.

No deployment, publication, source/history deletion, domain or DNS change,
credential action, package mutation, external-site edit, or repository archive
is included in this disposition.
