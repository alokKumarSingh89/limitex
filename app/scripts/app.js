'use strict';

/**
 * @ngdoc overview
 * @name limitAppApp
 * @description
 * # limitAppApp
 *
 * Main module of the application.
 */
angular
    .module('limitAppApp', ['ui.router','ngSanitize'])
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('main', {
                url: '/',
                controller: 'MainCtrl',
                templateUrl: 'views/main.html'
            })
            .state('main.profile', {
                url: 'profile',
                templateUrl: 'views/profile.html'
            })
            .state('main.group', {
                url: 'group',
                templateUrl: 'views/group.html'
            })
            .state('main.vision', {
                url: 'vision',
                templateUrl: 'views/vision.html'
            })
            .state('main.growth', {
                url: 'growth',
                templateUrl: 'views/growth.html'
            })
            .state('main.men_behind', {
                url: 'men_behind',
                templateUrl: 'views/men_behind.html'
            })


            .state('tea', {
                url: '/tea',
                controller: 'TeaCtrl',
                templateUrl: 'views/tea.html'
            })
            .state('tea.varieties', {
                url: 'varieties',
                templateUrl: 'views/tea/varieties.html'
            })
            .state('tea.varieties.ctc', {
                url: 'ctc_tea',
                templateUrl: 'views/tea/varieties_CTC.html'
            })
            .state('tea.varieties.orthodox', {
                url: '/orthodox',
                templateUrl: 'views/tea/varieties_orthodox.html'
            })
            .state('tea.varieties.nargis', {
                url: '/nargis',
                templateUrl: 'views/tea/varieties_nargis.html'
            })
            .state('tea.varieties.royal', {
                url: '/royal',
                templateUrl: 'views/tea/varieties_royal.html'
            })
            .state('tea.facilities', {
                url: '/facilities',
                templateUrl: 'views/tea/facilities.html'
            })
            .state('tea.facilities.estate', {
                url: '/estate',
                templateUrl: 'views/tea/facilities_estate.html'
            })
            .state('tea.facilities.factories', {
                url: '/factories',
                templateUrl: 'views/tea/facilities_factories.html'
            })
            .state('tea.facilities.garden', {
                url: '/garden',
                templateUrl: 'views/tea/facilities_garden.html'
            })
            .state('tea.production', {
                url: '/production',
                templateUrl: 'views/tea/production.html'
            })
            .state('tea.packaging', {
                url: '/packaging',
                templateUrl: 'views/tea/packaging.html'
            })
            .state('tea.teafacts', {
                url: '/tea_facts',
                templateUrl: 'views/tea/teafacts.html'
            })
            .state('tea.recipse', {
                url: '/tea_recipse',
                templateUrl: 'views/tea/recipse.html'
            })

            .state('biscuit', {
                url: '/biscuit',
                controller: 'BiscutCtrl',
                templateUrl: 'views/biscuit.html'
            })
            .state('biscuit.biscuit_page', {
                url: '/biscuit_page',
                templateUrl: 'views/biscuit/biscuit_page.html'
            })
            .state('biscuit.quality', {
                url: '/quality',
                templateUrl: 'views/biscuit/biscuit_quality.html'
            })
            .state('biscuit.hygiene', {
                url: '/hygiene',
                templateUrl: 'views/biscuit/biscuit_hygiene.html'
            })
            .state('biscuit.factory', {
                url: '/factory',
                templateUrl: 'views/biscuit/biscuit_factory.html'
            })
            .state('biscuit.product', {
                url: '/product',
                templateUrl: 'views/biscuit/biscuit_product.html'
            })
            .state('main.awards', {
                url: 'awards',
                templateUrl: 'views/awards.html'
            })
            .state('main.testimonials', {
                url: 'testimonials',
                templateUrl: 'views/testimonials.html'
            })
            .state('main.upcoming_projects', {
                url: 'upcoming_projects',
                templateUrl: 'views/upcoming_projects.html'
            })
            .state('main.social_responsibility', {
                url: 'social_responsibility',
                templateUrl: 'views/social_responsibility.html'
            })
            
            .state('main.our_reach', {
                url: 'our_reach',
                templateUrl: 'views/our_reach.html'
            })
            .state('main.milestone', {
                url: 'milestone',
                templateUrl: 'views/milestone.html'
            })


        .state('contact', {
            url: '/contact',
            controller: 'MainCtrl',
            templateUrl: 'views/contactus.html'
        });


    }).run(function($state, $rootScope) {
        $rootScope.state = $state;
    });;
