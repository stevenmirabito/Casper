/**
 * ========================
 * Casper Portfolio Dark
 * Theme JavaScript
 * ========================
 */

/**
 * Google Analytics
 */
if (ga_web_property_id !== '') {
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

    ga('create', ga_web_property_id, 'auto');
    ga('send', 'pageview');
}

/**
 * Disqus
 */
if (disqus_short_name !== '') {
    (function () {
        var dsq = document.createElement('script');
        dsq.type = 'text/javascript';
        dsq.async = true;
        dsq.src = '//' + disqus_short_name + '.disqus.com/embed.js';
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
    })();
}

/**
 * Profile Links
 */
var linkContainers = document.getElementsByClassName('profile-links');
for (var container = 0; container < linkContainers.length; container++) {
    for (var link = 0; link < profile_links.length; link++) {
        var element = document.createElement('a');
        element.href = profile_links[link][0];
        element.target = '_blank';
        element.innerHTML = '<i class="fa fa-' + profile_links[link][1] + '"></i>';
        linkContainers[container].appendChild(element);
    }
}
