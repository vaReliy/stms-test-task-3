import { ChangeDetectionStrategy, Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core'
import { FormBuilder } from '@angular/forms'
import { Subject } from 'rxjs'
import { auditTime, takeUntil } from 'rxjs/operators'

@Component({
  selector: 'st-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterComponent implements OnInit, OnDestroy {
  @Output() filterChange = new EventEmitter()

  form = this.fb.group({
    filterBy: this.fb.control('orderName'),
    query: this.fb.control(''),
  })

  private subscribeHolder$ = new Subject()

  constructor(private readonly fb: FormBuilder) { }

  ngOnInit(): void {
    this.form.valueChanges.pipe(
      auditTime(300),
      takeUntil(this.subscribeHolder$)
    ).subscribe((filter) => {
      this.filterChange.emit(filter)
    })
  }

  clear(): void {
    this.form.reset({filterBy: 'orderName'})
  }

  ngOnDestroy(): void {
    this.subscribeHolder$.next()
    this.subscribeHolder$.complete()
  }
}
