export interface Article {
  id: number;
  category: string;
  image: string;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  date: string;
  readTime: string;
}

export const articles: Article[] = [
  {
    id: 1,
    category: 'Healthcare',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    title: 'How eFiche is Transforming Medical Records Across Africa',
    excerpt: 'At accumsan condimentum donec dictumst eros, tempus in diam. Ornare gravida quis eu blandit lectus vestibulum egestas.',
    content: `
Medical records are the backbone of quality healthcare. Yet across much of Africa, patient data remains fragmented, paper-based, and inaccessible at the point of care. eFiche was built to change that.

## The Problem

Across Rwanda, Kenya, and beyond, healthcare providers face a common challenge: when a patient walks into a clinic, their history is often unknown. Previous diagnoses, medications, allergies — all of it locked in a folder at another facility, or worse, lost entirely.

This fragmentation leads to duplicate tests, medication errors, and delayed diagnoses. It costs lives.

## Our Approach

eFiche provides a unified digital health record platform that connects facilities, providers, and patients through a secure, cloud-based system. Built with Africa's infrastructure realities in mind — including low-bandwidth environments and mixed device ecosystems — eFiche works where other solutions fail.

Key features include:
- **Offline-first architecture** — records sync when connectivity is available
- **Role-based access control** — patients control who sees their data
- **AI-assisted triage** — flags critical conditions for immediate attention
- **Interoperability** — integrates with existing hospital management systems

## Impact So Far

Since launching, eFiche has been deployed across 95+ facilities in 3 countries, serving over 40,000 patients. Partner institutions report a 60% reduction in duplicate diagnostic tests and a 40% improvement in care coordination scores.

## What's Next

We are expanding into three new markets in 2025, with a focus on rural health centers and community health worker programs. Our goal is to ensure that every patient in Africa has a complete, accessible, and secure health record — regardless of where they seek care.
    `,
    author: { name: 'Ibrahim Farah', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80', role: 'Chief Medical Officer' },
    date: 'March 16, 2024',
    readTime: '6 min read',
  },
  {
    id: 2,
    category: 'Innovation',
    image: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&w=1200&q=80',
    title: 'AI-Powered Diagnostics: The Next Frontier in African Healthcare',
    excerpt: 'At accumsan condimentum donec dictumst eros, tempus in diam. Ornare gravida quis eu blandit lectus vestibulum egestas.',
    content: `
Artificial intelligence is reshaping diagnostics globally. In Africa, where specialist shortages are acute, AI has the potential to be transformative — not just incremental.

## The Specialist Gap

Sub-Saharan Africa has fewer than 1 radiologist per 1 million people in many regions. Compare that to over 100 per million in high-income countries. This gap means conditions like tuberculosis, cancer, and cardiac disease go undetected until they are advanced and harder to treat.

## AI as a Force Multiplier

eFiche's AI diagnostic layer is designed to assist — not replace — frontline health workers. By analyzing chest X-rays, lab results, and patient history, the system surfaces likely diagnoses and flags urgent cases for review.

In pilot studies, our TB detection model achieved 94% sensitivity, comparable to specialist radiologists, at a fraction of the cost and in real time.

## Responsible Deployment

We take AI ethics seriously. All models are trained on locally representative data, regularly audited for bias, and deployed with human oversight built in. No diagnosis is made by AI alone.

## The Road Ahead

We are currently training models for malaria, diabetic retinopathy, and maternal risk assessment. Each model is co-developed with local clinicians to ensure it reflects the realities of African healthcare.
    `,
    author: { name: 'Amina Diallo', avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=150&q=80', role: 'Head of AI Research' },
    date: 'April 2, 2024',
    readTime: '4 min read',
  },
  {
    id: 3,
    category: 'Events',
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1200&q=80',
    title: 'eFiche at the 2024 Africa Health Summit: Key Takeaways',
    excerpt: 'At accumsan condimentum donec dictumst eros, tempus in diam. Ornare gravida quis eu blandit lectus vestibulum egestas.',
    content: `
The 2024 Africa Health Summit brought together over 3,000 health leaders, innovators, and policymakers from 54 countries. eFiche was proud to be among the featured exhibitors and speakers.

## Our Sessions

eFiche CEO presented on the panel "Digital Infrastructure for Universal Health Coverage," alongside representatives from the WHO, African Union, and three national health ministries. The session drew standing-room attendance and sparked a rich discussion on data sovereignty and cross-border health data sharing.

## Key Themes from the Summit

**1. Data Sovereignty Matters**
African nations are increasingly asserting the right to keep health data within their borders. eFiche's architecture — with country-specific data residency options — was highlighted as a model for compliant cross-border interoperability.

**2. Community Health Workers Are the Last Mile**
Multiple sessions emphasized the critical role of CHWs in reaching rural populations. eFiche's mobile-first CHW module received significant interest from NGOs and government delegations.

**3. Funding is Shifting**
There is growing momentum behind domestic health tech investment across East and West Africa. Several sovereign wealth funds announced digital health mandates at the summit.

## Partnerships Announced

We are pleased to announce new MoUs signed with health ministries in two additional countries, details of which will be shared in the coming weeks.
    `,
    author: { name: 'Kwame Mensah', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80', role: 'Head of Partnerships' },
    date: 'May 10, 2024',
    readTime: '5 min read',
  },
  {
    id: 4,
    category: 'Partnership',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=1200&q=80',
    title: 'New Partnership with Ministry of Health Expands eFiche Reach',
    excerpt: 'At accumsan condimentum donec dictumst eros, tempus in diam. Ornare gravida quis eu blandit lectus vestibulum egestas.',
    content: `
We are excited to announce a landmark partnership with the Ministry of Health that will bring eFiche's digital health platform to an additional 200 public health facilities over the next 18 months.

## About the Partnership

This agreement represents the largest public-sector deployment in eFiche's history. Under the terms of the MoU, eFiche will provide its full platform — including electronic medical records, AI diagnostics, and patient portal — to district hospitals, health centers, and community health posts across the country.

## Why This Matters

Public health facilities serve the majority of the population, particularly in rural and peri-urban areas. By integrating eFiche into the national health information system, patients will for the first time have a portable, lifelong health record accessible at any participating facility.

## Implementation Timeline

- **Q3 2024** — Pilot deployment at 20 district hospitals
- **Q4 2024** — Training rollout for 1,500 health workers
- **Q1 2025** — Full deployment to all 200 facilities
- **Q2 2025** — Patient portal launch for public access

## A Shared Vision

"This partnership reflects our shared commitment to leaving no patient behind," said the Minister of Health at the signing ceremony. "Digital health is not a luxury — it is infrastructure."

We are honored by this trust and committed to delivering a platform that serves every patient, in every facility, every time.
    `,
    author: { name: 'Fatima Nkosi', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80', role: 'Director of Government Affairs' },
    date: 'June 5, 2024',
    readTime: '3 min read',
  },
]
