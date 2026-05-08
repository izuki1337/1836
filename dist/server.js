"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const PORT = Number.parseInt(process.env.PORT || '3000', 10);
const projectRoot = fs_1.default.existsSync(path_1.default.join(__dirname, 'index.ejs'))
    ? __dirname
    : path_1.default.resolve(__dirname, '..');
const profile = {
    name: 'Minh Le',
    role: 'Product Designer and Frontend Engineer',
    location: 'Based in Ho Chi Minh City, collaborating worldwide',
    intro: 'I build profile-driven digital experiences for startups that want clarity, personality, and interfaces people remember.',
    availability: 'Booking new freelance and contract work for Q2 2026.',
    about: 'My work sits between product thinking, visual systems, and production-ready frontend. I like websites that feel editorial, dashboards that feel calm, and flows that stay easy to use even after they scale.',
    philosophy: 'Good design should sharpen the story, reduce hesitation, and make the next action obvious.',
};
const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Work', href: '#work' },
    { label: 'Experience', href: '#experience' },
    { label: 'Toolkit', href: '#toolkit' },
    { label: 'Contact', href: '#contact' },
];
const metrics = [
    { value: '6+', label: 'years shaping product experiences' },
    { value: '34', label: 'launches across SaaS and commerce' },
    { value: '92%', label: 'repeat clients and referrals' },
];
const focusAreas = [
    {
        name: 'Interface direction',
        summary: 'Visual systems with a clear point of view, not interchangeable component soup.',
        bullets: [
            'Art direction for landing pages and portfolios',
            'High-signal design systems with reusable patterns',
            'Responsive layouts that stay expressive on mobile',
        ],
        accent: 'Cobalt',
    },
    {
        name: 'Design to code',
        summary: 'Tight handoff is not enough. I build the production layer so the intent survives launch.',
        bullets: [
            'Frontend implementation in React, Next.js, and EJS',
            'Motion that supports hierarchy instead of distracting from it',
            'Accessible structure, semantics, and performance pass',
        ],
        accent: 'Coral',
    },
    {
        name: 'Product storytelling',
        summary: 'Messaging, hierarchy, and interaction design aligned so the product feels easy to trust.',
        bullets: [
            'Narrative structure for hero, proof, and CTA sections',
            'Portfolio case studies with measurable outcomes',
            'Founder-facing positioning for early-stage teams',
        ],
        accent: 'Olive',
    },
];
const projects = [
    {
        title: 'Northstar Capital onboarding',
        category: 'Fintech product',
        summary: 'Redesigned a mobile onboarding flow for an investment platform with a cleaner trust layer and fewer drop-off points.',
        impact: 'Activation rate increased by 28% after launch.',
        stack: ['Product strategy', 'UI design', 'Design system', 'Frontend QA'],
        link: '#contact',
    },
    {
        title: 'Studio Pulse portfolio platform',
        category: 'Creative tools',
        summary: 'Built a modular profile site system for agencies to publish work, bios, services, and inbound leads in one place.',
        impact: 'Average time on site moved from 1m 12s to 3m 41s.',
        stack: ['Brand direction', 'EJS templates', 'CSS systems', 'Analytics'],
        link: '#contact',
    },
    {
        title: 'Orbit Health patient dashboard',
        category: 'Healthtech',
        summary: 'Restructured a patient portal around appointment context, medication reminders, and support requests.',
        impact: 'Support tickets for routine actions dropped by 37%.',
        stack: ['UX audit', 'Information architecture', 'Prototyping', 'Testing'],
        link: '#contact',
    },
];
const timeline = [
    {
        period: '2024 to now',
        title: 'Independent designer and frontend partner',
        company: 'Freelance',
        summary: 'Helping founders and small product teams launch polished marketing sites, profile pages, and product surfaces.',
        achievements: [
            'Designed and shipped six launch sites in under four months',
            'Created reusable visual systems clients now extend in-house',
            'Reduced handoff friction by delivering production-ready UI',
        ],
    },
    {
        period: '2021 to 2024',
        title: 'Senior product designer',
        company: 'Layer One Studio',
        summary: 'Led end-to-end design for SaaS products with a focus on trust-heavy onboarding and dashboard clarity.',
        achievements: [
            'Owned design direction for fintech and B2B platforms',
            'Partnered with engineers to tighten interaction quality in code',
            'Introduced a design review process tied to shipped outcomes',
        ],
    },
    {
        period: '2018 to 2021',
        title: 'UI designer',
        company: 'North Axis',
        summary: 'Worked across brand systems, website builds, and product marketing pages for growth-stage startups.',
        achievements: [
            'Built layout systems that scaled across multiple campaigns',
            'Delivered visual refreshes without increasing implementation cost',
            'Improved mobile conversion on campaign pages across the board',
        ],
    },
];
const toolkitGroups = [
    {
        label: 'Design',
        tools: ['Figma', 'Framer', 'Adobe CC', 'Spline'],
    },
    {
        label: 'Frontend',
        tools: ['HTML', 'CSS', 'TypeScript', 'React', 'Next.js', 'EJS'],
    },
    {
        label: 'Workflow',
        tools: ['Design systems', 'Rapid prototyping', 'Content strategy', 'Usability testing'],
    },
];
const socialLinks = [
    {
        label: 'Email',
        href: 'mailto:hello@minhle.studio',
        note: 'For project inquiries and collaborations',
    },
    {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/',
        note: 'Professional updates and case-study conversations',
    },
    {
        label: 'GitHub',
        href: 'https://github.com/',
        note: 'Frontend experiments and implementation references',
    },
    {
        label: 'Dribbble',
        href: 'https://dribbble.com/',
        note: 'Selected visual explorations and interface studies',
    },
];
app.set('view engine', 'ejs');
app.set('views', projectRoot);
app.use('/css', express_1.default.static(projectRoot));
app.use('/js', express_1.default.static(projectRoot));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
const renderProfile = (res, title, status = 200) => {
    res.status(status).render('index', {
        title,
        profile,
        navItems,
        metrics,
        focusAreas,
        projects,
        timeline,
        toolkitGroups,
        socialLinks,
    });
};
app.get('/', (_req, res) => {
    renderProfile(res, `${profile.name} | Profile and Portfolio`);
});
app.get('/product', (_req, res) => {
    res.redirect('/#work');
});
app.get('/pricing', (_req, res) => {
    res.redirect('/#contact');
});
app.post('/api/subscribe', (req, res) => {
    const email = String(req.body?.email || '').trim();
    if (!email || !email.includes('@')) {
        res.status(400).json({ success: false, message: 'Please enter a valid email.' });
        return;
    }
    res.json({
        success: true,
        message: `Thanks, ${email} has been added to the contact list.`,
    });
});
app.use((_req, res) => {
    renderProfile(res, `Page not found | ${profile.name}`, 404);
});
app.listen(PORT, () => {
    console.log(`Profile site running at http://localhost:${PORT}`);
});
exports.default = app;
