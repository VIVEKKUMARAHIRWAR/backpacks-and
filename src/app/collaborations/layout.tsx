import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Collaborations - Partner with Us',
    description: 'Collaboration opportunities for architecture colleges, institutions, and organizations. Custom programs, faculty partnerships, and academic collaborations.',
    keywords: ['architecture collaboration', 'institutional partnerships', 'academic collaboration', 'faculty partnerships', 'educational programs'],
    openGraph: {
        title: 'Collaborations - Partner with Us',
        description: 'Collaboration opportunities for architecture colleges, institutions, and organizations.',
        url: '/collaborations',
    },
};

export default function CollaborationsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
