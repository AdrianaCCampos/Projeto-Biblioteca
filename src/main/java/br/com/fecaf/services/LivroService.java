package br.com.fecaf.services;


import br.com.fecaf.model.Livro;
import br.com.fecaf.repository.LivroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service

public class LivroService {
    @Autowired
    private LivroRepository LivroRepository;

    // /metodo para listar livros
    public List<Livro> ListarLivros() {
        return LivroRepository.findAll();

    }

    //Metodo para Salvar novoLivro
    public Livro salvarLivro (Livro livro) {
        return LivroRepository.save(livro);
    }

    // metodo para Atualizar livro
    public Livro atualizarLivro (int id, Livro livro) {
        return LivroRepository.save(livro);
    }

    //Metodo para deletar livro
    public void deletarLivro (int id) {
        LivroRepository.deleteById(id);
    }

    //Metodo para pesquisar livros
    public List<Livro> pesquisaLivros(String query) {
        return LivroRepository.findAll().stream()
                .filter(livro -> livro.getNome().toLowerCase().contains(query.toLowerCase()) ||
                        livro.getAutor().toLowerCase().contains(query.toLowerCase()))
                .collect(Collectors.toList());
    }


}
