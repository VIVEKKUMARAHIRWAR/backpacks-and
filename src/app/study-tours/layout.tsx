import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Study Tours - Curriculum-Aligned Architecture Programs',
    description: 'Multi-day immersive architecture study tours for students. Explore Delhi, Ahmedabad, Puducherry, and more with structured learning frameworks and expert guidance.',
    keywords: ['architecture study tours', 'educational tours India', 'architecture field trips', 'student tours', 'architectural education programs'],
    openGraph: {
        title: 'Study Tours - Curriculum-Aligned Architecture Programs',
        description: 'Multi-day immersive programmes designed for architecture students—where every building becomes a case study.',
        url: '/study-tours',
    },
};

export default function StudyToursLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
