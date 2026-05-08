export type NavItem = { label: string; href: string; };
export type Metric = { value: string; label: string; };
export type FocusArea = { name: string; summary: string; bullets: string[]; accent: string; };
export type Project = { title: string; category: string; summary: string; impact: string; stack: string[]; link: string; linkText: string; };
export type TimelineItem = { period: string; title: string; company: string; summary: string; achievements: string[]; };
export type ToolkitGroup = { label: string; tools: string[]; };
export type SocialLink = { label: string; href: string; note: string; };
export type PhotoStory = { id: string; url: string; caption: string; description: string; reverse?: boolean; };
export type CodeSnippet = { id: string; filename: string; language: string; code: string; description: string; };

export const profile = {
  name: 'An duong',
  role: 'Student, Phone Photographer & AI-Assisted Creator',
  location: 'Based wherever the light hits the leaves',
  intro: 'I find peace capturing the quiet scenery of my hometown through a smartphone lens. I design simply, edit lightly, and build digital spaces with the help of AI.',
  availability: 'Quietly observing the digital world.',
  about: 'Reversing my name gives "An Duong" — which evokes the feeling of sunlight. As a student, I love recording daily life and hometown landscapes using just my phone. I sketch layouts in Canva and Figma, edit simple videos for my own joy, and bring my ideas to life through code written by AI companions. This space is my visual and digital diary.',
  philosophy: 'Observe deeply. Capture honestly. Design quietly.',
};

export const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Moments', href: '/creations' },
  { label: 'Journey', href: '/journey' },
  { label: 'Connect', href: '/connect' },
];

export const metrics: Metric[] = [
  { value: '12+', label: 'countries and cultures explored' },
  { value: '100', label: 'books devoured this year' },
  { value: '∞', label: 'cups of black coffee brewed' },
];

export const focusAreas: FocusArea[] = [
  {
    name: 'Visual Arts',
    summary: 'Capturing life through a lens. I focus on shadows, geometry, and the quietness of everyday life.',
    bullets: [
      'Street photography and urban landscapes',
      'Monochrome film aesthetics',
      'Visual diaries of my travels',
    ],
    accent: 'Cobalt',
  },
  {
    name: 'Words & Thoughts',
    summary: 'Writing helps me clear the noise in my head. I write about intentional living and technology.',
    bullets: [
      'Essays on digital minimalism',
      'Reviews of books that changed my perspective',
      'Random shower thoughts',
    ],
    accent: 'Coral',
  },
  {
    name: 'Code Experiments',
    summary: 'Programming as a form of art, not just utility. I build small, beautiful tools for myself.',
    bullets: [
      'Open-source creative tools',
      'CLI applications for personal productivity',
      'Generative art and WebGL sketches',
    ],
    accent: 'Olive',
  },
];

export const projects: Project[] = [
  {
    title: 'Monochrome Diary',
    category: 'Street Photography',
    summary: 'A study of light, contrast, and geometry in everyday life. Stripping away colors to focus on raw emotions and quiet moments.',
    impact: 'Finding beauty without the noise of color.',
    stack: ['Black & White', 'Contrast', 'Shadows'],
    link: '/gallery/monochrome',
    linkText: 'Explore gallery',
  },
  {
    title: 'School Days',
    category: 'Visual Diary',
    summary: 'A deeply personal and distinct archive of my youth. Laughter in the hallways, the quiet of an empty classroom, and fleeting moments that fade into lasting memories.',
    impact: 'Moments that shaped who I am today.',
    stack: ['Friends', 'Nostalgia', 'Youth'],
    link: '/gallery/school',
    linkText: 'Open diary',
  },
  {
    title: 'Lumen',
    category: 'Full-Stack Development',
    summary: 'A quiet, interconnected digital ecosystem. Encompassing a native mobile app, a minimalist web platform, and a community bot.',
    impact: 'Bridging platforms with a philosophy of doing more with less.',
    stack: ['Android', 'Web', 'Discord.js'],
    link: '/gallery/lumen',
    linkText: 'View ecosystem',
  },
];

export const timeline: TimelineItem[] = [
  {
    period: '2022 — Present',
    title: 'The Quiet Architect',
    company: 'Independent',
    summary: 'Moving beyond static designs to build living, breathing digital ecosystems. Code became my new canvas, and AI my silent collaborator. I learned to strip away the noise until only the essential remained.',
    achievements: [
      'Architected "Lumen", a minimal ecosystem bridging mobile, web, and bots',
      'Mastered the balance between aesthetic typography and functional UI',
      'Embraced the philosophy: "Design quietly, build intentionally"',
    ],
  },
  {
    period: '2020 — 2022',
    title: 'The Deep Dive',
    company: 'Self-Taught',
    summary: 'The turning point. I started taking design seriously, spending hours dissecting layouts, typography, and whitespace. My phone camera became a tool to study light, contrast, and composition in the real world.',
    achievements: [
      'Transitioned from using templates to designing from a blank canvas',
      'Curated a visual diary of monochrome street photography',
      'Realized that good design is 99% observation and 1% execution',
    ],
  },
  {
    period: 'Before 2020',
    title: 'Clunky Beginnings',
    company: 'Exploration',
    summary: 'My earliest attempts at designing for myself. Everything was a bit chaotic, overly complex, and full of trial and error. I didn\'t know the rules yet, but the sheer curiosity drove me forward.',
    achievements: [
      'Experimented with random colors, flashy effects, and cluttered layouts',
      'Built my first personal projects—messy, but foundational',
      'Discovered the joy of creating a personal space on the internet',
    ],
  },
];

