import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';

import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';
import { Observable } from 'rxjs/internal/Observable';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  [x: string]: any;
  latitude=0;
  longitude=0;
  imgURL="";
  

  constructor(
     private geo:Geolocation, 
     private camera: Camera
       
     ) { }

  ngOnInit() {
   
  }

  getCamera() {
    this.camera.getPicture({
      sourceType: this.camera.PictureSourceType.CAMERA,
      destinationType: this.camera.DestinationType.DATA_URL
    }).then((res) => {
      console.log(res);
      this.imgURL = 'data:image/jpeg;base64,' + res;

    }).catch(e => {
      console.log(e);
    })

  }

  getCurrentAddress() {
    this.geo.getCurrentPosition({
      timeout: 10000,
      enableHighAccuracy: true
    }).then((res) => {
      this.latitude = res.coords.latitude;
      this.longitude = res.coords.longitude;
    }).catch((e) => {
      console.log(e);
    });
  }
    
    placerequest(){
        alert("Your request has been received.");      
    }
}

