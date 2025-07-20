import React, { forwardRef, JSX } from 'react'
import Card, { DefaultCard } from '../defaultCard';
import { FiChevronRight } from 'react-icons/fi';

export interface AnimatedCardProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
    icon: JSX.Element;
    description: string;
    tag?: string | undefined;
    onClick: () => void
}

const AnimatedCard = forwardRef<HTMLDivElement, AnimatedCardProps>(
    ({title, icon, description, tag, onClick, ...props }, ref) => {
        return (
            <DefaultCard
                ref={ref}
                {...props}
                onClick={onClick}
                className='group hover:!h-fit'
            >
                <Card.Header>
                    <Card.Icon className="transition-all bg-secondary text-white text-[1.5rem]">
                        {icon}
                    </Card.Icon>
                    <Card.Tag className="transition-all bg-primary text-white">
                        {tag} <FiChevronRight />
                    </Card.Tag>
                    <Card.Title>
                        {title}
                    </Card.Title>
                </Card.Header>
                <Card.Content className='transition-all relative'>
                    <Card.Description className='line-clamp-2 group-hover:line-clamp-none'>
                        {description}
                    </Card.Description>
                </Card.Content>
            </DefaultCard>
        )
    }
);
export default AnimatedCard