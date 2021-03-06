<?php

use Botble\Theme\Theme;

return [

    /*
    |--------------------------------------------------------------------------
    | Inherit from another theme
    |--------------------------------------------------------------------------
    |
    | Set up inherit from another if the file is not exists,
    | this is work with "layouts", "partials" and "views"
    |
    | [Notice] assets cannot inherit.
    |
     */

    'inherit' => null, //default

    /*
    |--------------------------------------------------------------------------
    | Listener from events
    |--------------------------------------------------------------------------
    |
    | You can hook a theme when event fired on activities
    | this is cool feature to set up a title, meta, default styles and scripts.
    |
    | [Notice] these event can be override by package config.
    | 
     */

    'events' => [

        // Before event inherit from package config and the theme that call before,
        // you can use this event to set meta, breadcrumb template or anything
        // you want inheriting.
        'before'             => function (Theme $theme) {

        },
        // Listen on event before render a theme,
        // this event should call to assign some assets,
        // breadcrumb template.
        'beforeRenderTheme'  => function (Theme $theme) {
            // You may use this event to set up your assets.
            $theme
                ->asset()
                ->container('core-scripts')
                ->usePath()->add('app.js', 'dist/js/app.js', [], [], '5.10')
                ->usePath()->add('common', 'js/common.js', ['jquery'], [], '0.1')
                ->usePath()->add('lightbox.js', 'dist/lightbox2/js/lightbox.min.js', [], [], '5.10');

            $theme
                ->asset()
                ->container('core-styles')
                ->usePath()->add('style', 'dist/css/style.css', [], [], '5.10')
                ->usePath()->add('lightbox.style', 'dist/lightbox2/css/lightbox.min.css', [], []);



                $theme
                ->asset()
                ->container('footer-blog')
               ->usePath()->add('jquery', 'plugins/jquery/jquery.min.js')
               ->usePath()->add('bootstrap-js', 'plugins/bootstrap/js/bootstrap.min.js', ['jquery'])
               ->usePath()->add('custom', 'js/custom.min.js', ['jquery'], [], '5.10')
               ->usePath()->add('common', 'js/common.js', ['jquery'], [], '0.1')
                ->usePath()->add('app.js', 'js/app.js', [], ['async' => 'async'], '5.10');

                $theme
                ->asset()
                ->container('core-styles-blog')
               ->usePath()->add('bootstrap-css', 'plugins/bootstrap/css/bootstrap.min.css')
//               ->usePath()->add('font-awesome', 'plugins/font-awesome/css/font-awesome.min.css')
               ->usePath()->add('ionicons', 'plugins/ionicons/css/ionicons.min.css')
                ->usePath()->add('style', 'css/style_blog.css', [], [], '5.10');

            if (function_exists('shortcode')) {
                $theme->composer(['page', 'post', 'index'], function (\Botble\Shortcode\View\View $view) {
                    $view->withShortcodes();
                });
            }
        },

        // Listen on event before render a layout,
        // this should call to assign style, script for a layout.
        'beforeRenderLayout' => [

            'default' => function (Theme $theme) {
            },
        ],
    ],
];
