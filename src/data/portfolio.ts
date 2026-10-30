export type ProfileId = "recruiter" | "client" | "developer";

export const person = {
  name: "Shashi Kiran Katta",
  series: "SHASHI",
  subtitle: "MY JOURNEY",
  headline: "Creative Manager | Lead Video Editor",
  location: "Bengaluru, India",
  country: "India",
  careerStart: "2013-01-01",
  languages: ["English", "Telugu", "Tamil", "Kannada", "Hindi"],
  email: "shashikirankatta673@gmail.com",
  phone: "+91-7303931060",
  links: {
    linkedin: "https://www.linkedin.com/in/shashikirankatta",
  } as Record<string, string>,
  photo: "/shashi-hero-v3.webp",
  resume: "/Shashi_Kiran_Katta_Resume.pdf",
};

export const profiles: Record<
  ProfileId,
  { label: string; blurb: string; tagline: string; cta: string; ctaTarget: string; order: string[] }
> = {
  recruiter: {
    label: "Recruiter",
    blurb: "Skim the highlights",
    tagline:
      "10+ years in video, VFX and creative operations. Led a team of 15 and cut turnaround time by about 25%.",
    cta: "Get in touch",
    ctaTarget: "contact",
    order: ["work", "journey", "skills", "projects", "achievements", "resume"],
  },
  client: {
    label: "Client",
    blurb: "See what I can make for you",
    tagline:
      "Teasers, product videos, motion graphics and brand creatives, from script and pre-production to final delivery.",
    cta: "Start a project",
    ctaTarget: "contact",
    order: ["work", "projects", "journey", "skills", "achievements", "resume"],
  },
  developer: {
    label: "Collaborator",
    blurb: "Show me the craft",
    tagline:
      "Premiere, After Effects and rotoscopy, plus AI video tools for faster production. Happy to compare workflows.",
    cta: "Watch the work",
    ctaTarget: "projects",
    order: ["work", "projects", "skills", "journey", "achievements", "resume"],
  },
};

export const about = {
  lead: "I turn ideas into video, and keep creative teams shipping on time.",
  body: [
    "I started in feature-film VFX as a roto artist, then moved into healthcare education at Omnicuris, where I grew from Creative Associate to Creative Manager. Today I lead a team of 15 across video production, post-production, motion graphics and design.",
    "I care about the workflow as much as the final cut: standard processes, style guides, quality reviews and digital asset management that cut project turnaround time by about 25%. I also use AI video and image tools alongside the classic Adobe pipeline.",
  ],
  stats: [
    { value: "10+", label: "years in video & VFX" },
    { value: "15", label: "creatives led" },
    { value: "25%", label: "faster turnaround (approx.)" },
    { value: "20%", label: "lead-generation growth supported" },
  ],
};

export type Episode = { title: string; period: string; text: string; tags: string[] };
export type Season = { name: string; year: number; role: string; place: string; period: string; episodes: Episode[] };

