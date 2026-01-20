/**
 * Structured Data (JSON-LD) helpers for SEO
 * These schemas help search engines understand your content better
 */

export interface OrganizationSchema {
    '@context': string;
    '@type': string;
    name: string;
    description: string;
    url: string;
    logo?: string;
    sameAs?: string[];
    contactPoint?: {
        '@type': string;
        email?: string;
        contactType: string;
    };
}

export interface BreadcrumbSchema {
    '@context': string;
    '@type': string;
    itemListElement: Array<{
        '@type': string;
        position: number;
        name: string;
        item?: string;
    }>;
}

/**
 * Generate Organization structured data
 */
export function generateOrganizationSchema(): OrganizationSchema {
    return {
        '@context': 'https://schema.org',
        '@type': 'EducationalOrganization',
        name: 'Backpacks & Blueprints',
        description: 'Architecture-led travel and academic exploration for students, educators, and curious minds',
        url: 'https://backpacks-and-main.vercel.app',
        sameAs: [
            'https://www.instagram.com/backpacksandblueprints/',
            'https://www.youtube.com/@BackpacksandBlueprints',
        ],
        contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'Customer Service',
        },
    };
}

/**
 * Generate Breadcrumb structured data
 */
export function generateBreadcrumbSchema(
    items: Array<{ name: string; url?: string }>
): BreadcrumbSchema {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            ...(item.url && { item: item.url }),
        })),
    };
}

/**
 * Generate Service structured data
 */
export function generateServiceSchema(serviceName: string, description: string) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Service',
        serviceType: serviceName,
        description: description,
        provider: {
            '@type': 'EducationalOrganization',
            name: 'Backpacks & Blueprints',
        },
        areaServed: {
            '@type': 'Country',
            name: 'India',
        },
    };
}
