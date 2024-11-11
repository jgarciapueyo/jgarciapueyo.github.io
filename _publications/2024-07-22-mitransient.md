---
title: "mitransient: Transient light transport in Mitsuba 3"
collection: publications
permalink: /publication/mitransient
date: 2024-07-22
venue: 'International Conference on Computational Photography (ICCP)'
type: Poster
pdfurl: mitransient.pdf
authors:
    - droyo{1}
    - Crespo, Miguel{2}
    - jgarciapueyo{1}
notes:
    - "{1} Universidad de Zaragoza"
    - "{2} École Polytechnique Fédérale de Laussane (EPFL)"
header:
    teaser: teaser-royo2024mitransient.png
abstract:
    "Our work fixes these issues by building a rendering tool that can simulate different sorts of time-resolved sensing devices (including time-gated and transient cameras), with easy-to-extend modules written in Python, which leverages the state-of-the-art technology of Mitsuba 3. Specifically, we can  simulate the interactions of light with complex materials and participating media, run in both CPU and GPU by using vectorized JIT compiled code, compute ray tracing queries with optimized acceleration structures, and compute derivatives including the temporal domain."
keywords:
    - Transient Rendering
    - Light Transport
    - Non-line-of-sight imaging
bibtex: royo2024mitransient.bib
---