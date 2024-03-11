import {
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { NgSelectComponent } from '@ng-select/ng-select';

@Component({
  selector: 'app-select-item',
  templateUrl: './select-item.component.html',
  styleUrls: ['./select-item.component.css'],
})
export class SelectItemComponent implements OnInit {
  @Input() data: any;

  dropdownId = '';
  panel: any;
  panelWidth = 0;
  panelHeight = 0;
  panelX = 0;
  panelY = 0;
  draggingCorner = false;
  constructor(private elRef: ElementRef) {}

  @ViewChild(NgSelectComponent)
  set panelId(v: NgSelectComponent) {
    this.dropdownId = v.dropdownId;
  }

  ngOnInit() {}

  /**
   * Dropdown dragger mousedown event.
   */
  dragDropdown() {
    this.panel = this.elRef.nativeElement.querySelector(`#${this.dropdownId}`);

    if (!this.panelWidth && !this.panelHeight) {
      this.panelWidth = this.panel.clientWidth;
      this.panelHeight = this.panel.clientHeight;

      this.panel.style.width = this.panelWidth;
      this.panel.style.height = this.panelHeight;
    }
    const rect = this.panel.getBoundingClientRect();
    this.panelX = rect.x;
    this.panelY = rect.y;

    this.draggingCorner = true;
  }

  /**
   * Listen after the dragger has been clicked.
   * @param {MouseEvent} event
   */
  @HostListener('document:mousemove', ['$event'])
  onCornerMove(event: MouseEvent) {
    if (!this.draggingCorner) {
      return;
    }

    const offsetX = event.clientX - this.panelX;
    const offsetY = event.clientY - this.panelY;

    if (
      !this.panel.classList.contains('resized') &&
      this.panelHeight < offsetY
    ) {
      this.panel.classList.add('resized');
    }

    if (this.panelWidth < offsetX) {
      this.panel.style.width = offsetX + 'px';
    }

    if (this.panelHeight < offsetY) {
      this.panel.style.height = offsetY + 'px';
    }
  }

  /**
   * Allow to stop listening to mousemove event.
   * @param {MouseEvent} event
   */
  @HostListener('document:mouseup', ['$event'])
  onCornerRelease(event: MouseEvent) {
    this.draggingCorner = false;
  }
}
