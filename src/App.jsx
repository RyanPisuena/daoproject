import { useAddress, useMetamask } from '@thirdweb-dev/react';

const App = () => {

  const address = useAddress();
  const connectWithMetamask = useMetamask();
  console.log("Kamusta Address:", address);

  // If the user has not connected their wallet yet, 
  if(!address) {
    return (
      
      <div className="landing">
        <h1>Welcome to SalsaDAO</h1>
        <button onClick={connectWithMetamask} className="btn-hero">  Connect your wallet
        </button>
      
      </div>
      
    );
  }


  
  return (
    <div className="landing">
      <h1>👀 wallet connected, now what!</h1>
    </div>
  );

  
};

export default App;
