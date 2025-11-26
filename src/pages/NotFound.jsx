import notfoundImage from "../pages/Images/notfoundPage.png";

const NotFound = () => {
  return (
    <div style={{ textAlign: 'center', width: '100%' }}>
      <img src={notfoundImage} alt="Not Found" style={{ textAlign: 'center',  width: '80%' }}/>
      <p>The page you are looking for does not exist.</p>
    </div>
  );
};

export default NotFound;
