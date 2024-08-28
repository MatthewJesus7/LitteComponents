const Card = ({ type, title, component }) => {
  
    return (
        <div
          className={`${type} bg-white flex-col-reverse justify-end `}
        >
  
          <div>
              <h3 className={`text-xl text-gray-700 `}>{title}</h3>
          </div>
          
          <div className=' w-full h-full '>
            {component}
          </div>
        </div>
    );
  };
  
  export default Card;