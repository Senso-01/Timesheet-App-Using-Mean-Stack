import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from './user.service';
import { User } from './user.model';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {

  userForm!: FormGroup;
  users: any[] = [];
  filteredUsers: any[] = [];
  showForm: boolean = false;
  isEditMode: boolean = false;
  editingUserId: string | null = null;

  // Filters
  searchQuery: string = '';
  selectedDepartment: string = '';
  selectedBusinessUnit: string = '';
  uniqueDepartments: string[] = [];
  uniqueBusinessUnits: string[] = [];

  constructor(private fb: FormBuilder, private userService: UserService) { }

  ngOnInit() {
    this.initForm();
    this.fetchUsers();
  }

  initForm() {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: [''],
      phone: ['', Validators.required],
      department: ['', Validators.required],
      role: ['', Validators.required],
      businessUnit: [''],
    });
  }

  toggleForm() {
    this.showForm = !this.showForm;
    this.resetForm();
  }

  fetchUsers() {
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
      this.filteredUsers = data;
      this.extractFilters();
    });
  }

  extractFilters() {
    this.uniqueDepartments = [...new Set(this.users.map((user) => user.department))];
    this.uniqueBusinessUnits = [...new Set(this.users.map((user) => user.businessUnit))];
  }

  addUser() {
    this.userService.addUser(this.userForm.value).subscribe(() => {
      this.fetchUsers();
      this.resetForm();
      this.toggleForm();
    });
  }

  editUser(user: any) {
    this.isEditMode = true;
    this.showForm = true;
    this.editingUserId = user._id;
    this.userForm.patchValue(user);
  }

  updateUser() {
    this.userService.updateUser(this.editingUserId!, this.userForm.value).subscribe(() => {
      this.fetchUsers();
      this.resetForm();
      this.showForm = false;
    });
  }

  deleteUser(userId: string) {
    this.userService.deleteUser(userId).subscribe(() => {
      this.fetchUsers();
    });
  }

  resetForm() {
    this.isEditMode = false;
    this.editingUserId = null;
    this.userForm.reset();
  }

  applyFilters() {
    this.filteredUsers = this.users.filter((user) => {
      return (
        (!this.searchQuery || user.name.toLowerCase().includes(this.searchQuery.toLowerCase())) &&
        (!this.selectedDepartment || user.department === this.selectedDepartment) &&
        (!this.selectedBusinessUnit || user.businessUnit === this.selectedBusinessUnit)
      );
    });
  }
}
