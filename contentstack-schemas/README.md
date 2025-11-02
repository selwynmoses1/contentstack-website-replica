# Contentstack Content Types

This directory contains JSON schemas for all content types needed for the Contentstack website replica.

## Installation Instructions

1. **Via Contentstack CLI:**
   ```bash
   contentstack-import --config-file=path/to/your/config.json --import-types=content-types
   ```

2. **Via Contentstack UI:**
   - Go to Settings > Stack Settings > Content Types
   - Click "Import" and upload each JSON file individually
   - Or use the Contentstack Management API to import programmatically

3. **Via Management API:**
   Use the Contentstack Management API to import these content types programmatically.

## Content Types Included

1. **top_banner** - Announcement banner at the top of the page
2. **hero_slide** - Hero carousel slides
3. **company_logo** - Company logo for the logo carousel
4. **platform_section** - Platform overview section
5. **feature** - Feature cards
6. **customer_story** - Customer success stories/case studies
7. **insight** - Resources and insights
8. **cta_section** - Call-to-action sections
9. **platform_feature** - Platform page features
10. **role** - User roles (Business users, Developers, etc.)

## Import Order

Import content types in this order for best results:
1. top_banner
2. hero_slide
3. company_logo
4. platform_section
5. feature
6. customer_story
7. insight
8. cta_section
9. platform_feature
10. role

## Notes

- All content types follow Contentstack's content model guidelines
- UIDs are lowercase with underscores
- All required fields are marked appropriately
- References between content types are set up where applicable
- File upload fields are configured for images/assets

