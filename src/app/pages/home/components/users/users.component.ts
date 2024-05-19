import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface User {
  name?: string;
  email?: string;
  role?: string;
}

const usersMock = [
  {
    name: 'titan',
    email: 'titan@gmail.com',
    role: 'Engenheiro de FE',
  },
  {
    name: 'ceos',
    email: 'ceos@gmail.com',
    role: 'Enngenheiro de BE',
  },
  {
    name: 'leleko',
    email: 'leleko@gmail.com',
    role: 'Lider Tecninco',
  },
  {
    name: 'crock',
    email: 'crock@gmail.com',
    role: 'analista de dados',
  }
]

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  users = usersMock;

  constructor(private router: Router) {}

  deleteUser(user: User) {
    this.users = this.users.filter(u => u !== user);
  }

  editUser(user: User) {
    console.log('Editando usuário', user);
    this.router.navigate(['app', 'edit-user']);
  }

  addUser() {
    console.log('Adicionando usuário');
    this.router.navigate(['app', 'add-user']);
  }
}
