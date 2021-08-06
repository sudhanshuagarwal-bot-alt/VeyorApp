 <!-- install All the dependencies -->
1. npm install

<!-- Versions -->
react": ^17.0.2
react-dom: "^17.0.2
redux": ^4.1.1
react-redux: ^7.2.4
@date-io/date-fns: ^1.3.13
@material-ui/core: ^4.12.3
@material-ui/pickers: ^3.3.10
"moment": "^2.29.1"

<!-- Command to run -->
1. npm start

<!-- Project created node package runner -->
npx create-react-app


<!--Redux Pattern -->
 1. UseState hood is used in the application to fetch the state.
 2. useDispatched hook is used to dispatch the actions.
 3. Connect, mapPropsToState is avoided because useState and useDispatch hook done the same thing in leaas code.

<!-- Application architeture -->
1. components are under the src in component folder.
2. All the files used to manage store is in the Redux folder under src.
3. External css are in the Styles folder under src.

<!-- Data model -->
A seperate file Named as DataModel.js under src.

