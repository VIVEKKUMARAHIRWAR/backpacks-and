import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact Us - Get in Touch',
    description: 'Contact Backpacks & Blueprints for study tours, heritage walks, documentation projects, or collaborations. We\'d love to hear from you.',
    keywords: ['contact', 'get in touch', 'architecture tours contact', 'inquiry', 'book a tour'],
    openGraph: {
        title: 'Contact Us - Get in Touch',
        description: 'Contact us for study tours, heritage walks, documentation projects, or collaborations.',
        url: '/contact',
    },
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
