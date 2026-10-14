export type Language = 'pt' | 'en';

export interface KPI {
  value: string;
  label: { pt: string; en: string };
  detail: { pt: string; en: string };
  company: string;
}

export interface Experience {
  company: string;
  period: { pt: string; en: string };
  role: { pt: string; en: string };
  bullets: { pt: string[]; en: string[] };
  technologies: string[];
  tags: string[];
  highlightMetric?: string;
}

export interface Course {
  name: string;
  period: { pt: string; en: string };
}

export interface LanguageSkill {
  name: { pt: string; en: string };
  level: { pt: string; en: string };
}

export interface TimelineMilestone {
  year: string;
  title: { pt: string; en: string };
  companyOrOrg?: string;
  content: { pt: string; en: string };
  category: { pt: string; en: string };
  tag: string;
}

export interface SkillCategory {
  category: { pt: string; en: string };
  items: string[];
}

export interface PersonalInfo {
  name: string;
  title: { pt: string; en: string };
  headline: { pt: string; en: string };
  location: string;
  phone: string;
  phoneRaw: string;
  email: string;
  linkedin: string;
  linkedinDisplay: string;
  about: { pt: string; en: string };
}

export const resumeData = {
  personal: {
    name: 'Emerson Renan Seii',
    title: {
      pt: 'Especialista em Business Intelligence & Power Platform',
      en: 'Power Platform & Business Intelligence Specialist',
    },
    headline: {
      pt: 'Business Intelligence & Data Engineering',
      en: 'Power Platform & Data Engineering Specialist',
    },
    location: 'Santo André - SP, Brasil',
    phone: '11 9 4175-1989',
    phoneRaw: '5511941751989',
    email: 'emr.rseii@gmail.com',
    linkedin: 'https://linkedin.com/in/emersonrenanseii',
    linkedinDisplay: 'linkedin.com/in/emersonrenanseii',
    about: {
      pt: 'Profissional de Business Intelligence com mais de 4 anos de experiência em Power BI, Microsoft Fabric, SQL, Power Platform e desenvolvimento de pipelines de dados. Experiência na construção de soluções analíticas end-to-end, desde extração e transformação de dados até modelagem dimensional e desenvolvimento de dashboards executivos. Atuação em Supply Chain, Operações e Marketing, com foco em automação, performance e geração de insights estratégicos.',
      en: 'Power Platform developer with 4 years of experience delivering solutions using Power BI, Power Apps, Power Automate, and Microsoft Fabric. Specialized in process automation, data integration, and transforming business requirements into scalable solutions that improve operational efficiency and decision-making.',
    },
  },

  kpis: [
    {
      value: '-55%',
      label: {
        pt: 'Redução em Pedidos Atrasados',
        en: 'Reduction in Delayed Orders',
      },
      detail: {
        pt: 'Dashboards estratégicos em Power BI para Supply Chain',
        en: 'Strategic Power BI Supply Chain intelligence models',
      },
      company: 'Ajinomoto',
    },
    {
      value: '-50%',
      label: {
        pt: 'Tempo de Carga dos Dados',
        en: 'Data Pipeline Load Latency',
      },
      detail: {
        pt: 'Migração de Data Flow Gen 2 para Microsoft Fabric Notebooks',
        en: 'Dataflow Gen 2 migration to Fabric Notebooks',
      },
      company: 'AlmapBBDO',
    },
    {
      value: '-60%',
      label: {
        pt: 'Tempo de Atualização e Refresh',
        en: 'Refresh & Processing Time',
      },
      detail: {
        pt: 'Otimização de pipelines de visualização e modelagem',
        en: 'Optimization of visualization and data models',
      },
      company: 'Certiphic',
    },
    {
      value: '1 hr/dia',
      label: {
        pt: 'Economia por Preenchimento',
        en: 'Saved Daily per User',
      },
      detail: {
        pt: 'Aplicativo de feedback operacional desenvolvido no Power Apps',
        en: 'Operational feedback app deployed in Power Apps Canvas',
      },
      company: 'AlmapBBDO',
    },
    {
      value: '4+ Anos',
      label: {
        pt: 'Soluções End-to-End',
        en: 'End-to-End Analytics Experience',
      },
      detail: {
        pt: 'Power BI, Microsoft Fabric, SQL e Power Platform',
        en: 'Power BI, Microsoft Fabric, SQL & Power Platform',
      },
      company: 'Enterprise',
    },
  ] as KPI[],

  experiences: [
    {
      company: 'ALMAPBBDO',
      period: {
        pt: 'Set/2025 - Presente',
        en: 'Sep/2025 - Present',
      },
      role: {
        pt: 'Especialista em Business Intelligence',
        en: 'Power Platform Specialist',
      },
      highlightMetric: '-50% Load Time',
      bullets: {
        pt: [
          'Desenvolvi aplicativo de feedback através do Power Apps, diminuindo em até 1 hora o preenchimento manual de formulários pela equipe.',
          'Desenvolvi o Pipeline de Dados utilizando Data Flow Gen 2, diminuindo o tempo de execução do ETL em até 30%, além de desenvolver novos dashboards para melhoria de Data Visualization.',
          'Atuação focada na reconstrução e estabilização de dashboards legados críticos corporativos após perda de credenciais e documentação anterior.',
          'Redesenhei a arquitetura de pipeline de dados e liderei a migração de Data Flow Gen 2 para uma solução baseada em Microsoft Fabric Notebooks, reduzindo o tempo de carregamento dos dados em aproximadamente 50% com maior manutenibilidade.',
        ],
        en: [
          'Developed a feedback application using Power Apps, reducing manual form completion time by up to 1 hour.',
          'Built a data pipeline using Dataflow Gen2, reducing ETL execution time by up to 30%, and developed new dashboards to improve data visualization.',
          'Focused on rebuilding and stabilizing critical legacy dashboards after the loss of credentials and documentation.',
          'Redesigned the data pipeline architecture and led the migration to a Notebook-based solution in Microsoft Fabric, reducing data load times by approximately 50% while improving maintainability and reliability.',
        ],
      },
      technologies: ['Power BI', 'Power Apps', 'Microsoft Fabric', 'Excel', 'SQL', 'Python', 'SharePoint Online'],
      tags: ['fabric', 'powerbi', 'powerapps', 'sql', 'python', 'etl'],
    },
    {
      company: 'AJINOMOTO',
      period: {
        pt: 'Jan/2025 - Ago/2025',
        en: 'Jan/2025 - Aug/2025',
      },
      role: {
        pt: 'Especialista em Business Intelligence',
        en: 'Business Intelligence Specialist',
      },
      highlightMetric: '-55% Late Orders',
      bullets: {
        pt: [
          'Atuei diretamente no Supply Chain desenvolvendo novos dashboards por meio de Power BI e gerando insights estratégicos para diminuição de até 55% em pedidos atrasados.',
          'Realizava a extração direta de dados do SAP, a transformação analítica e o carregamento consistente para relatórios executivos de tomada de decisão.',
          'Contribuí ativamente para automação contínua de processos corporativos, diminuindo cerca de 20% do trabalho manual das equipes operacionais.',
        ],
        en: [
          'Worked directly with Supply Chain, developing new dashboards in Power BI and generating strategic insights that reduced late orders by up to 55%.',
          'Performed data extraction from SAP, as well as data transformation and loading for strategic executive reports.',
          'Contributed to process automation, reducing manual work across operations by approximately 20%.',
        ],
      },
      technologies: ['Power BI', 'SAP', 'Excel', 'Power Apps', 'SharePoint Online'],
      tags: ['powerbi', 'sap', 'powerapps', 'excel', 'supplychain'],
    },
    {
      company: 'CERTIPHIC',
      period: {
        pt: 'Mar/2023 - Dez/2024',
        en: 'Mar/2023 - Dec/2024',
      },
      role: {
        pt: 'Analista de Business Intelligence',
        en: 'Business Intelligence Analyst',
      },
      highlightMetric: '-60% Refresh Time',
      bullets: {
        pt: [
          'Realizei o desenvolvimento de novos dashboards analíticos, diminuindo o tempo de atualização e processamento das consultas em até 60%.',
          'Contribuí ativamente com o desenvolvimento de novos fluxos de processos, criando aplicativos através do Power Apps e automatizando rotinas com Power Automate.',
          'Fui responsável por administrar, atualizar e desenvolver a infraestrutura de colaboração no SharePoint Online.',
        ],
        en: [
          'Developed new dashboards, reducing data refresh and processing time by up to 60%.',
          'Actively contributed to new process development by creating applications with Power Apps and automating workflows with Power Automate.',
          'Responsible for updating and developing SharePoint Online collaboration structures.',
        ],
      },
      technologies: ['Power BI', 'Power Automate', 'Power Apps Canvas', 'SharePoint Online', 'Power Pages', 'Excel'],
      tags: ['powerbi', 'powerautomate', 'powerapps', 'sharepoint', 'powerpages'],
    },
  ] as Experience[],

  education: {
    institution: 'Centro Universitário FEI',
    degree: {
      pt: 'Bacharelado em Engenharia de Produção',
      en: "Bachelor's Degree in Production Engineering",
    },
    period: {
      pt: 'Janeiro/2017 - Dezembro/2022',
      en: 'January/2017 - December/2022',
    },
  },

  courses: [
    {
      name: 'Power Apps',
      period: {
        pt: 'Fevereiro/2024 - Março/2024',
        en: 'February/2024 - March/2024',
      },
    },
    {
      name: 'Python',
      period: {
        pt: 'Janeiro/2024 - Fevereiro/2024',
        en: 'January/2024 - February/2024',
      },
    },
    {
      name: 'Power BI',
      period: {
        pt: 'Outubro/2020 - Dezembro/2020',
        en: 'October/2020 - December/2020',
      },
    },
    {
      name: 'Excel Avançado / Advanced Excel',
      period: {
        pt: 'Janeiro/2020 - Fevereiro/2020',
        en: 'January/2020 - February/2020',
      },
    },
  ] as Course[],

  languages: [
    {
      name: { pt: 'Português', en: 'Portuguese' },
      level: { pt: 'Nativo', en: 'Native' },
    },
    {
      name: { pt: 'Inglês', en: 'English' },
      level: { pt: 'Avançado', en: 'Advanced' },
    },
    {
      name: { pt: 'Espanhol', en: 'Spanish' },
      level: { pt: 'Intermediário', en: 'Intermediate' },
    },
  ] as LanguageSkill[],

  skillCategories: [
    {
      category: {
        pt: 'Business Intelligence & Visualização',
        en: 'Business Intelligence & Visualization',
      },
      items: ['Power BI', 'DAX', 'Power Query (M)', 'Modelagem Dimensional (Star Schema)', 'Dashboards Executivos', 'Data Storytelling'],
    },
    {
      category: {
        pt: 'Engenharia de Dados & Cloud',
        en: 'Data Engineering & Cloud',
      },
      items: ['Microsoft Fabric', 'Fabric Notebooks', 'Data Flow Gen 2', 'Pipelines ETL', 'SQL', 'Python (Pandas, PySpark)'],
    },
    {
      category: {
        pt: 'Power Platform & Automação',
        en: 'Power Platform & Automation',
      },
      items: ['Power Apps Canvas', 'Power Automate', 'Power Pages', 'SharePoint Online', 'Automação de Processos'],
    },
    {
      category: {
        pt: 'ERP & Domínio de Negócios',
        en: 'Enterprise Systems & Domains',
      },
      items: ['Extração SAP', 'Excel Avançado / VBA', 'Supply Chain Analytics', 'Operações & Logística', 'Marketing & Mídia'],
    },
  ] as SkillCategory[],

  techFilterOptions: [
    { id: 'all', label: { pt: 'Todas as Tecnologias', en: 'All Technologies' } },
    { id: 'powerbi', label: { pt: 'Power BI & DAX', en: 'Power BI & DAX' } },
    { id: 'fabric', label: { pt: 'Microsoft Fabric & ETL', en: 'Microsoft Fabric & ETL' } },
    { id: 'powerapps', label: { pt: 'Power Apps & Automate', en: 'Power Apps & Automate' } },
    { id: 'sql', label: { pt: 'SQL & Python', en: 'SQL & Python' } },
    { id: 'sap', label: { pt: 'SAP & Supply Chain', en: 'SAP & Supply Chain' } },
  ],

  timelineMilestones: [
    {
      year: '1996',
      title: {
        pt: 'Primeiro Contato com a Tecnologia',
        en: 'First Spark in Technology',
      },
      category: { pt: 'Origem', en: 'Origin' },
      tag: 'Infância & Computação',
      content: {
        pt: 'Nasci em 1996 em São Paulo e quando criança meu pai sempre me incentivou a utilizar o computador. Esse incentivo à computação fez com que eu me apaixonasse por tecnologia e também por jogos eletrônicos.',
        en: 'Born in 1996 in São Paulo. As a child, my father always encouraged me to use computers, sparking a lifelong fascination with technology, computing, and electronic systems.',
      },
    },
    {
      year: '2016',
      title: {
        pt: 'Decisão pela Engenharia',
        en: 'Choice for Engineering',
      },
      category: { pt: 'Vocação', en: 'Vocation' },
      tag: 'Ciências Exatas & Tecnologia',
      content: {
        pt: 'Em 2016 realizando o cursinho estava em dúvida entre fazer Administração ou Engenharia, porém minha vontade de fazer Engenharia era maior uma vez que já tinha facilidade com tecnologia e também gostava de exatas.',
        en: 'In 2016, during college prep, I debated between Business Administration and Engineering. The drive for Engineering prevailed thanks to my natural affinity with technology and exact sciences.',
      },
    },
    {
      year: '2017',
      title: {
        pt: 'Ingresso no Centro Universitário FEI',
        en: 'Admitted to Centro Universitário FEI',
      },
      companyOrOrg: 'Centro Universitário FEI',
      category: { pt: 'Formação Acadêmica', en: 'Higher Education' },
      tag: 'Engenharia de Produção',
      content: {
        pt: 'Em 2017 ingressei em Engenharia de Produção no Centro Universitário FEI, desenvolvendo forte base em otimização de processos, métodos quantitativos e análise de sistemas produtivos.',
        en: 'In 2017, I enrolled in Production Engineering at Centro Universitário FEI, building an in-depth foundation in process optimization, quantitative methods, and systems analysis.',
      },
    },
    {
      year: '2020',
      title: {
        pt: 'Imersão em Excel Avançado & Power BI',
        en: 'Deep Dive in Advanced Excel & Power BI',
      },
      category: { pt: 'Capacitação', en: 'Upskilling' },
      tag: 'Power BI & DAX',
      content: {
        pt: 'Em 2020 o ano da pandemia começou e com tudo fechado, decidi investir em cursos extracurriculares como por exemplo Excel Avançado e Power BI. Apesar do conhecimento prévio, fiz esses cursos para verificar lacunas e expandir minhas habilidades.',
        en: 'In 2020, as the pandemic lockdown began, I capitalized on the time by investing in specialized extracurricular courses including Advanced Excel and Power BI, closing knowledge gaps and sharpening analytical capabilities.',
      },
    },
    {
      year: '2021',
      title: {
        pt: 'Engenharia de Processos na Bridgestone',
        en: 'Process Engineering at Bridgestone',
      },
      companyOrOrg: 'Bridgestone South America',
      category: { pt: 'Primeira Experiência', en: 'First Experience' },
      tag: 'Chão de Fábrica & Qualidade',
      content: {
        pt: 'Em 2021, tive minha primeira experiência profissional na Bridgestone South America como Estagiário de Engenharia de Processos na equipe de Pneus de Passageiros. Foi uma experiência incrível na qual vivenciei a rotina da fábrica e a complexidade da produção.',
        en: 'In 2021, landed my first professional experience at Bridgestone South America as Process Engineering Intern in Passenger Tires, experiencing industrial floor operations and manufacturing complexity firsthand.',
      },
    },
    {
      year: '2022-2023',
      title: {
        pt: 'Graduação na FEI & Início na Certiphic',
        en: 'Graduation & Certiphic Onboarding',
      },
      companyOrOrg: 'FEI & Certiphic',
      category: { pt: 'Carreira em BI', en: 'BI Analyst' },
      tag: 'Power BI & Dashboards',
      content: {
        pt: 'No final de 2022, me formei em Engenharia de Produção no Centro Universitário FEI. Em 2023 fui contratado pela Certiphic como Analista, focando inteiramente no desenvolvimento de relatórios analíticos para clientes.',
        en: 'In late 2022, graduated in Production Engineering at FEI. In 2023, joined Certiphic as Operations Analyst, focusing entirely on client-facing analytics, data visualization, and reporting.',
      },
    },
    {
      year: '2024',
      title: {
        pt: 'Automações & Transição para a Ajinomoto',
        en: 'Automations & Move to Ajinomoto',
      },
      companyOrOrg: 'Certiphic & Ajinomoto',
      category: { pt: 'Consolidação', en: 'Consolidation' },
      tag: 'Power Apps & Power Automate',
      content: {
        pt: 'Na Certiphic liderei a redução do tempo de atualização e processamento em 60% e criei fluxos com Power Apps e Power Automate. Em 2024, iniciei uma nova jornada na Ajinomoto do Brasil com foco em BI corporativo.',
        en: 'At Certiphic, reduced dashboard refresh time by up to 60% and automated workflows with Power Apps and Power Automate. In 2024, transitioned to Ajinomoto do Brasil focusing on corporate BI.',
      },
    },
    {
      year: '2025',
      title: {
        pt: 'Especialista em BI & Supply Chain na Ajinomoto',
        en: 'BI Specialist & Supply Chain at Ajinomoto',
      },
      companyOrOrg: 'Ajinomoto do Brasil',
      category: { pt: 'Especialista BI', en: 'BI Specialist' },
      tag: 'SAP & Supply Chain (-55% atrasos)',
      content: {
        pt: 'Na Ajinomoto atuei como Especialista em Business Intelligence, desenvolvendo dashboards estratégicos de Supply Chain que geraram insights para redução de até 55% em pedidos atrasados, com extração de dados do SAP.',
        en: 'Served as Business Intelligence Specialist at Ajinomoto, developing strategic Supply Chain dashboards that generated actionable insights, cutting late orders by up to 55%, with hands-on SAP data extraction.',
      },
    },
    {
      year: '2025-2026',
      title: {
        pt: 'Especialista em Power Platform na AlmapBBDO',
        en: 'Power Platform Specialist at AlmapBBDO',
      },
      companyOrOrg: 'AlmapBBDO',
      category: { pt: 'Presente', en: 'Present Role' },
      tag: 'Fabric Notebooks & Power Platform',
      content: {
        pt: 'Em Setembro de 2025, assumi o desafio como Especialista em Power Platform na AlmapBBDO. Liderei a migração de pipelines para Microsoft Fabric Notebooks (-50% tempo de carga) e desenvolvi apps operacionais no Power Apps.',
        en: 'In September 2025, joined AlmapBBDO as Power Platform Specialist, expanding beyond Power BI to architect data pipelines with Microsoft Fabric Notebooks (-50% load time) and deploy operational Power Apps.',
      },
    },
  ] as TimelineMilestone[],
};
