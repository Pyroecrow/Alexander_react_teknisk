function Count({ count, setCount }) {
  return (
    <div>
      <p>Your count is {count}</p>
      <button onClick={() => setCount(count + 1)}>
        {count}
      </button>
    </div>
  );
}
 
export default Count