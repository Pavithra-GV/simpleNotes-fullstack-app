import { Component, OnInit } from '@angular/core';
import { NoteService } from './note.service';

@Component({
  selector: 'app-root',
  template: `
    <h2>Secure Notes</h2>

    <input [(ngModel)]="noteText" placeholder="Write a note">
    <button (click)="add()">Add</button>

    <ul>
      <li *ngFor="let n of notes">

        <!-- Normal view -->
        <span *ngIf="editId !== n._id">{{ n.text }}</span>

        <!-- Edit view -->
        <input *ngIf="editId === n._id"
               [(ngModel)]="editText">

        <button *ngIf="editId !== n._id"
                (click)="startEdit(n)">✏️</button>

        <button *ngIf="editId === n._id"
                (click)="saveEdit(n._id)">💾</button>

        <button (click)="deleteNote(n._id)">❌</button>
      </li>
    </ul>
  `
})
export class AppComponent implements OnInit {

  notes: any[] = [];
  noteText = '';

  // ✅ REQUIRED properties for edit
  editId: string | null = null;
  editText: string = '';

  constructor(private noteService: NoteService) {}

  ngOnInit() {
    this.loadNotes();
  }

  loadNotes() {
    this.noteService.getNotes().subscribe(data => {
      this.notes = data;
    });
  }

  add() {
    if (!this.noteText.trim()) return;

    this.noteService.addNote(this.noteText).subscribe(() => {
      this.noteText = '';
      this.loadNotes();
    });
  }

  deleteNote(id: string) {
    this.noteService.deleteNote(id).subscribe(() => {
      this.loadNotes();
    });
  }

  startEdit(note: any) {
    this.editId = note._id;
    this.editText = note.text;
  }

  saveEdit(id: string) {
    this.noteService.updateNote(id, this.editText).subscribe(() => {
      this.editId = null;
      this.editText = '';
      this.loadNotes();
    });
  }
}
