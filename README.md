# stms-test-task-3
- A button on each route: orders, patients should fetch data from a mock API
  - Orders:  https://api.mocki.io/v2/79fb05cb
  - Patients: https://api.mocki.io/v2/51597ef3

- The result should be displayed in a list
- A button to "add to follow list" should appear on each item row
- Add a third route that shows the items the user added to their follow list
  (item can't be duplicated in the follow list, item should be marked that it's in the follow list)
- In the follow-list route - a button on each item should remove the item from the list

- Bonus: The list should be filterable by a form input that filters by firstName (patient) / orderName (order)
- Bonus: Please make it look nice

[Demo on GH Pages 🐾](https://vareliy.github.io/stms-test-task-3/)  
[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/stms-test-task-3)


###### 2023 updates: 
- added gh-pages
- bugfix:  
  - There is no correct "Add to follow" button state after repeated requests (`getOrders`/`getPatients`)
- added spinner to `getOrders`/`getPatients` requests.
- updated dependencies
- migrated from `tslint` to `eslint`
- updated README
- updated to NGRX implementation
