import styled from 'styled-components';

export const StatsContainer = styled.ul`
  list-style: none;
  display: inline-flex;
  column-gap: 10px;
  margin: 0;
  padding: 0;
  align-items: center;
`;

export const StatsItem = styled.li``;

export const TurnContainer = styled.div`
  display: inline-flex;
  column-gap: 20px;
  align-items: center;
  margin-left: auto;
`;

export const TurnText = styled.div`
  font-weight: bold;
`;

export const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  column-gap: 20px;
  box-sizing: border-box;
  padding: 20px;
  background: #818aa3;
  overflow: hidden;
  border-top: 1px solid #4d5061;
  color: #0d090a;
`;

export const GetStyledIcon = (icon: any) => styled(icon)`
  width: 20px;
  height: 20px;
`;

export const EffectsContainer = styled.div`
  display: inline-flex;
  column-gap: 20px;
  align-items: center;
`;
