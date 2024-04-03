const Header = (props) => {
    return (
      <header style={{ textAlign : "center", color: 'White', backgroundColor: '#114c5f', height: "100px", justifyContent: "Center", 
      width: "100%"}}>
        <h1>{props.name}</h1>
      </header>
    );
  };
  
  window.Header = Header;
