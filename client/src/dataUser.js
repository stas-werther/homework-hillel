module.exports.dataUser = async function dataOfUser() {
    let response = await fetch('http://localhost:3000/get');
    let commit = await response.json();
    return commit;
  }