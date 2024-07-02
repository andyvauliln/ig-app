import LearnPageClient from './LearnPageClient';
import { generateStaticParams } from './params';

export { generateStaticParams };

export default function LearnPageWrapper() {
    return <LearnPageClient />;
}