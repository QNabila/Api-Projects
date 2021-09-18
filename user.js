//arrow function
const loadUsers = () => {
    fetch("https://randomuser.me/api/?results=5")
      .then((res) => res.json())
      .then((data) => displayUsers(data));
};
loadUsers();
const displayUsers = data => {
    const users = data.results;
    const userDiv = document.getElementById('users');
    for (const user of users) {
        console.log(user.email);
        const p = document.createElement('p');
        p.innerText = `Name:${user.name.first} ${user.name.last}
        Email:${user.email}`;
        userDiv.appendChild(p);
    }
  }
