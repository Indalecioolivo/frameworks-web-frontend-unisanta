import { Component } from '@angular/core';
import { Tarefa } from './tarefa';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'TODOapp';

  arrayDeTarefas: Tarefa[] = [];

  constructor() {
    this.READ_tarefas();
  }

  CREATE_tarefa(descricaoNovaTarefa: string) {
    var novaTarefa = new Tarefa(descricaoNovaTarefa, false);
    this.arrayDeTarefas.push(novaTarefa);
  }

  READ_tarefas() {
    this.arrayDeTarefas = [
      new Tarefa('Estudar Angular', false),
      new Tarefa('Fazer TP Banco de dados', false),
      new Tarefa('Documentos Estágio', false),
    ];
  }
}
