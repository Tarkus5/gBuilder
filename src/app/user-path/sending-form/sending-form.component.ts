import { Component } from "@angular/core";
import { Firestore } from "@angular/fire/firestore";
import { collection, getDocs } from "firebase/firestore";
import { OwlOptions } from "ngx-owl-carousel-o/public_api";


@Component({
  selector: 'app-sending-form',
  templateUrl: './sending-form.component.html',
  styleUrls: ['./sending-form.component.css']
})
export class SendingFormComponent {

  public data: any = [];

  customOptions: OwlOptions = {
    margin: 25,
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: false
  }

  constructor(private fs: Firestore) {}

  ngOnInit(): void {
    const dbInstance = collection(this.fs, 'liutai');
      getDocs(dbInstance).then((data) => {
        this.data = [
          ...data.docs.map((item) => {
              return { ...item.data(), id: item.get('mail') };
          }),
        ];
      });
  }

}
