console.log('message from client') 

axios.get("http://localhost:4567/tasks").then(handleData)

  //HANDLEDATA
  function handleData(axiosResponse) {
    const listRef = document.querySelector("ul");
    console.log(axiosResponse.data);
    listRef.innerHTML = axiosResponse.data
      .map(task => "<li>" + task.task + "</li>")
      .join("");
  }





