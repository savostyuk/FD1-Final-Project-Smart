/* A polyfill for browsers that don't support ligatures. */
/* The script tag referring to this file must be placed before the ending body tag. */

/* To provide support for elements dynamically added, this script adds
   method 'icomoonLiga' to the window object. You can pass element references to this method.
*/
(function () {
    'use strict';
    function supportsProperty(p) {
        var prefixes = ['Webkit', 'Moz', 'O', 'ms'],
            i,
            div = document.createElement('div'),
            ret = p in div.style;
        if (!ret) {
            p = p.charAt(0).toUpperCase() + p.substr(1);
            for (i = 0; i < prefixes.length; i += 1) {
                ret = prefixes[i] + p in div.style;
                if (ret) {
                    break;
                }
            }
        }
        return ret;
    }
    var icons;
    if (!supportsProperty('fontFeatureSettings')) {
        icons = {
            'file-text2': '&#xe926;',
            'file4': '&#xe926;',
            'phone': '&#xe942;',
            'telephone': '&#xe942;',
            'envelop': '&#xe945;',
            'mail': '&#xe945;',
            'location': '&#xe947;',
            'map-marker': '&#xe947;',
            'location2': '&#xe948;',
            'map-marker2': '&#xe948;',
            'compass': '&#xe949;',
            'direction': '&#xe949;',
            'map': '&#xe94b;',
            'guide': '&#xe94b;',
            'map2': '&#xe94c;',
            'guide2': '&#xe94c;',
            'calendar': '&#xe953;',
            'date': '&#xe953;',
            'user': '&#xe971;',
            'profile2': '&#xe971;',
            'arrow-right2': '&#xea3c;',
            'right4': '&#xea3c;',
            'mail5': '&#xea86;',
            'contact5': '&#xea86;',
            'google-plus3': '&#xea8d;',
            'brand7': '&#xea8d;',
            'facebook': '&#xea90;',
            'brand10': '&#xea90;',
            'facebook2': '&#xea91;',
            'brand11': '&#xea91;',
            'instagram': '&#xea92;',
            'brand12': '&#xea92;',
            'whatsapp': '&#xea93;',
            'brand13': '&#xea93;',
            'telegram': '&#xea95;',
            'brand15': '&#xea95;',
            'twitter': '&#xea96;',
            'brand16': '&#xea96;',
            'vk': '&#xea98;',
            'brand18': '&#xea98;',
            'youtube': '&#xea9d;',
            'brand21': '&#xea9d;',
            'skype': '&#xeac5;',
            'brand60': '&#xeac5;',
          '0': 0
        };
        delete icons['0'];
        window.icomoonLiga = function (els) {
            var classes,
                el,
                i,
                innerHTML,
                key;
            els = els || document.getElementsByTagName('*');
            if (!els.length) {
                els = [els];
            }
            for (i = 0; ; i += 1) {
                el = els[i];
                if (!el) {
                    break;
                }
                classes = el.className;
                if (/icon-/.test(classes)) {
                    innerHTML = el.innerHTML;
                    if (innerHTML && innerHTML.length > 1) {
                        for (key in icons) {
                            if (icons.hasOwnProperty(key)) {
                                innerHTML = innerHTML.replace(new RegExp(key, 'g'), icons[key]);
                            }
                        }
                        el.innerHTML = innerHTML;
                    }
                }
            }
        };
        window.icomoonLiga();
    }
}());
