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

export type GraphicCategory = 'logo' | 'visiting-card' | 'social-media' | 'banner';

export interface GraphicDesignItem {
  id: string;
  title: string;
  category: GraphicCategory;
  subcategory: string;
  clientOrProjectName: string;
  assetPath: string;
  pngPath?: string;
  markPath?: string;
  thumbnailPath: string;
  originalSource: string;
  dimensions: string;
  aspectRatio: '1:1' | '1.4:1' | '2.8:1' | '16:9';
  backgroundColor: 'dark' | 'light' | 'neutral';
  description: string;
  tags: string[];
  finishDetails?: string;
  campaign?: string;
  brandGroupId?: string;
}

export interface BrandSystem {
  id: string;
  name: string;
  industry: string;
  description: string;
  accentColor?: string;
  itemIds: string[];
}

export interface InquiryFormData {
  serviceType: string;
  businessName: string;
  industry: string;
  existingWebsite: string;
  projectDescription: string;
  fullName: string;
  email: string;
  phone: string;
  budgetTier?: string;
  timeline?: string;
}
