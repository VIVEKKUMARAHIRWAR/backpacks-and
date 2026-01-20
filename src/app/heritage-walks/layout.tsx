import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Heritage Walks - Guided Architectural Exploration',
    description: 'Half-day and full-day heritage walks exploring architectural history, urban planning, and conservation. Perfect for students, professionals, and curious minds.',
    keywords: ['heritage walks', 'architectural walks', 'heritage conservation', 'urban heritage', 'guided architecture tours'],
    openGraph: {
        title: 'Heritage Walks - Guided Architectural Exploration',
        description: 'Half-day and full-day walks exploring architectural history, urban planning, and conservation.',
        url: '/heritage-walks',
    },
};

export default function HeritageWalksLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
