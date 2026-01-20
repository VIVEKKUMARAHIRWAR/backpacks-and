import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Documentation Services - Architectural Research & Analysis',
    description: 'Professional architectural documentation, measured drawings, and research services for heritage buildings, urban studies, and academic projects.',
    keywords: ['architectural documentation', 'measured drawings', 'heritage documentation', 'architectural research', 'building survey'],
    openGraph: {
        title: 'Documentation Services - Architectural Research & Analysis',
        description: 'Professional architectural documentation and research services for heritage buildings and academic projects.',
        url: '/documentation',
    },
};

export default function DocumentationLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
