/* eslint-disable react/require-default-props */
import { styled } from '@mui/styles';
import React from 'react';

const DragHandleContainer = styled('div')({
    width: '1rem',
    height: '1rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    borderRadius: '0.25rem',
    transition: 'background 30ms ease-in',
    '&:hover': {
        background: 'rgba(0, 0, 0, 0.1)',
    },
    '&:active': {
        background: 'rgba(0, 0, 0, 0.2)',
    },
});

interface Props {
    style?: React.CSSProperties;
    onContextMenu?: (event: React.MouseEvent) => void;
}

export const DragHandle = React.forwardRef<HTMLDivElement, Props>(({ style, onContextMenu }, ref) => {
    return (
        <DragHandleContainer ref={ref} style={style} onContextMenu={onContextMenu}>
            <svg width="100%" height="100%" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <circle cx="9" cy="7" r="1.5" />
                <circle cx="9" cy="12" r="1.5" />
                <circle cx="9" cy="17" r="1.5" />
                <circle cx="15" cy="7" r="1.5" />
                <circle cx="15" cy="12" r="1.5" />
                <circle cx="15" cy="17" r="1.5" />
            </svg>
        </DragHandleContainer>
    );
});
