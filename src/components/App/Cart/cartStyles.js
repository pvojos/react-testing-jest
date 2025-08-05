import styled from "styled-components";

const CartBackground = styled.article`
    opacity: ${prop => prop.open ? "1" : "0"};
    pointer-events: ${prop => prop.open ? "auto" : "none"};
    position: fixed;
    background-color: #2020209a;
    min-width: 100vw;
    min-height: 100vh;
    box-sizing: border-box;
    z-index: 1;
    overflow: hidden;
    transition: opacity 0.2s ease-in;
`;

const CartModal = styled.section`
    position: absolute;
    right: ${prop => prop.open ? "0" : "-20%"};
    background-color: #ffffff;
    width: 20%;
    max-height: 100vh;
    min-height: 100vh;
    color: #202020;
    overflow: hidden;
    transition: all 0.2s ease-in-out;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

const CartHeader = styled.div`
    background-color: #ffffff;
    box-shadow: 0 5px 8px -1px #bcbcbcff;
    max-width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.3rem 2rem;
`;

const CartTitle = styled.h2`
    font-family: "Kanit", sans-serif;
    font-size: 1.15rem;
    font-weight: 500;
`;

const CloseCartButton = styled.button`
    padding: 0;
    font-family: "Montserrat", sans-serif;
    font-size: 1.1rem;
    font-weight: 200;
    color: #464646;
    border: none;
    background-color: #ffffff;
    cursor: pointer;
`;

const EmptyCartText = styled.p`
    font-family: "Montserrat", sans-serif;
    font-size: 0.9rem;
    text-align: center;
    color: #202020;
    margin: 0 2rem;
`;

const CartContent = styled.div`
    flex: 1;
    box-sizing: border-box;
    margin: 0 2rem;
    padding-right: 0.8rem;
    max-height: 100%;
    overflow-y: scroll;
    border-bottom: 1px solid #a0a0a0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const CartFooter = styled.div`
    color: #202020;
    margin: 2rem;
    margin-top: 0;
    display: flex;
    flex-direction: column;
    gap: 1.1rem;
`;

const TotalContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const TotalText = styled.h4`
    font-family: "Kanit", sans-serif;
    font-size: 1.15rem;
    font-weight: 500;

    span {
        font-family: "Montserrat", sans-serif;
        font-size: 0.7rem;
        font-weight: 400;
    }
`;

const TotalQuantity = styled.h3`
    font-family: "Montserrat", sans-serif;
    font-size: 1.1rem;
    font-weight: 600;
`;

const DeleteAllButton = styled.button`
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    font-size: 0.75rem;
    padding: 0.7rem;
    color: #202020;
    background-color: #e1e1e1;
    border: none;
    cursor: pointer;
    transition: all 0.05s ease-in-out;

    &:hover {
        background-color: #f0da0eff;
        transform: scale(1.02);
    }
`;

const CartItemCard = styled.div`
    display: flex;
    gap: 1rem;
    border-bottom: 1px solid #dedede;
    padding-bottom: 1rem;
`;

const CartItemImage = styled.img`
    width: 32%;
`;

const CartItemInfo = styled.div`
    font-family: "Montserrat", sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
`;

const CartItemTopInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

const CartItemName = styled.p`
    font-size: 0.85rem;
`;

const CartItemQuantityControl = styled.div`
    background-color: #efefef;
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    padding: 0.3rem 0.25rem;
    border-radius: 20px;
`;

const QuantityControlButton = styled.button`
    font-family: "Montserrat", sans-serif;
    font-size: 0.85rem;
    color: #202020;
    border: none;
    background-color: transparent;
    padding: 0 0.5rem;
    height: 100%;
    cursor: pointer;

    &:disabled {
        color: #b9b9b9;
    }
`;

const QuantityText = styled.p`
    font-size: 0.75rem;
    font-weight: 600;
    border-right: 1px solid #b3b3b3;
    border-left: 1px solid #b3b3b3;
    width: 2rem;
    text-align: center;
`;

const CartItemBottomInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: end;
`;

const CartItemPrice = styled.h4`
    font-size: 0.95rem;
    font-weight: 600;
`;

const CartItemDeleteIcon = styled.button`
    width: 0.9rem;
    padding: 0;
    border: none;
    background-color: transparent;
    opacity: 0.8;
    cursor: pointer;

    img {
        width: auto;
    }
`;

export {
    CartBackground,
    CartModal,
    CartHeader,
    CartTitle,
    CloseCartButton,
    EmptyCartText,
    CartContent,
    CartFooter,
    CartItemCard,
    CartItemImage,
    CartItemInfo,
    CartItemTopInfo,
    CartItemName,
    CartItemQuantityControl,
    QuantityControlButton,
    QuantityText,
    CartItemBottomInfo,
    CartItemPrice,
    CartItemDeleteIcon,
    TotalContainer,
    TotalText,
    TotalQuantity,
    DeleteAllButton
}