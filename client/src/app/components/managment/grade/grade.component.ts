import { Component, OnInit } from '@angular/core';
import { MessageService , ConfirmationService} from 'primeng/api';
import { Grade } from 'src/app/models/grade';
import { GradeService } from 'src/app/services/grade.service';

@Component({
  selector: 'app-grade',
  templateUrl: './grade.component.html',
  styleUrls: ['./grade.component.css'],
  providers: [MessageService, ConfirmationService]
})
export class GradeComponent implements OnInit {

  productDialog: boolean;

  grades: Grade[];

  grade: Grade;

  selectedGrades: Grade[];

  submitted: boolean;

  statuses: any[];

  constructor(private gradeService: GradeService, private messageService: MessageService,
              private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
     this.gradeService.getGrades().subscribe((res: Grade[]) => {
      this.grades = res;
     }, err => {
      this.messageService.add({severity: 'error', summary: 'Error', detail: err.error.message, life: 3000});
     });
  }

  openNew(): void {
      this.grade = {};
      this.submitted = false;
      this.productDialog = true;
  }

  deleteSelectedProducts(): void {
      this.confirmationService.confirm({
          message: 'Are you sure you want to delete the selected grade?',
          header: 'Confirm',
          icon: 'pi pi-exclamation-triangle',
          accept: () => {
              this.grades = this.grades.filter(val => !this.selectedGrades.includes(val));
              this.selectedGrades = null;
              this.messageService.add({severity: 'success', summary: 'Successful', detail: 'Grades Deleted', life: 3000});
          }
      });
  }

  editGrade(grade: Grade): void{
      this.grade = {...grade};
      this.productDialog = true;
  }

  deleteGrade(grade: Grade): void {
      this.confirmationService.confirm({
          message: 'Are you sure you want to delete ' + grade.level + '?',
          header: 'Confirm',
          icon: 'pi pi-exclamation-triangle',
          accept: () => {
              this.grades = this.grades.filter(val => val.id !== grade.id);
              this.grade = {};
              this.messageService.add({severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000});
          }
      });
  }

  hideDialog(): void {
      this.productDialog = false;
      this.submitted = false;
  }

  saveGrade(): void {
      this.submitted = true;

      if (this.grade.level) {
          if (this.grade.id) {
              this.grades[this.findIndexById(this.grade.id)] = this.grade;
              this.messageService.add({severity: 'success', summary: 'Successful', detail: 'Product Updated', life: 3000});
          }
          else {
              this.grade.id = 2;
              this.grades.push(this.grade);
              this.messageService.add({severity: 'success', summary: 'Successful', detail: 'Product Created', life: 3000});
          }

          this.grades = [...this.grades];
          this.productDialog = false;
          this.grade = {};
      }
  }

  findIndexById(id: number): number {
      let index = -1;
      for (let i = 0; i < this.grades.length; i++) {
          if (this.grades[i].id === id) {
              index = i;
              break;
          }
      }

      return index;
  }

}
