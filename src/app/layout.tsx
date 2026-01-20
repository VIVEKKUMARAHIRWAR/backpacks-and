import type { Metadata } from 'next';
import { Toaster } from "@/components/ui/sonner";
import Layout from "@/components/layout/Layout";
import { generateOrganizationSchema } from "@/lib/structured-data";
import "../index.css";

const baseUrl = 'https://backpacksandblueprints.com';

export const metadata: Metadata = {
    metadataBase: new URL(baseUrl),
    title: {
        default: 'Backpacks & Blueprints | Architecture Study Tours & Heritage Walks',
        template: '%s | Backpacks & Blueprints',
    },
    description: 'Architecture-led travel and academic exploration for students, educators, and curious minds. Curated study tours, heritage walks, and documentation projects across India.',
    keywords: [
        'architecture study tours',
        'heritage walks',
        'architectural education',
        'urban planning',
        'heritage conservation',
        'educational travel India',
        'architecture students',
        'built environment',
    ],
    authors: [{ name: 'Backpacks & Blueprints' }],
    creator: 'Backpacks & Blueprints',
    publisher: 'Backpacks & Blueprints',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    openGraph: {
        type: 'website',
        locale: 'en_IN',
        url: baseUrl,
        siteName: 'Backpacks & Blueprints',
        title: 'Backpacks & Blueprints | Architecture Study Tours & Heritage Walks',
        description: 'Architecture-led travel and academic exploration for students, educators, and curious minds.',
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Backpacks & Blueprints',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Backpacks & Blueprints | Architecture Study Tours & Heritage Walks',
        description: 'Architecture-led travel and academic exploration for students, educators, and curious minds.',
        images: ['/og-image.png'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    icons: {
        icon: '/favicon.ico',
        apple: '/apple-touch-icon.png',
    },
    manifest: '/manifest.webmanifest',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const organizationSchema = generateOrganizationSchema();

    return (
        <html lang="en">
            <head>
                <meta name="theme-color" content="#2563eb" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(organizationSchema),
                    }}
                />
            </head>
            <body>
                <Layout>
                    {children}
                </Layout>
                <Toaster />
            </body>
        </html>
    );
}
