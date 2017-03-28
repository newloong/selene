# Selene

> Wordpress theme based on [Sage 9](https://github.com/roots/sage/) and [Crius](https://github.com/kaisermann/crius).

## Informations

### Requirements

* [WordPress](https://wordpress.org/) >= 4.7
* [PHP](http://php.net/manual/en/install.php) >= 5.6.4
* [Composer](https://getcomposer.org/download/)
* [Node.js](http://nodejs.org/) >= 6.9.x
* [Gulp](https://www.liquidlight.co.uk/blog/article/how-do-i-update-to-gulp-4/) >= 4.x.x

#### Controllers

You can use controllers to pass data to specific templates. A controller must be created inside the [`./controllers/`](https://github.com/kaisermann/selene/blob/master/controllers/) directory. A controller scope is defined by each class name returned by `get_body_class`.

#### Custom Blade Directives

* `@mainquery ... @endmainquery` - Loops through the main query.

* `@customquery(\WP_Query $queryObj) ... @endcustomquery` - Loops through a custom query.

* `@inlinesvg` - Prints the specified svg.

* `@dump` - Dumps an php variable with a `var_export`.

* `@console` - Dumps a php variable in the javascript console.

Directives can be defined on [`src/directives.php`](https://github.com/kaisermann/selene/blob/master/src/directives.php).

## WordPress things Selene does

* Front-end
  * Cleans up and prettify your `body_class()` output;
  * Cleans up your `<head>`;
  * Scripts load with `defer`;
  * Rewrites the search url from `.com/?s=term` with `.com/search/term`;
  * Wraps all `oembed` around a `<div class="embed">`;
  * Remove all protocols (`http`,`https`) from urls;
  * Admin dashboard and login page CSS customization with the [`admin.styl`](https://github.com/kaisermann/selene/blob/master/assets/styles/wordpress/admin/config.styl) file;
  * Custom text editor CSS customization with the [`editor.styl`](https://github.com/kaisermann/selene/blob/master/assets/styles/wordpress/editor.styl) file;
  * Provides an [`appMeta`](https://github.com/kaisermann/selene/blob/master/src/setup.php#L113) global javascript object with the ajax and home urls.
  
* Back-end
  * Sets uploaded JPEG quality to 100;
  * Provides options on the admin dashboard to crop default medium and large image sizes;
  * While `WP_DEBUG` is true, the enqueued assets will have a cache-busting file name;
  * Provides John Billion's libraries which make painless to create custom post types and taxonomies.
    * https://github.com/johnbillion/extended-cpts
    * https://github.com/johnbillion/extended-taxos

## External links
* [Crius documentation](https://github.com/kaisermann/crius)
* [Sage 9 documentation](https://github.com/roots/docs/tree/sage-9/sage) (currently in progress)
