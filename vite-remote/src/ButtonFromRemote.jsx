
import styled, { css } from 'styled-components';

export const ButtonFromRemoteElement = styled.button`
    ${() => css`
        background: blue;
        border: 0;
        margin: 0;
        padding: 20px;
        color: white;
    `}
`;

export const ButtonFromRemote = () => {
    return (
        <ButtonFromRemoteElement>
            ButtonFromRemote
        </ButtonFromRemoteElement>
    );
};

export default ButtonFromRemote;