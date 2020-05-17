import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HousesService } from 'src/app/services/houses.service';
import { AuthService } from 'src/app/services/auth.service';
//import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-listhouse',
  templateUrl: './listhouse.component.html',
  styleUrls: ['./listhouse.component.scss']
})
export class ListhouseComponent implements OnInit {
  listingForm: FormGroup;
  urls;
  div = document.getElementById("selectedImages");
  submitted = false;
  loading = false;
  error;
  
  constructor(private formBuilder: FormBuilder,private route: ActivatedRoute,private router: Router,private houseService:HousesService,private authService:AuthService) { }

  ngOnInit(): void {
    //vars made here must correspond to formControlName on input in html to read input
    //add validators here!
    this.listingForm=this.formBuilder.group({
      title: [''],
      description: [''],
      street: ['',Validators.required],
      city: ['',Validators.required],
      state: ['',Validators.required],
      zip: ['',Validators.required],
      price: ['',Validators.required],
      bedrooms: [''],
      bathrooms: [''],
      sqfeet: [''],
      contactemail: [''],
      contactphone: ['']
    });
  }

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
        var reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]); // read file as data url
        //working on thumbnailing multiple images, files[] is key, also find a way to remove images..

        reader.onload = (event) => { // called once readAsDataURL is completed
          this.urls = event.target.result;  
          var img = new Image(); 
          img.src = this.urls;
          img.width = 200;
          document.getElementById('selectedImages').appendChild(img);
        }
      }
  }

  //calls postHouse in housesService, add more params to function to get more inputs
  listHouse(){
      this.submitted=true;
        
      if(this.listingForm.invalid){
        return;
      }
      this.loading=true;
      this.houseService.postHouse({
        title: this.listingForm.controls.title.value, 
        description: this.listingForm.controls.description.value,
        street: this.listingForm.controls.street.value,
        city: this.listingForm.controls.city.value,
        state:this.listingForm.controls.state.value,
        zip: this.listingForm.controls.zip.value,
        price: this.listingForm.controls.price.value,
        bedrooms: this.listingForm.controls.bedrooms.value,
        bathrooms: this.listingForm.controls.bathrooms.value,
        sqfeet: this.listingForm.controls.sqfeet.value,
        contactemail: this.listingForm.controls.contactemail.value,
        contactphone: this.listingForm.controls.contactphone.value,

      }).subscribe(result=>{
        this.authService.addListing(result.data).subscribe(res => {console.log(res)});
        this.loading=false;
        this.submitted=false;
        this.listingForm.reset();
        //this.router.navigate(['/']);  //navigate to a submitted page or smth
      },err=>{this.submitted=false;this.loading=false;this.error=err.message||err;});

      
  }




}