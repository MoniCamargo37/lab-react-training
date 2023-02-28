
const CreditCard = (props) => {
  const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } =
    props;

  const lastFourDigits = number.slice(-4);

//   const cardLogo = type === 'Visa' ? VisaLogo : MasterCardLogo;
const cardLogo = type === 'Visa' ? '/src/assets/images/visa.png' : '/src/assets/images/master-card.svg';

  const cardStyle = {
    backgroundColor: bgColor,
    color: color,
  };

  return (
    <div className="creditCard" style={cardStyle}>
      <div className="type">
        <img src={cardLogo} alt={type} />
        <p  className='cardNumber'>{'••••   ••••   ••••   ' + lastFourDigits}</p>
        </div>
       <div className="expireBank">
          Expires {expirationMonth.toString().padStart(2, '0')}/
          {expirationYear.toString().slice(-2)}
        <p>{bank}</p>
        </div>
        <div className="ownerCard">
        <p>{owner}</p>
        </div>
    </div>
  );
};

export default CreditCard;
