export interface ProjectHighlight {
  title: string;
  description: string;
}

export interface ProjectData {
  id: string;
  title: string;
  client: string;
  category: string;
  tags: string[];
  description: string;
  isConcept: boolean;
  year: string;
  services: string[];
  image: string;
  urlPreview?: string;
  accentColor: string;
  overview: string;
  challenge: string;
  solution: string;
  highlights: ProjectHighlight[];
  deliverables: string[];
  metricsContext: string;
  nextProjectId: string;
  prevProjectId: string;
}

export type DeviceMode = 'desktop' | 'tablet' | 'mobile';

export interface InquiryFormData {
  serviceType: string;
  businessName: string;
  industry: string;
  existingWebsite: string;
  projectDescription: string;
  fullName: string;
  email: string;
  phone: string;
}
