import './style.css'
import 'alpinejs'

window.getJobs = function(){

    return {
        jobs: [{
            company: 'TOTVS S.A.',
            period: 'Ago 2020 / Atual',
            projects: [{
                tab: 'description',
                name: "Fluig Plataforma",
                description: "Fluig é uma plataforma que agrega vários serviços da TOTVS como BPM, ECM, LMS e outros.",
                participations: ["Participo do projeto dando manutenção e implementando novos recursos de acordo com as demandas de clientes"],
            },{
                tab: 'description',
                name: "Fluig Storage",
                description: "Um microsserviço integrado à AWS que tem por finalidade, gerenciar os arquivos importandos dentro do Fluig Plataforma.",
                participations: ["Nele implementei o recurso de gerar um token JWT público para upload de arquivos sem a necessidade de estar logado no sistema e também a consulta de utilização do AWS S3 por meio do AWS Athena e AWS Cloudl Trail."],
            }],
            techs: ['Springboot', 'Hibernate', 'Java 11', 'AWS', 'Jboss', 'MySQL'],
            logo: 'assets/totvs.jpg',
            order: 1,
        },{
            company: 'Varejonline',
            period: 'Jan 2016 / Jul 2020',
            projects: [{
                tab: 'description',
                name: "Varejonline ERP",
                description: "Software de gestão empresarial que controla vendas, estoques, financeiro, contabilidade e fiscal, gerando as informações digitais relacionadas às demandas e obrigações do SPED",
                participations: [
                    'Implementação do Pagamento Escritural, troca de arquivos entre o ERP e a empresa responsável por transacionar os pagamentos bancários',
                    'Migração de telas desenvolvidas em Flex para HTML5 e Angular 9',
                ],
            },{
                tab: 'description',
                name: "Varejonline PDV",
                description: "Software desktop de ponto de venda, opera “On Line” ou “Off Line”, quando sem internet e como opção de contingência. Integrado ao TEF dedicado",
                participations: [
                    'Migração do java 7 para java 8 do PDV legado',
                    'Implementação da integração do PDV com o Mercado Pago por meio de um microsserviço',
                    'Implementação do envio de Cupom Fiscal Eletrônico por meio do MF-e (troca de arquivos com o aparelho integrador do estado do Ceará)',
                    'Integração do PDV com maquineta de cartão de crédito',
                ],
            },{
                tab: 'description',
                name: "Routed Messaging",
                description: "Solução para mapeamento callback entre microsserviço e serviço de terceiros",
                participations: [
                    'Criação de um roteamento de mensagens devido ao load balancer não voltar a mensagem da integração para o servidor conectado ao PDV por meio de websocket'
                ],
            },{
                tab: 'description',
                name: "VO Mobile",
                description: "Aplicativo mobile desenvolvido em angular com relatório de vendas por filiais e ranking de produtos e vendedores",
                participations: [
                    'Implementação de relatório de Ranking de Vendedores e Ranking de Produtos em um aplicativo feito em Ionic',
                ]
            },{
                tab: 'description',
                name: "Check Windows Session",
                description: "Aplicação web para mostrar se existe algum usuário logado no servidor compartilhado",
                participations: [
                    'Criação de um aplicativo desktop para validar se existe algum usuário conectado no servidor windows (usuário compartilhado)',
                ],
            }],
            techs: ['Springboot', 'Hibernate', 'Java 8', 'PostreSQL', 'Oracle', 'Tomcat', 'Angular 9', 'jQuery', 'Java SWT', 'ActiveMQ', 'Ionic', 'Typescript', 'Spring Stomp', 'Kotlin'],
            logo: 'assets/varejonline.jpg',
            order: 2,
        },{
            company: 'Neomind',
            period: 'Jul 2015 / Jan 2016',
            projects: [{
                tab: 'description',
                name: "Fusion Platform",
                description: "Fusion para gerenciamento de documentos e gerenciamento de processos criado pela Neomind",
                participations: [
                    'Criação do relatório dinâmico, transformando o formulário dinâmico do Fusion em uma estrutura para impressão no ireport',
                    'Criação e manutenção de workflows de clientes',
                    'Criação da nova funcionalidade de logtime, listando dos os projetos no nome do usuário para informar as horas trabalhadas',
                ],
            }],
            techs: ['Java EE', 'Hibernate', 'Java 7', 'Tomcat', 'SQL Server', 'AngularJS', 'jQuery'],
            logo: 'assets/neomind.jpg',
            order: 3,
        },{
            company: 'Linx',
            period: 'Jul 2012 / Jul 2015',
            projects: [{
                tab: 'description',
                name: "Microvix ERP",
                description: "Microvix ERP é um sistema para gestão empreserial que atende todas as rotinas das redes e franquias, apoiando o relacionamento franqueador-franqueado e oferecendo soluções eficientes para os demais processos financeiros",
                participations: [
                    'Manutenção do ERP, correção de bugs e regras de negócio (ASP)',
                    'Implementação do ASP-ORM, mapeando as tabelas em classes de ASP',
                    'Migração de páginas com programação funcional para páginas com orientação a objetos e padrão MVC (ASP, JQuery)',
                    'Criação da rotina de venda de óculos e/ou armações, validando regras de agregação dos produtos (C#)',
                ],
            }],
            techs: ['ASP3', 'C#', 'SQL Server', 'IIS', 'jQuery'],
            logo: 'assets/linx.jpg',
            order: 4,
        }, {
            company: 'Staff Informática',
            period: 'Jan 2012 / Jun 2012',
            projects: [{
                tab: 'description',
                name: "GECEX",
                description: "Sistema para gestão de comércio exterior",
                participations: [
                    'Estágio em progração com Power Builder, os analistas de sistemas passavam poucas demandas a serem executadas, sendo o mais comum, troca de valor de labels',
                ],
            }],
            techs: ['Power Builder'],
            logo: 'assets/staff.jpg',
            order: 5,
        }].sort((j1, j2) => j1.order <= j2.order ? -1 : 1)
    }
}

window.reverse = (order) => order % 2 == 0

window.getInfo = function() {
    return {
        name: "Felipe Nathan Campigoto",
        age: `${getAge()} anos`,
        location: "Joinville - Santa Catarina - Brasil",
        resume: `
            Sou um desenvolvedor que gosta de ler sobre a linguagem que utilizo para trabalhar e também sobre novas linguagens que tenho vontade de apreder.
            Nas horas vagas gosto de estudar sobre alguma linguagem que tenho curiosidade, como, atualmente além do java, estou estudando sobre ruby.
            Além de estudar, gosto de me descontrair com jogos de computador, assistindo séries com minha esposa ou brincar com nossos pets.
        `.trim()
    }
}

const getAge = function() {
    const birthday = new Date(1991, 3, 13).getTime();
    const now = new Date().getTime();
    const age = (now - birthday) / (365 * 24 * 60 * 60 * 1000);
    return Math.floor(age);
}