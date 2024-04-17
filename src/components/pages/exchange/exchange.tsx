import Wrapper from '../../layout/wrapper/wrapper';
import { TitleSize } from '../../ui/title/title';
import {
  StyledExchange,
  ExchangeHeader,
  ExchangeTitle,
  TitleLogo,
} from './styled';
import ElectraLogo from '../../../assets/logo-gradient.svg';
import Button from '../../ui/button/button';
import ExchangeFeatureList from '../../blocks/exchange-feature-list/exchange-feature-list';
import EarnIco from '../../../assets/earn-ico.png';
import ExchangeIco from '../../../assets/exchange-ico.png';
import StakeIco from '../../../assets/stake-ico.png';
import Exchanger from '../../blocks/exchanger/exchanger';
import { useTranslation } from 'react-i18next';
import { useWalletClient } from 'wagmi';

interface IExchange {
  isLoggedIn: boolean;
  connectWallet: () => void;
}

const Exchange: React.FC<IExchange> = ({ isLoggedIn, connectWallet }) => {
  const { t } = useTranslation();

  const features = [
    {
      title: t('exchange:list.i1.t'),
      text: t('exchange:list.i1.d'),
      ico: EarnIco,
    },
    {
      title: t('exchange:list.i2.t'),
      text: t('exchange:list.i2.d'),
      ico: ExchangeIco,
    },
    {
      title: t('exchange:list.i3.t'),
      text: t('exchange:list.i3.d'),
      ico: StakeIco,
    },
  ];

  const client = useWalletClient();

  const handleAddToken = () => {
    client?.data?.watchAsset({
      type: 'ERC20',
      options: {
        address: '0x2f1ea586bf45Bd8A7C61137eF6616965EF616574',
        decimals: 18,
        symbol: 'ELCT',
      },
    });
  };

  return (
    <main>
      <Wrapper>
        <StyledExchange>
          <ExchangeHeader>
            <ExchangeTitle size={TitleSize.BIG}>
              <TitleLogo src={ElectraLogo} /> {t('exchange:t')}
            </ExchangeTitle>
            <button onClick={handleAddToken}>Add token to wallet</button>
            <Button isSmall={true} to={'/market'}>
              {t('menu:nft-marketplace')}
            </Button>
          </ExchangeHeader>
          <ExchangeFeatureList features={features} />
          <Exchanger isLoggedIn={isLoggedIn} connectWallet={connectWallet} />
        </StyledExchange>
      </Wrapper>
    </main>
  );
};

export default Exchange;
