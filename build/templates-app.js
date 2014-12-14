angular.module('templates-app', ['about/about.tpl.html', 'bracelets/bracelets.tpl.html', 'chaussettes/chaussettes.tpl.html', 'colliers/colliers.tpl.html', 'echarpes/echarpes.tpl.html', 'home/home.tpl.html', 'infoslivraison/infoslivraison.tpl.html', 'livraison/livraison.tpl.html', 'login_register/login_register.tpl.html', 'offres/offres.tpl.html', 'productpage/productpage.tpl.html', 'products/products.tpl.html', 'productupload/productupload.tpl.html', 'useconditions/useconditions.tpl.html', 'userprofile_edit/userprofile_edit.tpl.html', 'userspace/userspace.tpl.html']);

angular.module("about/about.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("about/about.tpl.html",
    "<div class=\"row\">\n" +
    "  <h1 class=\"page-header\">\n" +
    "    The Elevator Pitch\n" +
    "    <small>For the lazy and impatient.</small>\n" +
    "  </h1>\n" +
    "  <p>\n" +
    "    <code>ng-boilerplate</code> is an opinionated kickstarter for web\n" +
    "    development projects. It's an attempt to create a simple starter for new\n" +
    "    web sites and apps: just download it and start coding. The goal is to\n" +
    "    have everything you need to get started out of the box; of course it has\n" +
    "    slick styles and icons, but it also has a best practice directory structure\n" +
    "    to ensure maximum code reuse. And it's all tied together with a robust\n" +
    "    build system chock-full of some time-saving goodness.\n" +
    "  </p>\n" +
    "\n" +
    "  <h2>Why?</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    Because my team and I make web apps, and \n" +
    "    last year AngularJS became our client-side framework of choice. We start\n" +
    "    websites the same way every time: create a directory structure, copy and\n" +
    "    ever-so-slightly tweak some config files from an older project, and yada\n" +
    "    yada, etc., and so on and so forth. Why are we repeating ourselves? We wanted a starting point; a set of\n" +
    "    best practices that we could identify our projects as embodying and a set of\n" +
    "    time-saving wonderfulness, because time is money.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    There are other similar projects out there, but none of them suited our\n" +
    "    needs. Some are awesome but were just too much, existing more as reference\n" +
    "    implementations, when we really just wanted a kickstarter. Others were just\n" +
    "    too little, with puny build systems and unscalable architectures.  So we\n" +
    "    designed <code>ng-boilerplate</code> to be just right.\n" +
    "  </p>\n" +
    "\n" +
    "  <h2>What ng-boilerplate Is Not</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    This is not an example of an AngularJS app. This is a kickstarter. If\n" +
    "    you're looking for an example of what a complete, non-trivial AngularJS app\n" +
    "    that does something real looks like, complete with a REST backend and\n" +
    "    authentication and authorization, then take a look at <code><a\n" +
    "        href=\"https://github.com/angular-app/angular-app/\">angular-app</a></code>, \n" +
    "    which does just that, and does it well.\n" +
    "  </p>\n" +
    "\n" +
    "  <h1 class=\"page-header\">\n" +
    "    So What's Included?\n" +
    "    <small>I'll try to be more specific than \"awesomeness\".</small>\n" +
    "  </h1>\n" +
    "  <p>\n" +
    "    This section is just a quick introduction to all the junk that comes\n" +
    "    pre-packaged with <code>ng-boilerplate</code>. For information on how to\n" +
    "    use it, see the <a\n" +
    "      href=\"https://github.com/joshdmiller/ng-boilerplate#readme\">project page</a> at\n" +
    "    GitHub.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    The high-altitude view is that the base project includes \n" +
    "    <a href=\"http://getbootstrap.com\">Twitter Bootstrap</a>\n" +
    "    styles to quickly produce slick-looking responsive web sites and apps. It also\n" +
    "    includes <a href=\"http://angular-ui.github.com/bootstrap\">UI Bootstrap</a>,\n" +
    "    a collection of native AngularJS directives based on the aforementioned\n" +
    "    templates and styles. It also includes <a href=\"http://fortawesome.github.com/Font-Awesome/\">Font Awesome</a>,\n" +
    "    a wicked-cool collection of font-based icons that work swimmingly with all\n" +
    "    manner of web projects; in fact, all images on the site are actually font-\n" +
    "    based icons from Font Awesome. Neat! Lastly, this also includes\n" +
    "    <a href=\"http://joshdmiller.github.com/angular-placeholders\">Angular Placeholders</a>,\n" +
    "    a set of pure AngularJS directives to do client-side placeholder images and\n" +
    "    text to make mocking user interfaces super easy.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    And, of course, <code>ng-boilerplate</code> is built on <a href=\"http://angularjs.org\">AngularJS</a>,\n" +
    "    by the far the best JavaScript framework out there! But if you don't know\n" +
    "    that already, then how did you get here? Well, no matter - just drink the\n" +
    "    Kool Aid. Do it. You know you want to.\n" +
    "  </p>\n" +
    "  \n" +
    "  <h2>Twitter Bootstrap</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    You already know about this, right? If not, <a\n" +
    "      href=\"http://getbootstrap.com\">hop on over</a> and check it out; it's\n" +
    "    pretty sweet. Anyway, all that wonderful stylistic goodness comes built in.\n" +
    "    The LESS files are available for you to import in your main stylesheet as\n" +
    "    needed - no excess, no waste. There is also a dedicated place to override\n" +
    "    variables and mixins to suit your specific needs, so updating to the latest\n" +
    "    version of Bootstrap is as simple as: \n" +
    "  </p>\n" +
    "\n" +
    "  <pre>$ cd vendor/twitter-bootstrap<br />$ git pull origin master</pre>\n" +
    "\n" +
    "  <p>\n" +
    "    Boom! And victory is ours.\n" +
    "  </p>\n" +
    "\n" +
    "  <h2>UI Bootstrap</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    What's better than Bootstrap styles? Bootstrap directives!  The fantastic <a href=\"http://angular-ui.github.com/bootstrap\">UI Bootstrap</a>\n" +
    "    library contains a set of native AngularJS directives that are endlessly\n" +
    "    extensible. You get the tabs, the tooltips, the accordions. You get your\n" +
    "    carousel, your modals, your pagination. And <i>more</i>.\n" +
    "    How about a quick demo? \n" +
    "  </p>\n" +
    "\n" +
    "  <ul>\n" +
    "    <li class=\"dropdown\">\n" +
    "      <a class=\"btn dropdown-toggle\">\n" +
    "        Click me!\n" +
    "      </a>\n" +
    "      <ul class=\"dropdown-menu\">\n" +
    "        <li ng-repeat=\"choice in dropdownDemoItems\">\n" +
    "          <a>{{choice}}</a>\n" +
    "        </li>\n" +
    "      </ul>\n" +
    "    </li>\n" +
    "  </ul>\n" +
    "\n" +
    "  <p>\n" +
    "    Oh, and don't include jQuery;  \n" +
    "    you don't need it.\n" +
    "    This is better.\n" +
    "    Don't be one of those people. <sup>*</sup>\n" +
    "  </p>\n" +
    "\n" +
    "  <p><small><sup>*</sup> Yes, there are exceptions.</small></p>\n" +
    "\n" +
    "  <h2>Font Awesome</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    Font Awesome has earned its label. It's a set of open (!) icons that come\n" +
    "    distributed as a font (!) for super-easy, lightweight use. Font Awesome \n" +
    "    works really well with Twitter Bootstrap, and so fits right in here.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    There is not a single image on this site. All of the little images and icons \n" +
    "    are drawn through Font Awesome! All it takes is a little class:\n" +
    "  </p>\n" +
    "\n" +
    "  <pre>&lt;i class=\"fa fa-flag\"&gt;&lt/i&gt</pre>\n" +
    "\n" +
    "  <p>\n" +
    "    And you get one of these: <i class=\"fa fa-flag\"> </i>. Neat!\n" +
    "  </p>\n" +
    "\n" +
    "  <h2>Placeholders</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    Angular Placeholders is a simple library for mocking up text and images. You\n" +
    "    can automatically throw around some \"lorem ipsum\" text:\n" +
    "  </p>\n" +
    "\n" +
    "  <pre>&lt;p ph-txt=\"3s\"&gt;&lt;/p&gt;</pre>\n" +
    "\n" +
    "  <p>\n" +
    "    Which gives you this:\n" +
    "  </p>\n" +
    "\n" +
    "  <div class=\"pre\">\n" +
    "    &lt;p&gt;\n" +
    "    <p ph-txt=\"3s\"></p>\n" +
    "    &lt;/p&gt;\n" +
    "  </div>\n" +
    "\n" +
    "  <p>\n" +
    "    Even more exciting, you can also create placeholder images, entirely \n" +
    "    client-side! For example, this:\n" +
    "  </p>\n" +
    "  \n" +
    "  <pre>\n" +
    "&lt;img ph-img=\"50x50\" /&gt;\n" +
    "&lt;img ph-img=\"50x50\" class=\"img-polaroid\" /&gt;\n" +
    "&lt;img ph-img=\"50x50\" class=\"img-rounded\" /&gt;\n" +
    "&lt;img ph-img=\"50x50\" class=\"img-circle\" /&gt;</pre>\n" +
    "\n" +
    "  <p>\n" +
    "    Gives you this:\n" +
    "  </p>\n" +
    "\n" +
    "  <div>\n" +
    "    <img ph-img=\"50x50\" />\n" +
    "    <img ph-img=\"50x50\" class=\"img-polaroid\" />\n" +
    "    <img ph-img=\"50x50\" class=\"img-rounded\" />\n" +
    "    <img ph-img=\"50x50\" class=\"img-circle\" />\n" +
    "  </div>\n" +
    "\n" +
    "  <p>\n" +
    "    Which is awesome.\n" +
    "  </p>\n" +
    "\n" +
    "  <h1 class=\"page-header\">\n" +
    "    The Roadmap\n" +
    "    <small>Really? What more could you want?</small>\n" +
    "  </h1>\n" +
    "\n" +
    "  <p>\n" +
    "    This is a project that is <i>not</i> broad in scope, so there's not really\n" +
    "    much of a wish list here. But I would like to see a couple of things:\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    I'd like it to be a little simpler. I want this to be a universal starting\n" +
    "    point. If someone is starting a new AngularJS project, she should be able to\n" +
    "    clone, merge, or download its source and immediately start doing what she\n" +
    "    needs without renaming a bunch of files and methods or deleting spare parts\n" +
    "    ... like this page. This works for a first release, but I just think there\n" +
    "    is a little too much here right now.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    I'd also like to see a simple generator. Nothing like <a href=\"yeoman.io\">\n" +
    "    Yeoman</a>, as there already is one of those, but just something that\n" +
    "    says \"I want Bootstrap but not Font Awesome and my app is called 'coolApp'.\n" +
    "    Gimme.\" Perhaps a custom download builder like UI Bootstrap\n" +
    "    has. Like that. Then again, perhaps some Yeoman generators wouldn't be out\n" +
    "    of line. I don't know. What do you think?\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    Naturally, I am open to all manner of ideas and suggestions. See the \"Can I\n" +
    "    Help?\" section below.\n" +
    "  </p>\n" +
    "\n" +
    "  <h2>The Tactical To Do List</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    There isn't much of a demonstration of UI Bootstrap. I don't want to pollute\n" +
    "    the code with a demo for demo's sake, but I feel we should showcase it in\n" +
    "    <i>some</i> way.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    <code>ng-boilerplate</code> should include end-to-end tests. This should\n" +
    "    happen soon. I just haven't had the time.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    Lastly, this site should be prettier, but I'm no web designer. Throw me a\n" +
    "    bone here, people!\n" +
    "  </p>\n" +
    "\n" +
    "  <h2>Can I Help?</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    Yes, please!\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    This is an opinionated kickstarter, but the opinions are fluid and\n" +
    "    evidence-based. Don't like the way I did something? Think you know of a\n" +
    "    better way? Have an idea to make this more useful? Let me know! You can\n" +
    "    contact me through all the usual channels or you can open an issue on the\n" +
    "    GitHub page. If you're feeling ambitious, you can even submit a pull\n" +
    "    request - how thoughtful of you!\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    So join the team! We're good people.\n" +
    "  </p>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("bracelets/bracelets.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("bracelets/bracelets.tpl.html",
    "\n" +
    "<div class=\"productsbody\">\n" +
    "<div class=\"container\">\n" +
    "		<p style=\"font-family:Edwardian Script;\n" +
    "			src: url(../assets/fonts/ITCEDSCR.TTF);\n" +
    "			font-style:italic; \n" +
    "			font-size:60px; \n" +
    "			text-align:center; \n" +
    "			color:#44546A;\">Bracelets</p>\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-3\">\n" +
    "                <div class=\"list-group\">\n" +
    "					<select class=\"list-group-item\" style=\"width:260px;\">\n" +
    "						<option value=\"\"> - Trier par prix- </option>\n" +
    "						<option value=\"\"> low to high </option>\n" +
    "						<option value=\"\"> high to low </option>\n" +
    "					</select>\n" +
    "	\n" +
    "					<select class=\"list-group-item\" style=\"width:260px;\">\n" +
    "						<option value=\"\"> - Type de vendeur - </option>\n" +
    "						<option value=\"\"> Particulier </option>\n" +
    "						<option value=\"\"> Professionel </option>\n" +
    "					</select>\n" +
    "			\n" +
    "					<select class=\"list-group-item\" style=\"width:260px;\">\n" +
    "						<option value=\"\"> - Couleur - </option>\n" +
    "						<option value=\"\"> Rouge </option>\n" +
    "						<option value=\"\"> Vert </option>\n" +
    "					</select>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"col-md-9\">\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-sm-4 col-lg-4 col-md-4\">\n" +
    "                        <div class=\"thumbnail\">\n" +
    "                            <img src=\"http://placehold.it/320x150\" alt=\"\">\n" +
    "                            <div class=\"caption\">\n" +
    "                                <h4 class=\"pull-right\">17.99€</h4>\n" +
    "                                <h4><a href=\"#\">Produit X</a>\n" +
    "                                </h4>\n" +
    "                                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n" +
    "								<div class=\"myButton\">\n" +
    "									<a href=\"#\" class=\"myButton\">Ajouter au panier</a>\n" +
    "								</div>\n" +
    "                            </div>\n" +
    "                            <div class=\"ratings\">\n" +
    "                                <p class=\"pull-right\">31 avis</p>\n" +
    "                                <p>\n" +
    "                                    <span class=\"glyphicon glyphicon-star\"></span>\n" +
    "                                    <span class=\"glyphicon glyphicon-star\"></span>\n" +
    "                                    <span class=\"glyphicon glyphicon-star\"></span>\n" +
    "                                    <span class=\"glyphicon glyphicon-star\"></span>\n" +
    "                                    <span class=\"glyphicon glyphicon-star-empty\"></span>\n" +
    "                                </p>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <div class=\"col-sm-4 col-lg-4 col-md-4\">\n" +
    "                        <div class=\"thumbnail\">\n" +
    "                            <img src=\"http://placehold.it/320x150\" alt=\"\">\n" +
    "                            <div class=\"caption\">\n" +
    "                                <h4 class=\"pull-right\">8.99€</h4>\n" +
    "                                <h4><a href=\"#\">Produit X</a>\n" +
    "                                </h4>\n" +
    "                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n" +
    "								<div class=\"myButton\">\n" +
    "									<a href=\"#\" class=\"myButton\">Ajouter au panier</a>\n" +
    "								</div>\n" +
    "                            </div>\n" +
    "                            <div class=\"ratings\">\n" +
    "                                <p class=\"pull-right\">6 avis</p>\n" +
    "                                <p>\n" +
    "                                    <span class=\"glyphicon glyphicon-star\"></span>\n" +
    "                                    <span class=\"glyphicon glyphicon-star\"></span>\n" +
    "                                    <span class=\"glyphicon glyphicon-star\"></span>\n" +
    "                                    <span class=\"glyphicon glyphicon-star-empty\"></span>\n" +
    "                                    <span class=\"glyphicon glyphicon-star-empty\"></span>\n" +
    "                                </p>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <div class=\"col-sm-4 col-lg-4 col-md-4\">\n" +
    "                        <div class=\"thumbnail\">\n" +
    "                            <img src=\"http://placehold.it/320x150\" alt=\"\">\n" +
    "                            <div class=\"caption\">\n" +
    "                                <h4 class=\"pull-right\">14.99€</h4>\n" +
    "                                <h4><a href=\"#\">Produit X</a>\n" +
    "                                </h4>\n" +
    "                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n" +
    "								<div class=\"myButton\">\n" +
    "									<a href=\"#\" class=\"myButton\">Ajouter au panier</a>\n" +
    "								</div>\n" +
    "                            </div>\n" +
    "                            <div class=\"ratings\">\n" +
    "                                <p class=\"pull-right\">8 avis</p>\n" +
    "                                <p>\n" +
    "                                    <span class=\"glyphicon glyphicon-star\"></span>\n" +
    "                                    <span class=\"glyphicon glyphicon-star\"></span>\n" +
    "                                    <span class=\"glyphicon glyphicon-star\"></span>\n" +
    "                                    <span class=\"glyphicon glyphicon-star\"></span>\n" +
    "                                    <span class=\"glyphicon glyphicon-star-empty\"></span>\n" +
    "                                </p>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "\n" +
    "                   \n" +
    "                </div>\n" +
    "\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "    <!-- /.container -->\n" +
    "    \n" +
    "<!-- jQuery -->\n" +
    "    <script src=\"js/jquery.js\"></script>\n" +
    "    <!-- Bootstrap Core JavaScript -->\n" +
    "    <script src=\"js/bootstrap.min.js\"></script>\n" +
    "</div>");
}]);

