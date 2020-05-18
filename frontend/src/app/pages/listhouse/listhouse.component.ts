import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HousesService } from 'src/app/services/houses.service';
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
  
  constructor(private formBuilder: FormBuilder,private route: ActivatedRoute,private router: Router,private houseService:HousesService) { }

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
      contactphone: [''],
      photos: [],
    });
  }

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
        var reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]); // read file as data url
        //working on thumbnailing multiple images, files[] is key, also find a way to remove images..

        reader.onload = (event) => { // called once readAsDataURL is completed
          this.urls = event.target.result;  
          //this.houseService.postPhoto({photo: event.target.result}).subscribe(response=>{
            //console.log("posted");
          //},err=>{this.submitted=false;this.loading=false;this.error=err.message||err;});
          var img = new Image(); 
          img.src = this.urls;
          img.width = 200;
          document.getElementById('selectedImages').appendChild(img);
        }
      }
  }

  //calls postHouse in housesService, add more params to function to get more inputs
  listHouse(){
    if(this.listingForm.invalid){
      return;
    }
      this.submitted=true;
      this.loading=true;
      console.log('test');
      var geoCoder = new google.maps.Geocoder;
      var address = this.listingForm.controls.street.value +  ',' + this.listingForm.controls.city.value + ',' + this.listingForm.controls.state.value;
      var lat;
      var long;
      var self = this;
      geoCoder.geocode( { 'address': address}, function(results, status) {
        if (status == 'OK') {
          lat = results[0].geometry.location.lat();
          long = results[0].geometry.location.lng();

          self.houseService.postHouse({
            title: self.listingForm.controls.title.value, 
            description: self.listingForm.controls.description.value,
            street: self.listingForm.controls.street.value,
            city: self.listingForm.controls.city.value,
            state:self.listingForm.controls.state.value,
            zip: self.listingForm.controls.zip.value,
            price: self.listingForm.controls.price.value,
            bedrooms: self.listingForm.controls.bedrooms.value,
            bathrooms: self.listingForm.controls.bathrooms.value,
            sqfeet: self.listingForm.controls.sqfeet.value,
            contactemail: self.listingForm.controls.contactemail.value,
            contactphone: self.listingForm.controls.contactphone.value,
            lat: lat,
            long: long
          }).subscribe(response=>{
            console.log("posted");
            self.loading=false;
            self.listingForm.reset();
            /*
            if(this.listingForm.controls.title.errors){
            }else{
              this.listingForm.reset();
            }
            */
            
            //this.router.navigate(['/']);  //navigate to a submitted page or smth
          },err=>{self.submitted=false;self.loading=false;self.error=err.message||err;});

        } else {
          alert('Geocode was not successful for the following reason: ' + status);
        }
      });


  }




}