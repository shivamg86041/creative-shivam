import styled from 'styled-components'

export const Wrapper = styled.div`
    .scrollup{
        position: fixed;
        right: 2.5rem;
        bottom: -20%;
        background-color: var(--title-color);
        opacity: 0.8;
        padding: 0.3rem 0.5rem;
        border-radius: 0.4rem;
        z-index: var(--z-tooltip);
        transition: 0.4s;
    }

    .scrollup__icon{
        font-size: 1.5rem;
        color: var(--container-color);
    }

    .scrollup:hover{
        background-color: var(--title-color-dark);
    }

    .show-scroll{
        bottom: 3rem;
    }

    /* For large devices */
@media screen and (max-width: 992px) {
  .scrollup{
    right: 1.5rem;
    padding: 0.25rem 0.4rem;
  }

  .scrollup__icon{
    font-size: 1.25rem;
  }
}

/* For medium devices */
@media screen and (max-width: 768px) {
    .show-scroll{
        bottom: 4rem;
    }
}


@media screen and (max-width: 350px) {
    .show-scroll{
        right: 1rem;
    }
}

`