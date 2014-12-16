angular.module('ngBoilerplate.translation', ['translate'])  
    
.config(function config($translateProvider) {
  $translateProvider.translations('fr', {
    BUTTON_TEXT_FR: 'Français',
    MONESPACE: 'Mon espace',
    SECONNECTER: 'Se connecter'
  })
  .translations('en', {
    BUTTON_TEXT_EN: 'English',
    MONESPACE: 'My space',
    SECONNECTER: 'Sign in'
  });
})

.controller('TranslateController', function TranslateController($translate, $scope) {
  $scope.changeLanguage = function (langKey) {
    $translate.use(langKey);
  };
});

