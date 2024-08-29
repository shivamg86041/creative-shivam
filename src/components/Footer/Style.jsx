import styled from 'styled-components'

export const Wrapper = styled.div`
    .footer{
        background-color: var(--container-color);
        border-top: 1px solid rgba(0,0,0,0.1);
    }

    .footer__container{
        padding: 2rem 0 6rem;
    }

    .footer__title,
    .footer__link{
        color: var(--title-color);
    }

    .footer__title{
        text-align: center;
        margin-bottom: var(--mb-2);
    }

    .footer__link:hover{
        color: var(--title-color-dark);
    }

    .footer__list{
        display: flex;
        justify-content: center;
        column-gap: 1.5rem;
        margin-bottom: var(--mb-2);
    }

    .footer__social{
        display: flex;
        justify-content: center;
        column-gap: 1.25rem;
    }

    .footer__social-link{
        background-color: var(--title-color);
        color: var(--container-color);
        font-size: 1.25rem;
        padding: 0.5rem 0.5rem;
        border-radius: 0.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .footer__social-link:hover{
        background-color: var(--title-color-dark);
    }

    .footer__copy{
        display: block;
        margin-top: 4.5rem;
        color: var(--title-color);
        text-align: center;
        font-size: var(--smaller-font-size);
    }

    @media screen and (max-width: 992px){
        .footer__social-link{
            padding: 0.25rem;
            border-radius: 0.25rem;
            font-size: 1rem;
        }
    }
`