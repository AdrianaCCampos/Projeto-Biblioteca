/*create database db_biblioteca;

use db_biblioteca;

/*create table tbl_livros (
id int not null auto_increment,
nome varchar (45) not null,
autor varchar (45) not null,
foto varchar (200) not null,
primary key(id)
);*/

insert into tbl_livros(nome, autor, foto) values
("Introdução Á Programação Orientada a Objetos", "Rafael Santos", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-oUmShstRbILxnSOsS50mjLr3UYqtLdHC0w&s"),
("Lógica de Matemática", "Jeferson Afonso Lopes de Spuza", "https://staticbv.bvirtual.com.br/publicacoes/150814/thumbs/thumbnail_397_x_595.jpg"),
("Banco de Dados", "Waldemar W. Setzer; Flávio Soares Corrêa", "https://m.media-amazon.com/images/I/61KpskaMT6L._AC_UF1000,1000_QL80_.jpg");

select * from tbl_livros;