import cn from './utils/cn';

export default function App() {
    const className = 'text-blue-600';
    const isBold = true;

    return (
        <>
            <h1
                className={cn(
                    'mt-10 text-center text-6xl font-medium',
                    className,
                    {
                        'font-bold': isBold,
                    },
                )}
            >
                Hello React & Tailwind!
            </h1>
        </>
    );
}
