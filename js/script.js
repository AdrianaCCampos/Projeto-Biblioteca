const cardContainer = document.getElementById('cardContainer');
const toggleThemeBtn = document.getElementById('toggleThemeBtn');

let books = [];

// Carregar livros do servidor
async function loadCards() {
    try {
        const response = await fetch('http://localhost:8081/api/livros/listarLivros');
        books = await response.json();
        renderCards();
    } catch (error) {
        console.error('Erro ao carregar livro:', error);
    }
}



// Renderizar livros na tela
function renderCards() {
    cardContainer.innerHTML = '';    
    books.forEach((book) => {

        console.log(book);
        
        const card = document.createElement('div');
        card.className = 'card';

        const image = document.createElement('img');
        image.src = book.foto || 'https://via.placeholder.com/150';
        card.appendChild(image);

        const name = document.createElement('h3');
        name.textContent = book.nome;
        card.appendChild(name);

        const autor = document.createElement('p');
        autor.textContent = `Autor: ${book.autor}`;
        card.appendChild(autor);
        
        const editButton = document.createElement('button');
        editButton.textContent = 'Editar';
        editButton.onclick = () => editBook(book);
        card.appendChild(editButton);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Deletar';
        deleteButton.onclick = () => deleteBook(book.id);
        card.appendChild(deleteButton);

        cardContainer.appendChild(card);
    });
}


// Adicionar um novo livro
async function addBook() {
    const name = document.getElementById('nameInput').value;
    const autor = document.getElementById('autorInput').value;    
    const image = document.getElementById('imageInput').value;

    if (name && autor ) {
        
        const newBook = {
            nome: name,
            autor: autor,            
            foto: image
        };

        try {
            const response = await fetch ('http://localhost:8081/api/livros/cadastrarLivros', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newBook),
            });

            if (response.ok) {
                loadCards();
                clearForm();
            } else {
                console.error('Erro ao cadastrar livro:', await response.text());
            }
        } catch (error) {
            console.error('Erro ao cadastrar livro:', error);
        }
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}

// Editar um livro existente
async function editBook(book) {
    document.getElementById('nameInput').value = book.nome;
    document.getElementById('autorInput').value = book.autor; 
    document.getElementById('imageInput').value = book.foto;
   

    deleteBook(book.id);
}

// Função para atualizar o livro no banco de dados
async function updateBook(id) {
    const name = document.getElementById('nameInput').value;
    const autor = document.getElementById('autorInput').value;
    const image = document.getElementById('imageInput').value;

    if (name && autor) {
        const updatedBook = {
            nome: name,
            autor: autor,
            foto: image
        };

        try {
            const response = await fetch(`http://localhost:8081/api/livros/atualizarLivro/${id}`, {
                method: 'PUT', // Aqui estamos usando PUT para atualizar
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedBook),
            });

            if (response.ok) {
                loadCards(); // Recarregar a lista de livros
                clearForm(); // Limpar o formulário
            } else {
                console.error('Erro ao atualizar livro:', await response.text());
            }
        } catch (error) {
            console.error('Erro ao atualizar livro:', error);
        }
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}

// Deletar um livro
async function deleteBook(id) {
    try {
        const response = await fetch(`http://localhost:8081/api/livros/deletarLivro/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            loadCards();
        } else {
            console.error('Erro ao deletar livro:', await response.text());
        }
    } catch (error) {
        console.error('Erro ao deletar livro:', error);
    }
}

// Pesquisa de Livros

async function searchBook() {
    const query = document.getElementById('consultaInput').value;
    try{
        const response = await fetch(`http://localhost:8081/api/livros/search?q=${query}`);
        books = await response.json();
        renderCards();
    } catch (error) {
        console.error('Erro ao pesquisar livro', error);
    }
}


// Limpar o formulário após adicionar ou editar um livro
function clearForm() {
    document.getElementById('nameInput').value = '';
    document.getElementById('autorInput').value = '';   
    document.getElementById('imageInput').value = '';
}



// Inicializar com os cards carregados
loadCards();
