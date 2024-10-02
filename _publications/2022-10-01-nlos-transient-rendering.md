---
title: "Non-line-of-sight transient rendering"
collection: publications
permalink: /publication/nlos-transient-rendering
date: 2022-10-01
venue: 'Computers & Graphics, Vol. 107 (CEIG)'
type: Journal (JCR Q2)
doi: 'https://doi.org/10.1016/j.cag.2022.07.003'
paperurl: 'https://www.sciencedirect.com/science/article/pii/S0097849322001200'
authors:
    - droyo{1}
    - jgarciapueyo{1}
    - amunoz{1}
    - jarabo{2}
notes:
    - "{1} Universidad de Zaragoza"
    - "{2} Meta Reality Labs"
header:
    teaser: teaser-nlos-transient-rendering.png
abstract:
    "The capture and analysis of light in flight, or light in transient state, has enabled applications such as range imaging, reflectance estimation and especially non-line-of-sight (NLOS) imaging. For this last case, hidden geometry can be reconstructed using time-resolved measurements of indirect diffuse light emitted by a laser. Transient rendering is a key tool for developing such new applications, significantly more challenging than its steady-state counterpart. In this work, we introduce a set of simple yet effective subpath sampling techniques targeting transient light transport simulation in occluded scenes. We analyze the usual capture setups of NLOS scenes, where both the camera and light sources are focused on particular points in the scene. Also, the hidden geometry can be difficult to sample using conventional techniques. We leverage that configuration to reduce the integration path space. We implement our techniques in a modified version of Mitsuba 2 adapted for transient light transport, allowing us to support parallelization, polarization, and differentiable rendering."
keywords:
    - Transient Rendering
    - Light Transport
    - Non-line-of-sight imaging
bibtex: royo2024non.bib
---