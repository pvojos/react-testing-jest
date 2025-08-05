import styled from "styled-components";

const HeaderContainer = styled.header`
    background-color: #202020;
    padding: 1.2rem 5rem;
    max-width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const HeaderLogo = styled.img`
    width: 10.5rem;
`;

const CartContainer = styled.article`
    height: 1.25rem;
    position: relative;
    cursor: pointer;

    &:hover {
        img {
            transform: scale(1.13);
            filter: invert(50%) sepia(50%) saturate(800%) hue-rotate(0deg) brightness(170%) contrast(120%);
        }
    }
`;

const HeaderCartIcon = styled.img`
    height: 100%;
`;

const NotificationBubble = styled.p`
    position: absolute;
    top: -0.5rem;
    right: -0.5rem;
    background-color: #a61313;
    color: #ffffffff;
    font-family: "Montserrat", sans-serif;
    font-size: 0.7rem;
    font-weight: 400;
    min-width: 0.48rem;
    text-align: center;
    padding: 0.16rem 0.26rem;
    border-radius: 0.5rem;
`;

export {
    HeaderContainer,
    HeaderLogo,
    CartContainer,
    HeaderCartIcon,
    NotificationBubble,
}