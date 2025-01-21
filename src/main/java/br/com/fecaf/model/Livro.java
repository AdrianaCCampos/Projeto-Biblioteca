package br.com.fecaf.model;


import javax.annotation.processing.Generated;
import jakarta.persistence.*;





@Entity
@Table(name = "tbl_livros")
public class Livro {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private  int id;
    private String nome;
    private String autor;
    private String foto;
    
    public String getNome() {
        return nome;
    }
    
    public void setNome(String nome) {
        this.nome = nome;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getAutor() {
        return autor;
    }

    public void setAutor(String autor) {
        this.autor = autor;
    }

    public String getFoto() {
        return foto;
    }

    public void setFoto(String foto) {
        this.foto = foto;
    }
    
}
