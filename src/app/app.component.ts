
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Tarefa {
  _id?: string;
  descricao: string;
  concluido: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'TODOapp';
  arrayDeTarefas: Tarefa[] = [];
  descricaoNovaTarefa = '';
  readonly apiURL = 'https://apitarefasleonardo237097-h8vf.onrender.com/api';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.READ_tarefas();
  }

  CREATE_tarefa() {
    if (!this.descricaoNovaTarefa.trim()) return;
    const novaTarefa: Tarefa = { descricao: this.descricaoNovaTarefa, concluido: false };
    this.http.post<Tarefa>(`${this.apiURL}/post`, novaTarefa).subscribe({
      next: () => {
        this.descricaoNovaTarefa = '';
        this.READ_tarefas();
      },
      error: err => console.error('Erro ao criar tarefa:', err)
    });
  }

  READ_tarefas() {
    this.http.get<Tarefa[]>(`${this.apiURL}/getAll`).subscribe({
      next: tarefas => this.arrayDeTarefas = tarefas,
      error: err => console.error('Erro ao buscar tarefas:', err)
    });
  }

  DELETE_tarefa(tarefa: Tarefa) {
    if (!tarefa._id) return;
    this.http.delete(`${this.apiURL}/delete/${tarefa._id}`).subscribe({
      next: () => this.READ_tarefas(),
      error: err => console.error('Erro ao excluir tarefa:', err)
    });
  }
}