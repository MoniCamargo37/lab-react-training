import VisaLogo from '../assets/images/visa.png';
import MasterCardLogo from '../assets/images/masterCard.png';

const CreditCard = (props) => {
  const {
    type,
    number,
    expirationMonth,
    expirationYear,
    bank,
    owner,
    bgColor,
    color,
  } = props;
  const cardStyle = {
    backgroundColor: bgColor,
    color: color,
  };

  const cardLogo = type === 'Visa' ? VisaLogo : MasterCardLogo;

  return (
    <div className="creditCard" style={cardStyle}>
      <div className="type">
        <img src={cardLogo} alt="type" />
        <p>•••• •••• •••• {number.slice(-4)}</p>
      </div>
      <div className="expireBank">
        <p>
          Expires {expirationMonth}/{expirationYear}
        </p>{' '}
        <p>{bank}</p>
      </div>
      <div className="ownerCard">
        <p>{owner}</p>
      </div>
    </div>
  );
};

export default CreditCard;
