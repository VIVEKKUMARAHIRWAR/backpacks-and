import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Us - Architecture Educators & Heritage Enthusiasts',
    description: 'Learn about Backpacks & Blueprints - architects, educators, and heritage enthusiasts committed to reimagining how students learn from the built environment through experiential learning.',
    keywords: ['architecture education', 'heritage conservation', 'urban planning education', 'architectural pedagogy', 'experiential learning'],
    openGraph: {
        title: 'About Us - Architecture Educators & Heritage Enthusiasts',
        description: 'Architects and educators committed to reimagining architectural education through experiential learning.',
        url: '/about',
    },
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
