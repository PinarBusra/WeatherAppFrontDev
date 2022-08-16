import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
 constructor(public http: HttpClient) {

}
  ngOptions = ['Adana','Adıyaman','Afyon','Ağrı','Amasya','Ankara','Antalya','Artvin','Aydın','Balıkesir','Bilecik','Bingöl','Bitlis','Bolu','Burdur','Bursa','Çanakkale','Çankırı','Çorum','Denizli','Diyarbakır','Edirne','Elâzığ','Erzincan','Erzurum','Eskişehir','Gaziantep','Giresun','Gümüşhane','Hakkâri','Hatay','Isparta','Mersin','İstanbul','İzmir','Kars','Kastamonu','Kayseri','Kırklareli','Kırşehir','Kocaeli','Konya','Kütahya','Malatya','Manisa','Kahramanmaraş','Mardin','Muğla','Muş','Nevşehir','Niğde','Ordu','Rize','Sakarya','Samsun','Siirt','Sinop','Sivas','Tekirdağ','Tokat','Trabzon','Tunceli','Şanlıurfa','Uşak','Van','Yozgat','Zonguldak','Aksaray','Bayburt','Karaman','Kırıkkale','Batman','Şırnak','Bartın','Ardahan','Iğdır','Yalova','Karabük','Kilis','Osmaniye','Düzce'];
  ngDropdown = '-';
  selectedCity:any;
  response:any;
  cityLon:any;
  cityLat:any;
  countryName:any;
  cityName:any;
  temperature:any;
  pressure:any;
  time:any;
  show: boolean=false;
  
  
  
  onChange(event: Event) {
		this.selectedCity=event;
    //console.log(this.selectedCity);
    
  }

  sendRequest(){
   //console.log('http://localhost:8090/byCity/Turkey/'+this.selectedCity);
   this.http.get('http://localhost:8090/byCity/Turkey/'+this.selectedCity).subscribe(
    (response:any) => {
      this.response=response;
      this.cityLon=this.response.coord.lon;
      this.countryName=this.response.sys.country;
      this.cityName=this.response.name;
      this.temperature=this.response.main.temp;
      this.pressure=this.response.main.pressure;
      this.time=this.response.timezone;
      this.cityLat=this.response.coord.lat;
      //alert(JSON.stringify(response));
     // console.log(this.response.coord.lon);
      this.show=true;
    }
  );
  
  }

}
