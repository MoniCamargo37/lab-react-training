import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import Rating from './components/Rating';
import DriverCard from './components/DriverCard';
import LikeButton from './components/LikeButton';
import ClickablePicture from './components/ClickablePicture';
import Dice from './components/Dice';
import Carousel from './components/Carousel';
import NumbersTable from './components/NumbersTable';
import Facebook from './components/Facebook';
import SignupPage from './components/SignupPage';
import RGBColorPicker from './components/RGBColorPicker';

function App() {
  return (
    <div className="App">
      <h2>IdCard: Iteration 1</h2>
      <div className="card-container">
        <IdCard
          lastName="Doe"
          firstName="John"
          gender="male"
          height={178}
          birth={new Date('1992-07-14')}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />
      </div>
      <div className="card-container">
        <IdCard
          lastName="Delores "
          firstName="Obrien"
          gender="female"
          height={172}
          birth={new Date('1988-05-11')}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
      </div>
      <h2>Greetings: Iteration 2</h2>
      <div className="Greetings">
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>
      </div>
      <h2>Random: Iteration 3</h2>
      <div className="Random">
        <Random min={1} max={6} />
        <Random min={1} max={100} />
      </div>
      <h2>BoxColor: Iteration 4</h2>
      <div>
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />
      </div>
      <h2>CreditCard: Iteration 5</h2>
      <div className="creditCardContainer">
        <CreditCard
          type="Visa"
          number="0123456789018845"
          expirationMonth={3}
          expirationYear={2021}
          bank="BNP"
          owner="Maxence Bouret"
          bgColor="#11aa99"
          color="white"
        />

        <CreditCard
          type="Master Card"
          number="0123456789010995"
          expirationMonth={3}
          expirationYear={2021}
          bank="N26"
          owner="Maxence Bouret"
          bgColor="#eeeeee"
          color="#222222"
        />

        <CreditCard
          type="Visa"
          number="0123456789016984"
          expirationMonth={12}
          expirationYear={2019}
          bank="Name of the Bank"
          owner="Firstname Lastname"
          bgColor="#ddbb55"
          color="white"
        />
      </div>
      <div className="ratingCard">
      <h2>Rating: Iteration 6</h2>
        <Rating>0</Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>
      </div>
      <h2>DriverCard: Iteration 7</h2>
      <DriverCard
        name="Travis Kalanick"
        rating={4.2}
        img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
        car={{
          model: 'Toyota Corolla Altis',
          licensePlate: 'CO42DE',
        }}
      />
   
      <DriverCard
        name="Dara Khosrowshahi"
        rating={4.9}
        img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
        car={{
          model: 'Audi A3',
          licensePlate: 'BE33ER',
        }}
      />
         <h2>LikeButton: Iteration 8</h2>
         <div className='likeBtn'>
      <LikeButton />
      </div>
      <h2>ClickablePicture: Iteration 9</h2>
      <div className='clickPicture'>
      <ClickablePicture
        img='maxence.png'
        imgClicked='maxence-glasses.png'
      />
    </div>
    <h2>Carousel: Iteration 10</h2>
    <Dice/>
    <h2>Carousel: Iteration 11</h2>
    <Carousel 
    images={[
    'https://randomuser.me/api/portraits/women/1.jpg',
    'https://randomuser.me/api/portraits/men/1.jpg',
    'https://randomuser.me/api/portraits/women/2.jpg',
    'https://randomuser.me/api/portraits/men/2.jpg'
  ]}/>
      <h2>Numbers Table: Iteration 12</h2>
      <NumbersTable limit={18} />
      <h2>Facebook: Iteration 13 & 14</h2>
      <Facebook />
      <h2>SignupPage: Iteration 15</h2>
      <SignupPage />
      <h2>RGBColorPicker: Iteration 16</h2>
      <RGBColorPicker/>
    </div>
  );
}

export default App;
