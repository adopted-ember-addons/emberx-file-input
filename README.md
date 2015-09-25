# emberx-file-input
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

In its blockless form, it will render as a bare
`input[type=file]`. Like this:

<input type=file name="files" alt="Choose a File"/>


But that's kinda ugly! For beautiful file inputs, pass a block. This
HTML will be used as the trigger of the file input.

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

And don't worry, that custom trigger will be hidden from screen
readers, so the file input remains 100% accessible.


## EmberX

emberx-file-input is part of the "missing components of ember" collectively
known as emberx:

* [emberx-select](https://github.com/thefrontside/emberx-select)
* [emberx-slider](https://github.com/thefrontside/emberx-slider)
* [emberx-file-input](https://github.com/thefrontside/emberx-file-input)


[1]: https://developer.mozilla.org/en-US/docs/Web/API/File
