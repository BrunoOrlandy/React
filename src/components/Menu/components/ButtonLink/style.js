import styled from "styled-components";
import Button from '../../../Button';

export const LogoImage = styled.img`
max-width: 168px;

@media(max-width: 800px) {
    max-width: 105px
    }
`;

export const MenuWrapper = styled.nav`
    width: 100%;
    height: 94px;

    positon : fixed;
    top: 0;
    left :0%;

    padding-left: 5%;
    padding-right: 5%;
    
    display: flex;
    justify-content: space-between;
    aling-items:center;
    

    background-color: var(--black);
    background-bottom: 2px solid var(--primary);

    @media(max-width: 800px){

    }
    `;

export const ButtonLink = styled(Button)`
    color: var(--white);
    border: 1px solid var(--white);
    padding: 16px 24px;
    font-size: 16px;
    border-radius: 4px;    
    font-weight: bold;
    text-decoration: nome;

    transition: opacity .2s;

    &:hover,
    &focus{
        opacity: .5
    }

    @media(max-width: 800px){
        background-color-color: var(--primary);
        border: 0;
        border-radius: 0;
        color: var(--white);
        left: 0;
        outline: 0;
        position: fixed;
        right: 0;
        text-align: center;
    }

`;

