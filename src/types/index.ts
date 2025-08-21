export interface WebsiteInfo {
  name: string;
  type: string;
  primary_language: string;
  secondary_language: string;
  services: string[];
  description: {
    en: string;
    fr: string;
  };
  tagline: {
    en: string;
    fr: string;
  };
}

export interface BrandIdentity {
  mission: {
    en: string;
    fr: string;
  };
  vision: {
    en: string;
    fr: string;
  };
  values: Array<{
    en: string;
    fr: string;
  }>;
}

export interface ColorPalette {
  primary: string;
  primary_name: string;
  secondary: string;
  secondary_name: string;
  accent: string;
  accent_name: string;
  neutral: {
    white: string;
    light_gray: string;
    dark_gray: string;
    text_primary: string;
    text_secondary: string;
  };
  gradients: {
    hero_background: string;
    card_hover: string;
    cta_button: string;
  };
}

export interface Typography {
  primary_font: string;
  secondary_font: string;
  heading_weights: string[];
  body_weight: string;
  style: string;
}

export interface Layout {
  type: string;
  structure: string;
  inspiration: string;
}

export interface VisualDesign {
  color_palette: ColorPalette;
  typography: Typography;
  layout: Layout;
}

export interface HeroSection {
  background_video: {
    primary: string;
    fallback: string;
    duration: string;
    style: string;
  };
  content: {
    headline: {
      en: string;
      fr: string;
    };
    subheadline: {
      en: string;
      fr: string;
    };
    cta_buttons: Array<{
      en: string;
      fr: string;
      link: string;
    }>;
  };
  interactive_elements: {
    floating_icons: string;
    scroll_indicator: string;
    background_parallax: string;
  };
}

export interface Service {
  name: {
    en: string;
    fr: string;
  };
  description: {
    en: string;
    fr: string;
  };
  icon: string;
  animation: string;
}

export interface Feature {
  title: {
    en: string;
    fr: string;
  };
  description: {
    en: string;
    fr: string;
  };
}

export interface HomePage {
  url: {
    en: string;
    fr: string;
  };
  sections: {
    hero: HeroSection;
    services_overview: {
      title: {
        en: string;
        fr: string;
      };
      services: Service[];
    };
    why_choose_us: {
      title: {
        en: string;
        fr: string;
      };
      features: Feature[];
    };
    testimonials: {
      title: {
        en: string;
        fr: string;
      };
      animation: string;
    };
    cta_section: {
      background: string;
      title: {
        en: string;
        fr: string;
      };
      button: {
        en: string;
        fr: string;
      };
    };
  };
}

export interface ServiceDetail {
  name: {
    en: string;
    fr: string;
  };
  description: {
    en: string;
    fr: string;
  };
}

export interface ServiceCategory {
  category: string;
  title: {
    en: string;
    fr: string;
  };
  services: ServiceDetail[];
}

export interface ServicesPage {
  url: {
    en: string;
    fr: string;
  };
  hero: {
    title: {
      en: string;
      fr: string;
    };
    background: string;
  };
  services_detailed: ServiceCategory[];
}

export interface Destination {
  country: string;
  cities?: string[];
  highlights: {
    en: string[];
    fr: string[];
  };
  image?: string;
  animation?: string;
}

export interface DestinationCategory {
  category: string;
  title: {
    en: string;
    fr: string;
  };
  destinations: Destination[];
}

export interface DestinationsPage {
  url: {
    en: string;
    fr: string;
  };
  hero: {
    title: {
      en: string;
      fr: string;
    };
    interactive_map: string;
  };
  destination_categories: DestinationCategory[];
}

export interface Resource {
  title: {
    en: string;
    fr: string;
  };
  type: string;
  description: {
    en: string;
    fr: string;
  };
}

export interface BlogPost {
  title: {
    en: string;
    fr: string;
  };
  date: string;
  category: string;
}

export interface ResourceCategory {
  category: string;
  title: {
    en: string;
    fr: string;
  };
  resources?: Resource[];
  posts?: BlogPost[];
}

export interface ResourcesPage {
  url: {
    en: string;
    fr: string;
  };
  hero: {
    title: {
      en: string;
      fr: string;
    };
  };
  resource_categories: ResourceCategory[];
}

export interface FormField {
  name: string;
  label: {
    en: string;
    fr: string;
  };
  type: string;
  required?: boolean;
  options?: Array<{
    value?: string;
    label?: string;
    en?: string;
    fr?: string;
  }>;
}

export interface BookingForm {
  service_selection: {
    title: {
      en: string;
      fr: string;
    };
    options: Array<{
      en: string;
      fr: string;
    }>;
  };
  personal_info: {
    fields: FormField[];
  };
  appointment_details: {
    fields: FormField[];
  };
  additional_info: FormField;
}

export interface BookAppointmentPage {
  url: {
    en: string;
    fr: string;
  };
  hero: {
    title: {
      en: string;
      fr: string;
    };
    subtitle: {
      en: string;
      fr: string;
    };
  };
  booking_form: BookingForm;
  confirmation: {
    title: {
      en: string;
      fr: string;
    };
    message: {
      en: string;
      fr: string;
    };
  };
}

export interface ContactMethod {
  type: string;
  title: {
    en: string;
    fr: string;
  };
  details: {
    address?: string;
    hours?: {
      en: string;
      fr: string;
    };
    primary?: string;
    emergency?: string;
    general?: string;
    support?: string;
  };
}

export interface ContactPage {
  url: {
    en: string;
    fr: string;
  };
  hero: {
    title: {
      en: string;
      fr: string;
    };
    subtitle: {
      en: string;
      fr: string;
    };
  };
  contact_methods: ContactMethod[];
  contact_form: {
    title: {
      en: string;
      fr: string;
    };
    fields: FormField[];
  };
}

export interface PagesStructure {
  home: HomePage;
  services: ServicesPage;
  destinations: DestinationsPage;
  resources: ResourcesPage;
  book_appointment: BookAppointmentPage;
  contact: ContactPage;
}

export interface InteractiveFeatures {
  scroll_animations: {
    hero_parallax: string;
    service_cards: string;
    destination_reveals: string;
    counters: string;
    timeline: string;
  };
  hover_effects: {
    service_cards: string;
    destination_cards: string;
    buttons: string;
    navigation: string;
  };
  interactive_elements: {
    world_map: string;
    video_backgrounds: string;
    image_galleries: string;
    testimonial_slider: string;
    language_switcher: string;
    booking_calendar: string;
  };
  micro_animations: {
    loading_states: string;
    success_confirmations: string;
    error_handling: string;
    page_transitions: string;
  };
}

export interface TechnicalImplementation {
  animation_libraries: string[];
  video_handling: string[];
  internationalization: string[];
  performance_optimization: string[];
}

export interface SEOOptimization {
  keywords: {
    en: string[];
    fr: string[];
  };
  meta_descriptions: {
    en: string;
    fr: string;
  };
  structured_data: {
    organization: string;
    services: string;
    reviews: string;
  };
}

export interface ConversionOptimization {
  cta_placement: string;
  trust_signals: string[];
  lead_magnets: string[];
  urgency_elements: string[];
}

export interface PrestigeFlyData {
  website_info: WebsiteInfo;
  brand_identity: BrandIdentity;
  visual_design: VisualDesign;
  pages_structure: PagesStructure;
  interactive_features: InteractiveFeatures;
  technical_implementation: TechnicalImplementation;
  seo_optimization: SEOOptimization;
  conversion_optimization: ConversionOptimization;
}

export type Locale = 'en' | 'fr';
