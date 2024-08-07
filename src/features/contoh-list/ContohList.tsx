interface Biodata {
    name: string;
    age: number;
  }
  
  const ContohList = () => {
    const biodata: Biodata[] = [
      {
        name: "Deska",
        age: 20,
      },
      {
        name: "John",
        age: 21,
      },
      {
        name: "Arnold",
        age: 26,
      },
      {
        name: "Sarah",
        age: 22,
      },
    ];
  
    return (
      <>
        <ul>
          {biodata.map((item, index) => (
            <li key={index}>{item.name}, umur: {item.age}</li>
          ))}
        </ul>
      </>
    );
  };
  
  export default ContohList;