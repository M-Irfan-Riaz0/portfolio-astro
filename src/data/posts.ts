export type Post = {
  slug: string;
  title: string;
  titleAccent: string;
  titleTail: string;
  urduTag: string;
  category: string;
  readMinutes: number;
  date: string;
  excerpt: string;
};

export const POSTS: Record<string, Post> = {
  "local-seo-playbook": {
    slug: "local-seo-playbook",
    title: "Pakistani SMBs ke liye",
    titleAccent: "Local SEO",
    titleTail: "Playbook",
    urduTag: "نئی تحریر",
    category: "SEO",
    readMinutes: 8,
    date: "June 2026",
    excerpt:
      "Lahore, Karachi ya Islamabad — agar aap ka business local hai, to Google ke first page par aana sirf luck nahi. Yeh ek system hai.",
  },
};
