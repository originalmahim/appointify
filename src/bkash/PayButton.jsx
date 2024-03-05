const PayButton = ({children}) => {
    const payButton = () =>{
        console.log("pay button clicked");
    }
    return (
        <div>
            <button  className="w-full h-12 text-white font-semibold bg-gradient-blue rounded-lg hover:bg-gradient-to-r hover:from-special hover:to-head active:scale-95" onClick={payButton}>{children}</button>
        </div>
    );
};

export default PayButton;