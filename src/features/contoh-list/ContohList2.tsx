import CardAvatar from "../../components/cards/CardAvatar";

interface Biodata {
  name: string;
  age: number;
  image: string;
}

const ContohList2 = () => {
  const biodata: Biodata[] = [
    {
      name: "Deska",
      age: 20,
      image:
        "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aHVtYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "John",
      age: 21,
      image:
        "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aHVtYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "Arnold",
      age: 26,
      image:
        "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aHVtYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "Sarah",
      age: 22,
      image:
        "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aHVtYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    },
  ];

  return (
    <>
      <ul>
        {biodata.map((item, index) => (
          <CardAvatar name={item.name} image={item.image} age={item.age} />
        ))}
      </ul>
    </>
  );
};

export default ContohList2;