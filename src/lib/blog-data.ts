export const BLOG_CATEGORIES = [
  "Tutti",
  "Cambio lavoro",
  "Carriera Cloud",
  "Certificazioni AWS",
  "Guide pratiche",
] as const;

export type BlogCategory = Exclude<(typeof BLOG_CATEGORIES)[number], "Tutti">;

export interface BlogArticle {
  number: number;
  slug: string;
  title: string;
  category: BlogCategory;
  description: string;
  seoTitle?: string;
  published: boolean;
  readingTime: number;
  related: string[];
}

const articleSeeds: Array<Omit<BlogArticle, "published" | "readingTime" | "related">> = [
  { number: 1, slug: "lavori-ben-pagati-senza-laurea", title: "Lavori ben pagati senza laurea: quali sono davvero nel 2026", category: "Cambio lavoro", description: "Otto lavori ben pagati senza laurea in Italia: quanto si guadagna, cosa serve per iniziare e quanto tempo ci vuole. Con pro e contro onesti di ognuno." },
  { number: 2, slug: "voglio-cambiare-lavoro", title: "Voglio cambiare lavoro ma non so cosa fare: guida pratica in 6 passi", seoTitle: "Voglio cambiare lavoro ma non so cosa fare: guida in 6 passi", category: "Cambio lavoro", description: "Vorresti cambiare lavoro ma non sai cosa fare? Un metodo pratico in 6 passi per capire il vero motivo, scegliere una direzione e partire senza rischiare lo stipendio." },
  { number: 3, slug: "come-diventare-cloud-engineer", title: "Come diventare cloud engineer nel 2026 (anche senza laurea)", category: "Carriera Cloud", description: "La roadmap completa per diventare cloud engineer partendo da zero: competenze, certificazioni AWS, tempi realistici, progetti per il portfolio e primo lavoro." },
  { number: 4, slug: "certificazioni-aws", title: "Certificazioni AWS: quali sono, quanto costano e da quale partire", category: "Certificazioni AWS", description: "Tutte le certificazioni AWS aggiornate al 2026: livelli, costi degli esami, novità e da quale certificazione partire in base al tuo profilo." },
  { number: 5, slug: "aws-cloud-practitioner", title: "AWS Cloud Practitioner (CLF-C02): guida completa all'esame 2026", category: "Certificazioni AWS", description: "Tutto sull'esame AWS Cloud Practitioner CLF-C02: domini, servizi da studiare, domande, costo, esame in inglese e un piano di studio in 4 settimane." },
  { number: 6, slug: "aws-solutions-architect-associate", title: "AWS Solutions Architect Associate (SAA-C03): guida completa all'esame 2026", seoTitle: "AWS Solutions Architect Associate (SAA-C03): guida all'esame 2026", category: "Certificazioni AWS", description: "Tutto sull'esame AWS Solutions Architect Associate SAA-C03: domini e pesi, servizi da studiare, domande di scenario, esame in inglese e piano di studio in 8 settimane." },
  { number: 7, slug: "devops-engineer", title: "DevOps engineer: cos'è, cosa fa e differenza con il cloud engineer", category: "Carriera Cloud", description: "Ruoli, attività e differenze spiegate in modo semplice per scegliere la direzione giusta." },
  { number: 8, slug: "corso-aws", title: "Corso AWS in italiano: come scegliere quello giusto", category: "Certificazioni AWS", description: "I criteri per valutare un corso AWS e capire se porta davvero a competenze spendibili." },
  { number: 9, slug: "aws-cos-e", title: "AWS: cos'è e come funziona, spiegato semplice", category: "Guide pratiche", description: "Una spiegazione accessibile di Amazon Web Services, dei suoi servizi e del suo utilizzo." },
  { number: 10, slug: "cloud-computing-cos-e", title: "Cloud computing: cos'è e come funziona, spiegato semplice", category: "Guide pratiche", description: "Il cloud computing raccontato senza tecnicismi, con esempi vicini alla vita quotidiana." },
  { number: 11, slug: "cambiare-lavoro-mentre-lavori", title: "Come cambiare lavoro mentre lavori: piano pratico passo passo", category: "Cambio lavoro", description: "Un piano per formarti e cercare nuove opportunità senza lasciare subito il lavoro attuale." },
  { number: 12, slug: "lavoro-da-remoto-senza-esperienza", title: "Lavoro da remoto senza esperienza: cosa esiste davvero", category: "Cambio lavoro", description: "Le opportunità reali da remoto per chi parte da zero e come evitare false promesse." },
  { number: 13, slug: "certificazione-aws-serve", title: "Certificazione AWS: serve davvero per trovare lavoro?", category: "Certificazioni AWS", description: "Quanto conta una certificazione AWS nei colloqui e cosa serve oltre al certificato." },
  { number: 14, slug: "iaas-paas-saas", title: "IaaS, PaaS e SaaS: differenze con esempi pratici", category: "Guide pratiche", description: "I tre modelli del cloud spiegati con esempi semplici e facili da ricordare." },
  { number: 15, slug: "aws-skill-builder", title: "AWS Skill Builder e corsi AWS gratis: cosa trovi e dove non bastano", category: "Certificazioni AWS", description: "Cosa offrono le risorse gratuite AWS e quando serve un percorso più strutturato." },
  { number: 16, slug: "terraform", title: "Terraform: cos'è e come si usa, guida per principianti", category: "Guide pratiche", description: "Come funziona Terraform e perché è uno strumento centrale nelle infrastrutture cloud." },
  { number: 17, slug: "git-tutorial", title: "Git tutorial in italiano: guida pratica da zero", category: "Guide pratiche", description: "Le basi di Git, dai primi comandi al lavoro quotidiano su un progetto." },
  { number: 18, slug: "aws-iam", title: "AWS IAM spiegato semplice: utenti, ruoli e policy", category: "Guide pratiche", description: "Identità e permessi AWS spiegati con esempi pratici per chi parte da zero." },
  { number: 19, slug: "python-per-principianti", title: "Python per principianti: da dove iniziare se parti da zero", category: "Guide pratiche", description: "Una direzione chiara per muovere i primi passi con Python senza disperdersi." },
  { number: 20, slug: "cv-senza-esperienza", title: "CV senza esperienza: come scriverlo (con esempio per il settore IT)", category: "Cambio lavoro", description: "Come valorizzare progetti, competenze e formazione quando manca l'esperienza nel ruolo." },
  { number: 21, slug: "lavori-ben-pagati-senza-diploma", title: "Lavori ben pagati senza diploma: le opzioni reali", category: "Cambio lavoro", description: "Le opzioni concrete per costruire una professionalità richiesta anche senza diploma." },
  { number: 22, slug: "stipendio-cloud-engineer", title: "Stipendio cloud engineer in Italia: quanto si guadagna davvero", category: "Carriera Cloud", description: "Retribuzioni, esperienza e fattori che influenzano lo stipendio di un cloud engineer." },
  { number: 23, slug: "docker", title: "Docker spiegato da zero: cos'è e perché lo usano tutti", category: "Guide pratiche", description: "Container e immagini spiegati in modo intuitivo, con il loro ruolo nel lavoro cloud." },
  { number: 24, slug: "kubernetes", title: "Kubernetes per principianti: cos'è e quando serve", category: "Guide pratiche", description: "A cosa serve Kubernetes, quando si usa e perché non è il primo passo per tutti." },
  { number: 25, slug: "linux-per-principianti", title: "Linux per principianti: i comandi che devi sapere", category: "Guide pratiche", description: "I comandi Linux essenziali per iniziare a lavorare con server e ambienti cloud." },
  { number: 26, slug: "aws-o-azure", title: "AWS o Azure: quale imparare per primo", category: "Carriera Cloud", description: "Un confronto pratico per scegliere la piattaforma cloud da studiare per prima." },
  { number: 27, slug: "amazon-ec2", title: "Amazon EC2: cos'è e come funziona, guida per principianti", category: "Guide pratiche", description: "Le macchine virtuali di AWS spiegate dalle basi, senza dare nulla per scontato." },
  { number: 28, slug: "amazon-s3", title: "Amazon S3: cos'è e come si usa, guida per principianti", category: "Guide pratiche", description: "Come funziona l'archiviazione su AWS S3 e quali problemi permette di risolvere." },
  { number: 29, slug: "cloud-engineer-cosa-fa", title: "Cloud engineer: cosa fa in una giornata tipo", category: "Carriera Cloud", description: "Attività, strumenti e responsabilità raccontati attraverso una giornata di lavoro reale." },
  { number: 30, slug: "lavori-per-cambiare-vita", title: "Lavori per cambiare vita: le professioni che puoi imparare da adulto", category: "Cambio lavoro", description: "Professioni accessibili in età adulta e criteri per scegliere un cambiamento sostenibile." },
];

