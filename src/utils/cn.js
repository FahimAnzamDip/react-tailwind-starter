import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export default function cn(...params) {
    return twMerge(clsx(params));
}