angular.module("chaussettes/chaussettes.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("chaussettes/chaussettes.tpl.html",
    "\n" +
    "<div class=\"productsbody\">\n" +
    "<div class=\"container\">\n" +
    "		<p style=\"font-family:Edwardian Script;\n" +
    "			src: url(../assets/fonts/ITCEDSCR.TTF);\n" +
    "			font-style:italic; \n" +
    "			font-size:60px; \n" +
    "			text-align:center; \n" +
    "			color:#44546A;\">Chaussettes</p>\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-3\">\n" +
    "\n" +
    "                <div class=\"list-group\">\n" +
    "					<select class=\"list-group-item\" style=\"width:260px;\">\n" +
    "						<option value=\"\"> - Trier par prix- </option>\n" +
    "						<option value=\"\"> low to high </option>\n" +
    "						<option value=\"\"> high to low </option>\n" +
    "					</select>\n" +
    "	\n" +
    "					<select class=\"list-group-item\" style=\"width:260px;\">\n" +
    "						<option value=\"\"> - Type de vendeur - </option>\n" +
    "						<option value=\"\"> Particulier </option>\n" +
    "						<option value=\"\"> Professionel </option>\n" +
    "					</select>\n" +
    "			\n" +
    "					<select class=\"list-group-item\" style=\"width:260px;\">\n" +
    "						<option value=\"\"> - Couleur - </option>\n" +
    "						<option value=\"\"> Rouge </option>\n" +
    "						<option value=\"\"> Vert </option>\n" +
    "					</select>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"col-md-9\">\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-sm-4 col-lg-4 col-md-4\">\n" +
    "                        <div class=\"thumbnail\">\n" +
    "                            <img src=\"http://placehold.it/320x150\" alt=\"\">\n" +
    "                            <div class=\"caption\">\n" +
    "                                <h4 class=\"pull-right\">17.99€</h4>\n" +
    "                                <h4><a href=\"#\">Produit X</a>\n" +
    "                                </h4>\n" +
    "                                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n" +
    "								<div class=\"myButton\">\n" +
    "										<a href=\"#\" class=\"myButton\">Ajouter au panier</a>\n" +
    "								</div>\n" +
    "                            </div>\n" +
    "                            <div class=\"ratings\">\n" +
    "                                <p class=\"pull-right\">31 avis</p>\n" +
    "                                <p>\n" +
    "                                    <span class=\"glyphicon glyphicon-star\"></span>\n" +
    "                                    <span class=\"glyphicon glyphicon-star\"></span>\n" +
    "                                    <span class=\"glyphicon glyphicon-star\"></span>\n" +
    "                                    <span class=\"glyphicon glyphicon-star\"></span>\n" +
    "                                    <span class=\"glyphicon glyphicon-star-empty\"></span>\n" +
    "                                </p>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <div class=\"col-sm-4 col-lg-4 col-md-4\">\n" +
    "                        <div class=\"thumbnail\">\n" +
    "                            <img src=\"http://placehold.it/320x150\" alt=\"\">\n" +
    "                            <div class=\"caption\">\n" +
    "                                <h4 class=\"pull-right\">8.99€</h4>\n" +
    "                                <h4><a href=\"#\">Produit X</a>\n" +
    "                                </h4>\n" +
    "                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n" +
    "								<div class=\"myButton\">\n" +
    "										<a href=\"#\" class=\"myButton\">Ajouter au panier</a>\n" +
    "								</div>\n" +
    "                            </div>\n" +
    "                            <div class=\"ratings\">\n" +
    "                                <p class=\"pull-right\">6 avis</p>\n" +
    "                                <p>\n" +
    "                                    <span class=\"glyphicon glyphicon-star\"></span>\n" +
    "                                    <span class=\"glyphicon glyphicon-star\"></span>\n" +
    "                                    <span class=\"glyphicon glyphicon-star\"></span>\n" +
    "                                    <span class=\"glyphicon glyphicon-star-empty\"></span>\n" +
    "                                    <span class=\"glyphicon glyphicon-star-empty\"></span>\n" +
    "                                </p>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <div class=\"col-sm-4 col-lg-4 col-md-4\">\n" +
    "                        <div class=\"thumbnail\">\n" +
    "                            <img src=\"http://placehold.it/320x150\" alt=\"\">\n" +
    "                            <div class=\"caption\">\n" +
    "                                <h4 class=\"pull-right\">14.99€</h4>\n" +
    "                                <h4><a href=\"#\">Produit X</a>\n" +
    "                                </h4>\n" +
    "                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n" +
    "								<div class=\"myButton\">\n" +
    "									<a href=\"#\" class=\"myButton\">Ajouter au panier</a>\n" +
    "								</div>\n" +
    "                            </div>\n" +
    "                            <div class=\"ratings\">\n" +
    "                                <p class=\"pull-right\">8 avis</p>\n" +
    "                                <p>\n" +
    "                                    <span class=\"glyphicon glyphicon-star\"></span>\n" +
    "                                    <span class=\"glyphicon glyphicon-star\"></span>\n" +
    "                                    <span class=\"glyphicon glyphicon-star\"></span>\n" +
    "                                    <span class=\"glyphicon glyphicon-star\"></span>\n" +
    "                                    <span class=\"glyphicon glyphicon-star-empty\"></span>\n" +
    "                                </p>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "\n" +
    "                   \n" +
    "                </div>\n" +
    "\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "    <!-- /.container -->\n" +
    "    \n" +
    "<!-- jQuery -->\n" +
    "    <script src=\"js/jquery.js\"></script>\n" +
    "    <!-- Bootstrap Core JavaScript -->\n" +
    "    <script src=\"js/bootstrap.min.js\"></script>\n" +
    "</div>");
}]);

