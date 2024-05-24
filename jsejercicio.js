
let users = [];

axios.get('https://jsonplaceholder.typicode.com/users')

    .then(res => {
        users = res.data;
    
        console.log(users);

        users.forEach(user => {

            console.log(user.name);

        });
    })
    .catch(err => {
        console.error('Error', err);
    });


    function mostrar() {

        console.log(users);
       
        let usuarios= document.getElementById('usuarios');
       
        users.forEach(usuario => {

            let elemento = document.createElement('p');

            elemento.textContent = usuario.name;

            usuarios.appendChild(elemento);
        });
    }
    

    document.getElementById('boton').addEventListener('click', mostrar);
    

