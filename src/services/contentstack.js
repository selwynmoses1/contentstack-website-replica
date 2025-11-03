import Contentstack from 'contentstack';
import ContentstackLivePreview from '@contentstack/live-preview-utils';

// Initialize Contentstack Stack
const Stack = Contentstack.Stack({
  api_key: process.env.REACT_APP_CONTENTSTACK_API_KEY,
  delivery_token: process.env.REACT_APP_CONTENTSTACK_DELIVERY_TOKEN,
  environment: process.env.REACT_APP_CONTENTSTACK_ENVIRONMENT || 'production',
  region: process.env.REACT_APP_CONTENTSTACK_REGION || Contentstack.Region.US,
  // Live Preview configuration (optional - only if preview token is provided)
  ...(process.env.REACT_APP_CONTENTSTACK_PREVIEW_TOKEN && {
    live_preview: {
      enable: true,
      preview_token: process.env.REACT_APP_CONTENTSTACK_PREVIEW_TOKEN,
      management_token: process.env.REACT_APP_CONTENTSTACK_MANAGEMENT_TOKEN || '',
      host: process.env.REACT_APP_CONTENTSTACK_PREVIEW_HOST || 'rest-preview.contentstack.com'
    }
  })
});

// Initialize Live Preview if preview token is available
if (process.env.REACT_APP_CONTENTSTACK_PREVIEW_TOKEN) {
  try {
    ContentstackLivePreview.init({
      stackSdk: Stack,
      ssr: false // Client-side rendering
    });
    console.log('Contentstack Live Preview initialized');
  } catch (error) {
    console.warn('Failed to initialize Live Preview:', error);
  }
}

// Export onEntryChange function for Live Preview
export const onEntryChange = process.env.REACT_APP_CONTENTSTACK_PREVIEW_TOKEN
  ? ContentstackLivePreview.onEntryChange
  : () => {}; // No-op if Live Preview is not enabled

// Helper function to get image URL from Contentstack asset
const getImageUrl = (asset) => {
  if (!asset) return null;
  if (typeof asset === 'string') return asset;
  if (asset.url) return asset.url;
  return null;
};

// Helper function to get link href from Contentstack link field
const getLinkHref = (link) => {
  if (!link) return '#';
  if (typeof link === 'string') return link;
  if (link.href) return link.href;
  return '#';
};

/**
 * Fetch active top banner from Contentstack
 * @returns {Promise<Object|null>}
 */
export const getTopBanner = async () => {
  try {
    const query = Stack.ContentType('top_banner').Query();
    
    // Filter by active status
    const today = new Date().toISOString();
    query.where('is_active', true);
    
    const result = await query.toJSON().find();
    
    if (result && result.length > 0) {
      const banner = result[0];
      
      // Check publish/expiry dates if they exist
      if (banner.publish_date && new Date(banner.publish_date) > new Date(today)) {
        return null; // Not yet published
      }
      if (banner.expiry_date && new Date(banner.expiry_date) < new Date(today)) {
        return null; // Expired
      }
      
      return {
        title: banner.title || '',
        linkUrl: getLinkHref(banner.link_url),
        isActive: banner.is_active || false
      };
    }
    return null;
  } catch (error) {
    console.error('Error fetching top banner:', error);
    return null;
  }
};

/**
 * Fetch hero slides from Contentstack
 * @returns {Promise<Array>}
 */
export const getHeroSlides = async () => {
  try {
    const query = Stack.ContentType('hero_slide').Query();
    query.where('is_active', true);
    query.ascending('display_order');
    
    const result = await query.toJSON().find();
    
    if (result && result.length > 0) {
      return result.map(slide => ({
        title: slide.title || '',
        subtitle: slide.subtitle || '',
        description: slide.description || '',
        cta: slide.cta_text || 'Learn more',
        link: getLinkHref(slide.cta_link),
        gradient: slide.background_gradient || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        displayOrder: slide.display_order || 0
      }));
    }
    return [];
  } catch (error) {
    console.error('Error fetching hero slides:', error);
    return [];
  }
};

/**
 * Fetch company logos from Contentstack
 * @returns {Promise<Array>}
 */
export const getCompanyLogos = async () => {
  try {
    const query = Stack.ContentType('company_logo').Query();
    query.where('is_active', true);
    query.ascending('display_order');
    
    const result = await query.toJSON().find();
    
    if (result && result.length > 0) {
      return result.map(logo => ({
        companyName: logo.company_name || '',
        logoUrl: getImageUrl(logo.logo),
        companyUrl: getLinkHref(logo.company_url),
        displayOrder: logo.display_order || 0
      }));
    }
    return [];
  } catch (error) {
    console.error('Error fetching company logos:', error);
    return [];
  }
};

/**
 * Fetch platform section from Contentstack
 * @returns {Promise<Object|null>}
 */
export const getPlatformSection = async () => {
  try {
    const query = Stack.ContentType('platform_section').Query();
    const result = await query.toJSON().find();
    
    if (result && result.length > 0) {
      const section = result[0];
      return {
        title: section.title || '',
        badgeText: section.badge_text || 'Our platform',
        description: section.description || '',
        primaryCta: {
          text: section.primary_cta_text || 'Explore our platform',
          link: getLinkHref(section.primary_cta_link)
        },
        secondaryCta: {
          text: section.secondary_cta_text || 'Try for free',
          link: getLinkHref(section.secondary_cta_link)
        }
      };
    }
    return null;
  } catch (error) {
    console.error('Error fetching platform section:', error);
    return null;
  }
};

