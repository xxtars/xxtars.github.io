# Project Instructions

## Scope

I maintain two things for this user:

1. **Personal academic website** — Jekyll site at `/Users/z151273/Documents/XXTARS/xxtars.github.io/`
2. **TENK CV** — LaTeX CV at `/Users/z151273/Documents/XXTARS/CV/67211cac022f2fd65cc0e074/`

## Personal Website

### Standards
- Follow **web/LinkedIn conventions** (not TENK format)
- Title: Junior Researcher (Ph.D. Candidate) on homepage, Junior Researcher in CV section Experience
- PhD goes under Education (website convention)

### Design Language
- **Reference**: Anthropic (anthropic.com) design patterns
- **Color palette**: Morandi (grey-toned, low saturation)
  - Light mode accent: `#4a6d8c` (morandi fog blue)
  - Dark mode accent: `#c4917a` (dusty terracotta)
  - Light background: `#f2f0e6` (warm paper)
  - Dark background: `#191816` (warm charcoal)
- **Paper texture**: `natural-paper.png` on both modes (dark uses `background-blend-mode: soft-light`)
- **Typography**:
  - Serif (Newsreader): ONLY for the name on homepage and bib paper titles
  - Sans-serif (Inter): everything else — headings, nav, body, buttons, labels
  - Font weight: 400 (regular) everywhere, hierarchy through size and color, not weight
  - Exception: bib author self-name uses 600
- **Letter-spacing**: minimal (0.03-0.05em for uppercase labels), Anthropic uses almost none
- **Line-height**: 1.5 globally
- **Max width**: 1000px
- **Footer**: copyright on top, social icons below, sticky to page bottom

### Bib Entries
- No left thumbnail column (`enable_publication_thumbnails: false`)
- Title: Newsreader serif 1.5rem (1.2rem mobile)
- Author: Inter 1rem, self-name bold (600)
- Venue: JetBrains Mono italic, small
- Buttons: pill/capsule shape, no fill on hover
- Conference booktitle: full name without "In" prefix, without year/edition prefix (e.g., "International Conference on Learning Representations (ICLR)")

### Publications (papers.bib)
- `booktitle`: Full conference name with abbreviation, no "Proceedings of" or edition numbers
- Show all authors (no limit)

## TENK CV

### Standards
- Follow **Research Council of Finland (TENK)** template strictly
- Max 3 pages, Carlito 12pt, A4, 20mm margins
- Degrees: only awarded degrees (no ongoing PhD)
- Current employment: includes "(PhD Candidate)" after Junior Researcher
- Date format: DD.MM.YYYY (Finnish standard)
- No journal rankings, impact factors, or citation metrics
- Publications: full conference names with edition numbers are OK
- Language: English only, no Chinese comments

### Files
- `CV.tex` — main CV (pushes to Overleaf via git)
- `list_of_publications.tex` — appendix
- `references.bib` — publication data (separate from website bib)
