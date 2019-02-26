import styled, { css, space, palette, theme } from '../styled';
import CardCard from '../Card/CardCard';
import CardHeader from '../Card/CardHeader';
import CardContent from '../Card/CardContent';
import CardTitle from '../Card/CardTitle';
import CardFooter from '../Card/CardFooter';
import Button from '../Button';
import { CalloutProps } from './Callout';
import { CalloutCloseProps } from './CalloutClose';
import Icon, { IconProps } from '../Icon/Icon';

export const getTintAttributes = (props: any) => {
  const { type, hasTint } = props;

  if (!hasTint || !type) {
    return;
  }

  return css`
    background-color: ${type && palette(`${type}Tint`)(props)};
    box-shadow: none;
    color: ${type && palette(`${type}TintInverted`)(props)};
    fill: ${type && palette(`${type}TintInverted`)(props)};
    ${theme('fannypack.Callout.tint')};
  `;
};

export const CalloutClose = styled(Button)<CalloutCloseProps>`
  position: absolute;
  right: 1rem;
  top: 1rem;
  width: 1.5em;
  min-height: 1.5em;
  padding: 0;
  text-align: right;

  &:hover {
    background-color: ${palette('white700')};
    & {
      ${theme('fannypack.Callout.Close.hover')};
    }
  }

  ${theme('fannypack.Callout.Close.base')};
`;

export const CalloutHeader = styled(CardHeader)`
  display: flex;
  justify-content: flex-start;

  & {
    ${theme('fannypack.Callout.Header.base')};
  }
`;

export const CalloutContent = styled(CardContent)`
  & {
    ${theme('fannypack.Callout.Content.base')};
  }
`;

export const CalloutTitle = styled(CardTitle)`
  & {
    ${theme('fannypack.Callout.Title.base')};
  }
`;

export const CalloutFooter = styled(CardFooter)`
  & {
    ${theme('fannypack.Callout.Footer.base')};
  }
`;

export const CalloutIcon = styled(Icon)<IconProps>`
  margin-right: ${space(4)}rem;

  & {
    ${theme('fannypack.Callout.Icon.base')};
  }
`;

export const Callout = styled(CardCard)<CalloutProps>`
  position: relative;

  ${getTintAttributes};

  & {
    ${theme('fannypack.Callout.base')};
  }
`;

export default Callout;
