import sberbankLogo from '../../assetts/icons/sber.png';
import optimaBankLogo from '../../assetts/icons/optima.png';
import mBankLogo from '../../assetts/icons/mbank.png';
import aylBankLogo from '../../assetts/icons/aiylbank.png';
import GoalImage from '../../assetts/icons/aljardam.jpg';

const bankAccounts = [
  {
    bankName: 'М Банк',
    accountNumber: '0504002828',
    image: mBankLogo,
    name: 'Байышбек уулу Темирлан',
  },
  {
    bankName: 'Сбербанк ',
    accountNumber: '2202 2080 8598 5225',
    image: sberbankLogo,
    phonenumber: '+799 39189498',
    name: 'Курбонов Кадырали',
  },
  {
    bankName: 'Оптима Банк (visa)',
    accountNumber: '4169 5853 5634 4100',
    image: optimaBankLogo,
    phonenumber: '',
    name: 'Асеков Эрмат Бактыбекович',
  },
  {
    bankName: 'Айыл Банк',
    accountNumber: '9417378503134635',
    image: aylBankLogo,
    name: 'Асеков Эрмат Бактыбекович ',
  },
  {
    bankName: 'Единица ',
    image: GoalImage,
    phonenumber: '+996708588271',
    call: 'Байланыш телефон:',
    num: ' +996708588271',
    name: 'Байышбек уулу Темирлан',
  },
];

export default bankAccounts;
