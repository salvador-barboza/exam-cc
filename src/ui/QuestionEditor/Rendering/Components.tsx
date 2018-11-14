import styled from 'react-emotion';

export const Image = styled('img')((props: { selected }) => ({
    maxWidth: '100%',
    maxHeight: 100,
    display: 'block',
    boxShadow: props.selected ? '0 0 0 2px blue;' : 'none'
}))