import styled from 'styled-components';
import { transparentize } from 'polished';
export const Container = styled.div`
  background: ${(props) => transparentize(props.theme.colors.background)};
`;