export const seasons: Season[] = [
  {
    name: "Season 6",
    year: 2020,
    role: "Creative Manager",
    place: "Omnicuris Healthcare",
    period: "Jul 2020 – present",
    episodes: [
      {
        title: "Leading the Team",
        period: "2020 – present",
        text: "Lead a creative team of 15, managing project execution, creative quality, workflow coordination and on-time delivery.",
        tags: ["Team management", "Creative ops", "Quality"],
      },
      {
        title: "The Rebrand",
        period: "2020 – present",
        text: "Developed and executed a rebranding video strategy that contributed to a 20% increase in lead generation, and produced training, marketing and brand videos.",
        tags: ["Brand video", "Strategy", "+20% leads"],
      },
      {
        title: "Faster Pipeline",
        period: "2020 – present",
        text: "Introduced standard workflows, style guides, team training and a digital asset management system, cutting turnaround time by about 25%.",
        tags: ["Workflow", "Style guides", "-25% turnaround"],
      },
    ],
  },
  {
    name: "Season 5",
    year: 2018,
    role: "Senior Creative Associate",
    place: "Omnicuris Healthcare",
    period: "May 2018 – Jun 2020",
    episodes: [
      {
        title: "Plan to Delivery",
        period: "2018",
        text: "Managed video production, graphic design and brand communication from planning to final delivery, including pre-production workflows, teasers and short-form video that lifted audience engagement by 18%.",
        tags: ["Teasers", "Pre-production", "+18% engagement"],
      },
      {
        title: "Secure Storage",
        period: "2019",
        text: "Implemented secure data storage and file management that cut data retrieval time by 30%. Also designed PowerPoint templates, brochures and marketing collateral.",
        tags: ["Asset mgmt", "-30% retrieval", "Templates"],
      },
    ],
  },
  {
    name: "Season 4",
    year: 2017,
    role: "Creative Associate",
    place: "Omnicuris Healthcare",
    period: "Apr 2017 – May 2018",
    episodes: [
      {
        title: "Joining the Crew",
        period: "2017",
        text: "Produced video content, graphic assets, presentations and branding collateral for marketing campaigns, with PowerPoint templates and brochures that contributed to a 12% rise in client satisfaction scores.",
        tags: ["Video", "Graphics", "Brochures"],
      },
    ],
  },
  {
    name: "Season 3",
    year: 2015,
    role: "Stereoscopic Roto Artist",
    place: "Stereo D",
    period: "Sep 2015 – Apr 2017",
    episodes: [
      {
        title: "Marvel Stereo",
        period: "2015 – 2017",
        text: "Delivered high-accuracy stereoscopic rotoscopy for feature films including Avengers, Doctor Strange, Thor, Ant-Man and Captain America: Civil War, with work that contributed to a 20% reduction in revision requests.",
        tags: ["Rotoscopy", "Stereo 3D", "Feature film"],
      },
    ],
  },
  {
    name: "Season 2",
    year: 2013,
    role: "Roto Artist",
    place: "Prime Focus World",
    period: "Oct 2013 – Aug 2015",
    episodes: [
      {
        title: "High-Volume VFX",
        period: "2013 – 2015",
        text: "Rotoscopy and visual effects for film projects including Pixels, Paranormal Activity 5 and Jurassic World, meeting tight deadlines and contributing to a 15% gain in team output efficiency.",
        tags: ["Rotoscopy", "VFX", "Feature film"],
      },
    ],
  },
  {
    name: "Season 1",
    year: 2013,
    role: "3D Modeler",
    place: "Brahma3 Technologies",
    period: "Jan 2013 – Sep 2013",
    episodes: [
      {
        title: "Pilot",
        period: "2013",
        text: "Built 3D models for sales presentations and product demonstrations that supported a 10% increase in sales presentations.",
        tags: ["3D modeling", "Product visuals"],
      },
    ],
  },
  {
    name: "Prologue",
    year: 2008,
    role: "Advanced Diploma in Visual Effects",
    place: "Zee Institute of Creative Arts",
    period: "2011 – 2013",
    episodes: [
      {
        title: "Origin story",
        period: "2013",
        text: "Advanced Diploma in Visual Effects, after a B.Com in General Studies from Dravidian University (2008 – 2011).",
        tags: ["VFX diploma", "B.Com"],
      },
    ],
  },
];

