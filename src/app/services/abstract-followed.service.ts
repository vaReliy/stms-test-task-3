import { Observable, of } from 'rxjs'

export abstract class AbstractFollowedService<T> {
  protected followedList = new Map<number, T>()

  public addFollowedItem(item: T): void {}

  public removeFollowedItem(item: T): void {}

  public getFollowedList(): Observable<T[]> {
    return of(Array.from(this.followedList.values()))
  }
}