angular.module("colliers/colliers.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("colliers/colliers.tpl.html",
    "<div class=\"productsbody\">\n" +
    "<div class=\"container\">\n" +
    "		<p style=\"font-family:Edwardian Script;\n" +
    "			src: url(../assets/fonts/ITCEDSCR.TTF);\n" +
    "			font-style:italic; \n" +
    "			font-size:60px; \n" +
    "			text-align:center; \n" +
    "			color:#44546A;\">Colliers</p>\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-3\">\n" +
    "                <div class=\"list-group\">\n" +
    "					<select class=\"list-group-item\" style=\"width:260px;\">\n" +
    "						<option value=\"\"> - Trier par prix- </option>\n" +
    "						<option value=\"\"> low to high </option>\n" +
    "						<option value=\"\"> high to low </option>\n" +
    "					</select>\n" +
    "	\n" +
    "					<select class=\"list-group-item\" style=\"width:260px;\">\n" +
    "						<option value=\"\"> - Type de vendeur - </option>\n" +
    "						<option value=\"\"> Particulier </option>\n" +
    "						<option value=\"\"> Professionel </option>\n" +
    "					</select>\n" +
    "			\n" +
    "					<select class=\"list-group-item\" style=\"width:260px;\">\n" +
    "						<option value=\"\"> - Couleur - </option>\n" +
    "						<option value=\"\"> Rouge </option>\n" +
    "						<option value=\"\"> Vert </option>\n" +
    "					</select>\n" +
    "					\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"col-md-9\">\n" +
    "\n" +
    "\n" +
    "\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-sm-4 col-lg-4 col-md-4\">\n" +
    "                        <div class=\"thumbnail\">\n" +
    "                            <img src=\"http://placehold.it/320x150\" alt=\"\">\n" +
    "                            <div class=\"caption\">\n" +
    "                                <h4 class=\"pull-right\">17.99€</h4>\n" +
    "                                <h4><a href=\"#\">Produit X</a>\n" +
    "                                </h4>\n" +
    "                                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n" +
    "									<div class=\"myButton\">\n" +
    "										<a href=\"#\" class=\"myButton\">Ajouter au panier</a>\n" +
    "									</div>\n" +
    "                            </div>\n" +
    "							\n" +
    "                            <div class=\"ratings\">\n" +
    "                                <p class=\"pull-right\">31 avis</p>\n" +
    "                                <p>\n" +
    "                                    <span class=\"glyphicon glyphicon-star\"></span>\n" +
    "                                    <span class=\"glyphicon glyphicon-star\"></span>\n" +
    "                                    <span class=\"glyphicon glyphicon-star\"></span>\n" +
    "                                    <span class=\"glyphicon glyphicon-star\"></span>\n" +
    "                                    <span class=\"glyphicon glyphicon-star-empty\"></span>\n" +
    "                                </p>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <div class=\"col-sm-4 col-lg-4 col-md-4\">\n" +
    "                        <div class=\"thumbnail\">\n" +
    "                            <img src=\"http://placehold.it/320x150\" alt=\"\">\n" +
    "                            <div class=\"caption\">\n" +
    "                                <h4 class=\"pull-right\">8.99€</h4>\n" +
    "                                <h4><a href=\"#\">Produit X</a>\n" +
    "                                </h4>\n" +
    "                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n" +
    "									<div class=\"myButton\">\n" +
    "										<a href=\"#\" class=\"myButton\">Ajouter au panier</a>\n" +
    "									</div>\n" +
    "                            </div>\n" +
    "                            <div class=\"ratings\">\n" +
    "                                <p class=\"pull-right\">6 avis</p>\n" +
    "                                <p>\n" +
    "                                    <span class=\"glyphicon glyphicon-star\"></span>\n" +
    "                                    <span class=\"glyphicon glyphicon-star\"></span>\n" +
    "                                    <span class=\"glyphicon glyphicon-star\"></span>\n" +
    "                                    <span class=\"glyphicon glyphicon-star-empty\"></span>\n" +
    "                                    <span class=\"glyphicon glyphicon-star-empty\"></span>\n" +
    "                                </p>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <div class=\"col-sm-4 col-lg-4 col-md-4\">\n" +
    "                        <div class=\"thumbnail\">\n" +
    "                            <img src=\"http://placehold.it/320x150\" alt=\"\">\n" +
    "                            <div class=\"caption\">\n" +
    "                                <h4 class=\"pull-right\">14.99€</h4>\n" +
    "                                <h4><a href=\"#\">Produit X</a>\n" +
    "                                </h4>\n" +
    "                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n" +
    "									<div class=\"myButton\">\n" +
    "											<a href=\"#\" class=\"myButton\">Ajouter au panier</a>\n" +
    "									</div>\n" +
    "                            </div>\n" +
    "                            <div class=\"ratings\">\n" +
    "                                <p class=\"pull-right\">8 avis</p>\n" +
    "                                <p>\n" +
    "                                    <span class=\"glyphicon glyphicon-star\"></span>\n" +
    "                                    <span class=\"glyphicon glyphicon-star\"></span>\n" +
    "                                    <span class=\"glyphicon glyphicon-star\"></span>\n" +
    "                                    <span class=\"glyphicon glyphicon-star\"></span>\n" +
    "                                    <span class=\"glyphicon glyphicon-star-empty\"></span>\n" +
    "                                </p>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "\n" +
    "                   \n" +
    "                </div>\n" +
    "\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "    <!-- /.container -->\n" +
    "    \n" +
    "<!-- jQuery -->\n" +
    "    <script src=\"js/jquery.js\"></script>\n" +
    "    <!-- Bootstrap Core JavaScript -->\n" +
    "    <script src=\"js/bootstrap.min.js\"></script>\n" +
    "</div>");
}]);