export type Project = {
  title: string;
  kind: string;
  year?: string;
  pitch: string;
  stack: string[];
  url?: string;
  linkLabel?: string;
  status?: string;
  hue: number;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Teasers",
    kind: "Video",
    pitch: "Short, punchy teaser videos that promote courses, webinars and expert talks, built to lift audience engagement.",
    stack: ["Premiere Pro", "After Effects", "Motion graphics"],
    hue: 355,
    featured: true,
  },
  {
    title: "Product Videos",
    kind: "Video",
    pitch: "Product and campaign videos for healthcare audiences, from script to final cut.",
    stack: ["Premiere Pro", "After Effects", "Audition"],
    hue: 28,
    featured: true,
  },
  {
    title: "Conference Clips",
    kind: "Video",
    pitch: "Event coverage cut into highlight reels and shareable clips.",
    stack: ["Premiere Pro", "Colour", "Sound"],
    hue: 205,
    featured: true,
  },
  {
    title: "2D Animation",
    kind: "Motion",
    pitch: "2D explainer and case-study animations that make complex topics easy to follow.",
    stack: ["After Effects", "Illustrator", "Motion graphics"],
    hue: 275,
    featured: true,
  },
  {
    title: "AI Videos",
    kind: "AI video",
    pitch: "Story, promo and ad videos made with generative AI tools, directed and edited by hand.",
    stack: ["Google Veo", "Kling", "Runway ML", "Midjourney", "ElevenLabs"],
    hue: 190,
    featured: true,
  },
  {
    title: "Infographics & Creatives",
    kind: "Design",
    pitch: "Posters, social creatives, event graphics and brochures for campaigns and conferences.",
    stack: ["Photoshop", "Illustrator"],
    hue: 320,
    featured: true,
  },
  {
    title: "CME Video Lectures",
    kind: "Video",
    pitch: "Recorded medical-education sessions edited into clean, watchable lectures.",
    stack: ["Premiere Pro", "Audition", "Camtasia"],
    hue: 140,
  },
  {
    title: "PPT Templates & Scripts",
    kind: "Design",
    pitch: "Presentation templates and script documents that keep course content consistent across the team.",
    stack: ["PowerPoint", "Style guides"],
    hue: 45,
  },
  {
    title: "LMS Courses",
    kind: "E-learning",
    pitch: "Course modules prepared for a learning management system.",
    stack: ["Camtasia", "Course packaging"],
    hue: 165,
  },
  {
    title: "Film Rotoscopy",
    kind: "VFX",
    pitch: "Stereoscopic roto on feature films including Avengers, Doctor Strange, Thor, Ant-Man, Captain America: Civil War, Pixels and Jurassic World.",
    stack: ["Silhouette FX", "Mocha Pro", "Eyeon Fusion"],
    hue: 15,
  },
];

export const contributions: Project[] = [];

export const trips: { file: string; alt: string }[] = [];

export const skills: { group: string; items: string[] }[] = [
  { group: "Video & post-production", items: ["Adobe Premiere Pro", "Adobe After Effects", "Camtasia"] },
  { group: "Graphic design", items: ["Adobe Photoshop", "Adobe Illustrator"] },
  { group: "Audio & sound", items: ["Adobe Audition", "Audacity"] },
  { group: "VFX & rotoscopy", items: ["Silhouette FX", "Mocha Pro", "Eyeon Fusion"] },
  { group: "AI & generative tools", items: ["ChatGPT", "Claude", "Google Veo", "Kling", "ElevenLabs", "Midjourney", "Runway ML"] },
  {
    group: "Creative management",
    items: ["Team leadership", "Creative operations", "Production planning", "Quality control", "Workflow optimization", "Digital asset management", "Project management"],
  },
];

export type Achievement = { title: string; issuer: string; year?: string; note?: string };

export const achievements: Achievement[] = [
  { title: "Advanced Diploma in Visual Effects", issuer: "Zee Institute of Creative Arts", year: "2013" },
  { title: "Bachelor of Commerce (B.Com), General Studies", issuer: "Dravidian University", year: "2011" },
];

export type Moment = { laurel: string; title: string; org: string; detail: string };

export const topMoments: Moment[] = [
  { laurel: "Faster delivery", title: "About 25% quicker", org: "Omnicuris", detail: "Streamlined creative workflows and standard processes, cutting project turnaround time by approximately 25%." },
  { laurel: "Brand growth", title: "+20% Leads", org: "Omnicuris", detail: "Developed and executed a rebranding video strategy that contributed to a 20% increase in lead generation." },
  { laurel: "Team scale", title: "Team management", org: "Omnicuris", detail: "Lead and support a creative team, covering production, post-production, motion and design." },
  { laurel: "Big screen", title: "Marvel & Jurassic", org: "Stereo D / Prime Focus", detail: "Rotoscopy credits on Avengers, Doctor Strange, Thor, Ant-Man, Captain America: Civil War, Pixels and Jurassic World." },
];

export type Spotlight = {
  kicker: string;
  title: string;
  blurb: string;
  points: { label: string; text: string; href?: string }[];
  groups: string[];
};

