import net from "net";
const client = net.createConnection({ port: 3000 });

client.on("connect", () => {
  //const mensaje = { path: "characters" };
  //const mensaje = { path: "characters/name", name: "James" };
  // const mensaje = { path: "characters/house", house: "Slytherin" };

  const msg = {
    path: "characters",
    action: "READ",
  };
  // const msg = {
  //   path: "characters",
  //   action: "CREATE",
  //   body: {
  //     fullName: "Dolores Umbridge",
  //     hogwartsHouse: "Slytherin",
  //     interpretedBy: "Imelda Staunton",
  //     children: [],
  //     image:
  //       "https://static.wikia.nocookie.net/esharrypotter/images/d/d2/Dolores_umbridge2.jpg/revision/latest?cb=20150228091708",
  //     birthdate: "Ene 9, 1956",
  //     //index: 24,
  //   },
  // };
  // const msg = {
  //   path: "characters/name",
  //   action: "READ",
  //   body: "Nymphadora",
  // };
  // const msg = {
  //   path: "characters/house",
  //   action: "READ",
  //   body: "Slytherin",
  // };
  // const msg = {
  //   path: "books/number",
  //   action: "READ",
  //   body: 3,
  // };
  // const msg = {
  //   path: "books",
  //   action: "READ",
  // };

  const message = JSON.stringify(msg);
  client.write(message);
});

client.on("data", (serverMessage: string) => {
  const mensaje = serverMessage.toString();
  const mensajeJs = JSON.parse(mensaje);
  console.log("MSJ que llega al CLIENT", mensajeJs);
});
