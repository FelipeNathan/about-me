import './style.css'
import 'alpinejs'

window.getJobs = function(){

    return {
        jobs: [{
            company: 'TOTVS S.A.',
            period: 'Ago 2020 / Atual',
            maintenances: [
                'Manutenção do Fluig Plataforma (Java EE, Spring, Jboss)'
            ],
            inovations: [
                'Implementação do projeto Storage, criando token JWT para upload de arquivos e integração com Amazon S3 (Java, Springboot, AWS)',
                'Implementação da coleta de uso do bucket da Amazon S3 utilizando Amazon Athena e Amazon Cloud Trail (Java, Springboot, AWS)'
            ],
            logo: 'assets/totvs.jpg',
            order: 1,
        },{
            company: 'Varejonline',
            period: 'Jan 2016 / Jul 2020',
            maintenances: [
                'Manutenção de PDV legado (Java 7, Java SWT, Spring)',
                'Manutenção de ERP legado (Java 7, Flex, Spring)',
                'Manutenção de ERP (Java 8, Angular 9, Springboot) novo'
            ],
            inovations: [
                'Migração do java 7 para java 8 do PDV legado',
                'Implementação da integração do PDV com o Mercado Pago por meio de um microsserviço  (Java, Spring, Stomp)',
                'Criação de um roteamento de mensagens devido ao load balancer não voltar a mensagem da integração para o servidor conectado ao PDV por meio de websocket (Java, ActiveMQ)',
                'Implementação do envio de Cupom Fiscal Eletrônico por meio do MF-e (troca de arquivos com o aparelho integrador do estado do Ceará) (Java, XML)',
                'Integração do PDV com maquineta de cartão de crédito',
                'Implementação do Pagamento Escritural, troca de arquivos entre o ERP e a empresa responsável por transacionar os pagamentos bancários (Java, Springboot, ActiveMQ)',
                'Migração de telas desenvolvidas em Flex para HTML5 e Angular 9',
                'Implementação de relatório de Ranking de Vendedores e Ranking de Produtos em um aplicativo feito em Ionic (Angular Mobile)',
                'Criação de um aplicativo desktop para validar se existe algum usuário conectado no servidor windows (usuário compartilhado) (Kotlin)'
            ],
            logo: 'assets/varejonline.jpg',
            order: 2,
        },{
            company: 'Neomind',
            period: 'Jul 2015 / Jan 2016',
            maintenances: [],
            inovations: [
                'Criação do relatório dinâmico, transformando os objetos do produto em uma estrutura para impressão no ireport (Java, iReport)',
                'Criação da nova funcionalidade de logtime, listando dos os projetos no nome do usuário para informar as horas trabalhadas (Java, AngularJS)',
                'Criação e manutenção de workflows de clientes'
            ],
            logo: 'assets/neomind.jpg',
            order: 3,
        },{
            company: 'Linx Microvix',
            period: 'Jul 2012 / Jul 2015',
            maintenances: [
                'Manutenção do ERP, correção de bugs e regras de negócio (ASP)'
            ],
            inovations: [
                'Implementação do ASP-ORM, mapeando as tabelas em classes de ASP (ASP, T-SQL)',
                'Migração de páginas com programação funcional para páginas com orientação a objetos e padrão MVC (ASP, JQuery)',
                'Criação da rotina de venda de óculos e/ou armações, validando regras de agregação dos produtos (C#)'
            ],
            logo: 'assets/linx.jpg',
            order: 4,
        }, {
            company: 'Staff Informática',
            period: 'Jan 2012 / Jun 2012',
            maintenances: [
                'Estágio em progração com Power Builder, os analistas de sistemas passavam poucas demandas a serem executadas, sendo o mais comum, troca de valor de labels'
            ],
            inovations: [],
            logo: 'assets/staff.jpg',
            order: 5,
        }].sort((j1, j2) => j1.order <= j2.order ? -1 : 1)
    }
}

window.reverse = (order) => order % 2 == 0