export const spotlights: Record<ProfileId, Spotlight> = {
  recruiter: {
    kicker: "Hiring a creative lead?",
    title: "What I bring to your team",
    blurb: "A creative manager who still edits: leads the team, owns the pipeline and ships on time.",
    points: [
      { label: "Leadership", text: "Led a creative team of up to 15 across video, motion and design." },
      { label: "Efficiency", text: "Cut turnaround time by about 25% and data retrieval time by 30%." },
      { label: "Craft", text: "Premiere Pro, After Effects, Photoshop, Illustrator, Mocha Pro and Fusion." },
      { label: "Range", text: "10+ years from feature-film VFX to healthcare education and brand video." },
    ],
    groups: ["Creative management", "Video & post-production", "VFX & rotoscopy", "Graphic design", "AI & generative tools", "Audio & sound"],
  },
  client: {
    kicker: "Need a video made?",
    title: "From script to final cut",
    blurb: "One creative who plans, shoots, edits, animates and delivers, with clear process and quality checks.",
    points: [
      { label: "Teasers & promos", text: "Short videos that grab attention and drive engagement." },
      { label: "Explainers", text: "2D animation and motion graphics for complex topics." },
      { label: "Brand creatives", text: "Posters, infographics, brochures and presentation templates." },
      { label: "AI-assisted", text: "Generative video and voice tools to move faster on the right projects." },
    ],
    groups: ["Video & post-production", "Graphic design", "AI & generative tools", "Audio & sound", "VFX & rotoscopy", "Creative management"],
  },
  developer: {
    kicker: "Craft and collaboration",
    title: "Let's compare workflows",
    blurb: "I like talking pipelines, plugins and tooling, from classic VFX to the newest AI video models.",
    points: [
      { label: "VFX roots", text: "Stereoscopic rotoscopy with Silhouette FX, Mocha Pro and Fusion." },
      { label: "Post-production", text: "Premiere Pro and After Effects for edit, motion and finishing." },
      { label: "AI video", text: "Veo, Kling, Runway ML, Midjourney and ElevenLabs in real projects." },
      { label: "Process", text: "Style guides and team training so quality stays consistent." },
    ],
    groups: ["VFX & rotoscopy", "Video & post-production", "AI & generative tools", "Creative management", "Graphic design", "Audio & sound"],
  },
};

export type WorkVideo = {
  title: string;
  category: string;
  youtube: string;
  url?: string;
  thumb?: string;
};

export const workVideos: WorkVideo[] = [
  { title: "The Talking Mango Tree", category: "AI Videos", youtube: "" },
  { title: "The Animal Parade Story", category: "AI Videos", youtube: "" },
  { title: "AI Generated Sample", category: "AI Videos", youtube: "" },
  { title: "Medshots for HCPs", category: "Product Videos", youtube: "" },
  { title: "Product Video 2", category: "Product Videos", youtube: "" },
  { title: "Product Video 3", category: "Product Videos", youtube: "" },
  { title: "Thyroid Awareness Teaser", category: "Teasers", youtube: "" },
  { title: "PCOS Awareness Month Teaser", category: "Teasers", youtube: "" },
  { title: "NCD Teaser", category: "Teasers", youtube: "" },
  { title: "COVID-19 Clinical Approach Teaser", category: "Teasers", youtube: "" },
  { title: "COPD Clinical Approach Teaser", category: "Teasers", youtube: "" },
  { title: "Vocal Disorders Lecture", category: "Long Form Videos", youtube: "" },
  { title: "Long Form Video 2", category: "Long Form Videos", youtube: "" },
  { title: "Long Form Video 3", category: "Long Form Videos", youtube: "" },
  { title: "Conference Highlights", category: "Conference Clips", youtube: "" },
  { title: "Conference Highlights, Cut 2", category: "Conference Clips", youtube: "" },
  { title: "2D Animation Reel", category: "2D Animation", youtube: "" },
  { title: "Case Study Animation", category: "2D Animation", youtube: "" },
  { title: "Dashboard Explainer", category: "2D Animation", youtube: "" },
  { title: "Podcast Episode 1", category: "Podcasts", youtube: "" },
  { title: "Podcast Episode 2", category: "Podcasts", youtube: "" },
  { title: "Podcast Episode 3", category: "Podcasts", youtube: "" },
];
