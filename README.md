# emberx-file-input
[![npm version](https://badge.fury.io/js/emberx-file-input.svg)](https://badge.fury.io/js/emberx-file-input)
[![Ember Observer Score](http://emberobserver.com/badges/emberx-file-input.svg)](http://emberobserver.com/addons/emberx-file-input)
[![Build Status](https://travis-ci.org/thefrontside/emberx-file-input.svg?branch=master)](https://travis-ci.org/thefrontside/emberx-file-input)

I select files well. I select files very, very well.

`x-file-input` is a tiny re-usable component which does one thing and
only: binds an action to the native html file selection dialog while
allowing you to render arbitrary HTML to act as the trigger for that
file selector.

This allows you to compose it with whatever other components and
application code you need to make that perfect workflow that involves
selecting files: from uploads to imports.

What you do with the files once they are selected? Welp, that's
between you and your app.

## Installation

`ember install emberx-file-input`

## Usage

Bind an action to the file input:

```handlebars
{{x-file-input name="files" multiple=true action=(action "didSelectFiles") alt="Choose a File"}}
```

Whenever the user selects a file, the `didSelectfiles` action will be
invoked with an array of [File][1] objects.

> Note: Whether the file input is for a single file or mulitple files,
> it will always return an array of `File` objects upon selection.

In its blockless form, you will need to pass an `alt` attribute for
the text you would like to be displayed inside the inputs label.

``` handlebars
{{x-file-input alt="hello world"}}
```

When passing a block, the HTML inside the block will be used as the
trigger of the file input.

```hbs
{{#x-file-input multiple=true action=(action "didSelectFiles")}}
  <img src="http://i-should-buy-a-boat-cat.com" alt="I should buy a boat"/>
{{/x-file-input}}
```

Instead of that boring old stock file selector, your users will see
this:

<div style="position: relative; display: inline-block;">
  <img style="pointer-events: none; display: block; border-radius: 10px;" src="http://i.imgur.com/Mj0xj.jpg" alt="I should buy a boat"/>
  <input type="file" name="files" alt="Choose a File" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; opacity: 0; z-index: 1;"/>
</div>

And don't worry, that custom trigger is a form label, so the file input remains
100% accessible.

### Configuring file formats with `accept`
You can use the `accept` attribute to only allow specifc types of
files. In this example we only allow `.png` & `.jpg` file types.

```hbs
{{#x-file-input multiple=true action=(action "didSelectFiles") accept="image/png,image/jpg"}}
  <img src="http://i-should-buy-a-boat-cat.com" alt="I should buy a boat"/>
{{/x-file-input}}
```


## Customizing the CSS

The whole point of this component is for you to customize your inputs with CSS
and make them look *much* better than the native inputs. Lets look at a simple
example.

Here is our component. You can see we have a custom class applied to the block
called `custom-class`. We are going to use that class to apply our styles.

```hbs
{{#x-file-input class="custom-class" action="uploadAPhoto"}}
  <h3>Shall you upload?</h3>
{{/x-file-input}}
```

In our CSS we want to target `.custom-class label` because the label is the
element that we're making look nice.

```css
.custom-class label {
  background: #34495e;
  padding: 10px;
  color: white;
  border-radius: 5px;
}
```

This css will make our button look a little something like this:
![Custom file input styling](http://i.imgur.com/OHTMaAQ.png)

We are not done yet! Since we're replicating a native input with
HTML and CSS we have to make sure we replicate all of the "default"
features we get when using a native file input. One of those things is a css
`:hover` and `:focus` state. These are often overlooked but are critcal to add.
In your CSS you need to add the following:

```css
.x-file--input:focus + label,
.x-file--input + label:hover {
  /* Apply your own hover state */
  background-color: #2C3E50;
}
```

And that's it! Your file input is now styled and decked to the nines!
If you would like to see a real
[life example checkout the demo page](http://thefrontside.github.io/emberx-file-input)

## Resetting the input

To select the same file many times you need to call the `resetInput`
method that's passed as an argument with the action. For example:

``` javascript
actions: {
  myAction(files, resetInput) {
    // Do something with your files.
    // Once you're done, call the reset method:
    resetInput();
    // Now your input is reset!
  }
}
```



## EmberX

emberx-file-input is part of the "missing components of ember" collectively
known as emberx:

* [emberx-select](https://github.com/thefrontside/emberx-select)
* [emberx-slider](https://github.com/thefrontside/emberx-slider)
* [emberx-file-input](https://github.com/thefrontside/emberx-file-input)


[1]: https://developer.mozilla.org/en-US/docs/Web/API/File


## Code of Conduct
Please note that this project is released with a Contributor Code of
Conduct. By participating in this project you agree to abide by its
terms, which can be found in the `CODE_OF_CONDUCT.md` file in this
repository.