angular.module("echarpes/echarpes.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("echarpes/echarpes.tpl.html",
    "<div class=\"productsbody\">\n" +
    "<div class=\"container\">\n" +
    "		<p style=\"font-family:Edwardian Script;\n" +
    "			src: url(../assets/fonts/ITCEDSCR.TTF);\n" +
    "			font-style:italic; \n" +
    "			font-size:60px; \n" +
    "			text-align:center; \n" +
    "			color:#44546A;\">Echarpes</p>\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-3\">\n" +
    "\n" +
    "					<select class=\"list-group-item\" style=\"width:260px;\">\n" +
    "						<option value=\"\"> - Trier par prix- </option>\n" +
    "						<option value=\"\"> low to high </option>\n" +
    "						<option value=\"\"> high to low </option>\n" +
    "					</select>\n" +
    "	\n" +
    "					<select class=\"list-group-item\" style=\"width:260px;\">\n" +
    "						<option value=\"\"> - Type de vendeur - </option>\n" +
    "						<option value=\"\"> Particulier </option>\n" +
    "						<option value=\"\"> Professionel </option>\n" +
    "					</select>\n" +
    "			\n" +
    "					<select class=\"list-group-item\" style=\"width:260px;\">\n" +
    "						<option value=\"\"> - Couleur - </option>\n" +
    "						<option value=\"\"> Rouge </option>\n" +
    "						<option value=\"\"> Vert </option>\n" +
    "					</select>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"col-md-9\">\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-sm-4 col-lg-4 col-md-4\">\n" +
    "                        <div class=\"thumbnail\">\n" +
    "                            <img src=\"http://placehold.it/320x150\" alt=\"\">\n" +
    "                            <div class=\"caption\">\n" +
    "                                <h4 class=\"pull-right\">17.99€</h4>\n" +
    "                                <h4><a href=\"#\">Produit X</a>\n" +
    "                                </h4>\n" +
    "                                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n" +
    "								<div class=\"myButton\">\n" +
    "									<a href=\"#\" class=\"myButton\">Ajouter au panier</a>\n" +
    "								</div>\n" +
    "                            </div>\n" +
    "                            <div class=\"ratings\">\n" +
    "                                <p class=\"pull-right\">31 avis</p>\n" +
    "                                <p>\n" +
    "                                    <span class=\"glyphicon glyphicon-star\"></span>\n" +
    "                                    <span class=\"glyphicon glyphicon-star\"></span>\n" +
    "                                    <span class=\"glyphicon glyphicon-star\"></span>\n" +
    "                                    <span class=\"glyphicon glyphicon-star\"></span>\n" +
    "                                    <span class=\"glyphicon glyphicon-star-empty\"></span>\n" +
    "                                </p>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <div class=\"col-sm-4 col-lg-4 col-md-4\">\n" +
    "                        <div class=\"thumbnail\">\n" +
    "                            <img src=\"http://placehold.it/320x150\" alt=\"\">\n" +
    "                            <div class=\"caption\">\n" +
    "                                <h4 class=\"pull-right\">8.99€</h4>\n" +
    "                                <h4><a href=\"#\">Produit X</a>\n" +
    "                                </h4>\n" +
    "                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n" +
    "								<div class=\"myButton\">\n" +
    "									<a href=\"#\" class=\"myButton\">Ajouter au panier</a>\n" +
    "								</div>\n" +
    "                            </div>\n" +
    "                            <div class=\"ratings\">\n" +
    "                                <p class=\"pull-right\">6 avis</p>\n" +
    "                                <p>\n" +
    "                                    <span class=\"glyphicon glyphicon-star\"></span>\n" +
    "                                    <span class=\"glyphicon glyphicon-star\"></span>\n" +
    "                                    <span class=\"glyphicon glyphicon-star\"></span>\n" +
    "                                    <span class=\"glyphicon glyphicon-star-empty\"></span>\n" +
    "                                    <span class=\"glyphicon glyphicon-star-empty\"></span>\n" +
    "                                </p>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <div class=\"col-sm-4 col-lg-4 col-md-4\">\n" +
    "                        <div class=\"thumbnail\">\n" +
    "                            <img src=\"http://placehold.it/320x150\" alt=\"\">\n" +
    "                            <div class=\"caption\">\n" +
    "                                <h4 class=\"pull-right\">14.99€</h4>\n" +
    "                                <h4><a href=\"#\">Produit X</a>\n" +
    "                                </h4>\n" +
    "                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n" +
    "								<div class=\"myButton\">\n" +
    "									<a href=\"#\" class=\"myButton\">Ajouter au panier</a>\n" +
    "								</div>\n" +
    "                            </div>\n" +
    "                            <div class=\"ratings\">\n" +
    "                                <p class=\"pull-right\">8 avis</p>\n" +
    "                                <p>\n" +
    "                                    <span class=\"glyphicon glyphicon-star\"></span>\n" +
    "                                    <span class=\"glyphicon glyphicon-star\"></span>\n" +
    "                                    <span class=\"glyphicon glyphicon-star\"></span>\n" +
    "                                    <span class=\"glyphicon glyphicon-star\"></span>\n" +
    "                                    <span class=\"glyphicon glyphicon-star-empty\"></span>\n" +
    "                                </p>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "\n" +
    "                   \n" +
    "                </div>\n" +
    "\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "    <!-- /.container -->\n" +
    "    \n" +
    "<!-- jQuery -->\n" +
    "    <script src=\"js/jquery.js\"></script>\n" +
    "    <!-- Bootstrap Core JavaScript -->\n" +
    "    <script src=\"js/bootstrap.min.js\"></script>\n" +
    "</div>");
}]);

angular.module("home/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/home.tpl.html",
    "<div class=\"central\">\n" +
    "    <h1 class=\"titles\">Bienvenue sur notre site</h1>\n" +
    "	<div class=\"zone_produits\">\n" +
    "		<a href=\"#/colliers\"/>\n" +
    "			<div class=\"imgbackground\" \n" +
    "				style=\"background-image: url(./assets/images/collier.png); \n" +
    "					background-repeat:no-repeat;\n" +
    "					background-size:343px 257px;				\n" +
    "					margin-left: 213px;\">\n" +
    "				\n" +
    "				<div class=\"transbox\"></div>\n" +
    "				<p class=\"productstitle\" style=\"margin:-77px 0 0 68px;\">\n" +
    "					Colliers\n" +
    "				</p>\n" +
    "			</div>\n" +
    "		</a>\n" +
    "		<a href=\"#/bracelets\"/>\n" +
    "			<div class=\"imgbackground\" \n" +
    "				style=\"background-image: url(./assets/images/bracelet.png); \n" +
    "					background-repeat:no-repeat;\n" +
    "					background-size:343px 257px;				\n" +
    "					margin-left: 50px;\">\n" +
    "				<div class=\"transbox\"></div>\n" +
    "				<p class=\"productstitle\" style=\"margin:-77px 0 0 55px;\">\n" +
    "					Bracelets\n" +
    "				</p>\n" +
    "			</div>\n" +
    "		</a>\n" +
    "		<a href=\"#/echarpes\"/>\n" +
    "			<div class=\"imgbackground\" \n" +
    "				style=\"background-image: url(./assets/images/echarpe.png); \n" +
    "					background-repeat:no-repeat;\n" +
    "					background-size:343px 257px;				\n" +
    "					margin-left: 213px;\">\n" +
    "				<div class=\"transbox\"></div>\n" +
    "				<p class=\"productstitle\" style=\"margin:-77px 0 0 59px;\">\n" +
    "					Echarpes\n" +
    "				</p>\n" +
    "			</div>\n" +
    "		</a>\n" +
    "		<a href=\"#/chaussettes\"/>\n" +
    "			<div class=\"imgbackground\" \n" +
    "				style=\"background-image: url(./assets/images/chaussette.png); \n" +
    "					background-repeat:no-repeat;\n" +
    "					background-size:343px 257px;				\n" +
    "					margin-left: 50px;\">\n" +
    "				<div class=\"transbox\"></div>\n" +
    "				<p class=\"productstitle\" style=\"margin:-77px 0 0 44px;\">\n" +
    "					Chaussettes\n" +
    "				</p>\n" +
    "			</div>\n" +
    "		</a>\n" +
    "	</div>\n" +
    "</div> \n" +
    "");
}]);

