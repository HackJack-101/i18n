# i18n
Micro i18n library for Javascript

## Install
### Script
Just download [i18n.js](https://raw.githubusercontent.com/Jack3113/i18n/master/src/i18n.js) and add it on your html page.
```html
<!DOCTYPE HTML>
<html>
  <head>
  ...
  <script src="path/to/i18n.js" type="text/javascript"></script>
  </head>
  ...
</html>
```

### Folder and files
Create your translation files in locales folder like this:
* /locales/en.json
* /locales/fr.json
* /locales/es.json
* /locales/de.json

## Usage
In your main script :
```javascript
window.addEventListener('load', function () {
  int = new i18n();
  int.translate();
});
```

Fill your json with a structure like this :
```javascript
{
  "key": "translation"
}
```

And, add the attribute __data-i18n__ on elements you want to translate :
```html
<span data-i18n="key"></span>
```

## Example
[Live Example](http://jack3113.github.io/i18n/)
