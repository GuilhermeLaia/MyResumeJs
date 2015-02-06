(function(){
    var myResumeServices = angular.module('myResumeServices', []);
    
    /**************************************
    * Data service
    ***************************************/
    
    myResumeServices.factory('myResumeData', function(utility){
        return {
            getProfile : function() {
                var profileData = {
                    title            : 'Enginner Developer Web Java J2EE !',
                    name             : 'Guilherme Medeiros',
                    birthDate        : '11/08/1991',
                    startWorkingDate : '01/01/2012',
                    experience       : '$1 anos, $2 anos de experiência.'
                };
                var age = utility.getDurationInYears(false, profileData.birthDate);
                var workExperience = utility.getDurationInYears(true, profileData.startWorkingDate);
                var experience = utility.replaceParameters(profileData.experience, [age, workExperience]);
                var profile = {
                    title      : profileData.title,
                    name       : profileData.name,
                    experience : experience
                };
                return profile;
            },
            getTagCloud : function() {
                var tagCloud = [
                    {label:'HTML5', level:0}, {label:'AJAX', level:1}, {label:'Java/J2EE', level:2}, {label:'CSS3', level:0}, {label:'SONAR', level:0}, {label:'Jenkins', level:2},
                    {label:'CSS', level:0}, {label:'Shell', level:1}, {label:'Scrum', level:2}, {label:'Unix', level:0}, {label:'SQL', level:1}, {label:'REST', level:0},
                    {label:'Javascript', level:1}, {label:'JQuery', level:2}, {label:'Tomcat', level:0}, {label:'Oracle', level:0}, {label:'AngularJS', level:0}, {label:'JSON', level:1},
                    {label:'Spring', level:2}, {label:'JSF', level:0}, {label:'Maven', level:2}, {label:'UML', level:0}, {label:'Apache', level:1}, {label:'TDD', level:1}
                ];
                return tagCloud;
            },
            getSkills : function() {
                var skills = [
                    {
                     title:'Web',
                     specificSkills:['JAVA/J2EE (JSP, Spring, JSF)', 'REST', 'Javascript', 'JQuery', 'AJAX', 'JSON', 'HTML5', 'CSS3', 'AngularJS', 'Bootstrap']
                    },
                    {
                     title:'Linguagens e Ferramentas',
                     specificSkills:['JAVA', 'Spring', 'Junit', 'Hibernate/JDBC', 'Maven', 'Eclipse', 'Jenkins', 'Sonar', 'CVS', 'SVN', 'Git', 'Selenium', 'shell Unix', 'GWT']
                    },
                    {
                     title:'Servidores',
                     specificSkills:['Apache', 'Tomcat', 'Jboss', 'NodeJS (lab)']
                    },
                    {
                     title:'Base de Dados',
                     specificSkills:['Oracle', 'MySql', 'SQL', 'Postgresql','PL/SQL', 'PL/SQL Developer']
                    },
                    {
                     title:'Metodologias ',
                     specificSkills:['Agile Scrum', 'TDD', 'XP', 'UML']
                    },
                    {
                     title:'Sistemas',
                     specificSkills:['Windows', 'Linux Debian']
                    }
                ];
                return skills;
            },
            getHobbies : function() {
                var hobbies = {
                    hobby1 : {
                        title : 'Esporte',
                        desc1 : 'Eu gosto de esportes, especialmente de futebol torço para o Maior de Minas o (Cruzeiro Esporte Clube).',
                        desc2 : 'Gosto também de lutas como: Taekwondo, onde pude fazer 4 anos desse esporte.'
                    },
                    hobby2 : {
                        title : 'Lazer',
                        desc1 : 'Ficar com a família, sair com os amigos, conhecer lugares novos e aprender coisas novas nos tempos livres.',
                        desc2 : ''
                    },
                    hobby3 : {
                        title : 'Estudos',
                        desc1 : 'Eu gosto de estudar tecnologias novas, ler livros e sempre me manter atualizado.',
                        desc2 : 'Participar de cursos e palestras de grandes referências.'
                    }
                };
                return hobbies;
            },
            getContact : function() {
                var contact = {
                    form : {
                        error   : 'Erro ao enviar e-mail. Por favor, tente novamente.',
                        name    : 'Nome',
                        email   : 'Email',
                        message : 'Message',
                        send    : 'Enviar',
                        confirm : {
                            part1 : 'Obrigado pela sua mensagem !',
                            part2 : 'Te vejo em breve',
                            back  : 'Retornar para formulário »'
                        }
                    },
                    address : {
                        city    : 'Belo Horizonte',
                        zipCode : '31560-300',
                        email   : 'gmllaia@gmail.com'
                    }
                };
                return contact;
            },
            getNavigation : function(){
                var nav = {
                    profile : 'Perfil',
                    skills  : 'Competências',
                    career  : 'Experiências',
                    hobbies : 'Hobbies',
                    contact : 'Contatos'
                };
                return nav;
            },
            getTimeline : function(){
                var timeline = {
                    lang    : 'fr',
                    content : 'http://cdn.knightlab.com/libs/timeline/latest/embed/index.html?source=0AtmicfTvSiREdG1seFpsTFJIWVdTLUVXTXAyelB5bnc&font=Bevan-PotanoSans&maptype=toner&lang=en&height=650' 
                }
                return timeline;
            },
            getLinks : function(){
                var links = {
                    github   : 'https://github.com/laia10',
                    linkedin : 'https://br.linkedin.com/pub/guilherme-laia/58/634/b08/',
                    twitter  : 'https://twitter.com/gmllaia',
                    resume   : '/data/curriculo_guilherme_medeiros.pdf'
                }
                return links;
            },
            getTechnos : function(){
                var technos = {
                    img : [
                        {
                            src   : '/img/technos/angularjs.png',
                            title : 'AngularJS'
                        },
                        {
                            src   : '/img/technos/html5.png',
                            title : 'HTML5'
                        },
                        {
                            src   : '/img/technos/css3.png',
                            title : 'CSS3'
                        },
                        {
                            src   : '/img/technos/bootstrap.jpg',
                            title : 'Twitter Bootstrap'
                        },
                        {
                            src   : '/img/technos/ascensorjs.jpg',
                            title : 'AscensorJS'
                        }
                    ],
                    source : {
                        text     : 'Fontes do Site ',
                        link     : 'https://github.com/laia10/myresume'
                    }               
                }
                return technos;
            }
        };
    });
    
    /**************************************
    * Mail service
    ***************************************/
    
    myResumeServices.factory('mailManager', function($http){
        return {
            getContactTemplates : function(){
                return {contactForm:'views/contactForm.html', contactConfirm:'views/contactConfirmation.html'};
            },
            submitContactForm : function(data, callbackSuccess, callbackError){
                $http.post('/application/email.php', {name:data.name, email:data.email, message:data.message})
                .success(function(){
                    callbackSuccess();
                })
                .error(function(){
                    callbackError();
                });
            }
        };
    });
    
    /**************************************
    * Timeline service
    ***************************************/
    
    myResumeServices.factory('timelineManager', function(){
        return {
            launchTimeline : function(dataUrl, lang){
                MY_RESUME.launchTimeline(dataUrl, lang);
            }
        };
    });
    
    /**************************************
    * Utility service
    ***************************************/
    
    myResumeServices.factory('utility', function(){
        return {
            contains : function(value1, value2){
                return MY_RESUME.contains(value1, value2);
            },
            getDurationInYears : function(greater, startDate, endDate){
                return MY_RESUME.getDurationInYears(greater, startDate, endDate);
            },
            replaceParameters : function(string, values){
                return MY_RESUME.replaceParameters(string, values);
            }
        };
    });
    
    /**************************************
    * Loader management
    ***************************************/
    
    // http method for which we want to display a spinner 
    var httpMethodWithSpinner = 'POST';
    // intercept http methods to add treatment
    myResumeServices.factory('myHttpInterceptor', function($q, $rootScope){
        return {
            'request': function(config) {
                if(config.method == httpMethodWithSpinner){
                    // show loader
                    $rootScope.$broadcast("show_loader");
                }
                return config || $q.when(config);
            },
            'response': function(response) {
                if(response.config.method == httpMethodWithSpinner){
                    $rootScope.$broadcast("hide_loader");
                }
                return response || $q.when(response);
            }/*,
            'responseError': function (rejection) {
                if(rejection.config.method == httpMethodWithSpinner){
                    $rootScope.$broadcast("hide_loader");
                }
                return rejection || $q.reject(rejection);
            }*/
        };
    });
    myResumeServices.config(function($httpProvider){
        $httpProvider.interceptors.push('myHttpInterceptor');
    });
    myResumeServices.directive("loader", function(){
        return {
            link : function($scope, element){
                // hide the element initially
                element.hide();
                $scope.$on("show_loader", function () {
                    element.show();
                });
                $scope.$on("hide_loader", function () {
                    element.hide();
                });
            }
        };
    });
    
})();
