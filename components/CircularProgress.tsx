import React, { ReactNode } from 'react'
import styled from 'styled-components'

type Props = {
    content: ReactNode,
    value: number,
    className?: string,
    color?: string, // Optional, will be overridden by value-based color
}

function getProgressColor(value: number): string {
    if (value <= 33) return '#ef4444' // red-500
    if (value <= 66) return '#f59e42' // orange-400
    return '#22c55e' // green-500
}

function CircularProgress({ content, value, className = '', color }: Props) {
    const progressColor = color || getProgressColor(value)
    return (
        <Container
            value={(value / 100) * 360}
            color={progressColor}
            className={`flex justify-center items-center transition-all duration-100 ease-linear border p-[9px] ${className}`}
        >
            <div className="w-full h-full rounded-full overflow-hidden bg-white p-[3px] flex items-center justify-center text-center">
                {content}
            </div>
        </Container>
    )
}

const Container = styled.div<{ value: number; color?: string }>`
    border-radius: 50%;
    background-color: black;
    background: conic-gradient(${props => props.color ? props.color : '#7d2ae8'} ${props => props.value}deg, white 0deg);
    animation: progress 400ms normal linear;

    @keyframes progress {
        0% {
            background: conic-gradient(${props => props.color ? props.color : '#7d2ae8'} 0deg, white 0deg);
        }
        25% {
            background: conic-gradient(${props => props.color ? props.color : '#7d2ae8'} ${props => props.value / 3}deg, white 0deg);
        }
        50% {
            background: conic-gradient(${props => props.color ? props.color : '#7d2ae8'} ${props => props.value / 2}deg, white 0deg);
        }
        100% {
            background: conic-gradient(${props => props.color ? props.color : '#7d2ae8'} ${props => props.value}deg, white 0deg);
        }
    }
`;

export default CircularProgress