import { Component, Renderer2, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit {
  @ViewChild('gmatDropdown') gmatDropdown!: ElementRef<HTMLDivElement>;
  @ViewChild('gmatDropdownMenu') gmatDropdownMenu!: ElementRef<HTMLDivElement>;
  @ViewChild('admissionDropdown') admissionDropdown!: ElementRef<HTMLDivElement>;
  @ViewChild('admissionDropdownMenu') admissionDropdownMenu!: ElementRef<HTMLDivElement>;

  constructor(private router: Router, private renderer: Renderer2) {}

  navigateToGmat() {
    this.router.navigateByUrl('/gmat');
  }

  navigateToAdmission() {
    this.router.navigateByUrl('/admission');
  }

  showDropdown(element: HTMLDivElement) {
    this.renderer.addClass(element, 'show');
  }

  hideDropdown(element: HTMLDivElement) {
    this.renderer.removeClass(element, 'show');
  }

  ngAfterViewInit() {
    this.renderer.listen(this.gmatDropdown.nativeElement, 'mouseenter', () => {
      this.showDropdown(this.gmatDropdownMenu.nativeElement);
    });

    this.renderer.listen(this.gmatDropdown.nativeElement, 'mouseleave', () => {
      this.hideDropdown(this.gmatDropdownMenu.nativeElement);
    });

    this.renderer.listen(this.admissionDropdown.nativeElement, 'mouseenter', () => {
      this.showDropdown(this.admissionDropdownMenu.nativeElement);
    });

    this.renderer.listen(this.admissionDropdown.nativeElement, 'mouseleave', () => {
      this.hideDropdown(this.admissionDropdownMenu.nativeElement);
    });
  }
}
