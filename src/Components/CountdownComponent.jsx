import { useEffect } from "react";
 
function CountDown({ countdown, setCountDown }) {
 
  useEffect(() => {
    if (countdown <= 0) return;
 
    const timer = setInterval(() => {
      setCountDown((prev) => prev - 1); // reduserer nedtellingen med 1 hvert sekund
    }, 1000); // et sekund
 
    return () => clearInterval(timer);
  }, [countdown]);
 
  if (countdown <= 0) {
    return <h1> Gratulerer med dagen! </h1>;
  } // viser gratulerer med dagen når nedtellingen er ferdig
 
  return (
    <div>
      <p>Your count is {countdown}</p> 
      <button onClick={() => setCountDown(countdown - 0)}> // på null sånn at du ikke kan klikke den ned 
        {countdown}
      </button>
    </div> // selveste knappen for nedtellingen
  );
}
export default CountDown;