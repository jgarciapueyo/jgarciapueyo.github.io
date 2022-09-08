export const about = {
    name: 'Jorge Garcia',
    role: 'Software Engineer',
    description: 'I love to use technology to build products that have a positive impact in the world. Interested in distributed systems, cloud computing, good practices in software development and computer graphics. Looking for challenges that push me out of my comfort zone.',
    resume: '',
    social: {
        mail: 'jgarciapueyo@gmail.com',
        linkedin: 'https://linkedin.com/in/jgarciapueyo',
        github: 'https://github.com/jgarciapueyo',
        medium: 'https://medium.com/@jgarciapueyo'
    },
}

export const experience = [
    {
        company: 'Maximiliana',
        title: 'Software Engineer',
        startDate: 'May, 2021',
        endDate: 'Present',
        // description: 'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    }
]

export const projects = [
    {
        name: 'Transient Rendering in Mitsuba 2',
        description: 'Extended Mitsuba 2, a research-oriented rendering system, to support transient rendering. Light transport rendering in transient state stops assuming the speed of ligth is infinite which allows observing interesting effects like direct and indirect light separation during its propagation. It supports polarized and spectral light transport rendering and can be executed in the CPU (scalar and vectorized) and in the GPU.',
        stack: ['C++', 'Python'],
        sourceCode: 'https://github.com/jgarciapueyo/mitsuba2-transient',
    },
    {
        name: 'Melnet - Speech Generation',
        description:
            'Implementation of MelNet, a probabilistic deep-learning model for generating audio using melspectrograms, in PyTorch using utilities for training big models in GPU memory limited machines.',
        stack: ['Python', 'PyTorch'],
        sourceCode: 'https://github.com/jgarciapueyo/MelNet-SpeechGeneration',
    },
    {
        name: 'Stoc (Compiler)',
        description:
            'Implementation of a compiler for a statically strongly typed programming language with C-like syntax. The compiler transforms Stoc source code into machine code using the LLVM infrastructure (same technology that it is used in production compilers like Clang, Swift compiler, etc.)',
        stack: ['C++', 'LLVM'],
        sourceCode: 'https://github.com/jgarciapueyo/stoc',
    },
];