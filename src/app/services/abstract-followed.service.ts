import { Observable, of } from 'rxjs';

export abstract class AbstractFollowedService<T> {
  protected followedList = new Map<number, T>();

  public getFollowedList(): Observable<T[]> {
    return of(Array.from(this.followedList.values()));
  }

  public abstract addFollowedItem(item: T): void;

  public abstract removeFollowedItem(item: T): void;
}
