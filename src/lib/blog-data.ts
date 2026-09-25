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
  { number: 7, slug: "devops-engineer", title: "DevOps engineer: cos'è, cosa fa e differenza con il cloud engineer", category: "Carriera Cloud", description: "Cosa fa un DevOps engineer, quali competenze servono, quanto guadagna e che differenza c'è con il cloud engineer. Con il percorso per diventarlo." },
  { number: 8, slug: "corso-aws", title: "Corso AWS in italiano: come scegliere quello giusto (2026)", category: "Certificazioni AWS", description: "Come scegliere un corso AWS in italiano: le 4 tipologie, 8 criteri di valutazione, i segnali d'allarme e le 5 domande da fare prima di iscriverti." },
  { number: 9, slug: "aws-cos-e", title: "AWS: cos'è e come funziona, spiegato semplice", seoTitle: "AWS: cos'è e come funziona, spiegato semplice (2026)", category: "Guide pratiche", description: "Cos'è AWS (Amazon Web Services), come funziona, i servizi principali, quanto costa e come iniziare a usarlo in 5 passi, anche partendo da zero." },
  { number: 10, slug: "cloud-computing-cos-e", title: "Cloud computing: cos'è, significato e come funziona", seoTitle: "Cloud computing: cos'è, significato e come funziona (2026)", category: "Guide pratiche", description: "Cos'è il cloud computing spiegato semplice: significato del nome, come funziona, IaaS, PaaS e SaaS, cloud pubblico e privato, vantaggi, svantaggi ed esempi." },
  { number: 11, slug: "cambiare-lavoro-mentre-lavori", title: "Come cambiare lavoro mentre lavori: piano pratico passo passo", seoTitle: "Come cambiare lavoro mentre lavori: piano pratico in 6 passi", category: "Cambio lavoro", description: "Cambiare lavoro mentre si lavora senza rischiare lo stipendio: come trovare il tempo, formarsi, cercare lavoro in modo discreto e gestire le dimissioni." },
  { number: 12, slug: "lavoro-da-remoto-senza-esperienza", title: "Lavoro da remoto senza esperienza: cosa esiste davvero (2026)", category: "Cambio lavoro", description: "Lavori da remoto senza esperienza: quali esistono, quanto si guadagna, come riconoscere le truffe e la strada realistica per arrivare a un buon lavoro da casa." },
  { number: 13, slug: "certificazione-aws-serve", title: "Certificazione AWS: serve davvero per trovare lavoro? Opinioni oneste", seoTitle: "Certificazione AWS: serve per trovare lavoro? Opinioni oneste", category: "Certificazioni AWS", description: "Una certificazione AWS serve davvero per trovare lavoro? Opinioni oneste: cosa fa per te, cosa non fa, quale conta di più e come farla pesare ai colloqui." },
  { number: 14, slug: "iaas-paas-saas", title: "IaaS, PaaS e SaaS: differenze con esempi pratici (2026)", category: "Guide pratiche", description: "La differenza tra IaaS, PaaS e SaaS spiegata semplice: esempi pratici su AWS, Azure e Google Cloud, tabella delle responsabilità e quale modello scegliere." },
  { number: 15, slug: "aws-skill-builder", title: "AWS Skill Builder e corsi AWS gratis: cosa trovi e dove non bastano", category: "Certificazioni AWS", description: "Cosa offre AWS Skill Builder gratis e a pagamento, gli altri corsi AWS gratuiti e dove le risorse gratuite non bastano per certificazione e lavoro." },
  { number: 16, slug: "terraform", title: "Terraform: cos'è e come si usa, guida per principianti (2026)", category: "Guide pratiche", description: "Terraform spiegato da zero: cos'è, come funziona, i comandi init, plan e apply, un esempio pratico su AWS, lo state file e gli errori da evitare." },
  { number: 17, slug: "git-tutorial", title: "Git tutorial in italiano: guida pratica da zero (2026)", category: "Guide pratiche", description: "Git tutorial in italiano per principianti: installazione, primi comandi, commit, branch, GitHub, .gitignore ed errori da evitare. Con esempi pratici." },
  { number: 18, slug: "aws-iam", title: "AWS IAM spiegato semplice: utenti, ruoli e policy (2026)", category: "Guide pratiche", description: "AWS IAM spiegato semplice: utenti, gruppi, ruoli e policy, un esempio di policy JSON, come AWS valuta i permessi, best practice ed errori da evitare." },
  { number: 19, slug: "python-per-principianti", title: "Python per principianti: da dove iniziare se parti da zero (2026)", category: "Guide pratiche", description: "Python per principianti: cosa installare, il primo programma, i 6 concetti base con esempi, un mini progetto e un piano di studio in 4 settimane." },
  { number: 20, slug: "cv-senza-esperienza", title: "CV senza esperienza: come scriverlo (con esempio per il settore IT)", seoTitle: "CV senza esperienza: come scriverlo, con esempio per l\'IT (2026)", category: "Cambio lavoro", description: "Come scrivere un CV senza esperienza: struttura, cosa scrivere in ogni sezione, un esempio completo per il settore IT ed errori da evitare." },
  { number: 21, slug: "lavori-ben-pagati-senza-diploma", title: "Lavori ben pagati senza diploma: le opzioni reali (2026)", seoTitle: "Lavori senza diploma ben pagati: le opzioni reali (2026)", category: "Cambio lavoro", description: "Lavori senza diploma ben pagati in Italia: 7 opzioni reali, cosa serve per accedervi, il caso del settore IT e come recuperare il diploma da adulti." },
  { number: 22, slug: "stipendio-cloud-engineer", title: "Stipendio cloud engineer in Italia: quanto si guadagna davvero (2026)", seoTitle: "Stipendio cloud engineer in Italia: quanto si guadagna (2026)", category: "Carriera Cloud", description: "Quanto guadagna un cloud engineer in Italia nel 2026: RAL junior e media dalle principali fonti, netto in busta paga, da cosa dipende e come aumentarlo." },
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
const PUBLISHED: Record<string, number> = { "lavori-ben-pagati-senza-laurea": 10, "voglio-cambiare-lavoro": 9, "come-diventare-cloud-engineer": 12, "certificazioni-aws": 11, "aws-cloud-practitioner": 10, "aws-solutions-architect-associate": 12, "devops-engineer": 10, "corso-aws": 8, "aws-cos-e": 9, "cloud-computing-cos-e": 10, "cambiare-lavoro-mentre-lavori": 8, "lavoro-da-remoto-senza-esperienza": 9, "certificazione-aws-serve": 7, "iaas-paas-saas": 9, "aws-skill-builder": 9, "terraform": 11, "git-tutorial": 12, "aws-iam": 11, "python-per-principianti": 11, "cv-senza-esperienza": 9, "lavori-ben-pagati-senza-diploma": 8, "stipendio-cloud-engineer": 7 };
const RELATED_OVERRIDES: Record<string, string[]> = {
  "lavori-ben-pagati-senza-laurea": ["come-diventare-cloud-engineer", "cambiare-lavoro-mentre-lavori", "certificazioni-aws"],
  "come-diventare-cloud-engineer": ["certificazioni-aws", "stipendio-cloud-engineer", "cloud-engineer-cosa-fa"],
  "voglio-cambiare-lavoro": ["lavori-ben-pagati-senza-laurea", "cambiare-lavoro-mentre-lavori", "lavori-per-cambiare-vita"],
  "certificazioni-aws": ["come-diventare-cloud-engineer", "aws-cloud-practitioner", "certificazione-aws-serve"],
  "stipendio-cloud-engineer": ["come-diventare-cloud-engineer", "devops-engineer", "aws-solutions-architect-associate"],
  "lavori-ben-pagati-senza-diploma": ["lavori-ben-pagati-senza-laurea", "voglio-cambiare-lavoro", "come-diventare-cloud-engineer"],
  "cv-senza-esperienza": ["lavoro-da-remoto-senza-esperienza", "come-diventare-cloud-engineer", "certificazione-aws-serve"],
  "python-per-principianti": ["git-tutorial", "come-diventare-cloud-engineer", "devops-engineer"],
  "aws-iam": ["aws-cloud-practitioner", "aws-solutions-architect-associate", "aws-cos-e"],
  "git-tutorial": ["terraform", "devops-engineer", "come-diventare-cloud-engineer"],
  "terraform": ["devops-engineer", "come-diventare-cloud-engineer", "iaas-paas-saas"],
  "aws-skill-builder": ["corso-aws", "aws-cloud-practitioner", "aws-solutions-architect-associate"],
  "iaas-paas-saas": ["cloud-computing-cos-e", "aws-cos-e", "come-diventare-cloud-engineer"],
  "certificazione-aws-serve": ["aws-solutions-architect-associate", "certificazioni-aws", "come-diventare-cloud-engineer"],
  "lavoro-da-remoto-senza-esperienza": ["cambiare-lavoro-mentre-lavori", "cv-senza-esperienza", "come-diventare-cloud-engineer"],
  "cambiare-lavoro-mentre-lavori": ["voglio-cambiare-lavoro", "lavori-ben-pagati-senza-laurea", "come-diventare-cloud-engineer"],
  "cloud-computing-cos-e": ["aws-cos-e", "iaas-paas-saas", "come-diventare-cloud-engineer"],
  "aws-cos-e": ["cloud-computing-cos-e", "certificazioni-aws", "aws-cloud-practitioner"],
  "corso-aws": ["aws-skill-builder", "certificazioni-aws", "aws-cloud-practitioner"],
  "devops-engineer": ["come-diventare-cloud-engineer", "cloud-engineer-cosa-fa", "aws-solutions-architect-associate"],
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