import { cn } from '@/lib/utils';
import React from 'react'

const Container = ({
    children,
    className
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn("max-w-5xl mx-auto w-full px-4 relative z-10", className)}>
            {children}
        </div>
    )
}


export default Container;