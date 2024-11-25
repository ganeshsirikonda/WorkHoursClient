import { Component, Input } from '@angular/core';
import { EmployeeLogService } from '../service/employee-log.service';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  @Input() ginnoData: string | null = null;

  
  productForm: FormGroup;
  Products: Array<{ productname: string }> = [];

  constructor(private fb: FormBuilder, private service: EmployeeLogService) {
    this.productForm = this.fb.group({
      products: this.fb.array([])
    });
  }

  ngOnInit(): void {
    this.getProductData();
  }

  getProductData() {
    this.service.getProducts().subscribe(
      response => {
        this.Products = response as Array<{ productname: string }>;
        this.initProductForm();
      },
      error => {
        console.log(error);
      }
    )
  }

  initProductForm() {
    const productArray = this.productForm.get('products') as FormArray;
    this.Products.forEach(product => {
      productArray.push(this.fb.group({
        productname: new FormControl(product.productname),
        producttimehours: new FormControl('') // Initialize work hours as empty
      }));
    });
  }

  get products() {
    return this.productForm.get('products') as FormArray;
  }

  focusNextWorkHours(index: number): void {
     const nextInput = document.querySelectorAll('input[formControlName="producttimehours"]')[index + 1] as HTMLElement; 
     if (nextInput) { nextInput.focus();

      }
      
     }

  onSubmit() {
    console.log(this.productForm.value);
  }
}

