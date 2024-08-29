import styled from 'styled-components'

export const Wrapper = styled.div`
    .services__container{
        grid-template-columns: repeat(2, 370px);
        justify-content: center;
        column-gap: 1.8rem;
    }

    .services__content {
        position: relative;
        border: 1px solid rgba(0, 0, 0, 0.1);
        background-color: var(--container-color);
        padding: 3.5rem 0 2rem 2.5rem;
    }

    .services__icon{
        display:block;
        font-size: 2rem;
        color: var(--title-color);
        margin-bottom: var(--mb-1);
    }

    .services__title{
        font-size: var(--h3-font-size);
        margin-bottom: var(--mb-1);
        font-weight: var(--font-medium);
    }

    .services__button {
        color: var(--title-color);
        font-size: var(--small-font-size);
        display: inline-flex;
        align-items: center;
        column-gap: 0.25rem;
        cursor: pointer;
    }

    .services__button-icon {
        font-size: 1.3rem;
        transition: 0.3s;
    }

    .services__button:hover .services__button-icon {
        transform: translateX(0.25rem);
    }

    .services__modal {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: var(--z-modal);
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 1rem;
        opacity: 0;
        visibility: hidden;
        transition: .3s;
    }

    .services__modal-content {
        width: 580px;
        position: relative;
        background-color: var(--container-color);
        padding: 4.5rem 2.5rem 2.5rem;
        border-radius: 1.5rem;
    }

    .services__modal-close {
        position: absolute;
        top: 1.5rem;
        right: 1.5rem;
        font-size: 1.5rem;
        color: var(--title-color);
        cursor: pointer;
    }

    .services__modal-title,
    .services__modal-description {
        text-align: center;
    }

    .services__modal-title {
        font-size: var(--h3-font-size);
        font-weight: var(--font-medium);
        margin-bottom: var(--mb-1);
    }

    .services__modal-description {
        font-size: var(--small-font-size);
        padding: 0 3.5rem;
        margin-bottom: var(--mb-2);
    }

    .services__modal-services {
        row-gap: 0.75rem;
    }

    .services__modal-service {
        display: flex;
        align-items: center;
        column-gap: 0.5rem;
    }

    .services__modal-icon {
        color: var(--title-color);
        font-size: 1.1rem;
    }

    .services__modal-info {
        font-size: var(--small-font-size);
    }

    .active-modal {
        opacity: 1;
        visibility: visible;
    }

    @media screen and (max-width: 992px) {
        .services__container {
            grid-template-columns: repeat(2, 218px);
        }
    }

    @media screen and (max-width: 768px) {
        .services__container {
            grid-template-columns: repeat(2, 1fr);
        }

        .services__content {
            padding: 3.5rem 0.5rem 1.25rem 1.5rem;
        }

        .services__icon {
            font-size: 1.5rem;
        }
    }

    @media screen and (max-width: 576px) {
        .services__modal-content {
            padding: 4.5rem 1.5rem 2.5rem;
        }

        .services__modal-description {
            padding: 0;
        }
    }

    @media screen and (max-width: 350px) {
        .services__container {
            grid-template-columns: max-content;
        }

        .services__content {
            padding-right: 6rem;
        }
    }
`;