angular.module("infoslivraison/infoslivraison.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("infoslivraison/infoslivraison.tpl.html",
    "<div class=\"container\">\n" +
    " <div class=\"row\">\n" +
    "    <div class=\"col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3\">\n" +
    "      <form role=\"form\">\n" +
    "        <h2 class=\"pagetitle\">Identifiez-vous pour poursuivre</h2>\n" +
    "        <hr class=\"colorgraph\">\n" +
    "        <div class=\"row\">\n" +
    "          <div class=\"form-group\">\n" +
    "            <label for=\"exampleInputEmail1\" class=\"sr-only\">Adresse email</label>\n" +
    "            <div class=\"input-group\">\n" +
    "              <span class=\"input-group-addon\"><i class=\"fa fa-user fa-fw\"></i></span>\n" +
    "              <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\"\n" +
    "                placeholder=\"adresse mail\">\n" +
    "            </div>\n" +
    "          </div>\n" +
    "           <div class=\"form-group\">\n" +
    "            <label for=\"exampleInputPassword1\" class=\"sr-only\">Mot de passe</label>\n" +
    "            <div class=\"input-group\">\n" +
    "              <span class=\"input-group-addon\"><i class=\"fa fa-lock fa-fw\"></i></span>\n" +
    "              <input type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\"\n" +
    "                placeholder=\"mot de passe\">\n" +
    "            </div>\n" +
    "            <a href=\"#\" class=\"pull-right small\">Mot de passe?</a>\n" +
    "          </div>\n" +
    "            \n" +
    "        <div class=\"checkbox\">\n" +
    "            <label>\n" +
    "            <input type=\"checkbox\"> Se souvenir de moi\n" +
    "            </label>\n" +
    "            <hr class=\"colorgraph\">\n" +
    "          </div>\n" +
    "        <div class=\"row\">\n" +
    "          <div class=\"col-xs-6 col-md-6\"><input type=\"submit\" value=\"Valider\" class=\"btn btn-primary btn-block btn-lg\" tabindex=\"7\"  style=\"margin-left: 50%;\n" +
    "              background: rgb(25, 176, 25);border: none;\"></div>\n" +
    "        </div>    \n" +
    "      </form>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3\">\n" +
    "      <form role=\"form\">\n" +
    "        <h2 class=\"pagetitle\">Vous êtes nouveau client sur Pmart?</h2>\n" +
    "        <hr class=\"colorgraph\">\n" +
    "        <div class=\"row\">\n" +
    "          <div class=\"col-xs-6 col-sm-6 col-md-6\">\n" +
    "            <div class=\"form-group\">\n" +
    "              <input type=\"text\" name=\"first_name\" id=\"first_name\" class=\"form-control input-lg\" placeholder=\"Prénom\" tabindex=\"1\">\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"col-xs-6 col-sm-6 col-md-6\">\n" +
    "            <div class=\"form-group\">\n" +
    "              <input type=\"text\" name=\"last_name\" id=\"last_name\" class=\"form-control input-lg\" placeholder=\"Nom\" tabindex=\"2\">\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "          <input type=\"text\" name=\"display_name\" id=\"display_name\" class=\"form-control input-lg\" placeholder=\"Nom d'utilisateur\" tabindex=\"3\">\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "          <input type=\"email\" name=\"email\" id=\"email\" class=\"form-control input-lg\" placeholder=\"Addresse mail\" tabindex=\"4\">\n" +
    "        </div>\n" +
    "        <div class=\"row\">\n" +
    "          <div class=\"col-xs-6 col-sm-6 col-md-6\">\n" +
    "            <div class=\"form-group\">\n" +
    "              <input type=\"password\" name=\"password\" id=\"password\" class=\"form-control input-lg\" placeholder=\"Mot de passe\" tabindex=\"5\">\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"col-xs-6 col-sm-6 col-md-6\">\n" +
    "            <div class=\"form-group\">\n" +
    "              <input type=\"password\" name=\"password_confirmation\" id=\"password_confirmation\" class=\"form-control input-lg\" placeholder=\"Confirmer le mot de passe\" tabindex=\"6\">\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"row\">\n" +
    "          <div class=\"col-xs-12 .col-sm-6 .col-md-8\" id=\"buttonstyle\">\n" +
    "            En cliquant sur <strong class=\"label label-primary\">Créer un nouveau compte</strong>, Vous acceptez les <a href=\"#/useconditions\" data-toggle=\"modal\" data-target=\"#t_and_c_m\">  Conditions Générales d'utilisation</a> du site\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <hr class=\"colorgraph\">\n" +
    "        <div class=\"row\">\n" +
    "          <div class=\"col-xs-6 col-md-6\"><input type=\"submit\" value=\"Créer un nouveau compte\" class=\"btn btn-primary btn-block btn-lg\" tabindex=\"7\"  style=\"margin-left: 50%;\"></div>\n" +
    "        </div>\n" +
    "      </form>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <!-- Modal -->\n" +
    "  <div class=\"modal fade\" id=\"t_and_c_m\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n" +
    "    <div class=\"modal-dialog\">\n" +
    "      <div class=\"modal-content\">\n" +
    "        <div class=\"modal-header\">\n" +
    "          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">×</button>\n" +
    "          <h4 class=\"modal-title\" id=\"myModalLabel\">Terms & Conditions</h4>\n" +
    "        </div>\n" +
    "        <div class=\"modal-footer\">\n" +
    "          <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">I Agree</button>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <!-- /.modal-content -->\n" +
    "    </div>\n" +
    "    <!-- /.modal-dialog -->\n" +
    "  </div>\n" +
    "  <!-- /.modal -->\n" +
    "</div>\n" +
    "");
}]);

angular.module("livraison/livraison.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("livraison/livraison.tpl.html",
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "<div class=\"container\" style=\"margin-top: 5%;\">\n" +
    "\n" +
    "<div class=\"resume\">\n" +
    "<div class=\"row\">\n" +
    "  <div class=\"col-xs-12 col-sm-12 col-md-offset-1 col-md-10 col-lg-offset-2 col-lg-8\">\n" +
    "    <div class=\"panel panel-default\">\n" +
    "      <div class=\"panel-heading resume-heading\">\n" +
    "        <div class=\"row\">\n" +
    "          <div class=\"col-lg-12\">\n" +
    "            <div class=\"col-md-3\">\n" +
    "              <figure>\n" +
    "                <img class=\"normaldelivery\" alt=\"\" src=\"./assets/images/livraison.gif\" width=\"100.75\" height=\"92.625\">\n" +
    "              </figure>\n" +
    "              \n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"col-md-6\">\n" +
    "              <ul class=\"list-group\">\n" +
    "                <li class=\"list-group-item\">Normal</li>\n" +
    "                <li class=\"list-group-item\">Livraison à domicile</li>\n" +
    "                <li class=\"list-group-item\">Livraison entre le 08.12 et le 15.12</li>\n" +
    "              </ul>\n" +
    "            </div>\n" +
    "            <div class=\"col-md-3\" style=\"padding-top: 3%;\"><p class=\"price\"><strong>4.99€</strong></p><input type=\"submit\" value=\"Valider\" class=\"btn btn-primary btn-block btn-lg\" tabindex=\"7\"  style=\"background: rgb(25, 176, 25);border: none;\"></div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      \n" +
    "    \n" +
    "   \n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "  </div>\n" +
    "</div>\n" +
    "    \n" +
    "</div>\n" +
    "    \n" +
    "<div class=\"resume\">\n" +
    "<div class=\"row\">\n" +
    "  <div class=\"col-xs-12 col-sm-12 col-md-offset-1 col-md-10 col-lg-offset-2 col-lg-8\">\n" +
    "    <div class=\"panel panel-default\">\n" +
    "      <div class=\"panel-heading resume-heading\">\n" +
    "        <div class=\"row\">\n" +
    "          <div class=\"col-lg-12\">\n" +
    "            <div class=\"col-md-3\">\n" +
    "              <figure>\n" +
    "                <img class=\"followdelivery\" alt=\"\" src=\"./assets/images/logo_livraison72h.png\" width=\"91.6\" height=\"64.2\">\n" +
    "              </figure>\n" +
    "              \n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"col-md-6\">\n" +
    "              <ul class=\"list-group\">\n" +
    "                <li class=\"list-group-item\">Suivi</li>\n" +
    "                <li class=\"list-group-item\">Livraison à domicile</li>\n" +
    "                <li class=\"list-group-item\">Livraison entre le 08.12 et le 10.12</li>\n" +
    "              </ul>\n" +
    "          \n" +
    "            </div>\n" +
    "              <div class=\"col-md-3\" style=\"padding-top: 3%;\"><p class=\"price\"><strong>4.99€</strong></p><input type=\"submit\" value=\"Valider\" class=\"btn btn-primary btn-block btn-lg\" tabindex=\"7\"  style=\"background: rgb(25, 176, 25);border: none;\"></div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      \n" +
    "    \n" +
    "   \n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "  </div>\n" +
    "</div>\n" +
    "    \n" +
    "</div>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("login_register/login_register.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("login_register/login_register.tpl.html",
    "<div class=\"container\">\n" +
    " <div class=\"row\">\n" +
    " \n" +
    " \n" +
    " \n" +
    "    <div class=\"col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3\">\n" +
    "      <form name=\"ConnectForm\" role=\"form\" ng-controller=\"LoginCtrl\">\n" +
    "        <h2 class=\"pagetitle\">Se connecter</h2>\n" +
    "        <hr class=\"colorgraph\">\n" +
    "        <div class=\"row\">\n" +
    "          <div class=\"form-group\">\n" +
    "            <label for=\"exampleInputEmail1\" class=\"sr-only\">Adresse email</label>\n" +
    "            <div class=\"input-group\">\n" +
    "              <span class=\"input-group-addon\"><i class=\"fa fa-user fa-fw\"></i></span>\n" +
    "              <input type=\"email\" name=\"inputemail\" class=\"form-control\" id=\"exampleInputEmail1\"\n" +
    "                placeholder=\"Adresse mail\" ng-model=\"email\" required>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "           <div class=\"form-group\">\n" +
    "            <label for=\"exampleInputPassword1\" class=\"sr-only\">Mot de passe</label>\n" +
    "            <div class=\"input-group\">\n" +
    "              <span class=\"input-group-addon\"><i class=\"fa fa-lock fa-fw\"></i></span>\n" +
    "              <input type=\"password\" name=\"inputmdp\" class=\"form-control\" id=\"exampleInputPassword1\"\n" +
    "                placeholder=\"Mot de passe\" ng-model=\"mdp\" required>\n" +
    "            </div>\n" +
    "            <a href=\"#\" class=\"pull-right small\">Mot de passe perdu ?</a>\n" +
    "          </div>\n" +
    "            \n" +
    "        <div class=\"checkbox\">\n" +
    "            <label>\n" +
    "            <input type=\"checkbox\"> Se souvenir de moi\n" +
    "            </label>\n" +
    "            <hr class=\"colorgraph\">\n" +
    "          </div>\n" +
    "        <div class=\"row\">\n" +
    "          <div class=\"col-xs-6 col-md-6\">\n" +
    "		  <input type=\"submit\" value=\"Se connecter\" class=\"btn btn-primary btn-block btn-lg\" tabindex=\"7\"  style=\"margin-left: 50%;\n" +
    "              background: rgb(25, 176, 25);border: none;\" ng-click=\"loginClick()\">\n" +
    "		  </div>\n" +
    "        </div>    \n" +
    "      </form>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  \n" +
    "  \n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3\">\n" +
    "      <form role=\"form\" name=\"SignForm\" ng-controller=\"SignCtrl\">\n" +
    "        <h2 class=\"pagetitle\">S'inscrire</h2>\n" +
    "        <hr class=\"colorgraph\">\n" +
    "        <div class=\"row\">\n" +
    "          <div class=\"col-xs-6 col-sm-6 col-md-6\">\n" +
    "            <div class=\"form-group\">\n" +
    "              <input type=\"text\" name=\"fNameU\" id=\"first_name\" ng-model=\"users.fNameU\" class=\"form-control input-lg\" placeholder=\"Prenom\" tabindex=\"1\" required>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"col-xs-6 col-sm-6 col-md-6\">\n" +
    "            <div class=\"form-group\">\n" +
    "              <input type=\"text\" name=\"lNameU\" id=\"last_name\" ng-model=\"users.lNameU\" class=\"form-control input-lg\" placeholder=\"Nom\" tabindex=\"2\" required>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "          <input type=\"email\" name=\"mailU\" id=\"email\" ng-model=\"users.mailU\" class=\"form-control input-lg\" placeholder=\"Addresse mail\" tabindex=\"4\" required>\n" +
    "        </div>\n" +
    "        <div class=\"row\">\n" +
    "          <div class=\"col-xs-6 col-sm-6 col-md-6\">\n" +
    "            <div class=\"form-group\">\n" +
    "              <input type=\"password\" name=\"passwordU\" id=\"password\" ng-model=\"users.passwordU\" class=\"form-control input-lg\" placeholder=\"Mot de passe\" tabindex=\"5\" required>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"col-xs-6 col-sm-6 col-md-6\">\n" +
    "            <div class=\"form-group\">\n" +
    "              <input type=\"password\" name=\"password_confirmation\" id=\"password_confirmation\" class=\"form-control input-lg\" placeholder=\"Confirmer le mot de passe\" tabindex=\"6\" required>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"row\">\n" +
    "          <div class=\"col-xs-12 .col-sm-6 .col-md-8\" id=\"buttonstyle\">\n" +
    "            En cliquant sur <strong class=\"label label-primary\">S'inscrire</strong>, Vous acceptez les <a href=\"#/useconditions\" data-toggle=\"modal\" data-target=\"#t_and_c_m\">  Conditions Générales d'utilisation</a> du site\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <hr class=\"colorgraph\">\n" +
    "        <div class=\"row\">\n" +
    "          <div class=\"col-xs-6 col-md-6\">\n" +
    "			<input type=\"submit\" value=\"S'inscrire\" class=\"btn btn-primary btn-block btn-lg\" ng-click=\"signClick()\" tabindex=\"7\"  style=\"margin-left: 50%;\"></div>\n" +
    "        </div>\n" +
    "      </form>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  \n" +
    "  \n" +
    "  \n" +
    "  \n" +
    "  \n" +
    "  \n" +
    "  \n" +
    "  \n" +
    "  \n" +
    "  \n" +
    "  \n" +
    "  <!-- Modal -->\n" +
    "  <div class=\"modal fade\" id=\"t_and_c_m\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n" +
    "    <div class=\"modal-dialog\">\n" +
    "      <div class=\"modal-content\">\n" +
    "        <div class=\"modal-header\">\n" +
    "          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">×</button>\n" +
    "          <h4 class=\"modal-title\" id=\"myModalLabel\">Terms & Conditions</h4>\n" +
    "        </div>\n" +
    "        <div class=\"modal-footer\">\n" +
    "          <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">I Agree</button>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <!-- /.modal-content -->\n" +
    "    </div>\n" +
    "    <!-- /.modal-dialog -->\n" +
    "  </div>\n" +
    "  <!-- /.modal -->\n" +
    "</div>\n" +
    "</div>");
}]);

