import { Component, OnInit, ViewChild, ElementRef, NgZone, Input, Output, EventEmitter } from '@angular/core';
import { MapsAPILoader, MouseEvent } from '@agm/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {HouseinfoComponent} from 'src/app/components/houseinfo/houseinfo.component'

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  latitude: number = 0;
  longitude: number = 0;
  zoom: number = 15;
  address: string;
  private geoCoder;

  @ViewChild('search')
  public searchElementRef: ElementRef;
  @Input() houses:any; 
  @Output() searchResult = new EventEmitter<string>();


  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private elRef: ElementRef,
    private modalService: NgbModal
  ) { }


  ngOnInit() {
    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      //this.setCurrentLocation(); 
      this.geoCoder = new google.maps.Geocoder;
      var search = <HTMLInputElement>document.getElementById('search');
      let autocomplete = new google.maps.places.Autocomplete(search);
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();
          search.value = "";
          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            alert('Address not found!');
            //this.elRef.nativeElement.parentNode.parentNode.children[0]
            return;
          }
          //set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 15;
          this.getAddress(this.latitude, this.longitude);
        });
      });
    });
  }

  // Get Current Location Coordinates
  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 8;
        this.getAddress(this.latitude, this.longitude);
      });
    }
  }
  openInfo(houseid): void {
    const modalRef = this.modalService.open(HouseinfoComponent, {size: 'xl'});
    modalRef.componentInstance.id = houseid;
    console.log(houseid);
  }


  markerDragEnd($event: MouseEvent) {
    console.log($event);
    this.latitude = $event.coords.lat;
    this.longitude = $event.coords.lng;
    this.getAddress(this.latitude, this.longitude);
  }

  

  getAddress(latitude, longitude) {
    this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {
      console.log(results);
      console.log(status);
      if (status === 'OK') {
        if (results[0]) {
          this.zoom = 12;
          this.address = results[0].formatted_address;
          var x = document.getElementById('addressLabel');
          x.innerHTML = 'Results near: ' + this.address;
          var zip;
          for (var i = 0; i < results[0].address_components.length; i++) {
            for (var j = 0; j < results[0].address_components[i].types.length; j++) {
              if (results[0].address_components[i].types[j] == "postal_code") {
                zip = results[0].address_components[i].long_name;
              }
            }
          }
          this.sendZip(zip);
          
        } else {
          window.alert('No results found');
        }
      } else {
        window.alert('Geocoder failed due to: ' + status);
      }

    });
  }

  sendZip(zip) {
    this.searchResult.emit(zip);
  }

}