export const toolkitGroups: ToolkitGroup[] = [
  { label: 'To Capture', tools: ['Smartphone Lens', 'Natural Light', 'Patience', 'A Wandering Mind'] },
  { label: 'To Shape', tools: ['Canva', 'Figma', 'Simple Video Editor', 'AI Companions'] },
  { label: 'To Recharge', tools: ['Hometown Scenery', 'Lo-Fi Beats', 'Quiet Afternoons', 'Solitude'] },
];

export const socialLinks: SocialLink[] = [
  { label: 'Email', href: 'mailto:hello@duongan.studio', note: 'Nơi nhận những dòng thư tĩnh lặng' },
  { label: 'Discord', href: 'https://discord.com/', note: 'Góc nhỏ nán lại mỗi đêm' },
  { label: 'GitHub', href: 'https://github.com/izuki1337', note: 'Nơi lưu giữ những dòng code vô tri' },
];

export const schoolStories: PhotoStory[] = [
  {
    id: '1',
    url: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format&fit=crop',
    caption: 'Hành Lang Trống Vắng',
    description: 'Ánh nắng chiều tà lọt qua những ô cửa sổ bám bụi ngay sau tiếng chuông cuối cùng. Một khoảnh khắc tĩnh lặng tuyệt đối trước khi tiếng bước chân của đám học trò ùa ra.',
    reverse: false
  },
  {
    id: '2',
    url: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop',
    caption: 'Dưới Tán Bàng Cũ',
    description: 'Nơi những bí mật tuổi mới lớn được rỉ tai nhau và những kế hoạch tương lai được vẽ nguệch ngoạc trên nền đất. Cái cây này đã chứng kiến sự trưởng thành của chúng tôi nhiều hơn bất kỳ lớp học nào.',
    reverse: true
  }
];

export const lumenSnippets: CodeSnippet[] = [
  {
    id: 'core',
    filename: 'core/nexus.ts',
    language: 'typescript',
    code: `import { LumenCore } from '@lumen/sys';\n\nconst nexus = new LumenCore({\n  mode: 'silent',\n  workers: 4\n});\n\nnexus.ignite().then(() => {\n  console.log('[LUMEN] Nexus is breathing.');\n});`,
    description: 'Trái tim của Lumen. Nơi mọi tín hiệu từ Mobile và Web được đồng bộ hóa trong tĩnh lặng. Không log thừa thãi, không rườm rà. Chỉ giữ lại những gì cốt lõi nhất.'
  },
  {
    id: 'bot',
    filename: 'bot/observer.js',
    language: 'javascript',
    code: `const { Client, Events } = require('discord.js');\nconst observer = new Client({ intents: [] });\n\nobserver.once(Events.ClientReady, c => {\n  console.log(\`[Observer] \${c.user.tag} is watching.\`);\n});\n\nobserver.login(process.env.TOKEN);`,
    description: 'Một thực thể Discord im lặng, chỉ làm nhiệm vụ quan sát và lưu trữ các mảnh ghép ký ức người dùng vào cơ sở dữ liệu mà không bao giờ lên tiếng.'
  }
];

export const monochromeStories: PhotoStory[] = [
  {
    id: '1',
    url: 'https://images.unsplash.com/photo-1473220464592-11c521199203?q=80&w=800&auto=format&fit=crop',
    caption: 'Hình Học & Bóng Tối',
    description: 'Khi màu sắc bị tước bỏ, bạn buộc phải nhìn vào hình học của thế giới. Sự giao thoa sắc sảo giữa những đường thẳng kiến trúc và sự mềm mại của bóng đổ.',
    reverse: false
  },
  {
    id: '2',
    url: 'https://images.unsplash.com/photo-1492693429561-1c283eb1b2e8?q=80&w=800&auto=format&fit=crop',
    caption: 'Góc Phố Tĩnh Lặng',
    description: 'Đường phố vắng lặng lạ thường. Một khoảnh khắc tĩnh tại tuyệt đối hiếm hoi giữa lòng thành phố nhộn nhịp. Ánh sáng và độ tương phản tự kể câu chuyện của riêng nó.',
    reverse: true
  }
];