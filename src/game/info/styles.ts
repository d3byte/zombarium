import { ModalContainer } from 'game/styles';
import styled, { css } from 'styled-components';

const textMixin = css`
  font-size: 16px;
  color: #071013;
`;

export const Text = styled.div`
  ${textMixin}
  &:not(:last-of-type) {
    margin-bottom: 20px;
  }
`;

export const RulesList = styled.ul``;

export const RulesItem = styled.li`
  ${textMixin}
  &:not(:last-of-type) {
    margin-bottom: 10px;
  }
`;

export const StyledModalContainer = styled(ModalContainer)`
  && {
    height: auto;
  }
`;