angular.module("offres/offres.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("offres/offres.tpl.html",
    "<div class=\"productsbody\">\n" +
    "<div class=\"container\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-3\">\n" +
    "				<p style=\"font-family:Edwardian Script;\n" +
    "					src: url(../assets/fonts/ITCEDSCR.TTF);\n" +
    "					font-style:italic; \n" +
    "					font-size:60px; \n" +
    "					text-align:center; \n" +
    "					color:#44546A;\">Nos Offres</p>\n" +
    "                <div class=\"list-group\">\n" +
    "					<select class=\"list-group-item\" style=\"width:260px;\">\n" +
    "						<option value=\"\"> - Trier par promotion- </option>\n" +
    "						<option value=\"\"> low to high </option>\n" +
    "						<option value=\"\"> high to low </option>\n" +
    "					</select>\n" +
    "					\n" +
    "					<select class=\"list-group-item\" style=\"width:260px;\">\n" +
    "						<option value=\"\"> - Trier par prix- </option>\n" +
    "						<option value=\"\"> low to high </option>\n" +
    "						<option value=\"\"> high to low </option>\n" +
    "					</select>\n" +
    "	\n" +
    "					<select class=\"list-group-item\" style=\"width:260px;\">\n" +
    "						<option value=\"\"> - Type de vendeur - </option>\n" +
    "						<option value=\"\"> Particulier </option>\n" +
    "						<option value=\"\"> Professionel </option>\n" +
    "					</select>\n" +
    "			\n" +
    "					<select class=\"list-group-item\" style=\"width:260px;\">\n" +
    "						<option value=\"\"> - Couleur - </option>\n" +
    "						<option value=\"\"> Rouge </option>\n" +
    "						<option value=\"\"> Vert </option>\n" +
    "					</select>\n" +
    "					\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"col-md-9\">\n" +
    "\n" +
    "                <div class=\"row carousel-holder\">\n" +
    "\n" +
    "                    <div class=\"col-md-12\">\n" +
    "                        <div id=\"carousel-example-generic\" class=\"carousel slide\" data-ride=\"carousel\">\n" +
    "                            <ol class=\"carousel-indicators\">\n" +
    "                                <li data-target=\"#carousel-example-generic\" data-slide-to=\"0\" class=\"active\"></li>\n" +
    "                                <li data-target=\"#carousel-example-generic\" data-slide-to=\"1\"></li>\n" +
    "                                <li data-target=\"#carousel-example-generic\" data-slide-to=\"2\"></li>\n" +
    "                            </ol>\n" +
    "                            <div class=\"carousel-inner\">\n" +
    "                                <div class=\"item active\">\n" +
    "                                    <img class=\"slide-image\" src=\"http://placehold.it/800x300\" alt=\"\">\n" +
    "                                </div>\n" +
    "                                <div class=\"item\">\n" +
    "                                    <img class=\"slide-image\" src=\"http://placehold.it/800x300\" alt=\"\">\n" +
    "                                </div>\n" +
    "                                <div class=\"item\">\n" +
    "                                    <img class=\"slide-image\" src=\"http://placehold.it/800x300\" alt=\"\">\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <a class=\"left carousel-control\" href=\"#carousel-example-generic\" data-slide=\"prev\">\n" +
    "                                <span class=\"glyphicon glyphicon-chevron-left\"></span>\n" +
    "                            </a>\n" +
    "                            <a class=\"right carousel-control\" href=\"#carousel-example-generic\" data-slide=\"next\">\n" +
    "                                <span class=\"glyphicon glyphicon-chevron-right\"></span>\n" +
    "                            </a>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-sm-4 col-lg-4 col-md-4\">\n" +
    "                        <div class=\"thumbnail\">\n" +
    "                            <img src=\"http://placehold.it/320x150\" alt=\"\">\n" +
    "                            <div class=\"caption\">\n" +
    "                                <h4 class=\"pull-right\">17.99€</h4>\n" +
    "                                <h4><a href=\"#\">Produit X</a>\n" +
    "                                </h4>\n" +
    "                                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n" +
    "								<div class=\"myButton\">\n" +
    "									<a href=\"#\" class=\"myButton\">Ajouter au panier</a>\n" +
    "								</div>\n" +
    "                            </div>\n" +
    "                            <div class=\"ratings\">\n" +
    "                                <p class=\"pull-right\">31 avis</p>\n" +
    "                                <p>\n" +
    "                                    <span class=\"glyphicon glyphicon-star\"></span>\n" +
    "                                    <span class=\"glyphicon glyphicon-star\"></span>\n" +
    "                                    <span class=\"glyphicon glyphicon-star\"></span>\n" +
    "                                    <span class=\"glyphicon glyphicon-star\"></span>\n" +
    "                                    <span class=\"glyphicon glyphicon-star-empty\"></span>\n" +
    "                                </p>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <div class=\"col-sm-4 col-lg-4 col-md-4\">\n" +
    "                        <div class=\"thumbnail\">\n" +
    "                            <img src=\"http://placehold.it/320x150\" alt=\"\">\n" +
    "                            <div class=\"caption\">\n" +
    "                                <h4 class=\"pull-right\">8.99€</h4>\n" +
    "                                <h4><a href=\"#\">Produit X</a>\n" +
    "                                </h4>\n" +
    "                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n" +
    "								<div class=\"myButton\">\n" +
    "									<a href=\"#\" class=\"myButton\">Ajouter au panier</a>\n" +
    "								</div>\n" +
    "                            </div>\n" +
    "                            <div class=\"ratings\">\n" +
    "                                <p class=\"pull-right\">6 avis</p>\n" +
    "                                <p>\n" +
    "                                    <span class=\"glyphicon glyphicon-star\"></span>\n" +
    "                                    <span class=\"glyphicon glyphicon-star\"></span>\n" +
    "                                    <span class=\"glyphicon glyphicon-star\"></span>\n" +
    "                                    <span class=\"glyphicon glyphicon-star-empty\"></span>\n" +
    "                                    <span class=\"glyphicon glyphicon-star-empty\"></span>\n" +
    "                                </p>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <div class=\"col-sm-4 col-lg-4 col-md-4\">\n" +
    "                        <div class=\"thumbnail\">\n" +
    "                            <img src=\"http://placehold.it/320x150\" alt=\"\">\n" +
    "                            <div class=\"caption\">\n" +
    "                                <h4 class=\"pull-right\">14.99€</h4>\n" +
    "                                <h4><a href=\"#\">Produit X</a>\n" +
    "                                </h4>\n" +
    "                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n" +
    "								<div class=\"myButton\">\n" +
    "									<a href=\"#\" class=\"myButton\">Ajouter au panier</a>\n" +
    "								</div>\n" +
    "                            </div>\n" +
    "                            <div class=\"ratings\">\n" +
    "                                <p class=\"pull-right\">8 avis</p>\n" +
    "                                <p>\n" +
    "                                    <span class=\"glyphicon glyphicon-star\"></span>\n" +
    "                                    <span class=\"glyphicon glyphicon-star\"></span>\n" +
    "                                    <span class=\"glyphicon glyphicon-star\"></span>\n" +
    "                                    <span class=\"glyphicon glyphicon-star\"></span>\n" +
    "                                    <span class=\"glyphicon glyphicon-star-empty\"></span>\n" +
    "                                </p>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "\n" +
    "                   \n" +
    "                </div>\n" +
    "\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "    <!-- /.container -->\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("productpage/productpage.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("productpage/productpage.tpl.html",
    "<div class=\"productsbody\">\n" +
    "<div class=\"container\">\n" +
    "        <div class=\"row\">\n" +
    "			<div class=\"productimages\">\n" +
    "				<img class=\"mainproductimage\" src=\"http://placehold.it/480x270\" alt=\"\">\n" +
    "				<img class=\"subproductimage\" style=\"margin-left:10px;\" src=\"http://placehold.it/144x81\" alt=\"\">\n" +
    "				<img class=\"subproductimage\" style=\"margin-left:24px;\" src=\"http://placehold.it/144x81\" alt=\"\">\n" +
    "				<img class=\"subproductimage\" style=\"margin-left:24px;\" src=\"http://placehold.it/144x81\" alt=\"\">\n" +
    "			</div>\n" +
    "			<div class=\"productintro\">\n" +
    "				<h1>Product name</h1>\n" +
    "				<div class=\"ratings\">\n" +
    "					<p class=\"pull-right\" style=\"margin-right:320px;\">31 avis</p>\n" +
    "					<p>\n" +
    "						<span class=\"glyphicon glyphicon-star\"></span>\n" +
    "						<span class=\"glyphicon glyphicon-star\"></span>\n" +
    "						<span class=\"glyphicon glyphicon-star\"></span>\n" +
    "						<span class=\"glyphicon glyphicon-star\"></span>\n" +
    "						<span class=\"glyphicon glyphicon-star-empty\"></span>\n" +
    "					</p>\n" +
    "				</div>\n" +
    "				<div class=\"priceinfo\">\n" +
    "					<span>Prix :</span>\n" +
    "					<span class=\"importantinfo\">14.99€</span>\n" +
    "				</div>\n" +
    "				<div class=\"priceinfo\">\n" +
    "					<span>Information de livraison :</span>\n" +
    "					<span class=\"importantinfo\">Gratuit</span>\n" +
    "				</div>\n" +
    "				<div class=\"priceinfo\">\n" +
    "					<span>Nom de vendeur :</span>\n" +
    "					<span class=\"importantinfo\">Malick</span>\n" +
    "				</div>\n" +
    "				<div class=\"priceinfo\">\n" +
    "					<span>Type de vendeur :</span>\n" +
    "					<span class=\"importantinfo\">Particulier</span>\n" +
    "				</div>\n" +
    "				<div>\n" +
    "				<span>Quantité :</span>\n" +
    "				<input type=\"text\" style=\"width:20px; text-align:center;\" value=\"1\"/>\n" +
    "				</div>\n" +
    "				<a href=\"#\" style=\"margin:10px 0 0 0; font-size:20px; padding:5px 15px;\" class=\"myButton\">Ajouter au panier</a>\n" +
    "			</div>\n" +
    "			<div class=\"line\" style=\"width:1100px;\"></div>\n" +
    "			<div class=\"productinfos\">\n" +
    "				<h2>Product information</h2>\n" +
    "				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n" +
    "			</div>\n" +
    "			<div class=\"line\" style=\"width:1100px;\"></div>\n" +
    "			<div class=\"commentaire\">\n" +
    "				<div class=\"importantinfo\">\n" +
    "					<span>Commentaires:</span>\n" +
    "					<span class=\"col\">31 avis</span>\n" +
    "				</div>\n" +
    "				<div class=\"usercommentaire\">\n" +
    "					\n" +
    "					<div class=\"ratings\">\n" +
    "						<p>\n" +
    "							<span class=\"glyphicon glyphicon-star\"></span>\n" +
    "							<span class=\"glyphicon glyphicon-star\"></span>\n" +
    "							<span class=\"glyphicon glyphicon-star\"></span>\n" +
    "							<span class=\"glyphicon glyphicon-star\"></span>\n" +
    "							<span class=\"glyphicon glyphicon-star-empty\"></span>\n" +
    "						</p>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "    <!-- /.container -->\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("products/products.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("products/products.tpl.html",
    "<div class=\"productsbody\">\n" +
    "<div class=\"container\">\n" +
    "\n" +
    "        <div class=\"row\">\n" +
    "\n" +
    "            <div class=\"col-md-3\">\n" +
    "                <p class=\"lead\">Catégories</p>\n" +
    "                <div class=\"list-group\">\n" +
    "                    <a href=\"#\" class=\"list-group-item\">Bracelets</a>\n" +
    "                    <a href=\"#\" class=\"list-group-item\">Chaussettes</a>\n" +
    "                    <a href=\"#\" class=\"list-group-item\">Colliers</a>\n" +
    "                    <a href=\"#\" class=\"list-group-item\">Echarpes</a>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"col-md-9\">\n" +
    "\n" +
    "                <div class=\"row carousel-holder\">\n" +
    "\n" +
    "                    <div class=\"col-md-12\">\n" +
    "                        <div id=\"carousel-example-generic\" class=\"carousel slide\" data-ride=\"carousel\">\n" +
    "                            <ol class=\"carousel-indicators\">\n" +
    "                                <li data-target=\"#carousel-example-generic\" data-slide-to=\"0\" class=\"active\"></li>\n" +
    "                                <li data-target=\"#carousel-example-generic\" data-slide-to=\"1\"></li>\n" +
    "                                <li data-target=\"#carousel-example-generic\" data-slide-to=\"2\"></li>\n" +
    "                            </ol>\n" +
    "                            <div class=\"carousel-inner\">\n" +
    "                                <div class=\"item active\">\n" +
    "                                    <img class=\"slide-image\" src=\"http://placehold.it/800x300\" alt=\"\">\n" +
    "                                </div>\n" +
    "                                <div class=\"item\">\n" +
    "                                    <img class=\"slide-image\" src=\"http://placehold.it/800x300\" alt=\"\">\n" +
    "                                </div>\n" +
    "                                <div class=\"item\">\n" +
    "                                    <img class=\"slide-image\" src=\"http://placehold.it/800x300\" alt=\"\">\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <a class=\"left carousel-control\" href=\"#carousel-example-generic\" data-slide=\"prev\">\n" +
    "                                <span class=\"glyphicon glyphicon-chevron-left\"></span>\n" +
    "                            </a>\n" +
    "                            <a class=\"right carousel-control\" href=\"#carousel-example-generic\" data-slide=\"next\">\n" +
    "                                <span class=\"glyphicon glyphicon-chevron-right\"></span>\n" +
    "                            </a>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-sm-4 col-lg-4 col-md-4\">\n" +
    "                        <div class=\"thumbnail\">\n" +
    "                            <img src=\"http://placehold.it/320x150\" alt=\"\">\n" +
    "                            <div class=\"caption\">\n" +
    "                                <h4 class=\"pull-right\">17.99€</h4>\n" +
    "                                <h4><a href=\"#\">Produit X</a>\n" +
    "                                </h4>\n" +
    "                                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n" +
    "                            </div>\n" +
    "                            <div class=\"ratings\">\n" +
    "                                <p class=\"pull-right\">31 avis</p>\n" +
    "                                <p>\n" +
    "                                    <span class=\"glyphicon glyphicon-star\"></span>\n" +
    "                                    <span class=\"glyphicon glyphicon-star\"></span>\n" +
    "                                    <span class=\"glyphicon glyphicon-star\"></span>\n" +
    "                                    <span class=\"glyphicon glyphicon-star\"></span>\n" +
    "                                    <span class=\"glyphicon glyphicon-star-empty\"></span>\n" +
    "                                </p>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <div class=\"col-sm-4 col-lg-4 col-md-4\">\n" +
    "                        <div class=\"thumbnail\">\n" +
    "                            <img src=\"http://placehold.it/320x150\" alt=\"\">\n" +
    "                            <div class=\"caption\">\n" +
    "                                <h4 class=\"pull-right\">8.99€</h4>\n" +
    "                                <h4><a href=\"#\">Produit X</a>\n" +
    "                                </h4>\n" +
    "                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n" +
    "                            </div>\n" +
    "                            <div class=\"ratings\">\n" +
    "                                <p class=\"pull-right\">6 avis</p>\n" +
    "                                <p>\n" +
    "                                    <span class=\"glyphicon glyphicon-star\"></span>\n" +
    "                                    <span class=\"glyphicon glyphicon-star\"></span>\n" +
    "                                    <span class=\"glyphicon glyphicon-star\"></span>\n" +
    "                                    <span class=\"glyphicon glyphicon-star-empty\"></span>\n" +
    "                                    <span class=\"glyphicon glyphicon-star-empty\"></span>\n" +
    "                                </p>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <div class=\"col-sm-4 col-lg-4 col-md-4\">\n" +
    "                        <div class=\"thumbnail\">\n" +
    "                            <img src=\"http://placehold.it/320x150\" alt=\"\">\n" +
    "                            <div class=\"caption\">\n" +
    "                                <h4 class=\"pull-right\">14.99€</h4>\n" +
    "                                <h4><a href=\"#\">Produit X</a>\n" +
    "                                </h4>\n" +
    "                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n" +
    "                            </div>\n" +
    "                            <div class=\"ratings\">\n" +
    "                                <p class=\"pull-right\">8 avis</p>\n" +
    "                                <p>\n" +
    "                                    <span class=\"glyphicon glyphicon-star\"></span>\n" +
    "                                    <span class=\"glyphicon glyphicon-star\"></span>\n" +
    "                                    <span class=\"glyphicon glyphicon-star\"></span>\n" +
    "                                    <span class=\"glyphicon glyphicon-star\"></span>\n" +
    "                                    <span class=\"glyphicon glyphicon-star-empty\"></span>\n" +
    "                                </p>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "\n" +
    "                   \n" +
    "                </div>\n" +
    "\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "    <!-- /.container -->\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("productupload/productupload.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("productupload/productupload.tpl.html",
    "<div class=\"container\" style=\"padding-top: 60px;\">\n" +
    "  <h2 class=\"pagetitle\">Créer le produit</h2>\n" +
    "  <hr class=\"colorgraph\">\n" +
    "  <div class=\"row\">\n" +
    "    <!-- edition du formulaire -->\n" +
    "    <div class=\"col-md-8 col-sm-6 col-xs-12 personal-info\">\n" +
    "    <!--\n" +
    "      <div class=\"alert alert-info alert-dismissable\">\n" +
    "        <a class=\"panel-close close\" data-dismiss=\"alert\">×</a> \n" +
    "        <i class=\"fa fa-coffee\"></i>\n" +
    "        This is an <strong>.alert</strong>. Use this to show important messages to the user.\n" +
    "      </div>\n" +
    "    -->\n" +
    "      <form class=\"form-horizontal\" role=\"form\">\n" +
    "        <div class=\"form-group\">\n" +
    "          <label class=\"col-lg-3 control-label\">Nom :</label>\n" +
    "          <div class=\"col-lg-8\">\n" +
    "            <input class=\"form-control\" value=\"Arthur\" type=\"text\">\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "          <label class=\"col-lg-3 control-label\">Description :</label>\n" +
    "          <div class=\"col-md-8\">\n" +
    "         <textarea class=\"form-control\" id=\"message\" name=\"message\" placeholder=\"\" rows=\"7\">              </textarea>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "          <label class=\"col-lg-3 control-label\">Prix :</label>\n" +
    "          <div class=\"col-lg-8\">\n" +
    "            <input class=\"form-control\" value=\"Rynn69270\" type=\"text\">\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "          <label class=\"col-md-3 control-label\"></label>\n" +
    "          <div class=\"col-md-8\">\n" +
    "            <input class=\"btn btn-primary\" value=\"Créer le produit\" type=\"button\">\n" +
    "            <span></span>\n" +
    "            <input class=\"btn btn-default\" value=\"Annuler\" type=\"reset\">\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </form>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("useconditions/useconditions.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("useconditions/useconditions.tpl.html",
    "\n" +
    "<div class=\"row\">\n" +
    "  <h1 class=\"page-header\">\n" +
    "	Conditions </h1>\n" +
    "<p>Praesent aliquam, justo convallis luctus rutrum, erat nulla fermentum diam, at nonummy quam ante ac quam. Maecenas urna purus, fermentum id, molestie in, commodo porttitor, felis. Nam blandit quam ut lacus. Quisque ornare risus quis ligula. Phasellus tristique purus a augue condimentum adipiscing. Aenean sagittis. Etiam leo pede, rhoncus venenatis, tristique in, vulputate at, odio. Donec et ipsum et sapien vehicula nonummy. Suspendisse potenti. Fusce varius urna id quam. Sed neque mi, varius eget, tincidunt nec, suscipit id, libero. In eget purus. Vestibulum ut nisl. Donec eu mi sed turpis feugiat feugiat. Integer turpis arcu, pellentesque eget, cursus et, fermentum ut, sapien. Fusce metus mi, eleifend sollicitudin, molestie id, varius et, nibh. Donec nec libero.</p>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "");
}]);

angular.module("userprofile_edit/userprofile_edit.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("userprofile_edit/userprofile_edit.tpl.html",
    "<div class=\"container\" style=\"padding-top: 60px;\">\n" +
    "  <h2 class=\"pagetitle\">Editer profil</h2>\n" +
    "  <hr class=\"colorgraph\">\n" +
    "  <div class=\"row\">\n" +
    "    <!-- edition du formulaire -->\n" +
    "    <div class=\"col-md-8 col-sm-6 col-xs-12 personal-info\">\n" +
    "    <!--\n" +
    "      <div class=\"alert alert-info alert-dismissable\">\n" +
    "        <a class=\"panel-close close\" data-dismiss=\"alert\">×</a> \n" +
    "        <i class=\"fa fa-coffee\"></i>\n" +
    "        This is an <strong>.alert</strong>. Use this to show important messages to the user.\n" +
    "      </div>\n" +
    "    -->\n" +
    "      <h3 class=\"formtitle\">Informations personnelles</h3>\n" +
    "     \n" +
    "      <form class=\"form-horizontal\" role=\"form\">\n" +
    "        <div class=\"form-group\">\n" +
    "          <label class=\"col-lg-3 control-label\">Statut :</label>\n" +
    "          <div class=\"col-lg-8\">\n" +
    "                <input type=\"radio\" name=\"group1\" value=\"Particulier\" checked> Particulier<br>\n" +
    "                <input type=\"radio\" name=\"group1\" value=\"Professionnel\"> Professionnel <br>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "          <label class=\"col-lg-3 control-label\">Prénom :</label>\n" +
    "          <div class=\"col-lg-8\">\n" +
    "            <input class=\"form-control\" value=\"Arthur\" type=\"text\">\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "          <label class=\"col-lg-3 control-label\">Nom :</label>\n" +
    "          <div class=\"col-lg-8\">\n" +
    "            <input class=\"form-control\" value=\"Clerc-Gherardi\" type=\"text\">\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "          <label class=\"col-lg-3 control-label\">Numéro de téléphone :</label>\n" +
    "          <div class=\"col-lg-8\">\n" +
    "            <input class=\"form-control\" value=\"06-xx-xx-xx-xx\" type=\"text\">\n" +
    "          </div>\n" +
    "        </div>\n" +
    "         <div class=\"form-group\">\n" +
    "          <label class=\"col-lg-3 control-label\">Email :</label>\n" +
    "          <div class=\"col-lg-8\">\n" +
    "            <input class=\"form-control\" value=\"arthur@gmail.com\" type=\"text\">\n" +
    "          </div>\n" +
    "        </div>\n" +
    "         <div class=\"form-group\">\n" +
    "          <label class=\"col-lg-3 control-label\">Adresse :</label>\n" +
    "          <div class=\"col-lg-8\">\n" +
    "            <input class=\"form-control\" value=\"2 Rue de Catane 38000 Grenoble\" type=\"text\">\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "          <label class=\"col-md-3 control-label\">Mot de passe:</label>\n" +
    "          <div class=\"col-md-8\">\n" +
    "            <input class=\"form-control\" value=\"11111122333\" type=\"password\">\n" +
    "          </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"form-group\">\n" +
    "          <label class=\"col-md-3 control-label\">Confirmer mot de passe:</label>\n" +
    "          <div class=\"col-md-8\">\n" +
    "            <input class=\"form-control\" value=\"11111122333\" type=\"password\">\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "          <label class=\"col-md-3 control-label\"></label>\n" +
    "          <div class=\"col-md-8\">\n" +
    "            <input class=\"btn btn-primary\" value=\"Sauvegarder\" type=\"button\">\n" +
    "            <span></span>\n" +
    "            <input class=\"btn btn-default\" value=\"Annuler\" type=\"reset\">\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </form>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("userspace/userspace.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("userspace/userspace.tpl.html",
    "<div class=\"container\">\n" +
    "    <br>\n" +
    "\n" +
    "    <div class=\"row-fluid\">\n" +
    "<h3>{{firstname}} {{lastname}}</h3>\n" +
    "<a href=\"#/userprofile_edit\">modifier mon profil</a>\n" +
    "<br>\n" +
    "<a href=\"#/productupload\">charger un produit</a>\n" +
    "<br>\n" +
    "<br>\n" +
    "        <table class=\"table table-striped\">\n" +
    "            \n" +
    "            <tbody>\n" +
    "            \n" +
    "            <tr>\n" +
    "                <td>Statut </td>\n" +
    "                <td><i class=\"\"></i> <a>{{statut}}</a></td>\n" +
    "            </tr>  \n" +
    "                \n" +
    "            <tr>\n" +
    "                <td>Nom </td>\n" +
    "                <td><i class=\"\"></i> <a>{{firstname}}</a></td>\n" +
    "            </tr>\n" +
    "            \n" +
    "                \n" +
    "            <tr>\n" +
    "                <td>Prénom </td>\n" +
    "                <td><i class=\"\"></i> <a>{{lastname}}</a></td>\n" +
    "            </tr>\n" +
    "                \n" +
    "            <tr>\n" +
    "                <td>Numéro de téléphone:</td>\n" +
    "                <td><i class=\"fa fa-mobile\"></i> {{numphone}}</td>\n" +
    "            </tr>\n" +
    "            <tr>\n" +
    "                <td>Email:</td>\n" +
    "                <td><i class=\"fa fa-envelope\"></i> <a>{{email}}</a></td>\n" +
    "            </tr>\n" +
    "         <tr>\n" +
    "                <td>Adresse:</td>\n" +
    "                <td><i class=\"fa fa-home\"></i> <a>{{adress}}</a></td>\n" +
    "            </tr>\n" +
    "        </tbody></table>\n" +
    "\n" +
    "</div></div>\n" +
    "<div class=\"span5\">\n" +
    "    <div id=\"reports\" class=\"well\">\n" +
    "        <h3 class=\"modal-header\">Achats</h3>\n" +
    "\n" +
    "        <div class=\"alert alert-info no-reports\" style=\"display: block;\">\n" +
    "            Vous n'avez pas encore effectué d'achat\n" +
    "        </div>\n" +
    "    <ul class=\"nav nav-list\"></ul></div>\n" +
    "</div>\n" +
    "</div></div>\n" +
    "    </div>\n" +
    "\n" +
    "    <hr>\n" +
    "\n" +
    "\n" +
    "\n" +
    "</div>");
}]);
