import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  api = 'http://localhost:3000/notes';

  constructor(private http: HttpClient) {}

  getNotes() {
    return this.http.get<any[]>(this.api);
  }

  addNote(text: string) {
    return this.http.post(this.api, { text });
  }

  deleteNote(id: string) {
  return this.http.delete(`${this.api}/${id}`);
}

  updateNote(id: string, text: string) {
  return this.http.put(`${this.api}/${id}`, { text });
}

}
