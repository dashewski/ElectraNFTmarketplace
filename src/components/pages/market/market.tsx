import { StyledAccordion, StyledCommunication } from './styled';
import MartketHero from '../../blocks/market-hero/market-hero';
import MarketArchive from '../../blocks/market-archive/market-archive';
import MarketLoop from '../../blocks/market-loop/market-loop';
import NftMopedImage from '../../../assets/nft-moped.png';
import NftCar from '../../../assets/nft-car.png';
import NftBike from '../../../assets/nft-bike.png';
import NftScooter from '../../../assets/nft-scooter.png';
import MopedNFT from '../../../contracts/moped.json';
import { t } from 'i18next';

interface IMarket {
  isLoggedIn: boolean;
  connectWallet: () => void;
}

const Market: React.FC<IMarket> = ({ isLoggedIn, connectWallet }) => {
  const accordionItems = [
    {
      title: t('nft:i-type'),
      content: (
        <>
          <b>{t('nft:stable')}</b> - {t('nft:type-stable')}.
          <br />
          <br />
          <b>{t('nft:flex')}</b> - {t('nft:type-offers')}.
        </>
      ),
    },
    {
      title: t('nft:p-summary'),
      content: t('nft:p-summary-details') + '.',
    },
    {
      title: t('nft:income'),
      content: t('nft:income-details') + '.',
    },
  ];

  const marketItems = [
    {
      title: 'E-Moped',
      image: NftMopedImage,
      address: MopedNFT.address as `0x${string}`,
      abi: MopedNFT.abi,
    },
    {
      title: 'E-Bike',
      image: NftBike,
      disabled: true,
    },
    {
      title: 'E-Car',
      image: NftCar,
      disabled: true,
    },
    {
      title: 'E-Scooter',
      image: NftScooter,
      disabled: true,
    },
  ];

  return (
    <main>
      <MartketHero isLoggedIn={isLoggedIn} connectWallet={connectWallet} />
      <MarketArchive>
        <StyledAccordion accordionItems={accordionItems} />
        <MarketLoop
          items={marketItems}
          isLoggedIn={isLoggedIn}
          connectWallet={connectWallet}
        />
      </MarketArchive>
      <StyledCommunication />
    </main>
  );
};

export default Market;