const relatedByCategory = (article: (typeof articleSeeds)[number]) =>
  articleSeeds
    .filter((candidate) => candidate.category === article.category && candidate.slug !== article.slug)
    .slice(0, 3)
    .map((candidate) => candidate.slug);

// slug -> minuti di lettura
const PUBLISHED: Record<string, number> = { "lavori-ben-pagati-senza-laurea": 10, "voglio-cambiare-lavoro": 9, "come-diventare-cloud-engineer": 12, "certificazioni-aws": 11, "aws-cloud-practitioner": 10, "aws-solutions-architect-associate": 12 };
const RELATED_OVERRIDES: Record<string, string[]> = {
  "lavori-ben-pagati-senza-laurea": ["come-diventare-cloud-engineer", "cambiare-lavoro-mentre-lavori", "certificazioni-aws"],
  "come-diventare-cloud-engineer": ["certificazioni-aws", "stipendio-cloud-engineer", "cloud-engineer-cosa-fa"],
  "voglio-cambiare-lavoro": ["lavori-ben-pagati-senza-laurea", "cambiare-lavoro-mentre-lavori", "lavori-per-cambiare-vita"],
  "certificazioni-aws": ["come-diventare-cloud-engineer", "aws-cloud-practitioner", "certificazione-aws-serve"],
  "aws-solutions-architect-associate": ["aws-cloud-practitioner", "certificazioni-aws", "come-diventare-cloud-engineer"],
  "aws-cloud-practitioner": ["certificazioni-aws", "aws-solutions-architect-associate", "certificazione-aws-serve"],
};

export const BLOG_ARTICLES: BlogArticle[] = articleSeeds.map((article) => ({
  ...article,
  published: PUBLISHED[article.slug] !== undefined,
  readingTime: PUBLISHED[article.slug] ?? 8,
  related: RELATED_OVERRIDES[article.slug] ?? relatedByCategory(article),
}));

export function getBlogArticle(slug: string) {
  return BLOG_ARTICLES.find((article) => article.slug === slug);
}