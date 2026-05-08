import express, { Application, Request, Response } from 'express';
import path from 'path';

import { profile, navItems, metrics, focusAreas, projects, timeline, toolkitGroups, socialLinks, schoolStories, monochromeStories, lumenSnippets } from './data';

const app: Application = express();
const PORT = Number.parseInt(process.env.PORT || '3000', 10);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const renderProfile = (req: Request, res: Response, template: string, title: string, status = 200) => {
  res.status(status).render(template, {
    currentPath: req.path,
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

app.get('/', (_req: Request, res: Response) => {
  renderProfile(_req, res, 'index', `${profile.name} | Profile and Portfolio`);
});

app.get('/creations', (_req: Request, res: Response) => {
  renderProfile(_req, res, 'work', `Moments | ${profile.name}`);
});

app.get('/journey', (_req: Request, res: Response) => {
  renderProfile(_req, res, 'experience', `Journey | ${profile.name}`);
});

app.get('/connect', (_req: Request, res: Response) => {
  renderProfile(_req, res, 'contact', `Connect | ${profile.name}`);
});

app.get('/gallery/:id', (req: Request, res: Response) => {
  const albumId = req.params.id;
  
  const albumData: Record<string, { title: string; description: string; stories?: any[]; snippets?: any[] }> = {
    monochrome: { title: 'Monochrome Diary', description: 'A study of light, contrast, and geometry. Stripping away colors to focus on raw emotions.', stories: monochromeStories },
    school: { title: 'School Days', description: 'A deeply personal archive of my youth, laughter in the hallways, and quiet classrooms.', stories: schoolStories },
    lumen: { title: 'Lumen', description: 'Hệ sinh thái kỹ thuật số tối giản. Kết nối mượt mà giữa ứng dụng di động, nền tảng web và cộng đồng, được xây dựng bằng sự tĩnh lặng.', snippets: lumenSnippets }
  };
  
  const album = albumData[albumId] || { title: 'Visual Diary', description: 'A collection of moments.' };

  res.render('gallery', {
    currentPath: '/creations', // Giữ menu sáng ở tab Moments
    title: `${album.title} | ${profile.name}`,
    profile,
    navItems,
    album,
    albumId,
  });
});

app.get('/product', (_req: Request, res: Response) => {
  res.redirect('/creations');
});

app.get('/pricing', (_req: Request, res: Response) => {
  res.redirect('/connect');
});

app.post('/api/subscribe', (req: Request, res: Response) => {
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

app.use((_req: Request, res: Response) => {
  renderProfile(_req, res, '404', `Nowhere to be found | ${profile.name}`, 404);
});

app.listen(PORT, () => {
  console.log(`Profile site running at http://localhost:${PORT}`);
});

export default app;
