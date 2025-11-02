# Sample Content Entries

This document provides example content entries for each content type. Use these as templates when creating entries in Contentstack.

## Top Banner

```json
{
  "title": "See what's new at our Fall Product Update — Live November 6",
  "link_url": {
    "href": "/fall-product-update",
    "title": "Fall Product Update"
  },
  "is_active": true,
  "publish_date": "2025-10-01",
  "expiry_date": "2025-11-06"
}
```

## Hero Slide

### Slide 1
```json
{
  "title": "The world's best digital experiences start here",
  "subtitle": "Contentstack",
  "description": "",
  "cta_text": "Product overview",
  "cta_link": {
    "href": "/platform",
    "title": "Product overview"
  },
  "background_gradient": "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  "display_order": 1,
  "is_active": true
}
```

### Slide 2
```json
{
  "title": "Unlock your future",
  "subtitle": "Agent OS",
  "description": "Seamlessly integrate intelligent agents, AI-powered automation and advanced workflows, all in one platform",
  "cta_text": "Agent OS",
  "cta_link": {
    "href": "/platforms/ai",
    "title": "Agent OS"
  },
  "background_gradient": "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
  "display_order": 2,
  "is_active": true
}
```

## Company Logo

### Walmart
```json
{
  "company_name": "Walmart",
  "logo": "[Upload Walmart logo image]",
  "company_url": {
    "href": "https://www.walmart.com",
    "title": "Walmart"
  },
  "display_order": 1,
  "is_active": true
}
```

## Platform Section

```json
{
  "title": "Contentstack Edge combines the power of a headless CMS with real-time customer analytics to improve the way you understand your audiences and deliver content to them. It's your brand at its best: faster, smarter and always personal.",
  "badge_text": "Our platform",
  "description": "<p><strong>Contentstack Edge</strong> combines the power of a headless CMS with real-time customer analytics to improve the way you understand your audiences and deliver content to them. It's your brand at its best: faster, smarter and always personal.</p>",
  "primary_cta_text": "Explore our platform",
  "primary_cta_link": {
    "href": "/platform",
    "title": "Explore our platform"
  },
  "secondary_cta_text": "Try for free",
  "secondary_cta_link": {
    "href": "/try-for-free",
    "title": "Try for free"
  }
}
```

## Feature

### Headless CMS
```json
{
  "title": "A headless CMS built for flexibility",
  "description": "Maintain complete control of your technology with an API-first, cloud-based headless CMS.",
  "cta_text": "Learn more about Headless CMS",
  "cta_link": {
    "href": "/platforms/headless-cms",
    "title": "Learn more about Headless CMS"
  },
  "icon": "[Upload icon image]",
  "display_order": 1,
  "is_featured": true
}
```

### Personalization
```json
{
  "title": "Highly personalized",
  "description": "Leverage data and automation so you're delivering the right message in the right place and at the right time.",
  "cta_text": "Learn more about personalization",
  "cta_link": {
    "href": "/platforms/omnichannel-personalization",
    "title": "Learn more about personalization"
  },
  "display_order": 2,
  "is_featured": false
}
```

## Customer Story

### Burberry
```json
{
  "title": "80% Faster content publishing",
  "company_name": "Burberry",
  "description": "Learn how Burberry transformed their digital presence.",
  "featured_image": "[Upload Burberry case study image]",
  "metric_value": "80%",
  "metric_label": "Faster content publishing",
  "case_study_url": {
    "href": "/case-studies/burberry",
    "title": "Read the full story"
  },
  "full_story_content": "<p>Full case study content here...</p>",
  "display_order": 1,
  "is_featured": true
}
```

## Insight

### Headless CMS Guide
```json
{
  "title": "The ultimate guide to headless CMS",
  "resource_type": "E-book",
  "description": "Complete guide to understanding and implementing headless CMS.",
  "featured_image": "[Upload ebook cover image]",
  "content": "<p>Full ebook content here...</p>",
  "resource_url": {
    "href": "/resources/ebook/ultimate-guide-to-headless-cms",
    "title": "View ebook"
  },
  "download_file": "[Upload PDF file]",
  "publish_date": "2025-01-15",
  "display_order": 1,
  "is_featured": true
}
```

## CTA Section

### Home Page CTA
```json
{
  "section_title": "Adaptive Digital Experience CTA",
  "title": "Reimagine possible",
  "description": "Because with Contentstack, it is possible. And we'll help you get there.",
  "primary_cta_text": "Request a demo",
  "primary_cta_link": {
    "href": "/request-demo",
    "title": "Request a demo"
  },
  "secondary_cta_text": "Try for free",
  "secondary_cta_link": {
    "href": "/try-for-free",
    "title": "Try for free"
  },
  "background_style": "gradient",
  "section_location": "home"
}
```

## Platform Feature

### Omnichannel Personalization
```json
{
  "title": "Omnichannel personalization",
  "description": "Deliver content that dynamically adapts to your visitors, across every channel.",
  "feature_bullets": [
    "Use first-party data in real time",
    "Experiment with A/B/n testing to find what works",
    "Orchestrate audience journeys across all channels"
  ],
  "cta_link": {
    "href": "/platforms/omnichannel-personalization",
    "title": "Learn More"
  },
  "cta_text": "Learn More",
  "background_gradient": "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  "icon": "[Upload icon image]",
  "display_order": 1
}
```

## Role

### Business Users
```json
{
  "title": "Business users",
  "description": "Uncover new efficiencies in your workflows so you do better work, faster.",
  "cta_link": {
    "href": "/roles/business",
    "title": "Learn more"
  },
  "cta_text": "Learn more",
  "icon": "[Upload icon image]",
  "display_order": 1
}
```

### Developers & IT
```json
{
  "title": "Developers & IT",
  "description": "Break free from the monolith. Build how you want, with the tools you want.",
  "cta_link": {
    "href": "/roles/developers",
    "title": "Learn more"
  },
  "cta_text": "Learn more",
  "icon": "[Upload icon image]",
  "display_order": 2
}
```

### Digital Leaders
```json
{
  "title": "Digital leaders",
  "description": "Empower your teams to do better work and unlock the full potential of your brand, at any scale.",
  "cta_link": {
    "href": "/roles/leaders",
    "title": "Learn more"
  },
  "cta_text": "Learn more",
  "icon": "[Upload icon image]",
  "display_order": 3
}
```

## Notes

- Replace `[Upload ...]` placeholders with actual file uploads in Contentstack
- Adjust URLs and links according to your site structure
- Use rich text editor for HTML content fields
- Set appropriate publish dates and expiry dates
- Mark featured items appropriately for homepage displays