/**
 * Fetch features from Contentstack
 * @returns {Promise<Array>}
 */
export const getFeatures = async () => {
  try {
    const query = Stack.ContentType('feature').Query();
    query.ascending('display_order');
    
    const result = await query.toJSON().find();
    
    if (result && result.length > 0) {
      return result.map(feature => ({
        title: feature.title || '',
        description: feature.description || '',
        cta: feature.cta_text || 'Learn more',
        link: getLinkHref(feature.cta_link),
        icon: getImageUrl(feature.icon),
        isFeatured: feature.is_featured || false,
        displayOrder: feature.display_order || 0
      }));
    }
    return [];
  } catch (error) {
    console.error('Error fetching features:', error);
    return [];
  }
};

/**
 * Fetch customer stories from Contentstack
 * @returns {Promise<Array>}
 */
export const getCustomerStories = async () => {
  try {
    const query = Stack.ContentType('customer_story').Query();
    query.where('is_featured', true);
    query.ascending('display_order');
    
    const result = await query.toJSON().find();
    
    if (result && result.length > 0) {
      return result.map(story => ({
        title: story.title || '',
        companyName: story.company_name || '',
        description: story.description || '',
        image: getImageUrl(story.featured_image),
        metricValue: story.metric_value || '',
        metricLabel: story.metric_label || '',
        link: getLinkHref(story.case_study_url),
        isFeatured: story.is_featured || false,
        displayOrder: story.display_order || 0
      }));
    }
    return [];
  } catch (error) {
    console.error('Error fetching customer stories:', error);
    return [];
  }
};

/**
 * Fetch insights from Contentstack
 * @returns {Promise<Array>}
 */
export const getInsights = async () => {
  try {
    const query = Stack.ContentType('insight').Query();
    query.where('is_featured', true);
    query.descending('publish_date');
    
    const result = await query.toJSON().find();
    
    if (result && result.length > 0) {
      return result.map(insight => ({
        title: insight.title || '',
        tag: insight.resource_type || 'Resource',
        description: insight.description || '',
        image: getImageUrl(insight.featured_image),
        content: insight.content || '',
        link: getLinkHref(insight.resource_url),
        downloadFile: getImageUrl(insight.download_file),
        publishDate: insight.publish_date || '',
        isFeatured: insight.is_featured || false
      }));
    }
    return [];
  } catch (error) {
    console.error('Error fetching insights:', error);
    return [];
  }
};

/**
 * Fetch CTA sections from Contentstack
 * @param {string} location - 'home', 'platform', or 'both'
 * @returns {Promise<Array>}
 */
export const getCTASections = async (location = 'home') => {
  try {
    const query = Stack.ContentType('cta_section').Query();
    
    // Fetch all CTA sections and filter client-side
    const result = await query.toJSON().find();
    
    if (result && result.length > 0) {
      // Filter based on location
      let filteredResults = result;
      if (location === 'home') {
        filteredResults = result.filter(cta => 
          cta.section_location === 'home' || cta.section_location === 'both'
        );
      } else if (location === 'platform') {
        filteredResults = result.filter(cta => 
          cta.section_location === 'platform' || cta.section_location === 'both'
        );
      }
      
      return filteredResults.map(cta => ({
        sectionTitle: cta.section_title || '',
        title: cta.title || '',
        description: cta.description || '',
        primaryCta: {
          text: cta.primary_cta_text || '',
          link: getLinkHref(cta.primary_cta_link)
        },
        secondaryCta: {
          text: cta.secondary_cta_text || '',
          link: getLinkHref(cta.secondary_cta_link)
        },
        backgroundStyle: cta.background_style || 'default',
        sectionLocation: cta.section_location || 'home'
      }));
    }
    return [];
  } catch (error) {
    console.error('Error fetching CTA sections:', error);
    return [];
  }
};

/**
 * Fetch platform features from Contentstack
 * @returns {Promise<Array>}
 */
export const getPlatformFeatures = async () => {
  try {
    const query = Stack.ContentType('platform_feature').Query();
    query.ascending('display_order');
    
    const result = await query.toJSON().find();
    
    if (result && result.length > 0) {
      return result.map(feature => ({
        title: feature.title || '',
        description: feature.description || '',
        bullets: feature.feature_bullets || [],
        cta: feature.cta_text || 'Learn more',
        link: getLinkHref(feature.cta_link),
        gradient: feature.background_gradient || '',
        icon: getImageUrl(feature.icon),
        displayOrder: feature.display_order || 0
      }));
    }
    return [];
  } catch (error) {
    console.error('Error fetching platform features:', error);
    return [];
  }
};

/**
 * Fetch roles from Contentstack
 * @returns {Promise<Array>}
 */
export const getRoles = async () => {
  try {
    const query = Stack.ContentType('role').Query();
    query.ascending('display_order');
    
    const result = await query.toJSON().find();
    
    if (result && result.length > 0) {
      return result.map(role => ({
        title: role.title || '',
        description: role.description || '',
        cta: role.cta_text || 'Learn more',
        link: getLinkHref(role.cta_link),
        icon: getImageUrl(role.icon),
        displayOrder: role.display_order || 0
      }));
    }
    return [];
  } catch (error) {
    console.error('Error fetching roles:', error);
    return [];
  }
};

export default Stack;

