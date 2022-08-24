# Syllabus Generator
A Vue.js webpage used to generate a web-based syllabus. To export to PDF, Cmd + P and select "Save As..." or 
"Export" PDF.

## Directory Structure
- `js/app.js`: File that defines a Vue instance. Has lifecycle hooks used to fetch data from Firebase.
- `css`: Contains a reset, print, and web based stylesheets
- `img`: Contains local images

In the `js` directory, there is an example `.json` file with data following the supported data structure. To run the 
code, you will need to have a `env.config.js` in your root directory. This contains environment variables used to 
initialize Firebase.

```javascript
export default {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
}
```