fetch("https://159.223.199.153:3000/json")
  .then((response) => response.json())
  .then((json) => {
	  console.log(json);
  }
);
