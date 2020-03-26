import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Input from '~/components/Form/Input';

import colors from '~/styles/colors';
import { device } from '~/styles/device';

export const Container = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  margin: 0 auto;
  max-width: 1120px;
  width: 100%;
`;

export const Content = styled.div`
  align-items: center;
  background-color: ${colors.grey};
  border-radius: 8px;
  display: flex;
  justify-content: center;
  padding: 0 16px;
  width: 100%;
  flex-direction: column;

  @media ${device.laptop} {
    box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
    flex-direction: row;
    justify-content: space-between;
    padding: 96px;
    margin: 0 30px;
  }

  @media ${device.laptopL} {
    margin: 0;
  }
`;

export const RegisterWrapper = styled.div`
  max-width: 380px;
  width: 100%;
  text-align: center;

  @media ${device.laptop} {
    text-align: left;
  }

  h1 {
    margin: 34px 0 12px;
    font-size: 32px;

    @media ${device.laptop} {
      margin: 64px 0 32px;
    }
  }

  p {
    color: ${colors.grey2};
    line-height: 24px;
  }
`;

export const BackLink = styled(Link)`
  align-items: center;
  color: ${colors.darkGrey2};
  display: flex;
  font-size: 16px;
  font-weight: 500;
  margin-top: 20px;
  text-decoration: none;
  transition: opacity 300ms ease;
  justify-content: center;

  @media ${device.laptop} {
    justify-content: flex-start;
    margin-top: 40px;
  }

  &:hover {
    opacity: 0.8;
  }

  svg {
    margin-right: 8px;
  }
`;

export const FormWrapper = styled.div`
  width: 100%;
  max-width: 450px;

  @media ${device.laptop} {
    margin-right: 30px;
  }

  form {
    margin-top: 20px;

    @media ${device.laptop} {
      margin-top: 0;
    }

    h1 {
      font-size: 32px;
      margin-bottom: 32px;
    }

    span {
      animation: 300ms ease-out 0s 1 slideInFromLeft;
      color: ${colors.danger};
      display: block;
      padding: 7px 5px;
      border-radius: 15px;
      font-size: 12px;
      word-wrap: break-word;
    }
  }
`;

export const InputGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 25%;
  grid-gap: 8px;
`;

export const InputWrapper = styled(Input).attrs(({ type }) => ({
  type: type || 'text',
}))`
  border-radius: 8px;
  border: solid 1px ${colors.lightGrey};
  color: ${colors.darkGrey};
  height: 60px;
  margin-top: 8px;
  padding: 0 24px;
  width: 100%;
`;

export const Button = styled.button.attrs({
  type: 'submit',
})`
  background-color: ${colors.danger};
  border-radius: 8px;
  color: ${colors.white};
  display: inline-block;
  font-size: 18px;
  font-weight: 700;
  height: 60px;
  margin-top: 16px;
  text-align: center;
  width: 100%;
  transition: all 300ms ease;

  &:hover {
    filter: brightness(90%);
  }
`;
