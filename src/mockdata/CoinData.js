import { images } from '../constants';

const coinData = [
  {
    index: 1,
    name: 'Bitcoin',
    currentPrice: '$9,009',
    percentageChange: '+10.5%',
    logo: images.bitcoin,
    ticker: 'BTC'
  },
  {
    index: 2,
    name: 'Ethereum',
    currentPrice: '$127.00',
    percentageChange: '-9.5%',
    logo: images.ethereum,
    ticker: 'ETH'
  },
  {
    index: 3,
    name: 'Iota',
    currentPrice: '$0.31',
    percentageChange: '+20.5%',
    logo: images.iota,
    ticker: 'MIOTA'
  },
  {
    index: 4,
    name: 'Golem',
    currentPrice: '$0.50',
    percentageChange: '+5.5%',
    logo: images.golem,
    ticker: 'GNT'
  },
  {
    index: 5,
    name: 'Monero',
    currentPrice: '$50.20',
    percentageChange: '-12.5%',
    logo: images.monero,
    ticker: 'XMR'
  }
];

export default coinData;
