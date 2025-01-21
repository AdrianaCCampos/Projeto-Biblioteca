package br.com.fecaf.controller;

import br.com.fecaf.model.Livro;
import br.com.fecaf.services.LivroService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/livros")
@CrossOrigin(origins = "http://127.0.0.1:5500", allowedHeaders = "*")


public class LivroController {
    @Autowired
    private LivroService livroService;

    // Endpoint para listar livros

    @GetMapping("/listarLivros")
    public List<Livro> listarLivros() {
        return livroService.ListarLivros();

    }
    @PostMapping("/cadastrarLivros")
    public ResponseEntity<Livro> salvarLivro(@RequestBody Livro livro) {
        Livro newLivro = livroService.salvarLivro(livro);
        return ResponseEntity.status(HttpStatus.CREATED).body(newLivro);

    }

    @DeleteMapping("/deletarLivro/{id}")
    public ResponseEntity<Void> deletarLivro (@PathVariable int id) {
        livroService.deletarLivro(id);
        return ResponseEntity.status(HttpStatus.ACCEPTED).build();

    }

    @GetMapping("/search")
    public List<Livro> pesquisaLivros(@RequestParam String q) {
        return livroService.pesquisaLivros(q);
    }


}


