import "./search.css";

const search = ({ change }) => {
  return (
    <div className='container'>
      <input type='text' placeholder='Search...' onChange={change} />
      <div className='search'></div>
    </div>
  );
};
export default search;
