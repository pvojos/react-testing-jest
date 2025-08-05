import styled from "styled-components";

const AppContainer = styled.div`
    max-width: 100vw;
    min-height: 100vh;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    position: relative;
`;

const FooterContainer = styled.footer`
    background-color: #202020;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 0.6rem;
`;

const SocialMediaIcon = styled.a`
    img {
        width: 1rem;
        filter: brightness(200%);
    }
`;

export {
    AppContainer,
    FooterContainer,
    SocialMediaIcon
}