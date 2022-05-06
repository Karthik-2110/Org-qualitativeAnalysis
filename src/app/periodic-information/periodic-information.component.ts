import { ChangeDetectorRef, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ElementsService } from '../services/elements.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-periodic-information',
  templateUrl: './periodic-information.component.html',
  styleUrls: ['./periodic-information.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PeriodicInformationComponent implements OnInit {

 

  constructor(private periodicService: ElementsService, private activatedRoute: ActivatedRoute, private route: Router,
    private cdr: ChangeDetectorRef) { }

  periodicElements:any;
  elements:any;

  ngOnInit(): void {
    this.periodicService.getAllElements().subscribe( (res) => {
      // console.log(res)
      this.periodicElements = res
      this.elements = res
    } )
    this.cdr.detectChanges()
  }

  onSearch(event: any) {
    this.periodicElements = this.elements.filter((product: any) => {
      return product['name'].toLowerCase().includes(event.target.value.toLowerCase())
    });
  }

 

}
