import styled, { css } from 'styled-components';
import RawAngleDownSolidIcon from './../icons/AngleDownSolid';

const fixedBehavior = css`
  position: fixed;
  right: 16px;
  top:   16px;
`;

export const Shadow = styled.div`
  pointer-events: none;
  position: fixed;
  height: 72px;
  width: 100%;
  
  background: linear-gradient(to bottom, var(--background-color), transparent);
  opacity: .75;
`;

export const LanguageSelectorContainer = styled.div`
  ${fixedBehavior};

  color: white;

  flex-direction: row;
  align-items: center;
  display: flex;

  cursor: pointer;
  user-select: none;
`;

export const Flag = styled.img`
  width:  32px;
  height: 32px;

  margin-right: 12px;
`;

export const SelectedLanguage = styled.span`
  font-family: 'bold', sans-serif;

  margin-right: 8px;
`;

export const AngleDownSolidIcon = styled(RawAngleDownSolidIcon)`
  width:  16px;
  height: 16px;

  fill: white;
`;

export const Dropdown = styled.div`
  ${fixedBehavior};
  top: 64px;

  width: 224px;
  padding: 16px 0;
  box-sizing: border-box;
  border-radius: 8px;

  background-color: white;
  box-shadow:
    2.8px 2.8px 2.2px rgba(0, 0, 0, 0.02),
    6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028),
    12.5px 12.5px 10px rgba(0, 0, 0, 0.035),
    22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042),
    41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05),
    100px 100px 80px rgba(0, 0, 0, 0.07);
`;

export const DropdownItem = styled.div`
  flex-direction: row;
  align-items: center;
  display: flex;

  cursor: pointer;
  user-select: none;

  padding: 12px;
  padding-right: 0;

  border-top: 1px solid var(--soothing-breeze);
  
  :last-child {
    border-bottom: 1px solid var(--soothing-breeze);
  }

  :hover {
    background-color: var(--city-lights);
  }
`;

export const Language = styled(SelectedLanguage)`
  font-size: 14px;
`;