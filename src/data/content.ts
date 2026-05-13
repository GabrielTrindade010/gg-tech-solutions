import {
  Bot,
  Cloud,
  Code2,
  Cpu,
  Layers,
  LayoutDashboard,
  Palette,
  Plug,
  Smartphone,
  Workflow,
} from "lucide-react";

export const services = [
  {
    title: "Desenvolvimento Web",
    description:
      "SPAs, landing pages e portais com Core Web Vitals impecáveis, SSR/SSG e edge-ready.",
    icon: Code2,
  },
  {
    title: "Sistemas SaaS",
    description:
      "Produtos multi-tenant, billing, permissões e observabilidade desde o primeiro deploy.",
    icon: LayoutDashboard,
  },
  {
    title: "Apps Mobile",
    description:
      "Experiências nativas e híbridas com offline-first, push e analytics integrados.",
    icon: Smartphone,
  },
  {
    title: "UI/UX Design",
    description:
      "Design systems, prototipagem high-fidelity e motion que elevam conversão e retenção.",
    icon: Palette,
  },
  {
    title: "Automação",
    description:
      "Fluxos inteligentes entre CRMs, ERPs e squads — menos retrabalho, mais throughput.",
    icon: Workflow,
  },
  {
    title: "Inteligência Artificial",
    description:
      "Copilotos, RAG e pipelines de ML com governança, custo previsível e segurança.",
    icon: Bot,
  },
  {
    title: "Cloud Solutions",
    description:
      "Arquitetura resiliente em AWS/GCP/Azure com IaC, CI/CD e custos otimizados.",
    icon: Cloud,
  },
  {
    title: "APIs e Integrações",
    description:
      "Gateways, webhooks, contratos versionados e SLAs que escalam com o seu produto.",
    icon: Plug,
  },
] as const;

export const differentiators = [
  {
    title: "Performance",
    description: "Entregamos experiências sub-segundo com budgets de bundle e cache inteligente.",
    metric: "95+",
    suffix: " Lighthouse",
  },
  {
    title: "Escalabilidade",
    description: "Filas, shards e edge desde o dia um — preparado para picos virais.",
    metric: "10x",
    suffix: " capacidade planejada",
  },
  {
    title: "Segurança",
    description: "Threat modeling, OWASP ASVS e auditorias contínuas em cada release.",
    metric: "SOC2",
    suffix: "-ready",
  },
  {
    title: "UX moderna",
    description: "Microinterações, acessibilidade WCAG e motion que não compromete foco.",
    metric: "AAA",
    suffix: " contraste onde importa",
  },
  {
    title: "Código limpo",
    description: "TypeScript estrito, testes e revisões que mantêm velocidade no longo prazo.",
    metric: "100%",
    suffix: " TS strict",
  },
  {
    title: "SEO técnico",
    description: "Schema, sitemaps, SSR e Vitals monitorados em tempo real.",
    metric: "Core",
    suffix: " Web Vitals",
  },
  {
    title: "Arquitetura robusta",
    description: "DDD light, boundaries claros e observabilidade ponta a ponta.",
    metric: "SLA",
    suffix: " 99.95%",
  },
  {
    title: "Alta disponibilidade",
    description: "Multi-AZ, failover automático e runbooks que dormem tranquilos.",
    metric: "RTO",
    suffix: "< 15min",
  },
] as const;

export const projects = [
  {
    title: "Nebula Commerce",
    category: "SaaS B2B",
    description: "Checkout headless com pagamentos globais e experimentação em tempo real.",
    gradient: "from-[#0077b6] to-[#48cae4]",
  },
  {
    title: "Pulse Health",
    category: "Mobile + API",
    description: "Telemedicina com agenda inteligente e integração HL7/FHIR.",
    gradient: "from-[#003566] to-[#0077b6]",
  },
  {
    title: "Atlas Analytics",
    category: "Data Platform",
    description: "Lakehouse em tempo real com dashboards cinematográficos.",
    gradient: "from-[#001233] to-[#48cae4]",
  },
  {
    title: "Vertex CRM",
    category: "Automação",
    description: "Pipeline rev ops com IA preditiva e playbooks dinâmicos.",
    gradient: "from-[#0077b6] to-[#90e0ef]",
  },
] as const;

export const testimonials = [
  {
    quote:
      "A GG Tech elevou nosso produto ao nível de uma big tech — performance e design impecáveis.",
    name: "Marina Duarte",
    role: "CPO · Vertex Labs",
  },
  {
    quote:
      "Da descoberta ao deploy, squads integrados e comunicação cristalina. ROI em semanas.",
    name: "Rafael Costa",
    role: "CTO · Nebula Commerce",
  },
  {
    quote:
      "Segurança e velocidade no mesmo pacote. Nossos audits nunca foram tão tranquilos.",
    name: "Helena M.",
    role: "Head of Eng · Pulse Health",
  },
] as const;

export const values = [
  {
    title: "Missão",
    body: "Capacitar negócios com software elegante, rápido e mensurável.",
    icon: Cpu,
  },
  {
    title: "Visão",
    body: "Ser o estúdio brasileiro referência em produtos digitais premium.",
    icon: Layers,
  },
  {
    title: "Valores",
    body: "Transparência radical, excelência técnica e parceria de longo prazo.",
    icon: Code2,
  },
] as const;
