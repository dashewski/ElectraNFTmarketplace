import styled from 'styled-components';
import Communication from '../../blocks/communication/communication';
import { Title } from '../../ui/title/title';
import Image from '../../../elements/image';
import P from '../../../elements/p';
import Dropdown from '../../ui/dropdown/dropdown';

const MyElectraTitle = styled(Title)`
  color: ${(props) => props.theme.blackPrimary};
  text-align: start;
  margin-bottom: 15px;

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    margin-bottom: 0;
  }
`;

const TitleLogo = styled(Image)`
  margin-left: 10px;
  width: 191px;
  height: 54px;
  position: relative;
  top: 7px;
`;

const TotalEarnings = styled(P)`
  color: ${(props) => props.theme.grey};
  background-color: ${(props) => props.theme.lightGrey};
  width: fit-content;
  padding: 12px 20px;
  border-radius: 8px;
  font-size: 24px;
  font-weight: 600;
  line-height: 130%;
`;

const TotalEarningsAmount = styled.span`
  color: ${(props) => props.theme.diamond};
`;

const StyledMyElectra = styled.div`
  padding: 55px 0 55px;
  background-color: ${(props) => props.theme.white};

  @media screen and (min-width: ${(props) => props.theme.tabletWidth}) {
    padding: 143px 0 55px;
  }
`;

const StyledCommunication = styled(Communication)`
  background-color: ${(props) => props.theme.white};
`;

const NoNfts = styled.div`
  padding: 20px 0 55px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  row-gap: 20px;

  @media screen and (min-width: ${(props) => props.theme.tabletWidth}) {
    padding: 55px 0 55px;
  }
`;

const NoNftsText = styled.div`
  color: ${(props) => props.theme.blackPrimary};
  font-size: 26px;
  width: fit-content;
  margin-right: 15px;
`;

// const MultiClaim = styled.div`
//   display: flex;
//   gap: 27px;
// `;

// const MultiClaimInner = styled.div`
//   flex-grow: 1;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   background-color: ${(props) => props.theme.lightGrey};
//   border-radius: ${(props) => props.theme.borderRadiusDesktopSmall};
//   padding: 12px 20px;
// `;

// const MultiClaimText = styled(P)`
//   color: ${(props) => props.theme.grey};
//   font-size: 24px;
//   font-weight: 600;
//   line-height: 130%;
// `;

// const MultiClaimAmount = styled(P)`
//   color: ${(props) => props.theme.diamond};
//   font-size: 24px;
//   font-weight: 600;
//   line-height: 130%;
// `;

const TokenSelector = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: ${(props) => props.theme.grey};
  background-color: ${(props) => props.theme.lightGrey};
  width: fit-content;
  padding: 6px 10px 6px 20px;
  border-radius: 8px;
  font-size: 24px;
  font-weight: 600;
  line-height: 130%;
`;

const SelectorEarningsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  margin-bottom: 23px;
`;

const StyledDropdown = styled(Dropdown)``;

export {
  StyledMyElectra,
  MyElectraTitle,
  TitleLogo,
  TotalEarnings,
  TotalEarningsAmount,
  StyledCommunication,
  NoNfts,
  NoNftsText,
  SelectorEarningsWrapper,
  TokenSelector,
  StyledDropdown,
  // MultiClaim,
  // MultiClaimInner,
  // MultiClaimText,
  // MultiClaimAmount,
};
