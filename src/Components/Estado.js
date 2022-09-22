function Estado() {
    let data="Hello world";
    function EjercicioTres()
    {
    data=("From changed State");
      document.write(data);
    }
    return (
      <div className="Estado">
       <h1>{data}</h1>
       <button onClick={EjercicioTres}>Click</button>
      </div>
    );
  }
  
  export default Estado

  //INTENTÉ HACER ALGO NUEVO