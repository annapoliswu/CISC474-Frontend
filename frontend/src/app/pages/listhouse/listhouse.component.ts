import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  
  constructor(private formBuilder: FormBuilder,private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.listingForm=this.formBuilder.group({});
  }

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
        var reader = new FileReader();
        reader.readAsDataURL(event.target.files[1]); // read file as data url
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

}
