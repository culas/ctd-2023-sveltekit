export interface Contributor {
  name: string;
  subtitle: string;
  teaser?: {
    sizes: {
      preview: string;
      small: string;
      original: string;
    }
  }
}